const MD = {};

MD.Editor = function(){
  
  // called when we've selected a different element
  function selectedChanged(window,elems) {  
    const mode = svgCanvas.getMode();
    if(mode === "select") editor.toolbar.setMode("select");
    if (mode === "pathedit") return updateContextPanel();
    elems = elems.filter(Boolean);
    $('.context_panel').hide();
    $('#panels').toggleClass("multiselected", elems.length > 1);
    $('#multiselected_panel').toggle(elems.length > 1);
    $('#canvas_panel').toggle(!elems.length);
    // multiselected, nothing else needs to be done
    if (elems.length > 1) return;

    const selectedElement = elems[0];
    const tagName = selectedElement.tagName;
    $("#" + tagName + "_panel").show();
    $('#stroke_width').val(selectedElement.getAttribute("stroke-width") || 0);
    var dash = selectedElement.getAttribute("stroke-dasharray") || "none"
    $('option', '#stroke_style').removeAttr('selected');
    $('#stroke_style option[value="'+ dash +'"]').attr("selected", "selected");
    $('#stroke_style').trigger('change');

    $.fn.dragInput.updateCursor($('#stroke_width')[0])
    $.fn.dragInput.updateCursor($('#blur')[0])

    updateContextPanel(elems);
  };

  function updateContextPanel(elems) {
     var elem = elems[0];
     // If element has just been deleted, consider it null
     if(elem != null && !elem.parentNode) elem = null;
     const multiselected = elems.length > 1;
     
     var currentLayerName = svgCanvas.getCurrentDrawing().getCurrentLayerName();
     var currentMode = svgCanvas.getMode();
     var unit = 'px';
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
       $("#panels").removeClass("multiselected")        
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
       if (elem) $("#panels").addClass("multiselected")
     }

     if (!elem && !multiselected) {
       $("#panels").removeClass("multiselected")        
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
           //update the draginput cursors
           var name_item = document.getElementById(el_name + '_' + item);
           name_item.value = Math.round(attrVal) || 0;
           if (name_item.getAttribute("data-cursor") === "true") {
             $.fn.dragInput.updateCursor(name_item );
           }
         });
         
         if(el_name == 'text') {
           var font_family = elem.getAttribute("font-family");
           var cleanFontFamily = font_family.split(",")[0].replace(/'/g, "");
           var select = document.getElementById("font_family_dropdown");
           $('#text_panel').css("display", "inline");  
           $('#tool_italic').toggleClass('active', svgCanvas.getItalic())
           $('#tool_bold').toggleClass('active', svgCanvas.getBold())
           $('#tool_italic').toggleClass('disabled', fonts[cleanFontFamily] ? !fonts[cleanFontFamily]["Italic"] : false)
           $('#tool_bold').toggleClass('disabled', fonts[cleanFontFamily] ? !fonts[cleanFontFamily]["Bold"] : false);
           $('#font_family').val(font_family);
           $(select).find(`option[value=${font_family}]`).prop("selected", true);
           $('#font_size').val(elem.getAttribute("font-size"));
           $('#text').val(elem.textContent);
           $('#preview_font').text(cleanFontFamily).css('font-family', font_family);
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
     if (svgCanvas.undoMgr.getUndoStackSize() > 0) {
       $('#tool_undo').removeClass( 'disabled');
     }
     else {
       $('#tool_undo').addClass( 'disabled');
     }
     if (svgCanvas.undoMgr.getRedoStackSize() > 0) {
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
       $("#cmenu_canvas").enableContextMenuItems('#delete,#cut,#copy,#move_front,#move_up,#move_down,#move_back');
     }
   };

  this.selectedChanged = selectedChanged;
  this.updateContextPanel = updateContextPanel;
}