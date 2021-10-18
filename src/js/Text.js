MD.Text = function(){

  function setBold(){
    if ($(this).hasClass("disabled")) return;
    svgCanvas.setBold( !svgCanvas.getBold() );
    editor.panel.updateContextPanel();
  }

  function setItalic(){
    if ($(this).hasClass("disabled")) return;
    svgCanvas.setItalic( !svgCanvas.getItalic() );
    editor.panel.updateContextPanel();
  }

  $('#font_family').change(function() {
    svgCanvas.setFontFamily(this.value);
  });

  $("#tool_bold").on("click", setBold);
  $("#tool_italic").on("click", setItalic);

  $('#font_family_dropdown').change(function() {
    var fam = this.options[this.selectedIndex].value;
    const isSystemFont = fam === "sans-serif" || fam === "serif" || fam === "monospace";
    const font = isSystemFont ? {Bold: true, Italic: true, "BoldItalic": true} : fonts[fam];
    if (!isSystemFont) fam = `'${fam}'`;


    console.log(font.axes)
    
    $("#tool_bold")
      .removeClass("active")
      .toggleClass("disabled", !font.axes.wght);

    $("#tool_italic")
      .removeClass("active")
      .toggleClass("disabled", !font.axes.ital);
    
    var fam_display = this.options[this.selectedIndex].text;
    $('#preview_font').html(fam_display).css("font-family", fam);
    $('#font_family').val(fam).change();
 
    document.fonts.onloading = function(fontFaceSetEvent) {
      $("#tool_font_family").addClass("loading");
    };
 
    document.fonts.onloadingdone = function(fontFaceSetEvent) {
      const els = svgCanvas.getSelectedElems();
      els.forEach(el => {
        var selector = svgCanvas.selectorManager.requestSelector(el);
        selector.resize();
      });
      $("#tool_font_family").removeClass("loading");
    };
    
  });

  $('#text')
    .keydown(function(e){
      e.stopPropagation();
    })
    .keyup(function(e){
      e.stopPropagation();
      if (e.key === "Escape" || e.key === "Enter") {
        svgCanvas.textActions.toSelectMode();
        this.blur();
        editor.saveCanvas();
        return editor.escapeMode();
      }
      svgCanvas.setTextContent(this.value);
      var elems = svgCanvas.getSelectedElems();
      svgCanvas.selectorManager.requestSelector(elems[0]).reset(elems[0]);
    })
    .click(function(e) {
      this.focus();
      this.select();
    });

  function changeFontSize(attr, value, completed){
    svgCanvas.setFontSize(value);
  }

  this.setBold = setBold;
  this.setItalic = setItalic;
  this.changeFontSize = changeFontSize;

}