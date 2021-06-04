MD.Rulers = function(){

  $('#tool_rulers').on("click", toggleRulers);

  const workarea = document.getElementById("workarea");
  const svgcanvas = document.getElementById("svgcanvas");
  const ruler_x = document.getElementById("ruler_x");
  const ruler_y = document.getElementById("ruler_y");
  
  $("#ruler_x, #ruler_y").append("<div><canvas></canvas></div>");

  function clear(){
    ruler_x.innerHTML = "";
    ruler_y.innerHTML = "";
    ruler_x.appendChild(canvas_x);
    ruler_y.appendChild(canvas_y);
  }

  function toggleRulers(){
    editor.menu.flash($('#view_menu'));
    var rulers = !$('#tool_rulers').hasClass('push_button_pressed');
    if (rulers) show();
    else hide();
  }

  function show(){
    $('#tool_rulers').addClass('push_button_pressed');
    $('#show_rulers').attr("checked", true);
    $('#rulers').show();
    state.set("canvasRulers", true);
  }

  function hide(){
    $('#tool_rulers').removeClass('push_button_pressed');
    $('#show_rulers').attr("checked", false);
    $('#rulers').hide();
    state.set("canvasRulers", false);
  }

  workarea.addEventListener("scroll", function() {
    ruler_x.scrollLeft = workarea.scrollLeft;
    ruler_y.scrollTop = workarea.scrollTop; 
  });

  window.addEventListener("resize", function(){
    editor.canvas.update(true);
    update();
  })

  var r_intervals = [];
  for(var i = .1; i < 1E5; i *= 10) {
    r_intervals.push(1 * i);
    r_intervals.push(2 * i);
    r_intervals.push(5 * i);
  }

  function update(zoom) {
    const isDark = state.get("darkmode");
    const gray = getComputedStyle(document.body).getPropertyValue(isDark ? '--z5' : '--z6') || "#999";
    if(!zoom) zoom = svgCanvas.getZoom();
    var limit = 30000;
    var c_elem = svgCanvas.getContentElem();    
    var unit = 1;

    for(var d = 0; d < 2; d++) {
      var is_x = (d === 0);
      var dim = is_x ? 'x' : 'y';
      var lentype = is_x ?'width':'height';
      var notlentype = is_x ?'height':'width';
      var content_d = c_elem.getAttribute(dim);
      
      var hcanv = document.querySelector('#ruler_' + dim + ' canvas');
    
      // Set the canvas size to the width of the container
      var ruler_len = svgcanvas[lentype === "width" ? "offsetWidth" : "offsetHeight"];
      var total_len = ruler_len;
      hcanv.parentNode.style[lentype] = total_len + 'px';
      
      var canv_count = 1;
      var ctx_num = 0;
      var ctx_arr;
      var ctx = hcanv.getContext("2d");
      var scale = window.devicePixelRatio*2 || 1;
      hcanv.style[lentype] = total_len + "px";
      hcanv.style[notlentype] = 16 + "px";
      hcanv[lentype] = Math.floor(total_len * scale);
      hcanv[notlentype] = Math.floor(16 * scale);
      ctx.scale(scale,scale);
      
      // Remove any existing canvasses
      $(hcanv).siblings().remove();
      
      // Create multiple canvases when necessary (due to browser limits)
      if(ruler_len >= limit) {
        var num = parseInt(ruler_len / limit) + 1;
        ctx_arr = Array(num);
        ctx_arr[0] = ctx;
        for(var i = 1; i < num; i++) {
          hcanv[lentype] = limit;
          var copy = hcanv.cloneNode(true);
          hcanv.parentNode.appendChild(copy);
          ctx_arr[i] = copy.getContext('2d');
        }
        
        copy[lentype] = ruler_len % limit;
        
        // set copy width to last
        ruler_len = limit;
      }
      
      hcanv[lentype] = ruler_len * scale;
      
      var u_multi = unit * zoom;
      
      // Calculate the main number interval
      var raw_m = 50 / u_multi;
      var multi = 1;
      for(var i = 0; i < r_intervals.length; i++) {
        var num = r_intervals[i];
        multi = num;
        if(raw_m <= num) {
          break;
        }
      }
      
      var big_int = multi * u_multi;
      ctx.font = "600 9px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif";
      ctx.fillStyle = gray;
      ctx.strokeStyle = gray;
      ctx.scale(scale,scale);
      var ruler_d = ((content_d / u_multi) % multi) * u_multi - 50;
      var label_pos = ruler_d - big_int;
      for (; ruler_d < total_len; ruler_d += big_int) {
        label_pos += big_int;
        var real_d = ruler_d - content_d;

        var cur_d = Math.round(ruler_d);
        if(is_x) {
          ctx.moveTo(cur_d, 16);
          ctx.lineTo(cur_d, 0);
        } else {
          ctx.moveTo(16, cur_d);
          ctx.lineTo(0, cur_d);
        }

        var num = (label_pos - content_d) / u_multi;
        var label;
        if(multi >= 1) {
          label = Math.round(num);
        } else {
          var decs = (multi+'').split('.')[1].length;
          label = num.toFixed(decs)-0;
        }
        
        // Change 1000s to Ks
        if(label !== 0 && label !== 1000 && label % 1000 === 0) {
          label = (label / 1000) + 'K';
        }
        
        if(is_x) {
          ctx.fillText(label, ruler_d+2, 8);
          ctx.fillStyle = gray;
        } else {
          var str = (label+'').split('');
          for(var i = 0; i < str.length; i++) {
            ctx.fillText(str[i], 1, (ruler_d+9) + i*9);
            ctx.fillStyle = gray;
          }
        }
        
        var part = big_int / 10;
        for(var i = 1; i < 10; i++) {
          var sub_d = Math.round(ruler_d + part * i) + .5;
          if(ctx_arr && sub_d > ruler_len) {
            ctx_num++;
            ctx.stroke();
            if(ctx_num >= ctx_arr.length) {
              i = 10;
              ruler_d = total_len;
              continue;
            }
            ctx = ctx_arr[ctx_num];
            ruler_d -= limit;
            sub_d = Math.round(ruler_d + part * i) + .5;
          }
          
          var line_num = (i % 2)?12:10;
          if(is_x) {
            ctx.moveTo(sub_d, 15);
            ctx.lineTo(sub_d, line_num);
          } else {
            ctx.moveTo(15, sub_d);
            ctx.lineTo(line_num ,sub_d);
          }
        }
      }
      ctx.strokeStyle = gray;
      ctx.stroke();
    }
  }

  this.update = update;
  this.toggleRulers = toggleRulers;

}
