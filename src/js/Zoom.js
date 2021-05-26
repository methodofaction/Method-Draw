MD.Zoom = function(){
  
  const $zoom = $("#zoom");
  const $workarea = $("#workarea")

  const accumulatedDelta = 0
  $('#workarea').on('mousewheel', function(e, delta, deltaX, deltaY){
    if (e.altKey || e.ctrlKey) {
      e.preventDefault();
      zoom = parseInt($("#zoom").val())
      $zoom.val(parseInt(zoom + deltaY*(e.altKey ? 10 : 5))).change()
    }
  });

  $('#zoom_select').on("change", function() {
    var val = this.options[this.selectedIndex].text
    val = val.split("%")[0]
    $("#zoom").val(val).trigger("change")
  });

  $('#zoom').change(function(ctl){

      var zoomlevel = this.value / 100;
      if(zoomlevel < .001) {
        ctl.value = .1;
        return;
      }
      var zoom = svgCanvas.getZoom();
      changed(window, {
        width: 0,
        height: 0,
        // center pt of scroll position
        x: ($workarea.scrollLeft() + $workarea.width()/2)/zoom, 
        y: ($workarea.scrollTop() + $workarea.height()/2)/zoom,
        zoom: zoomlevel
      }, true);
  })

  function changed(window, bbox) {
    const scrbar = 15;
    const res = svgCanvas.getResolution();
    const canvas_pos = $('#svgcanvas').position();
    const updateCanvas = editor.canvas.update;
    const z_info = svgCanvas.setBBoxZoom(bbox, $workarea.width()-scrbar, $workarea.height()-scrbar);
    const zoomlevel = z_info.zoom;
    const bb = z_info.bbox;

    if(!z_info) return;
    
    if (typeof animatedZoom !== 'undefined') window.cancelAnimationFrame(animatedZoom)
    // zoom duration 500ms
    var start = Date.now();
    var duration = 500;
    var diff = (zoomlevel) - (res.zoom)
    var zoom = $('#zoom')[0]
    var current_zoom = res.zoom
    
    var animateZoom = function(timestamp) {
      var progress = Date.now() - start
      var tick = progress / duration;
      editor.rulers.update();
      tick = (Math.pow((tick-1), 3) +1);
      svgCanvas.setZoom(current_zoom + (diff*tick));
      var isCentered = !Boolean(bbox.width);
      updateCanvas(isCentered, {x: bbox.x + bbox.width/2, y: bbox.y + bbox.height/2});
      if (tick < 1 && tick > -.90) {
        window.animatedZoom = requestAnimationFrame(animateZoom)
      }
      else {
        $zoom.val(parseInt(zoomlevel*100))
        $("option", "#zoom_select").removeAttr("selected")
        $("option[value="+ parseInt(zoomlevel*100) +"]", "#zoom_select").attr("selected", "selected")
      }
    }
    animateZoom()

    if(svgCanvas.getMode() === 'zoom' && bb.width) {
      // Go to select if a zoom box was drawn
      state.set("canvasMode", "select");
    }
  }

  var multiply = function(multiplier = 1) {
    var res = svgCanvas.getResolution();
    $('#zoom').val(multiplier * res.zoom * 100);
    svgCanvas.setZoom(multiplier);
    editor.canvas.update(true);
  };

  function reset(){
    multiply(1);
  }

  this.multiply = multiply;
  this.reset = reset;
  this.changed = changed;
}