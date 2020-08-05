// todo remove from global scope;
var r_intervals = [];
for(var i = .1; i < 1E5; i *= 10) {
  r_intervals.push(1 * i);
  r_intervals.push(2 * i);
  r_intervals.push(5 * i);
}

function updateRulers(svgCanvas, scanvas, zoom) {

  var workarea = document.getElementById("workarea");
  var title_show = document.getElementById("title_show");
  var offset_x = 66;
  var offset_y = 48;
  if(!zoom) zoom = svgCanvas.getZoom();
  if(!scanvas) scanvas = $("#svgcanvas");
  
  var limit = 30000;
  
  var c_elem = svgCanvas.getContentElem();
  
  var units = svgedit.units.getTypeMap();
  var unit = 1;

  for(var d = 0; d < 2; d++) {
    var is_x = (d === 0);
    var dim = is_x ? 'x' : 'y';
    var lentype = is_x ?'width':'height';
    var notlentype = is_x ?'height':'width';
    var content_d = c_elem.getAttribute(dim)-0;
    
    var $hcanv_orig = $('#ruler_' + dim + ' canvas:first');
    
    // Bit of a hack to fully clear the canvas in Safari & IE9
    $hcanv = $hcanv_orig.clone();
    $hcanv_orig.replaceWith($hcanv);
    
    var hcanv = $hcanv[0];
    
    // Set the canvas size to the width of the container
    var ruler_len = scanvas[lentype]()*2;
    var total_len = ruler_len;
    hcanv.parentNode.style[lentype] = total_len + 'px';
    
    var canv_count = 1;
    var ctx_num = 0;
    var ctx_arr;
    var ctx = hcanv.getContext("2d");
    var scale = window.devicePixelRatio || 1;
    hcanv.style[lentype] = total_len + "px";
    hcanv.style[notlentype] = 15 + "px";
    hcanv[lentype] = Math.floor(total_len * scale);
    hcanv[notlentype] = Math.floor(15 * scale);
    ctx.scale(scale,scale);

    ctx.fillStyle = "rgb(200,0,0)"; 
    ctx.fillRect(0,0,hcanv.width/scale,hcanv.height/scale); 
    
    // Remove any existing canvasses
    $hcanv.siblings().remove();
    
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
    ctx.font = "normal 9px 'Verdana', sans-serif";
    ctx.fillStyle = "#777";
    ctx.scale(scale,scale);

    var ruler_d = ((content_d / u_multi) % multi) * u_multi;
    var label_pos = ruler_d - big_int;
    for (; ruler_d < total_len; ruler_d += big_int) {
      label_pos += big_int;
      var real_d = ruler_d - content_d;

      var cur_d = Math.round(ruler_d) + .5;
      if(is_x) {
        ctx.moveTo(cur_d, 15);
        ctx.lineTo(cur_d, 0);
      } else {
        ctx.moveTo(15, cur_d);
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
        ctx.fillStyle = "#777";
      } else {
        var str = (label+'').split('');
        for(var i = 0; i < str.length; i++) {
          ctx.fillText(str[i], 1, (ruler_d+9) + i*9);
          ctx.fillStyle = "#777";
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
    ctx.strokeStyle = "#666";
    ctx.stroke();
  }
}