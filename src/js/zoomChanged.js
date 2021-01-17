
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