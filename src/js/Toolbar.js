MD.Toolbar = function(){

    // tools left
    $("#tools_left .tool_button").on("click", function(){ 
      const mode = this.getAttribute("data-mode");
      state.set("canvasMode", mode)
      setMode(mode);
    });

    function setMode(mode) {
      $(".tool_button").removeClass("current");
      $("#tool_" + mode).addClass("current");
      svgCanvas.setMode(mode);
    }

    this.setMode = setMode;
}