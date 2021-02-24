MD.Text = function(){

  function setBold(){
    svgCanvas.setBold( !svgCanvas.getBold() );
    editor.panel.updateContextPanel();
  }

  function setItalic(){
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
    
    svgCanvas.setBold(false);
    svgCanvas.setItalic(false);
    
    $("#tool_bold")
      .removeClass("active")
      .toggleClass("disabled", !font.Bold);

    $("#tool_italic")
      .removeClass("active")
      .toggleClass("disabled", !font.Italic);
    
    var fam_display = this.options[this.selectedIndex].text;
    $('#preview_font').html(fam_display).css("font-family", fam);
    $('#font_family').val(fam).change();
    // todo should depend on actual load
    document.fonts.onloadingdone = function (fontFaceSetEvent) {
    const els = svgCanvas.getSelectedElems();
      els.forEach(el => {
          var selector = svgCanvas.selectorManager.requestSelector(el);
          selector.resize();
      })
     };
    
  });

  $('#text')
    .keydown(function(e){
      e.stopPropagation();
    })
    .keyup(function(e){
      e.stopPropagation();
      if (e.key === "Escape") {
        svgCanvas.textActions.toSelectMode()
        return editor.escapeMode();
      }
      svgCanvas.setTextContent(this.value);
    });

  function changeFontSize(){
    svgCanvas.setFontSize($("#font_size").val());
  }

  this.setBold = setBold;
  this.setItalic = setItalic;
  this.changeFontSize = changeFontSize;

}