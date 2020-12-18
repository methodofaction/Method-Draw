window.methodDraw = function() {
  var svgCanvas;
  var Editor = {};
  var is_ready = false;
  var curConfig = {
    canvas_expansion: 1, 
    dimensions: [800,600], 
    initFill: {color: 'fff', opacity: 1},
    initStroke: {width: 1.5, color: '000', opacity: 1},
    initOpacity: 1,
    imgPath: 'images/',
    extPath: 'extensions/',
    jGraduatePath: 'images/',
    extensions: [],
    initTool: 'select',
    wireframe: false,
    colorPickerCSS: false,
    gridSnapping: false,
    gridColor: "#000",
    baseUnit: 'px',
    snappingStep: 10,
    showRulers: (svgedit.browser.isTouch()) ? false : true,
    show_outside_canvas: false,
    no_save_warning: true,
    initFont: 'Helvetica, Arial, sans-serif'
  };
  var customHandlers = {};
  Editor.curConfig = curConfig;
  Editor.tool_scale = 1;
  
  Editor.setConfig = function(opts) {
    $.extend(true, curConfig, opts);
    if(opts.extensions) {
      curConfig.extensions = opts.extensions;
    }
  }
  
  Editor.init = function() {

    $("body").toggleClass("touch", svgedit.browser.isTouch());
    $("#canvas_width").val(curConfig.dimensions[0]);
    $("#canvas_height").val(curConfig.dimensions[1]);


    Editor.canvas = svgCanvas = new $.SvgCanvas(document.getElementById("svgcanvas"), curConfig);
    Editor.paintBox = {fill: null, stroke:null, canvas:null};
    var isMac = (navigator.platform.indexOf("Mac") >= 0),
      isWebkit = (navigator.userAgent.indexOf("AppleWebKit") >= 0),
      modKey = (isMac ? "meta+" : "ctrl+"), // ⌘
      path = svgCanvas.pathActions,
      undoMgr = svgCanvas.undoMgr,
      Utils = svgedit.utilities,
      default_img_url = curConfig.imgPath + "placeholder.svg",
      workarea = $("#workarea"),
      canv_menu = $("#cmenu_canvas"),
      exportWindow = null, 
      tool_scale = 1,
      ui_context = 'toolbars',
      orig_source = '';
      
    // This puts the correct shortcuts in the menus
    if (!isMac) {
     $('.shortcut').each(function(){
       var text = $(this).text();
       $(this).text(text.split("⌘").join("Ctrl+"))
     }); 
    }
    
    var setSelectMode = function() {
      var curr = $('.tool_button.current');
      if(curr.length && curr[0].id !== 'tool_select') {
        curr.removeClass('current').addClass('tool_button');
        $('#tool_select').addClass('current');
      }
      svgCanvas.setMode('select');
    };
    
    var togglePathEditMode = function(editmode, elems) {
      if(editmode) {
        // Change select icon
        $('.context_panel').hide();
        $('#path_node_panel').show();
        $('.tool_button.current').removeClass('.current');
        $('#tool_select').addClass('.current');
        multiselected = false;
      } else {
        if (elems[0]) {
          var selector = svgCanvas.selectorManager.requestSelector(elems[0])
          selector.reset(elems[0]);
          selector.selectorRect.setAttribute('display', 'inline');
        }

      }
    }
  
    // used to make the flyouts stay on the screen longer the very first time
    var flyoutspeed = 1250;
    var textBeingEntered = false;
    var selectedElement = null;
    var multiselected = false;
    var editingsource = false;
    var docprops = false;
    var preferences = false;
    var cur_context = '';
    
    var saveHandler = function(window,svg) {
     
    };
    
    var exportHandler = function(window, data) {
      var issues = data.issues;
      
      if(!$('#export_canvas').length) {
        $('<canvas>', {id: 'export_canvas'}).hide().appendTo('body');
      }
      var c = $('#export_canvas')[0];
      
      c.width = svgCanvas.contentW;
      c.height = svgCanvas.contentH;
      canvg(c, data.svg, {renderCallback: function() {
        var datauri = c.toDataURL('image/png');  
        if (!datauri) return false;
        var filename = "Method Draw Image";
        var type = 'image/png';
        var file = svgedit.utilities.dataURItoBlob(datauri, type);
        if (window.navigator.msSaveOrOpenBlob) // IE10+
            window.navigator.msSaveOrOpenBlob(file, filename);
        else { // Others
            var a = document.createElement("a"),
                    url = URL.createObjectURL(file);
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(function() {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
      }});
    };
    
    // called when we've selected a different element
    var selectedChanged = function(window,elems) {
      var mode = svgCanvas.getMode();
      if(mode === "select") setSelectMode();
      if (mode === "pathedit") return updateContextPanel();
      // if elems[1] is present, then we have more than one element
      selectedElement = (elems.length == 1 || elems[1] == null ? elems[0] : null);
      elems = elems.filter(Boolean)
      multiselected = (elems.length >= 2) ? elems : false;
      if (svgCanvas.elementsAreSame(multiselected)) selectedElement = multiselected[0]
      if (selectedElement != null) {
        $('#multiselected_panel').hide()
        updateToolbar();
        if (multiselected.length) {//multiselected elements are the same
          $('#tools_top').addClass('multiselected')
        }
      }
      else if (multiselected.length) {
        $('.context_panel').hide()
        $('#tools_top').removeClass('multiselected')
        $('#multiselected_panel').show()
      }
      else {
        $('.context_panel').hide()
        $('#canvas_panel').show()
        $('#tools_top').removeClass('multiselected')
      }

      // We need to update the context panel always when we've selected a different element. Otherwise some
      // menu items are disabled even if they shouldn't be (e.g. group multiple elements)
      updateContextPanel();

      svgCanvas.runExtensions("selectedChanged", {
        elems: elems,
        selectedElement: selectedElement,
        multiselected: multiselected
      });
    };
  
    // Call when part of element is in process of changing, generally
    // on mousemove actions like rotate, move, etc.
    var elementTransition = function(window,elems) {
      var mode = svgCanvas.getMode();
      var elem = elems[0];
      
      if(!elem) return;
      
      multiselected = (elems.length >= 2 && elems[1] != null) ? elems : null;
      // Only updating fields for single elements for now
      if(!multiselected) {
        switch ( mode ) {
          case "rotate":
            var ang = svgCanvas.getRotationAngle(elem);
            $('#angle').val(Math.round(ang));
            rotateCursor(ang);
            $('#tool_reorient').toggleClass('disabled', ang == 0);
            break;
        }
      }
      svgCanvas.runExtensions("elementTransition", {
        elems: elems
      });
    };
  
    // called when any element has changed
    var elementChanged = function(window,elems) {
      var mode = svgCanvas.getMode();
      if(mode === "select") {
        setSelectMode();
      }
      
      for (var i = 0; i < elems.length; ++i) {
        var elem = elems[i];
        
        // if the element changed was the svg, then it could be a resolution change
        if (elem && elem.tagName === "svg") {
          //populateLayers();
          updateCanvas();
        } 
        // Update selectedElement if element is no longer part of the image.
        // This occurs for the text elements in Firefox
        else if(elem && selectedElement && selectedElement.parentNode == null) {
//            || elem && elem.tagName == "path" && !multiselected) { // This was added in r1430, but not sure why
          selectedElement = elem;
        }
      }
        
      // we update the contextual panel with potentially new
      // positional/sizing information (we DON'T want to update the
      // toolbar here as that creates an infinite loop)
      // also this updates the history buttons
  
      // we tell it to skip focusing the text control if the
      // text element was previously in focus
      updateContextPanel();
      
      // In the event a gradient was flipped:
      if(selectedElement && mode === "select") {
        Editor.paintBox.fill.update();
        Editor.paintBox.stroke.update();
      }
      
      svgCanvas.runExtensions("elementChanged", {
        elems: elems
      });
    };
    
    var zoomChanged = function(window, bbox, autoCenter) {
      var scrbar = 15,
        res = svgCanvas.getResolution(),
        w_area = workarea,
        canvas_pos = $('#svgcanvas').position();
      var z_info = svgCanvas.setBBoxZoom(bbox, w_area.width()-scrbar, w_area.height()-scrbar);
      if(!z_info) return;
      var zoomlevel = z_info.zoom,
        bb = z_info.bbox;
      
      if(zoomlevel < .001) {
        changeZoom({value: .1});
        return;
      }
      if (typeof animatedZoom != 'undefined') window.cancelAnimationFrame(animatedZoom)
      // zoom duration 500ms
      var start = Date.now();
      var duration = 500;
      var diff = (zoomlevel) - (res.zoom)
      var zoom = $('#zoom')[0]
      var current_zoom = res.zoom
      var animateZoom = function(timestamp) {
        var progress = Date.now() - start
        var tick = progress / duration
        tick = (Math.pow((tick-1), 3) +1);
        svgCanvas.setZoom(current_zoom + (diff*tick));
        updateCanvas();
        if (tick < 1 && tick > -.90) {
          window.animatedZoom = requestAnimationFrame(animateZoom)
        }
        else {
          $("#zoom").val(parseInt(zoomlevel*100))
          $("option", "#zoom_select").removeAttr("selected")
          $("option[value="+ parseInt(zoomlevel*100) +"]", "#zoom_select").attr("selected", "selected")
        }
      }
      animateZoom()

  
      if(svgCanvas.getMode() == 'zoom' && bb.width) {
        // Go to select if a zoom box was drawn
        setSelectMode();
      }
      
      zoomDone();
    }
    
    $('#cur_context_panel').delegate('a', 'click', function() {
      var link = $(this);
      if(link.attr('data-root')) {
        svgCanvas.leaveContext();
      } else {
        svgCanvas.setContext(link.text());
      }
      svgCanvas.clearSelection();
      return false;
    });
    
    var contextChanged = function(win, context) {
      
      var link_str = '';
      if(context) {
        var str = '';
        link_str = '<a href="#" data-root="y">' + svgCanvas.getCurrentDrawing().getCurrentLayerName() + '</a>';
        
        $(context).parentsUntil('#svgcontent > g').addBack().each(function() {
          if(this.id) {
            str += ' > ' + this.id;
            if(this !== context) {
              link_str += ' > <a href="#">' + this.id + '</a>';
            } else {
              link_str += ' > ' + this.id;
            }
          }
        });

        cur_context = str;
      } else {
        cur_context = null;
      }
      $('#cur_context_panel').toggle(!!context).html(link_str);

    }

    var extAdded = function(window, ext) {
       if(ext.callback) ext.callback();
    }
    
    // Makes sure the current selected paint is available to work with
    var prepPaints = function() {
      Editor.paintBox.fill.prep();
      Editor.paintBox.stroke.prep();
    }

    var getPaint = function(color, opac, type) {
      // update the editor's fill paint
      var opts = null;
      if (color.indexOf("url(#") === 0) {
        var refElem = svgCanvas.getRefElem(color);
        if(refElem) {
          refElem = refElem.cloneNode(true);
        } else {
          refElem =  $("#" + type + "_color defs *")[0];
        }
        
        opts = { alpha: opac };
        opts[refElem.tagName] = refElem;
      } 
      else if (color.indexOf("#") === 0) {
        opts = {
          alpha: opac,
          solidColor: color.substr(1)
        };
      }
      else {
        opts = {
          alpha: opac,
          solidColor: 'none'
        };
      }
      return new $.jGraduate.Paint(opts);
    };  
    
    // set the canvas properties at init
    var res = svgCanvas.getResolution();
    if(curConfig.baseUnit !== "px") {
      res.w = svgedit.units.convertUnit(res.w) + curConfig.baseUnit;
      res.h = svgedit.units.convertUnit(res.h) + curConfig.baseUnit;
    }
    
    var createBackground = function(fill) {
      svgCanvas.createLayer("background")
      cur_shape = svgCanvas.addSvgElementFromJson({
        "element": "rect",
        "attr": {
          "x": -1,
          "y": -1,
          "width": res.w+2,
          "height": res.h+2,
          "stroke": "none",
          "id": "canvas_background",
          "opacity": 1,
          "fill": fill || "#fff",
          "style": "pointer-events:none"
        }
      });
      svgCanvas.setCurrentLayer("Layer 1")
      svgCanvas.setCurrentLayerPosition("1")
    }
    
    // create a new layer background if it doesn't exist
    if (!document.getElementById('canvas_background')) createBackground();
    var fill = document.getElementById('canvas_background').getAttribute("fill");
    
    // updates the toolbar (colors, opacity, etc) based on the selected element
    // This function also updates the opacity and id elements that are in the context panel
    var updateToolbar = function() {
      if (selectedElement != null) {
        switch ( selectedElement.tagName ) {
        case 'use':
          $(".context_panel").hide();
          $("#use_panel").show();
          break;
        case 'image':
          $(".context_panel").hide();
          $("#image_panel").show();
          break;
        case 'foreignObject':
          $(".context_panel").hide();
          break;
        case 'g':
        case 'a':
          // Look for common styles
          var gWidth = null;
          
          var childs = selectedElement.getElementsByTagName('*');
          for(var i = 0, len = childs.length; i < len; i++) {
            var swidth = childs[i].getAttribute("stroke-width");
            if(i === 0) {
              gWidth = swidth;
            } else if(gWidth !== swidth) {
              gWidth = null;
            }
          }
          
          $('#stroke_width').val(gWidth === null ? "0" : gWidth);
          updateContextPanel();
          break;
        default:
          //removed because multiselect shouldnt set color
          //Editor.paintBox.fill.update(false);
          //Editor.paintBox.stroke.update(false);
          
          $('#stroke_width').val(selectedElement.getAttribute("stroke-width") || 0);
          var dash = selectedElement.getAttribute("stroke-dasharray") || "none"
          $('option', '#stroke_style').removeAttr('selected');
          $('#stroke_style option[value="'+ dash +'"]').attr("selected", "selected");
          $('#stroke_style').trigger('change');

          $.fn.dragInput.updateCursor($('#stroke_width')[0])
          $.fn.dragInput.updateCursor($('#blur')[0])
        }

      }
      
      // All elements including image and group have opacity
      if(selectedElement != null) {
        var opac_perc = ((selectedElement.getAttribute("opacity")||1.0)*100);
        $('#group_opacity').val(opac_perc);
        $.fn.dragInput.updateCursor($('#group_opacity')[0])
      }
    };
  
    var setImageURL = Editor.setImageURL = function(url) {
      if(!url) url = default_img_url;
      
      svgCanvas.setImageURL(url);
      $('#image_url').val(url);
    }
  
    var setInputWidth = function(elem) {
      var w = Math.min(Math.max(12 + elem.value.length * 6, 50), 300);
      $(elem).width(w);
    }
  
    // updates the context panel tools based on the selected element
    var updateContextPanel = function(e) {
      var elem = selectedElement;
      // If element has just been deleted, consider it null
      if(elem != null && !elem.parentNode) elem = null;
      if (multiselected && multiselected[0] != null && !multiselected[0].parentNode) multiselected = false;
      
      var currentLayerName = svgCanvas.getCurrentDrawing().getCurrentLayerName();
      var currentMode = svgCanvas.getMode();
      var unit = curConfig.baseUnit !== 'px' ? curConfig.baseUnit : null;
      var is_node = currentMode == 'pathedit'; //elem ? (elem.id && elem.id.indexOf('pathpointgrip') == 0) : false;
      
      if (is_node) {
        $('.context_panel').hide();
        $('#path_node_panel').show();
        $('#stroke_panel').hide();
        var point = path.getNodePoint();
        $('#tool_add_subpath').removeClass('push_button_pressed').addClass('tool_button');
        $('#tool_node_delete').toggleClass('disabled', !path.canDeleteNodes);
                
        if(point) {
          var seg_type = $('#seg_type');
          if(unit) {
            point.x = svgedit.units.convertUnit(point.x);
            point.y = svgedit.units.convertUnit(point.y);
          }
          $('#path_node_x').val(Math.round(point.x));
          $('#path_node_y').val(Math.round(point.y));
          if(point.type) {
            seg_type.val(point.type).removeAttr('disabled');
            $("#seg_type_label").html(point.type == 4 ? "Straight" : "Curve")
          } else {
            seg_type.val(4).attr('disabled','disabled');
          }
        }
        $("#tools_top").removeClass("multiselected")        
        $("#stroke_panel").hide();
        $("#canvas_panel").hide();
        return;
      }
      
      var menu_items = $('#cmenu_canvas li');
      $('.context_panel').hide();
      $('.menu_item', '#edit_menu').addClass('disabled');
      $('.menu_item', '#object_menu').addClass('disabled');
      
      
      //hack to show the proper multialign box
      if (multiselected) {
        multiselected = multiselected.filter(Boolean);
        elem = (svgCanvas.elementsAreSame(multiselected)) ? multiselected[0] : null
        if (elem) $("#tools_top").addClass("multiselected")
      }

      if (!elem && !multiselected) {
        $("#tools_top").removeClass("multiselected")        
        $("#stroke_panel").hide();
        $("#canvas_panel").show();
      }
  
      if (elem != null) {
        $("#stroke_panel").show();
        var elname = elem.nodeName;
        var angle = svgCanvas.getRotationAngle(elem);
        $('#angle').val(Math.round(angle));
        
        var blurval = svgCanvas.getBlur(elem);
        $('#blur').val(blurval);
        if(!is_node && currentMode != 'pathedit') {
          $('#selected_panel').show();
          $('.action_selected').removeClass('disabled');
          // Elements in this array already have coord fields
          var x, y
          if(['g', 'polyline', 'path'].indexOf(elname) >= 0) {
            var bb = svgCanvas.getStrokedBBox([elem]);
            if(bb) {
              x = bb.x;
              y = bb.y;
            }
          }
          
          if(unit) {
            x = svgedit.units.convertUnit(x);
            y = svgedit.units.convertUnit(y);
          }

          $("#" + elname +"_x").val(Math.round(x))
          $("#" + elname +"_y").val(Math.round(y))
          if (elname === "polyline") {
            //we're acting as if polylines were paths
            $("#path_x").val(Math.round(x))
            $("#path_y").val(Math.round(y))
          }
                    
          // Elements in this array cannot be converted to a path
          var no_path = ['image', 'text', 'path', 'g', 'use'].indexOf(elname) == -1;
          if (no_path) $('.action_path_convert_selected').removeClass('disabled');
          if (elname === "path") $('.action_path_selected').removeClass('disabled');

        }
        
        var link_href = null;
        if (el_name === 'a') {
          link_href = svgCanvas.getHref(elem);
          $('#g_panel').show();
        }
        
        if(elem.parentNode.tagName === 'a') {
          if(!$(elem).siblings().length) {
            $('#a_panel').show();
            link_href = svgCanvas.getHref(elem.parentNode);
          }
        }
        
        // Hide/show the make_link buttons
        $('#tool_make_link, #tool_make_link').toggle(!link_href);
        
        if(link_href) {
          $('#link_url').val(link_href);
        }
        
        // update contextual tools here
        var panels = {
          g: [],
          a: [],
          rect: ['rx','width','height', 'x', 'y'],
          image: ['width','height', 'x', 'y'],
          circle: ['cx','cy','r'],
          ellipse: ['cx','cy','rx','ry'],
          line: ['x1','y1','x2','y2'], 
          text: ['x', 'y'],
          'use': [],
          path : []
        };
        
        var el_name = elem.tagName;
        
        if($(elem).data('gsvg')) {
          $('#g_panel').show();
        }
        
        if (el_name == "path" || el_name == "polyline") {
          $('#path_panel').show();
        }
        
        if(panels[el_name]) {
          var cur_panel = panels[el_name];
          $('#' + el_name + '_panel').show();
          
          // corner radius has to live in a different panel
          // because otherwise it changes the position of the 
          // of the elements
          if(el_name == "rect") $("#cornerRadiusLabel").show()
          else $("#cornerRadiusLabel").hide()
          
          $.each(cur_panel, function(i, item) {
            var attrVal = elem.getAttribute(item);
            if(curConfig.baseUnit !== 'px' && elem[item]) {
              var bv = elem[item].baseVal.value;
              attrVal = svgedit.units.convertUnit(bv);
            }
            
            //update the draginput cursors
            var name_item = document.getElementById(el_name + '_' + item);
            name_item.value = Math.round(attrVal) || 0;
            if (name_item.getAttribute("data-cursor") === "true") {
              $.fn.dragInput.updateCursor(name_item );
            }
          });
          
          if(el_name == 'text') {
            var font_family = elem.getAttribute("font-family");
            var select = document.getElementById("font_family_dropdown");
            select.selectedIndex = 3
            
            $('#text_panel').css("display", "inline");  
            $('#tool_italic').toggleClass('active', svgCanvas.getItalic())
            $('#tool_bold').toggleClass('active', svgCanvas.getBold())
            $('#font_family').val(font_family);
            $('#font_size').val(elem.getAttribute("font-size"));
            $('#text').val(elem.textContent);
            $('#preview_font').text(font_family.split(",")[0].replace(/'/g, "")).css('font-family', font_family);
            if (svgCanvas.addedNew) {
              // Timeout needed for IE9
              setTimeout(function() {
                $('#text').focus().select();
              },100);
            }
          } // text
          else if(el_name == 'image') {
            setImageURL(svgCanvas.getHref(elem));
          } // image
          else if(el_name === 'g' || el_name === 'use') {
            $('#container_panel').show();
            $('.action_group_selected').removeClass('disabled');
            var title = svgCanvas.getTitle();
          }
        }
        menu_items[(el_name === 'g' ? 'en':'dis') + 'ableContextMenuItems']('#ungroup');
        menu_items[((el_name === 'g' || !multiselected) ? 'dis':'en') + 'ableContextMenuItems']('#group');
      }
      
      if (multiselected) {
        $('#multiselected_panel').show();
        $('.action_multi_selected').removeClass('disabled');
        menu_items
          .enableContextMenuItems('#group')
          .disableContextMenuItems('#ungroup');
      } 
      
      if (!elem) {
        menu_items.disableContextMenuItems('#delete,#cut,#copy,#ungroup,#move_front,#move_up,#move_down,#move_back');
      }
      
      // update history buttons
      if (undoMgr.getUndoStackSize() > 0) {
        $('#tool_undo').removeClass( 'disabled');
      }
      else {
        $('#tool_undo').addClass( 'disabled');
      }
      if (undoMgr.getRedoStackSize() > 0) {
        $('#tool_redo').removeClass( 'disabled');
      }
      else {
        $('#tool_redo').addClass( 'disabled');
      }
      
      svgCanvas.addedNew = false;
      
      if ( (elem && !is_node) || multiselected) {
        // update the selected elements' layer
        $('#selLayerNames').removeAttr('disabled').val(currentLayerName);
        
        // Enable regular menu options
        canv_menu.enableContextMenuItems('#delete,#cut,#copy,#move_front,#move_up,#move_down,#move_back');
      }
    };
  
    $('#text').on("focus", function(e){ textBeingEntered = true; } );
    $('#text').on("blur", function(){ textBeingEntered = false; } );

    // bind the selected event to our function that handles updates to the UI
    svgCanvas.bind("selected", selectedChanged);
    svgCanvas.bind("transition", elementTransition);
    svgCanvas.bind("changed", elementChanged);
    svgCanvas.bind("exported", exportHandler);
    svgCanvas.bind("zoomed", zoomChanged);
    svgCanvas.bind("contextset", contextChanged);
    svgCanvas.bind("extension_added", extAdded);
    svgCanvas.textActions.setInputElem($("#text")[0]);
    
    var changeFontSize = function(ctl) {
      svgCanvas.setFontSize(ctl.value);
    }
    
    var changeStrokeWidth = function(ctl) {
      var val = ctl.value;
      if(val == 0 && selectedElement && ['line', 'polyline'].indexOf(selectedElement.nodeName) >= 0) {
        val = ctl.value = 1;
      }
      svgCanvas.setStrokeWidth(val);
    }
    
    //cache
    var $indicator = $('#tool_angle_indicator')
    var $reorient = $('#tool_reorient')
    
    rotateCursor = function(angle){
      var rotate_string = 'rotate('+ angle + 'deg)'
      $indicator.css({
        '-webkit-transform': rotate_string,
        '-moz-transform': rotate_string,
        '-o-transform': rotate_string,
        '-ms-transform': rotate_string,
        'transform': rotate_string
      });
    }
    
    var changeRotationAngle = function(ctl) {
      var preventUndo = true;
      svgCanvas.setRotationAngle(ctl.value, preventUndo);
      rotateCursor(ctl.value)
      $('#tool_reorient').toggleClass('disabled', ctl.value == 0);
    }
    
    var changeZoom = function(ctl) {
      var zoomlevel = ctl.value / 100;
      if(zoomlevel < .001) {
        ctl.value = .1;
        return;
      }
      var zoom = svgCanvas.getZoom();
      var w_area = workarea;
      zoomChanged(window, {
        width: 0,
        height: 0,
        // center pt of scroll position
        x: (w_area[0].scrollLeft + w_area.width()/2)/zoom, 
        y: (w_area[0].scrollTop + w_area.height()/2)/zoom,
        zoom: zoomlevel
      }, true);
    }
    
    var changeBlur = function(ctl, completed) {
      val = ctl.value;
      $('#blur').val(val);
      if (completed) {
        svgCanvas.setBlur(val, true);
      }
      else {
        svgCanvas.setBlurNoUndo(val);
      }
    }
  
    var operaRepaint = function() {
      // Repaints canvas in Opera. Needed for stroke-dasharray change as well as fill change
      if(!window.opera) return;
      $('<p/>').hide().appendTo('body').remove();
    }
  
    $('#stroke_style').change(function(){
      svgCanvas.setStrokeAttr('stroke-dasharray', $(this).val());
      $("#stroke_style_label").html(this.options[this.selectedIndex].text)
      operaRepaint();
    });
    
    $('#seg_type').change(function() {
      svgCanvas.setSegType($(this).val());
      $("#seg_type_label").html(this.options[this.selectedIndex].text)
    });
  
    // Lose focus for select elements when changed (Allows keyboard shortcuts to work better)
    $('select').change(function(){$(this).blur();});
  
    $('#font_family').change(function() {
      svgCanvas.setFontFamily(this.value);
    });
      
    $('#text').keyup(function(){
      svgCanvas.setTextContent(this.value);
    });
    
    changeAttribute = function(el, completed) {
      var attr = el.getAttribute("data-attr");
      var multiplier = el.getAttribute("data-multiplier") || 1;
      multiplier = parseFloat(multiplier);
      var val = el.value * multiplier;
      var valid = svgedit.units.isValidUnit(attr, val, selectedElement);
      if(!valid) {
        $.alert("Invalid value given");
        el.value = selectedElement.getAttribute(attr);
        return false;
      }
      //if (!noUndo) svgCanvas.changeSelectedAttribute(attr, val);
      svgCanvas.changeSelectedAttributeNoUndo(attr, val);
    };

    $("#toggle_stroke_tools").toggle(function() {
      $(".stroke_tool").css('display','table-cell');
      $(this).addClass('expanded');
      resetScrollPos();
    }, function() {
      $(".stroke_tool").css('display','none');
      $(this).removeClass('expanded');
      resetScrollPos();
    });
  
    var toolButtonClick = function(button, noHiding) {
      if ($(button).hasClass('disabled')) return false;
      if($(button).parent().hasClass('tools_flyout')) return true;
      var fadeFlyouts = fadeFlyouts || 'normal';
      if(!noHiding) {
        $('.tools_flyout').fadeOut(fadeFlyouts);
      }
      $('#styleoverrides').text('');
      $('.tool_button.current').removeClass('current');
      $(button).addClass('current');
      return true;
    };
    
    (function() {
      var last_x = null, last_y = null, w_area = workarea[0], 
        panning = false, keypan = false;
      
      var move_pan = function(evt) {    
          if(panning === false) return;

          w_area.scrollLeft -= (evt.clientX - last_x);
          w_area.scrollTop -= (evt.clientY - last_y);
          last_x = evt.clientX;
          last_y = evt.clientY;
          if(evt.type === 'mouseup' || evt.type === 'touchend') panning = false;
          return false;
      }
      
      var start_pan = function(evt) {
        if(evt.button === 1 || keypan === true || (evt.originalEvent.touches && evt.originalEvent.touches.length >= 2)) {
          panning = true;
          last_x = evt.clientX;
          last_y = evt.clientY;
          return false;
        }
      }
      
      $('#svgcanvas')
        .on('mousemove mouseup touchend', move_pan)
        .on("mousedown touchmove", start_pan)
      
      $(window).mouseup(function() {
        panning = false;
      });
      
      $(document).bind('keydown', 'space', function(evt) {
        evt.preventDefault();
        svgCanvas.spaceKey = keypan = true;
        
      }).bind('keyup', 'space', function(evt) {
        evt.preventDefault();
        svgCanvas.spaceKey = keypan = false;
      }).bind('keydown', 'alt', function(evt) {
        if(svgCanvas.getMode() === 'zoom') {
          workarea.addClass('out');
        }
      }).bind('keyup', 'alt', function(evt) {
        if(svgCanvas.getMode() === 'zoom') {
          workarea.removeClass('out');
        }
      })
    }());
    
    
    function setStrokeOpt(opt, changeElem) {
      var id = opt.id;
      var bits = id.split('_');
      var pre = bits[0];
      var val = bits[1];
    
      if(changeElem) {
        svgCanvas.setStrokeAttr('stroke-' + pre, val);
      }
      operaRepaint();
      $(opt).addClass('current').siblings().removeClass('current');
    }
    
    //menu handling
    var menus = $('.menu');
    var blinker = function(e) {
      e.target.style.background = "#fff";
      setTimeout(function(){e.target.style.background = "#ddd";}, 50);
      setTimeout(function(){e.target.style.background = "#fff";}, 150);
      setTimeout(function(){e.target.style.background = "#ddd";}, 200);
      setTimeout(function(){e.target.style.background = "";}, 200);
      setTimeout(function(){$('#menu_bar').removeClass('active')}, 220);
      return false;
    }
    var closer = function(e){
      if (e.target.nodeName && e.target.nodeName.toLowerCase() === "input") return false;
      if (!$(e.target).hasClass("menu_title") && !$(e.target).parent().hasClass("menu_title")) {
        if(!$(e.target).hasClass("disabled") && $(e.target).hasClass("menu_item")) blinker(e)
        else $('#menu_bar').removeClass('active')
      }  

    }
    
    $('.menu_item').on('mousedown touchstart', function(e){blinker(e)});
    $("svg, body").on('mousedown  touchstart', function(e){closer(e)});
    
    var accumulatedDelta = 0
    $('#workarea').on('mousewheel', function(e, delta, deltaX, deltaY){
      if (e.altKey || e.ctrlKey) {
        e.preventDefault();
        zoom = parseInt($("#zoom").val())
        $("#zoom").val(parseInt(zoom + deltaY*(e.altKey ? 10 : 5))).change()
      }
    });
    
    $('.menu_title')
      .on('mousedown', function() {
        $("#tools_shapelib").hide()
        $("#menu_bar").toggleClass('active');
        menus.removeClass('open');
        $(this).parent().addClass('open');
      })
      .on('mouseover', function() {
         menus.removeClass('open');
         $(this).parent().addClass('open');
       });

    $('#font_family_dropdown').change(function() {
      var fam = this.options[this.selectedIndex].value
      var fam_display = this.options[this.selectedIndex].text
      $('#preview_font').html(fam_display).css("font-family", fam);
      $('#font_family').val(fam).change();
    });
    
    $('div', '#position_opts').each(function(){
      this.addEventListener("mouseup", function(){
        var letter = this.id.replace('tool_pos','').charAt(0);
        svgCanvas.alignSelectedElements(letter, 'page');
      })
    });

    
    // Unfocus text input when workarea is mousedowned.
    (function() {
      var inp;
      var unfocus = function() {
        $(inp).blur();
      }
      
      $('#svg_editor').find('button, select, input:not(#text)').focus(function() {
        inp = this;
        ui_context = 'toolbars';
        workarea.mousedown(unfocus);
      }).blur(function() {
        ui_context = 'canvas';
        workarea.unbind('mousedown', unfocus);
        // Go back to selecting text if in textedit mode
        if(svgCanvas.getMode() == 'textedit') {
          $('#text').focus();
        }
      });
      
    }());

    var clickSelect = function() {
      if (toolButtonClick('#tool_select')) {
        svgCanvas.setMode('select');
      }
    };
  
    var clickFHPath = function() {
      if (toolButtonClick('#tool_fhpath')) {
        svgCanvas.setMode('fhpath');
      }
    };
  
    var clickLine = function() {
      if (toolButtonClick('#tool_line')) {
        svgCanvas.setMode('line');
      }
    };
  

    
    var clickRect = function(){
      if (toolButtonClick('#tool_rect')) {
        svgCanvas.setMode('rect');
      }
    };
    
 
  
    var clickEllipse = function(){
      if (toolButtonClick('#tool_ellipse')) {
        svgCanvas.setMode('ellipse');
      }
    };
  
    var clickZoom = function(){
      if (toolButtonClick('#tool_zoom')) {
        svgCanvas.setMode('zoom');
      }
    };
  
  
    var clickText = function(){
      if (toolButtonClick('#tool_text')) {
        svgCanvas.setMode('text');
      }
    };
    
    var clickPath = function(){
      if (toolButtonClick('#tool_path')) {
        svgCanvas.setMode('path');
      }
    };


    var clickEyedropper = function() {
      if (toolButtonClick('#tool_eyedropper')) {
        svgCanvas.setMode('eyedropper');
      }
    }

    var clickShapelib = function() {
      if (toolButtonClick('#tool_shapelib')) {
        $('#workarea').one("mousedown", function(){$('#tools_shapelib').hide()})
        $("#tools_shapelib").css({
          "top": $('#tool_shapelib').offset().top,
          "margin-left": 3,
        })
        $("#tools_shapelib").show();
      }
    }

    // Delete is a contextual tool that only appears in the ribbon if
    // an element has been selected
    var deleteSelected = function() {
      if (selectedElement != null || multiselected) {
        svgCanvas.deleteSelectedElements();
      }
      if (path.getNodePoint()) {
        path.deletePathNode();
      }
    };
  
    var cutSelected = function() {
      if (selectedElement != null || multiselected) {
        flash($('#edit_menu'));
        svgCanvas.cutSelectedElements();
      }
    };
    
    var copySelected = function() {
      if (selectedElement != null || multiselected) {
        flash($('#edit_menu'));
        svgCanvas.copySelectedElements();
      }
    };
    
    var pasteSelected = function() {
      flash($('#edit_menu'));
      var zoom = svgCanvas.getZoom();       
      var x = (workarea[0].scrollLeft + workarea.width()/2)/zoom  - svgCanvas.contentW; 
      var y = (workarea[0].scrollTop + workarea.height()/2)/zoom  - svgCanvas.contentH;
      svgCanvas.pasteElements('point', x, y); 
    }
    
    var moveToTopSelected = function() {
      if (selectedElement != null) {
        flash($('#object_menu'));
        svgCanvas.moveToTopSelectedElement();
      }
    };
    
    var moveToBottomSelected = function() {
      if (selectedElement != null) {
        flash($('#object_menu'));
        svgCanvas.moveToBottomSelectedElement();
      }
    };
    
    var moveUpSelected = function() {
      if (selectedElement != null) {
      flash($('#object_menu'));
        svgCanvas.moveUpDownSelected("Up");
      }
    };

    var moveDownSelected = function() {
      if (selectedElement != null) {
        flash($('#object_menu'));
        svgCanvas.moveUpDownSelected("Down");
      }
    };
    
    var moveUpDownSelected = function(dir) {
      if (selectedElement != null) {
        flash($('#object_menu'));
        svgCanvas.moveUpDownSelected(dir);
      }
    };

    var convertToPath = function() {
      if (selectedElement != null) {
        svgCanvas.convertToPath();
        var elems = svgCanvas.getSelectedElems()
        svgCanvas.selectorManager.requestSelector(elems[0]).reset(elems[0])
        svgCanvas.selectorManager.requestSelector(elems[0]).selectorRect.setAttribute("display", "none");
        svgCanvas.setMode("pathedit")
        path.toEditMode(elems[0]);
        svgCanvas.clearSelection();
        updateContextPanel();
      }
    }
    
    var reorientPath = function() {
      if (selectedElement != null) {
        path.reorient();
      }
    }
  
    var makeHyperlink = function() {
      if (selectedElement != null || multiselected) {
        $.prompt("Enter the new hyperlink URL", "http://", function(url) {
          if(url) svgCanvas.makeHyperlink(url);
        });
      }
    }
  
    var moveSelected = function(dx,dy) {
      if (selectedElement != null || multiselected) {
        if(curConfig.gridSnapping) {
          // Use grid snap value regardless of zoom level
          var multi = svgCanvas.getZoom() * curConfig.snappingStep;
          dx *= multi;
          dy *= multi;
        }
        $('input').blur()
        svgCanvas.moveSelectedElements(dx,dy);
      }
    };
  
    var linkControlPoints = function() {
    //  var linked = document.getElementById('tool_node_link').checked;
    //  path.linkControlPoints(linked);
    }
  
    var clonePathNode = function() {
      if (path.getNodePoint()) {
        path.clonePathNode();
      }
    };
    
    var deletePathNode = function() {
      if (path.getNodePoint()) {
        path.deletePathNode();
      }
    };
  
    var addSubPath = function() {
      var button = $('#tool_add_subpath');
      var sp = !button.hasClass('push_button_pressed');
      if (sp) {
        button.addClass('push_button_pressed').removeClass('tool_button');
      } else {
        button.removeClass('push_button_pressed').addClass('tool_button');
      }
      
      path.addSubPath(sp);
      
    };
  
    var opencloseSubPath = function() {
      path.opencloseSubPath();
    } 
    
    var selectNext = function() {
      svgCanvas.cycleElement(1);
    };
    
    var selectPrev = function() {
      svgCanvas.cycleElement(0);
    };
    
    var rotateSelected = function(cw,step) {
      if (selectedElement == null || multiselected) return;
      if(!cw) step *= -1;
      var new_angle = $('#angle').val()*1 + step;
      svgCanvas.setRotationAngle(new_angle);
      updateContextPanel();
    };
    
    var clickClear = function(){
      var dims = curConfig.dimensions;
      $.confirm("<strong>Do you want to clear the drawing?</strong>\nThis will also erase your undo history", function(ok) {
        if(!ok) return;
        setSelectMode();
        svgCanvas.deleteSelectedElements();
        svgCanvas.clear();
        svgCanvas.setResolution(dims[0], dims[1]);
        updateCanvas(true);
        createBackground();
        zoomImage();
        updateContextPanel();
        prepPaints();
        svgCanvas.runExtensions('onNewDocument');
      });
    };
    
    var clickBold = function(){
      svgCanvas.setBold( !svgCanvas.getBold() );
      updateContextPanel();
    };
    
    var clickItalic = function(){
      svgCanvas.setItalic( !svgCanvas.getItalic() );
      updateContextPanel();
    };
    
    var clickExport = function() {
      if(window.canvg) {
        svgCanvas.rasterExport();
      } else {
        $.getScript('/js/lib/rgbcolor.js', function() {
          $.getScript('/js/lib/canvg.js', function() {
            svgCanvas.rasterExport();
          });
        });
      }
    }
    
    // by default, svgCanvas.open() is a no-op.
    // it is up to an extension mechanism (opera widget, etc) 
    // to call setCustomHandlers() which will make it do something
    var clickOpen = function(){
      svgCanvas.open();
    };
    var clickImport = function(){
    };
    
    var flash = function($menu){
      var menu_title = $menu.prev();
      menu_title.css({
        "background": "white",
        "color": "black"
      });
      setTimeout(function(){menu_title.removeAttr("style")}, 200);
    }
    
    var clickUndo = function(){
      if (undoMgr.getUndoStackSize() > 0) {
        flash($('#edit_menu'));
        undoMgr.undo();
      }
    };
  
    var clickRedo = function(){
      if (undoMgr.getRedoStackSize() > 0) {
        flash($('#edit_menu'));
        undoMgr.redo();
      }
    };
    
    var clickGroup = function(){
      // group
      if (multiselected) {
        flash($('#object_menu'));
        svgCanvas.groupSelectedElements();
      }
      // ungroup
      else if(selectedElement){
        flash($('#object_menu'));
        svgCanvas.ungroupSelectedElement();
      }
    };
    
    var clickClone = function(){
      flash($('#edit_menu'));
      svgCanvas.cloneSelectedElements(20,20);
    };
    
    var clickAlign = function() {
      var letter = this.id.replace('tool_align','').charAt(0);
      svgCanvas.alignSelectedElements(letter, $('#align_relative_to').val());
    };
    
    var clickSwitch = function() {
      var stroke_rect = document.querySelector('#tool_stroke rect');
      $("#tool_stroke").toggleClass('active')
      $("#tool_fill").toggleClass('active')
      var fill_rect = document.querySelector('#tool_fill rect');
      var fill_color = fill_rect.getAttribute("fill");
      var stroke_color = stroke_rect.getAttribute("fill");
      var stroke_opacity = parseFloat(stroke_rect.getAttribute("stroke-opacity"));
      if (isNaN(stroke_opacity)) {stroke_opacity = 100;}
      var fill_opacity = parseFloat(fill_rect.getAttribute("fill-opacity"));
      if (isNaN(fill_opacity)) {fill_opacity = 100;}
      var stroke = getPaint(stroke_color, stroke_opacity, "stroke");
      var fill = getPaint(fill_color, fill_opacity, "fill");
      Editor.paintBox.fill.setPaint(stroke, true);
      Editor.paintBox.stroke.setPaint(fill, true);
      
    };
    
    var zoomImage = function(multiplier) {
      var res = svgCanvas.getResolution();
      multiplier = multiplier?res.zoom * multiplier:1;
  //    setResolution(res.w * multiplier, res.h * multiplier, true);
      $('#zoom').val(multiplier * 100);
      svgCanvas.setZoom(multiplier);
      zoomDone();
      updateCanvas(true);
    };
    
    var zoomDone = function() {
  //    updateBgImage();
      updateWireFrame();
      //updateCanvas(); // necessary?
    }
  
    var clickWireframe = function() {
      flash($('#view_menu'));
      var wf = !$('#tool_wireframe').hasClass('push_button_pressed');
      if (wf) 
        $('#tool_wireframe').addClass('push_button_pressed');
      else
        $('#tool_wireframe').removeClass('push_button_pressed');
      workarea.toggleClass('wireframe');
      
      if(supportsNonSS) return;
      var wf_rules = $('#wireframe_rules');
      if(!wf_rules.length) {
        wf_rules = $('<style id="wireframe_rules"><\/style>').appendTo('head');
      } else {
        wf_rules.empty();
      }
      
      updateWireFrame();
    }
    
    var clickSnapGrid = function() {
      flash($('#view_menu'));
      var sg = !$('#tool_snap').hasClass('push_button_pressed');
      if (sg) 
        $('#tool_snap').addClass('push_button_pressed');
      else
        $('#tool_snap').removeClass('push_button_pressed');   
      curConfig.gridSnapping = sg;
    }
    
    var minimizeModal = function() {
      
      if (window.self != window.top) { //we're in an iframe
        top.exit_fullscreen();
      }
    }

    var clickRulers = function() {
      flash($('#view_menu'));
      var rulers = !$('#tool_rulers').hasClass('push_button_pressed');
      if (rulers) {
        $('#tool_rulers').addClass('push_button_pressed');
        $('#show_rulers').attr("checked", true);
        curConfig.showRulers = true;
      }
      else {
        $('#tool_rulers').removeClass('push_button_pressed');
        $('#show_rulers').attr("checked", false);
        curConfig.showRulers = false;
      }
      $('#rulers').toggle(!!curConfig.showRulers)
    }
    
    var updateWireFrame = function() {
      // Test support
      if(supportsNonSS) return;
  
      var rule = "#workarea.wireframe #svgcontent * { stroke-width: " + 1/svgCanvas.getZoom() + "px; }";
      $('#wireframe_rules').text(workarea.hasClass('wireframe') ? rule : "");
    }
  
    var showSourceEditor = function(e, forSaving){
      if (editingsource) return;
      flash($('#view_menu'));
      editingsource = true;
      
      $('#save_output_btns').toggle(!!forSaving);
      $('#tool_source_back').toggle(!forSaving);
      
      var str = orig_source = svgCanvas.getSvgString();
      $('#svg_source_textarea').val(str);
      $('#svg_source_editor').fadeIn();
      $('#svg_source_textarea').focus().select();
    };
    
    var clickSave = function(){
      flash($('#file_menu'));
      svgCanvas.save();
    };
    var clickCloudSave = function(){
      flash($('#file_menu'));
      svgCanvas.csave();
    };
    
    var saveSourceEditor = function(){
      if (!editingsource) return;
  
      var saveChanges = function() {
        svgCanvas.clearSelection();
        hideSourceEditor();
        zoomImage();
        prepPaints();
      }
  
      if (!svgCanvas.setSvgString($('#svg_source_textarea').val())) {
        $.confirm("There were parsing errors in your SVG source.\nRevert back to original SVG source?", function(ok) {
          if(!ok) return false;
          saveChanges();
        });
      } else {
        saveChanges();
      }
      setSelectMode();    
    };
    
    function setBackground(color, url) {
      $.pref('bkgd_color', color);
      $.pref('bkgd_url', url);
      // This should be done in svgcanvas.js for the borderRect fill
      svgCanvas.setBackground(color, url);
    }
  
    var ua_prefix;
    (ua_prefix = function() {
      var regex = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/;
      var someScript = document.getElementsByTagName('script')[0];
      for(var prop in someScript.style) {
        if(regex.test(prop)) {
          // test is faster than match, so it's better to perform
          // that on the lot and match only when necessary
          return prop.match(regex)[0];
        }
      }
    
      // Nothing found so far?
      if('WebkitOpacity' in someScript.style) return 'Webkit';
      if('KhtmlOpacity' in someScript.style) return 'Khtml';
      
      return '';
    }());
    
    var scaleElements = function(elems, scale) {
      var prefix = '-' + ua_prefix.toLowerCase() + '-';
      
      var sides = ['top', 'left', 'bottom', 'right'];
    
      elems.each(function() {
//          console.log('go', scale);

        // Handled in CSS
        // this.style[ua_prefix + 'Transform'] = 'scale(' + scale + ')';
      
        var el = $(this);
        
        var w = el.outerWidth() * (scale - 1);
        var h = el.outerHeight() * (scale - 1);
        var margins = {};
        
        for(var i = 0; i < 4; i++) {
          var s = sides[i];
          
          var cur = el.data('orig_margin-' + s);
          if(cur == null) {
            cur = parseInt(el.css('margin-' + s));
            // Cache the original margin
            el.data('orig_margin-' + s, cur);
          }
          var val = cur * scale;
          if(s === 'right') {
            val += w;
          } else if(s === 'bottom') {
            val += h;
          }
          
          el.css('margin-' + s, val);
//            el.css('outline', '1px solid red');
        }
      });
    }
  
    var cancelOverlays = function() {
      $('#dialog_box').hide();
      if (!editingsource && !docprops && !preferences) {
        if(cur_context) {
          svgCanvas.leaveContext();
        }
        return;
      };
  
      if (editingsource) {
        if (orig_source !== $('#svg_source_textarea').val()) {
          $.confirm("Ignore changes made to SVG source?", function(ok) {
            if(ok) hideSourceEditor();
          });
        } else {
          hideSourceEditor();
        }
      }
      else if (docprops) {
        hideDocProperties();
      } else if (preferences) {
        hidePreferences();
      }
      resetScrollPos();
    };
  
    var hideSourceEditor = function(){
      $('#svg_source_editor').hide();
      editingsource = false;
      $('#svg_source_textarea').blur();
    };

    var win_wh = {width:$(window).width(), height:$(window).height()};
    
    var resetScrollPos = $.noop, curScrollPos;
    $(window).resize(updateCanvas);
    
    (function() {
      workarea.scroll(function() {
        // TODO:  jQuery's scrollLeft/Top() wouldn't require a null check
        if ($('#ruler_x').length != 0) {
          $('#ruler_x')[0].scrollLeft = workarea[0].scrollLeft;
        }
        if ($('#ruler_y').length != 0) {
          $('#ruler_y')[0].scrollTop = workarea[0].scrollTop; 
        }
      });

    }());
    
    $('#change_image_url').click(promptImgURL);
    
    function promptImgURL() {
      var curhref = svgCanvas.getHref(selectedElement);
      curhref = curhref.indexOf("data:") === 0?"":curhref;
      $.prompt("Enter the new image URL", curhref, function(url) {
        if(url) setImageURL(url);
      });
    }
    
    // TODO: go back to the color boxes having white background-color and then setting
    //       background-image to none.png (otherwise partially transparent gradients look weird)  
    var colorPicker = function(elem) {
      var picker = elem[0].id == 'stroke_color' ? 'stroke' : 'fill';
      var is_background = elem[0].id == "canvas_color"
      if (is_background) picker = 'canvas'
//        var opacity = (picker == 'stroke' ? $('#stroke_opacity') : $('#fill_opacity'));
      var paint = Editor.paintBox[picker].paint;
      
      var title = (picker == 'stroke' ? 'Pick a Stroke Paint and Opacity' : 'Pick a Fill Paint and Opacity');
      var was_none = false;
      var pos = is_background ? {'right': 175, 'top': 50} : {'left': 50, 'bottom': 50}
      
      $("#color_picker")
        .draggable({cancel:'.jGraduate_tabs, .jGraduate_colPick, .jGraduate_gradPick, .jPicker', containment: 'window'})
        .removeAttr("style")
        .css(pos)
        .jGraduate(
        { 
          paint: paint,
          window: { pickerTitle: title },
          images: { clientPath: curConfig.jGraduatePath },
          newstop: 'inverse'
        },
        function(p) {
          paint = new $.jGraduate.Paint(p);
          
          Editor.paintBox[picker].setPaint(paint);
          svgCanvas.setPaint(picker, paint);
          
          $('#color_picker').hide();
        },
        function(p) {
          $('#color_picker').hide();
        });
    };
  
    var PaintBox = function(container, type) {
      var background = document.getElementById("canvas_background");
      var cur = {color: "fff", opacity: 1}
      if (type == "stroke") cur = curConfig['initStroke'];
      if (type == "fill") cur = curConfig['initFill'];
      if (type == "canvas" && background) {
            var rgb = background.getAttribute("fill").match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            if (rgb) {
              var hex =   ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
                            ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
                            ("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
              cur = {color: hex, opacity: 1}
            }
      }

      // set up gradients to be used for the buttons
      var svgdocbox = new DOMParser().parseFromString(
        '<svg xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%"\
        fill="#' + cur.color + '" opacity="' + cur.opacity + '"/>\
        <defs><linearGradient id="gradbox_"/></defs></svg>', 'text/xml');
      var docElem = svgdocbox.documentElement;
      
      docElem = $(container)[0].appendChild(document.importNode(docElem, true));
      if (type === 'canvas') docElem.setAttribute('width',60.5);
      else docElem.setAttribute('width',"100%");
      
      this.rect = docElem.firstChild;
      this.defs = docElem.getElementsByTagName('defs')[0];
      this.grad = this.defs.firstChild;
      this.paint = new $.jGraduate.Paint({solidColor: cur.color});
      this.type = type;

      this.setPaint = function(paint, apply, noUndo) {
        this.paint = paint;
        var fillAttr = "none";
        var ptype = paint.type;
        var opac = paint.alpha / 100;
        switch ( ptype ) {
          case 'solidColor':
            fillAttr = (paint[ptype] == 'none' || paint[ptype] == 'one') ? 'none' : "#" + paint[ptype];
            break;
          case 'linearGradient':
          case 'radialGradient':
            this.defs.removeChild(this.grad);
            this.grad = this.defs.appendChild(paint[ptype]);
            var id = this.grad.id = 'gradbox_' + this.type;
            fillAttr = "url(#" + id + ')';
        }
        this.rect.setAttribute('fill', fillAttr);
        this.rect.setAttribute('opacity', opac);

        if (this.type == "canvas") {
          //recache background in case it changed
          var background = document.getElementById("canvas_background");
          if (background) {
            res = svgCanvas.getResolution()
            background.setAttribute("x", -1);
            background.setAttribute("y", -1);
            background.setAttribute("width", res.w+2);
            background.setAttribute("height", res.h+2);
            if (fillAttr.indexOf("url") == -1) background.setAttribute('fill', fillAttr)
          }
          else createBackground(fillAttr)
        }
        
        if(apply) {
          svgCanvas.setColor(this.type, fillAttr, true);
          svgCanvas.setPaintOpacity(this.type, opac, true);
        }
        
      }
      
      this.update = function(apply) {
        if(!selectedElement) return;
        var type = this.type;
        switch ( selectedElement.tagName ) {
        case 'use':
        case 'image':
        case 'foreignObject':
          // These elements don't have fill or stroke, so don't change 
          // the current value
          return;
        case 'g':
        case 'a':
          var gPaint = null;
        
          var childs = selectedElement.getElementsByTagName('*');
          for(var i = 0, len = childs.length; i < len; i++) {
            var elem = childs[i];
            var p = elem.getAttribute(type);
            if(i === 0) {
              gPaint = p;
            } else if(gPaint !== p) {
              gPaint = null;
              break;
            }
          }
          if(gPaint === null) {
            // No common color, don't update anything
            var paintColor = null;
            return;
          }
          var paintColor = gPaint;
          
          var paintOpacity = 1;
          break;
        default:
          var paintOpacity = parseFloat(selectedElement.getAttribute(type + "-opacity"));
          if (isNaN(paintOpacity)) {
            paintOpacity = 1.0;
          }
          
          var defColor = type === "fill" ? "black" : "none";
          var paintColor = selectedElement.getAttribute(type) || defColor;
        }
        if(apply) {
          svgCanvas.setColor(type, paintColor, true);
          svgCanvas.setPaintOpacity(type, paintOpacity, true);
        }

        paintOpacity *= 100;          
        
        var paint = getPaint(paintColor, paintOpacity, type);
        // update the rect inside #fill_color/#stroke_color
        this.setPaint(paint);
      }
      
      this.prep = function() {
        var ptype = this.paint.type;
      
        switch ( ptype ) {
          case 'linearGradient':
          case 'radialGradient':
            var paint = new $.jGraduate.Paint({copy: this.paint});
            svgCanvas.setPaint(type, paint);
        }
      }
    };
    
    Editor.paintBox.fill = new PaintBox('#fill_color', 'fill');
    Editor.paintBox.stroke = new PaintBox('#stroke_color', 'stroke');
    Editor.paintBox.canvas = new PaintBox('#canvas_color', 'canvas');

    $('#stroke_width').val(curConfig.initStroke.width);
    $('#group_opacity').val(curConfig.initOpacity * 100);
    
    // Use this SVG elem to test vectorEffect support
    var test_el = Editor.paintBox.fill.rect.cloneNode(false);
    test_el.setAttribute('style','vector-effect:non-scaling-stroke');
    var supportsNonSS = (test_el.style.vectorEffect === 'non-scaling-stroke');
    test_el.removeAttribute('style');
    var svgdocbox = Editor.paintBox.fill.rect.ownerDocument;
    // Use this to test support for blur element. Seems to work to test support in Webkit
    var blur_test = svgdocbox.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
    if(typeof blur_test.stdDeviationX === "undefined") {
      $('#tool_blur').hide();
    }
    $(blur_test).remove();
      
    $('#tool_fill').click(function(){
      if ($('#tool_fill').hasClass('active')) {
        colorPicker($('#fill_color'));
      }
      else {
        $('#tool_fill').addClass('active');
        $("#tool_stroke").removeClass('active');
      }
    });
    
    $('#tool_stroke').on("click", function(){
      if ($('#tool_stroke').hasClass('active')) {
        colorPicker($('#stroke_color'));
      }
      else {
        $('#tool_stroke').addClass('active');
        $("#tool_fill").removeClass('active');
      }
    });
    
    $('#tool_canvas').on("click touchstart", function(){
        colorPicker($('#canvas_color'));
    });
    
    $('#tool_stroke').on("touchstart", function(){
        $('#tool_stroke').addClass('active');
        $("#tool_fill").removeClass('active');
        colorPicker($('#stroke_color'));
    });

    $('#tool_fill').on("touchstart", function(){
        $('#tool_fill').addClass('active');
        $("#tool_stroke").removeClass('active');
        colorPicker($('#fill_color'));
    });
    
    $('#zoom_select').on("change", function() {
      var val = this.options[this.selectedIndex].text
      val = val.split("%")[0]
      $("#zoom").val(val).trigger("change")
    });
  
    $('.push_button').mousedown(function() { 
      if (!$(this).hasClass('disabled')) {
        $(this).addClass('push_button_pressed').removeClass('push_button');
      }
    }).mouseout(function() {
      $(this).removeClass('push_button_pressed').addClass('push_button');
    }).mouseup(function() {
      $(this).removeClass('push_button_pressed').addClass('push_button');
    });
    
  
  //  function changeResolution(x,y) {
  //    var zoom = svgCanvas.getResolution().zoom;
  //    setResolution(x * zoom, y * zoom);
  //  }
    
    var centerCanvas = function() {
      // this centers the canvas vertically in the workarea (horizontal handled in CSS)
      workarea.css('line-height', workarea.height() + 'px');
    };
    
    $(window).bind('load resize', centerCanvas);
  
    function stepFontSize(elem, step) {
      var orig_val = elem.value-0;
      var sug_val = orig_val + step;
      var increasing = sug_val >= orig_val;
      if(step === 0) return orig_val;
      
      if(orig_val >= 24) {
        if(increasing) {
          return Math.round(orig_val * 1.1);
        } else {
          return Math.round(orig_val / 1.1);
        }
      } else if(orig_val <= 1) {
        if(increasing) {
          return orig_val * 2;      
        } else {
          return orig_val / 2;
        }
      } else {
        return sug_val;
      }
    }
    
    function stepZoom(elem, step) {
      var orig_val = elem.value-0;
      if(orig_val === 0) return 100;
      var sug_val = orig_val + step;
      if(step === 0) return orig_val;
      
      if(orig_val >= 100) {
        return sug_val;
      } else {
        if(sug_val >= orig_val) {
          return orig_val * 2;
        } else {
          return orig_val / 2;
        }
      }
    }
      
  var changeCanvasSize = function(ctl){
    var width = $("#canvas_width");
    var height = $("#canvas_height");
    var w = width.val();
    var h = height.val()
    
    if(w != "fit" && !svgedit.units.isValidUnit('width', w)) {
      $.alert("Invalid value given");
      width.parent().addClass('error');
      return false;
    }

    width.parent().removeClass('error');

    if(h != "fit" && !svgedit.units.isValidUnit('height', h)) {
      $.alert("Invalid value given");
      height.parent().addClass('error');
      return false;
    } 
    height.parent().removeClass('error');
    if(!svgCanvas.setResolution(w, h)) {
      $.alert("No content to fit to");
      var dims = svgCanvas.getResolution()
      width.val(dims.w)
      height.val(dims.h)
      return false;
    }
     updateCanvas();
  }
  
  
    $('#resolution').change(function(){
      var w = $('#canvas_width')[0];
      var h = $('#canvas_height')[0];
      if(!this.selectedIndex) {
        $('#resolution_label').html("Custom");
        w.removeAttribute("readonly");
        w.focus();
        w.select();
        if(w.value == 'fit') {
          w.value = 100
          h.value = 100
        }
      } else if(this.value == 'content') {
        w.value = 'fit'
        h.value = 'fit'
        changeCanvasSize();
        var res = svgCanvas.getResolution()
        w.value = res.w
        h.value = res.h
        
      } else {
        var dims = this.value.split('x');
        dims[0] = parseInt(dims[0]); 
        dims[1] = parseInt(dims[1]);
        var diff_w = dims[0] - w.value;
        var diff_h = dims[1] - h.value;
        //animate
        var start = Date.now();
        var duration = 1000;
        var animateCanvasSize = function(timestamp) {
          var progress = Date.now() - start;
          var tick = progress / duration;
          tick = (Math.pow((tick-1), 3) +1);
          w.value = (dims[0] - diff_w + (tick*diff_w)).toFixed(0);
          h.value = (dims[1] - diff_h + (tick*diff_h)).toFixed(0);
          changeCanvasSize();
          if (tick >= 1) {
            var res = svgCanvas.getResolution()
            $('#canvas_width').val(res.w.toFixed())
            $('#canvas_height').val(res.h.toFixed())
            $('#resolution_label').html("<div class='pull'>" + res.w + "<span>×</span></br>" + res.h + "</div>");
          }
          else {
            requestAnimationFrame(animateCanvasSize)
          }
        }
        animateCanvasSize()

      }
    });
    
    $('#zoom').change(function(){
      changeZoom(this)
    })
  
    //Prevent browser from erroneously repopulating fields
    $('input,select').attr("autocomplete","off");
    
    // Associate all button actions as well as non-button keyboard shortcuts
    var Actions = function() {
      // sel:'selector', fn:function, evt:'event', key:[key, preventDefault, NoDisableInInput]
      var tool_buttons = [
        {sel:'#tool_select', fn: clickSelect, evt: 'click', key: ['V', true]},
        {sel:'#tool_fhpath', fn: clickFHPath, evt: 'click', key: ['Q', true]},
        {sel:'#tool_line', fn: clickLine, evt: 'click', key: ['L', true]},
        {sel:'#tool_rect', fn: clickRect, evt: 'click', key: ['R', true]},
        {sel:'#tool_ellipse', fn: clickEllipse, evt: 'mouseup', key: ['C', true]},
        {sel:'#tool_eyedropper', fn: clickEyedropper, evt: 'click', key: ['I', true]},
        {sel:'#tool_shapelib', fn: clickShapelib, evt: 'click', key: ['S', true]},
        {sel:'#tool_path', fn: clickPath, evt: 'click', key: ['P', true]},
        {sel:'#tool_text', fn: clickText, evt: 'click', key: ['T', true]},
        {sel:'#tool_zoom', fn: clickZoom, evt: 'mouseup', key: ['Z', true]},
        {sel:'#tool_clear', fn: clickClear, evt: 'mouseup', key: [modKey + 'N', true]},
        {sel:'#tool_save', fn: function() { editingsource ? saveSourceEditor(): clickSave() }, evt: 'mouseup'},
        {sel:'#tool_csave', fn: clickCloudSave, evt: 'mouseup', key: [modKey + 'S', true]},
        {sel:'#tool_export', fn: clickExport, evt: 'mouseup'},
        {sel:'#tool_open', fn: clickOpen, evt: 'mouseup'},
        {sel:'#tool_import', fn: clickImport, evt: 'mouseup'},
        {sel:'#tool_source', fn: showSourceEditor, evt: 'click', key: [modKey + 'U', true]},
        {sel:'#tool_wireframe', fn: clickWireframe, evt: 'click'},
        {sel:'#tool_snap', fn: clickSnapGrid, evt: 'click'},
        {sel:'#tool_rulers', fn: clickRulers, evt: 'click'},
        {sel:'#tool_source_cancel,#svg_source_overlay,#tool_docprops_cancel,#tool_prefs_cancel', fn: cancelOverlays, evt: 'click', key: ['esc', false, false], hidekey: true},
        {sel:'#tool_source_save', fn: saveSourceEditor, evt: 'click'},
        {sel:'#tool_delete,#tool_delete_multi', fn: deleteSelected, evt: 'click', key: ['del/backspace', true]},
        {sel:'#tool_reorient', fn: reorientPath, evt: 'click'},
        {sel:'#tool_node_link', fn: linkControlPoints, evt: 'change'},
        {sel:'#tool_node_clone', fn: clonePathNode, evt: 'click'},
        {sel:'#tool_node_delete', fn: deletePathNode, evt: 'click'},
        {sel:'#tool_openclose_path', fn: opencloseSubPath, evt: 'click'},
        {sel:'#tool_add_subpath', fn: addSubPath, evt: 'click'},
        {sel:'#tool_move_top', fn: moveToTopSelected, evt: 'click', key: modKey + 'shift+up'},
        {sel:'#tool_move_bottom', fn: moveToBottomSelected, evt: 'click', key: modKey + 'shift+down'},
        {sel:'#tool_move_up', fn: moveUpSelected, evt:'click', key: [modKey+'up', true]},
        {sel:'#tool_move_down', fn: moveDownSelected, evt:'click', key: [modKey+'down', true]},
        {sel:'#tool_topath', fn: convertToPath, evt: 'click'},
        {sel:'#tool_make_link,#tool_make_link_multi', fn: makeHyperlink, evt: 'click'},
        {sel:'#tool_clone,#tool_clone_multi', fn: clickClone, evt: 'click', key: [modKey + 'D', true]},
        {sel:'#tool_group', fn: clickGroup, evt: 'click', key: [modKey + 'G', true]},
        {sel:'#tool_ungroup', fn: clickGroup, evt: 'click', key: modKey + 'shift+G'},
        {sel:'#tool_unlink_use', fn: clickGroup, evt: 'click'},
        {sel:'[id^=tool_align]', fn: clickAlign, evt: 'click'},
        {sel:'#tool_undo', fn: clickUndo, evt: 'click', key: modKey + 'z'},
        {sel:'#tool_redo', fn: clickRedo, evt: 'click', key: ['y', true]},
        {sel:'#tool_cut', fn: cutSelected, evt: 'click', key: [modKey+'x', true]},
        {sel:'#tool_copy', fn: copySelected, evt: 'click', key: modKey+'c'},
        {sel:'#tool_paste', fn: pasteSelected, evt: 'click', key: modKey+'v'},
        {sel:'#tool_switch', fn: clickSwitch, evt: 'click', key: ['x', true]},
        {sel:'#tool_bold', fn: clickBold, evt: 'mousedown', key: [modKey + 'B', true]},
        {sel:'#tool_italic', fn: clickItalic, evt: 'mousedown',  key: [modKey + 'I', true]},
        //{sel:'#sidepanel_handle', fn: toggleSidePanel, key: ['X']},
        {sel:'#copy_save_done', fn: cancelOverlays, evt: 'click'},
        
        // Shortcuts not associated with buttons
        
        {key: 'ctrl+left', fn: function(){rotateSelected(0,1)}},
        {key: 'ctrl+right', fn: function(){rotateSelected(1,1)}},
        {key: 'ctrl+shift+left', fn: function(){rotateSelected(0,5)}},          
        {key: 'ctrl+shift+right', fn: function(){rotateSelected(1,5)}},
        {key: 'shift+O', fn: selectPrev},
        {key: 'shift+P', fn: selectNext},
        {key: [modKey+'+', true], fn: function(){zoomImage(2);}},
        {key: [modKey+'-', true], fn: function(){zoomImage(.5);}},
        {key: ['up', true], fn: function(){moveSelected(0,-1);}},
        {key: ['down', true], fn: function(){moveSelected(0,1);}},
        {key: ['left', true], fn: function(){moveSelected(-1,0);}},
        {key: ['right', true], fn: function(){moveSelected(1,0);}},
        {key: 'shift+up', fn: function(){moveSelected(0,-10)}},
        {key: 'shift+down', fn: function(){moveSelected(0,10)}},
        {key: 'shift+left', fn: function(){moveSelected(-10,0)}},
        {key: 'shift+right', fn: function(){moveSelected(10,0)}},
        {key: ['alt+up', true], fn: function(){svgCanvas.cloneSelectedElements(0,-1)}},
        {key: ['alt+down', true], fn: function(){svgCanvas.cloneSelectedElements(0,1)}},
        {key: ['alt+left', true], fn: function(){svgCanvas.cloneSelectedElements(-1,0)}},
        {key: ['alt+right', true], fn: function(){svgCanvas.cloneSelectedElements(1,0)}},
        {key: ['alt+shift+up', true], fn: function(){svgCanvas.cloneSelectedElements(0,-10)}},
        {key: ['alt+shift+down', true], fn: function(){svgCanvas.cloneSelectedElements(0,10)}},
        {key: ['alt+shift+left', true], fn: function(){svgCanvas.cloneSelectedElements(-10,0)}},
        {key: ['alt+shift+right', true], fn: function(){svgCanvas.cloneSelectedElements(10,0)}},  
        {key: modKey + 'A', fn: function(){svgCanvas.selectAllInCurrentLayer();}},

        // Standard shortcuts
        {key: modKey + 'shift+z', fn: clickRedo},
        {key: 'esc', fn: minimizeModal}
      ];
      
      // Tooltips not directly associated with a single function
      var key_assocs = {
        '4/Shift+4': '#tools_rect_show',
        '5/Shift+5': '#tools_ellipse_show'
      };
    
      return {
        setAll: function() {
          var flyouts = {};
          
          $.each(tool_buttons, function(i, opts)  {       
            // Bind function to button
            if(opts.sel) {
              var btn = $(opts.sel);
              if (btn.length == 0) return true; // Skip if markup does not exist
              if(opts.evt) {
                if (svgedit.browser.isTouch() && opts.evt === "click") opts.evt = "mousedown" 
                btn[opts.evt](opts.fn);
              }
  
              // Add to parent flyout menu, if able to be displayed
              if(opts.parent && $(opts.parent + '_show').length != 0) {
                var f_h = $(opts.parent);
                if(!f_h.length) {
                  f_h = makeFlyoutHolder(opts.parent.substr(1));
                }
                
                f_h.append(btn);
                
                if(!$.isArray(flyouts[opts.parent])) {
                  flyouts[opts.parent] = [];
                }
                flyouts[opts.parent].push(opts);
              }
            }
            
            
            // Bind function to shortcut key
            if(opts.key) {
              // Set shortcut based on options
              var keyval, shortcut = '', disInInp = true, fn = opts.fn, pd = false;
              if($.isArray(opts.key)) {
                keyval = opts.key[0];
                if(opts.key.length > 1) pd = opts.key[1];
                if(opts.key.length > 2) disInInp = opts.key[2];
              } else {
                keyval = opts.key;
              }
              keyval += '';
              if (svgedit.browser.isMac && keyval.indexOf("+") != -1) {
                var modifier_key =  keyval.split("+")[0];
                if (modifier_key == "ctrl") keyval.replace("ctrl", "cmd")
              }
              
              $.each(keyval.split('/'), function(i, key) {
                $(document).bind('keydown', key, function(e) {
                  fn();
                  if(pd) {
                    e.preventDefault();
                  }
                  // Prevent default on ALL keys?
                  return false;
                });
              });
              
              // Put shortcut in title
              if(opts.sel && !opts.hidekey && btn.attr('title')) {
                var new_title = btn.attr('title').split('[')[0] + ' (' + keyval + ')';
                key_assocs[keyval] = opts.sel;
                // Disregard for menu items
                if(!btn.parents('#main_menu').length) {
                  btn.attr('title', new_title);
                }
              }
            }
          });
          
          $(window).bind('keydown', 'tab', function(e) {
            if(ui_context === 'canvas') {
              e.preventDefault();
              selectNext();
            }
          }).bind('keydown', 'shift+tab', function(e) {
            if(ui_context === 'canvas') {
              e.preventDefault();
              selectPrev();
            }
          });
        },
        setTitles: function() {
          $.each(key_assocs, function(keyval, sel)  {
            var menu = ($(sel).parents('#main_menu').length);
          
            $(sel).each(function() {
              if(menu) {
                var t = $(this).text().split(' [')[0];
              } else {
                var t = this.title.split(' [')[0];              
              }
              var key_str = '';
              // Shift+Up
              $.each(keyval.split('/'), function(i, key) {
                var mod_bits = key.split('+'), mod = '';
                if(mod_bits.length > 1) {
                  mod = mod_bits[0] + '+';
                  key = mod_bits[1];
                }
                key_str += (i?'/':'') + mod + (key);
              });
              if(menu) {
                this.lastChild.textContent = t +' ['+key_str+']';
              } else {
                this.title = t +' ['+key_str+']';
              }
            });
          });
        },
        getButtonData: function(sel) {
          var b;
          $.each(tool_buttons, function(i, btn) {
            if(btn.sel === sel) b = btn;
          });
          return b;
        }
      };
    }();
    
    Actions.setAll();
    
    // Select given tool
    Editor.ready(function() {
      var tool,
        itool = curConfig.initTool,
        container = $("#tools_left, #svg_editor .tools_flyout"),
        pre_tool = container.find("#tool_" + itool),
        reg_tool = container.find("#" + itool);
      if(pre_tool.length) {
        tool = pre_tool;
      } else if(reg_tool.length){
        tool = reg_tool;
      } else {
        tool = $("#tool_select");
      }
      tool.click().mouseup();
      
      if(curConfig.wireframe) {
        $('#tool_wireframe').click();
      }
      
      if(curConfig.showlayers) {
        toggleSidePanel();
      }
      
      $('#rulers').toggle(!!curConfig.showRulers);
    });
  
    
    $('#canvas_height').dragInput({ min: 10,   max: null,  step: 10,  callback: changeCanvasSize,    cursor: false, dragAdjust: .1         }); 
    $('#canvas_width') .dragInput({ min: 10,   max: null,  step: 10,  callback: changeCanvasSize,    cursor: false, dragAdjust: .1         });                         
    $('#rect_width')   .dragInput({ min: 1,    max: null,  step:  1,  callback: changeAttribute,     cursor: false                         }); 
    $('#rect_height')  .dragInput({ min: 1,    max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#ellipse_cx')   .dragInput({ min: 1,    max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#ellipse_cy')   .dragInput({ min: 1,    max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#ellipse_rx')   .dragInput({ min: 1,    max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#ellipse_ry')   .dragInput({ min: 1,    max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $("#image_height") .dragInput({ min: 1,    max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#circle_cx')    .dragInput({ min: 1,    max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#circle_cy')    .dragInput({ min: 1,    max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#circle_r')     .dragInput({ min: 1,    max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $("#image_height") .dragInput({ min: 0,    max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#selected_x')   .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#selected_y')   .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $("#path_node_x")  .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $("#path_node_y")  .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $("#image_width")  .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#line_x1')      .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#line_x2')      .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#line_y1')      .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#line_y2')      .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#path_x')       .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#path_y')       .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#rect_x')       .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#rect_y')       .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#g_x')      .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#g_y')      .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#image_x')      .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#text_y')       .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#text_x')       .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#image_y')      .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#rect_rx')      .dragInput({ min: 0,    max: 100,   step:  1,  callback: changeAttribute,    cursor: true                          });
    $('#stroke_width') .dragInput({ min: 0,    max: 99,    step:  1,  callback: changeStrokeWidth,   cursor: true, smallStep: 0.1, start: 1.5          });
    $('#angle')        .dragInput({ min: -180, max: 180,   step:  1,  callback: changeRotationAngle, cursor: false, dragAdjust: 0.5      });
    $('#font_size')    .dragInput({ min: 1, max: 250, step: 1, callback: changeFontSize, cursor: true, stepfunc: stepFontSize, dragAdjust: .15 });
    $('#group_opacity').dragInput({ min: 0,    max: 100,   step:  5,  callback: changeAttribute,       cursor: true,  start: 100             });
    $('#blur')         .dragInput({ min: 0,    max: 10,    step: .1,  callback: changeBlur,          cursor: true,  start: 0               });
      // Set default zoom 
    $('#zoom').val(svgCanvas.getZoom() * 100);
    
    $("#workarea").contextMenu({
        menu: 'cmenu_canvas',
        inSpeed: 0
      },
      function(action, el, pos) {
        switch ( action ) {
          case 'delete':
            deleteSelected();
            break;
          case 'cut':
            cutSelected();
            break;
          case 'copy':
            copySelected();
            break;
          case 'paste':
            svgCanvas.pasteElements();
            break;
          case 'paste_in_place':
            svgCanvas.pasteElements('in_place');
            break;
          case 'group':
            svgCanvas.groupSelectedElements();
            break;
          case 'ungroup':         
            svgCanvas.ungroupSelectedElement();  
            break;
          case 'move_front':
            moveToTopSelected();
            break;
          case 'move_up':
            moveUpDownSelected('Up');
            break;
          case 'move_down':
            moveUpDownSelected('Down');
            break;
          case 'move_back':
            moveToBottomSelected();
            break;
            default:
            if(svgedit.contextmenu && svgedit.contextmenu.hasCustomHandler(action)){
              svgedit.contextmenu.getCustomHandler(action).call();
              }
              break;
        }
        
    });
    
    $('.contextMenu li').mousedown(function(ev) {
      ev.preventDefault();
    })
    
    $('#cmenu_canvas li').disableContextMenu();
    canv_menu.enableContextMenuItems('#delete,#cut,#copy');
    
    Editor.openPrep = function(func) {
      $('#main_menu').hide();
      if(undoMgr.getUndoStackSize() === 0) {
        func(true);
      } else {
        $.confirm("Do you want to open a new file?\nThis will also erase your undo history", func);
      }
    }
          
    if (window.FileReader) {
      
      var import_image = function(e) {
        e.stopPropagation();
        e.preventDefault();
        $("#workarea").removeAttr("style");
        $('#main_menu').hide();
        var file = null;
        if (e.type == "drop") file = e.dataTransfer.files[0]
        else file = this.files[0];
        if (file) {
          if(file.type.indexOf("image") != -1) {
            //detected an image
          
            //svg handing
            if(file.type.indexOf("svg") != -1) {
              var reader = new FileReader();
              reader.onloadend = function(e) {
                svgCanvas.importSvgString(e.target.result, true);
                svgCanvas.ungroupSelectedElement()
                svgCanvas.ungroupSelectedElement()
                svgCanvas.groupSelectedElements()
                svgCanvas.alignSelectedElements("m", "page")
                svgCanvas.alignSelectedElements("c", "page")
              };
              reader.readAsText(file);
            }
        
            //image handling
            else {
              var reader = new FileReader();
              reader.onloadend = function(e) {
                // lets insert the new image until we know its dimensions
                insertNewImage = function(img_width, img_height){
                    var newImage = svgCanvas.addSvgElementFromJson({
                    "element": "image",
                    "attr": {
                      "x": 0,
                      "y": 0,
                      "width": img_width,
                      "height": img_height,
                      "id": svgCanvas.getNextId(),
                      "style": "pointer-events:inherit"
                    }
                  });
                  svgCanvas.setHref(newImage, e.target.result);
                  svgCanvas.selectOnly([newImage])
                  svgCanvas.alignSelectedElements("m", "page")
                  svgCanvas.alignSelectedElements("c", "page")
                  updateContextPanel();
                }
                // put a placeholder img so we know the default dimensions
                var img_width = 100;
                var img_height = 100;
                var img = new Image()
                img.src = e.target.result
                document.body.appendChild(img);
                img.onload = function() {
                  img_width = img.offsetWidth
                  img_height = img.offsetHeight
                  insertNewImage(img_width, img_height);
                  document.body.removeChild(img);
                }
              };
              reader.readAsDataURL(file)
            }
          }
        }
      }
      
      var workarea = $("#workarea")
      
      function onDragEnter(e) {
        e.stopPropagation();
        e.preventDefault();
        workarea.css({
          "-webkit-transform": "scale3d(1.1,1.1,1)",
          "-moz-transform": "scale3d(1.1,1.1,1)",
          "-o-transform": "scale(1.1)",
          "-ms-transform": "scale3d(1.1,1.1,1)",
          "transform": "scale3d(1.1,1.1,1)"
        })

      }

      function onDragOver(e) {
        e.stopPropagation();
        e.preventDefault();
      }

      function onDragLeave(e) {
        workarea.removeAttr("style")
        e.stopPropagation();
        e.preventDefault();
      }

    workarea[0].addEventListener('dragenter', onDragEnter, false);
      workarea[0].addEventListener('dragover', onDragOver, false);
      workarea[0].addEventListener('dragleave', onDragLeave, false);
      workarea[0].addEventListener('drop', import_image, false);
      
      var open = $('<input type="file">').change(function() {
        var f = this;
        Editor.openPrep(function(ok) {
          if(!ok) return;
          svgCanvas.clear();
          if(f.files.length==1) {
            var reader = new FileReader();
            reader.onloadend = function(e) {
              loadSvgString(e.target.result);
              updateCanvas();
            };
            reader.readAsText(f.files[0]);
          }
        });
      });
      $("#tool_open").show().prepend(open);
      
      var img_import = $('<input type="file">').change(import_image);
      $("#tool_import").show().prepend(img_import);
    }

    
    var updateCanvas = Editor.updateCanvas = function(center, new_ctr) {
      var w = workarea.width(), h = workarea.height();
      var w_orig = w, h_orig = h;
      var zoom = svgCanvas.getZoom();
      var w_area = workarea;
      var cnvs = $("#svgcanvas");
      
      var old_ctr = {
        x: w_area[0].scrollLeft + w_orig/2,
        y: w_area[0].scrollTop + h_orig/2
      };
      
      var multi = curConfig.canvas_expansion;
      w = Math.max(w_orig, svgCanvas.contentW * zoom * multi);
      h = Math.max(h_orig, svgCanvas.contentH * zoom * multi);
      
      if(w == w_orig && h == h_orig) {
        workarea.css('overflow','hidden');
      } else {
        workarea.css('overflow','scroll');
      }
      
      var old_can_y = cnvs.height()/2;
      var old_can_x = cnvs.width()/2;
      cnvs.width(w).height(h);
      var new_can_y = h/2;
      var new_can_x = w/2;
      var offset = svgCanvas.updateCanvas(w, h);
      
      var ratio = new_can_x / old_can_x;
  
      var scroll_x = w/2 - w_orig/2;
      var scroll_y = h/2 - h_orig/2;
      
      if(!new_ctr) {
  
        var old_dist_x = old_ctr.x - old_can_x;
        var new_x = new_can_x + old_dist_x * ratio;
  
        var old_dist_y = old_ctr.y - old_can_y;
        var new_y = new_can_y + old_dist_y * ratio;
  
        new_ctr = {
          x: new_x,
          y: new_y
        };
        
      } else {
        new_ctr.x += offset.x,
        new_ctr.y += offset.y;
      }
      
      //width.val(offset.x)
      //height.val(offset.y)
      
      if(center) {
        // Go to top-left for larger documents
        if(svgCanvas.contentW > w_area.width()) {
          // Top-left
          workarea[0].scrollLeft = offset.x - 10;
          workarea[0].scrollTop = offset.y - 10;
        } else {
          // Center
          w_area[0].scrollLeft = scroll_x;
          w_area[0].scrollTop = scroll_y;
        }
      } else {
        w_area[0].scrollLeft = new_ctr.x - w_orig/2;
        w_area[0].scrollTop = new_ctr.y - h_orig/2;
      }
      if(curConfig.showRulers) {
        updateRulers(svgCanvas, cnvs, zoom);
        workarea.scroll();
      }
    }
    

    updateCanvas(true);
  
    // Callback handler for embedapi.js
    try{
      var json_encode = function(obj){
      //simple partial JSON encoder implementation
      if(window.JSON && JSON.stringify) return JSON.stringify(obj);
      var enc = arguments.callee; //for purposes of recursion
      if(typeof obj == "boolean" || typeof obj == "number"){
        return obj+'' //should work...
      }else if(typeof obj == "string"){
      //a large portion of this is stolen from Douglas Crockford's json2.js
      return '"'+
          obj.replace(
          /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
          , function (a) {
          return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
          })
          +'"'; //note that this isn't quite as purtyful as the usualness
      }else if(obj.length){ //simple hackish test for arrayish-ness
      for(var i = 0; i < obj.length; i++){
        obj[i] = enc(obj[i]); //encode every sub-thingy on top
      }
      return "["+obj.join(",")+"]";
      }else{
      var pairs = []; //pairs will be stored here
      for(var k in obj){ //loop through thingys
        pairs.push(enc(k)+":"+enc(obj[k])); //key: value
      }
      return "{"+pairs.join(",")+"}" //wrap in the braces
      }
    }
      window.addEventListener("message", function(e){
      var cbid = parseInt(e.data.substr(0, e.data.indexOf(";")));
      try{
        e.source.postMessage("SVGe"+cbid+";"+json_encode(eval(e.data)), "*");
      }catch(err){          
        e.source.postMessage("SVGe"+cbid+";error:"+err.message, "*");
      }
    }, false)
    }catch(err){
      window.embed_error = err;
    }
    
  
  
    // For Compatibility with older extensions
    $(function() {
      window.svgCanvas = svgCanvas;
      svgCanvas.ready = methodDraw.ready;
    });
  
  
    Editor.setLang = function(lang, allStrings) {
      $.pref('lang', lang);
      $('#lang_select').val(lang);
      if(allStrings) {
      
        var notif = allStrings.notification;
        
        svgCanvas.runExtensions("langChanged", lang);
        
        // Update flyout tooltips
        setFlyoutTitles();
        
        // Copy title for certain tool elements
        var elems = {
          '#stroke_color': '#tool_stroke .icon_label, #tool_stroke .color_block',
          '#fill_color': '#tool_fill label, #tool_fill .color_block',
          '#linejoin_miter': '#cur_linejoin',
          '#linecap_butt': '#cur_linecap'
        }
        
        $.each(elems, function(source, dest) {
          $(dest).attr('title', $(source)[0].title);
        });
        
        // Copy alignment titles
        $('#multiselected_panel div[id^=tool_align]').each(function() {
          $('#tool_pos' + this.id.substr(10))[0].title = this.title;
        });
        
      }
    };
  };
  
  var callbacks = [];
  
  function loadSvgString(str, callback) {
    var success = svgCanvas.setSvgString(str) !== false;
    callback = callback || $.noop;
    if(success) {
      callback(true);
    } else {
      $.alert("Error: Unable to load SVG data", function() {
        callback(false);
      });
    }
  }
  
  Editor.ready = function(cb) {
    if(!is_ready) {
      callbacks.push(cb);
    } else {
      cb();
    }
  };

  Editor.runCallbacks = function() {
    $.each(callbacks, function() {
      this();
    });
    is_ready = true;
  };
  
  Editor.loadFromString = function(str) {
    Editor.ready(function() {
      loadSvgString(str);
    });
  };
  
  Editor.loadFromURL = function(url, opts) {
    if(!opts) opts = {};

    var cache = opts.cache;
    var cb = opts.callback;
  
    Editor.ready(function() {
      $.ajax({
        'url': url,
        'dataType': 'text',
        cache: !!cache,
        success: function(str) {
          loadSvgString(str, cb);
        },
        error: function(xhr, stat, err) {
          if(xhr.status != 404 && xhr.responseText) {
            loadSvgString(xhr.responseText, cb);
          } else {
            $.alert("Unable to load from URL" + ": \n"+err+'', cb);
          }
        }
      });
    });
  };
  
  Editor.loadFromDataURI = function(str) {
    Editor.ready(function() {
      var pre = 'data:image/svg+xml;base64,';
      var src = str.substring(pre.length);
      loadSvgString(svgedit.utilities.decode64(src));
    });
  };
  
  Editor.addExtension = function() {
    var args = arguments;
    
    // Note that we don't want this on Editor.ready since some extensions
    // may want to run before then (like server_opensave).
    $(function() {
      if(svgCanvas) svgCanvas.addExtension.apply(this, args);
    });
  };

  return Editor;
}(jQuery);

// Run init once DOM is loaded
$(methodDraw.init);
