MD.Toolbar = function(){

  // tools left
  $("#tools_left .tool_button").on("click", function(){ 
    const mode = this.getAttribute("data-mode");
    state.set("canvasMode", mode)
    if (mode === "shapelib") showShapeLib()
  });

  function setMode(mode) {
    $(".tool_button").removeClass("current");
    $("#tool_" + mode).addClass("current");
    $("#workarea").attr("class", mode);
    svgCanvas.setMode(mode);
  }

  function showShapeLib(){
    $("#tools_shapelib").show();
  }

  this.setMode = setMode;
}