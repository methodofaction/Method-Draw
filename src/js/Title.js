MD.Title = function(){
  
  $('#canvas_title')
    .val(state.get("canvasTitle"))
    .keydown(function(e){
      e.stopPropagation();
      if (e.key === "Escape") {
        this.blur();
      }
      if (e.key === "Enter") {
        this.blur();
      }
    })
    .keyup(function(e){
      e.stopPropagation();
      svgCanvas.setDocumentTitle(this.value);
    })
    .click(function(e) {
      this.focus();
      this.select();
    })
    .blur(function(e){
      state.set("canvasTitle", this.value);
    });

}