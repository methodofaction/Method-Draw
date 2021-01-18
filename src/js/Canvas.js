MD.Canvas = function(){

  const el = document.getElementById("svgcanvas");

  function update(w, h){
    el.style.width = w + "px";
    el.style.height = h + "px";
    svgCanvas.contentW = w;
    svgCanvas.contentH = h;
    svgCanvas.updateCanvas(w, h);
    $("#canvas_width").val(w);
    $("#canvas_height").val(h);
  }

  function changeSize(){
    const w = $("#canvas_width").val();
    const h = $("#canvas_height").val();
    state.set("canvasSize", [w,h]);
  }

  this.update = update;
  this.changeSize = changeSize;
}