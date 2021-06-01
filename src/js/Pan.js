MD.Pan = function(){
  const workarea = document.getElementById("workarea");

  let panning = false;
  let last_x = null;
  let last_y = null;

  function startPan(e){
    panning = true;
    svgCanvas.spaceKey = true;
    workarea.classList.add("dragging");
  }

  function stopPan(){
    panning = false;
    svgCanvas.spaceKey = false;
    workarea.classList.remove("dragging");
  }
  
  var move_pan = function(evt) {    
    if(!panning) return;
    workarea.scrollLeft -= (evt.clientX - last_x);
    workarea.scrollTop -= (evt.clientY - last_y);
    last_x = evt.clientX;
    last_y = evt.clientY;
  }
  
  var start_pan = function(evt) {
    if(!panning) return;
    last_x = evt.clientX;
    last_y = evt.clientY;
  }
  
  $('#svgcanvas')
    .on('mousemove', move_pan)
    .on("mousedown", start_pan)

  this.startPan = startPan;
  this.stopPan = stopPan;
}