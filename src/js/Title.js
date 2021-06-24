MD.Title = function(){
  
  $('#canvas_title')
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
      state.set("canvasTitle", this.value);
    })
    .click(function(e) {
      this.focus();
      this.select();
    })

}