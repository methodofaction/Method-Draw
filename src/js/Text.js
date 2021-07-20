MD.Text = function(){

  function placeTextOnPath(){
    const elems = editor.selected;
    const needsConversion = elems.find(elem => ["ellipse", "circle", "line", "polyline", "polygon", "rect"].indexOf(elem.tagName) > -1);
    if (needsConversion) {
      const path = svgCanvas.convertToPath(needsConversion);
      const text = elems.find(elem => elem.tagName === "text");
      svgCanvas.addToSelection([path, text]);
    }

    const text = svgCanvas.textPath();
    svgCanvas.clearSelection();
    svgCanvas.addToSelection([text]);
    editor.selectedChanged(window, [text]);
  }

  function releaseTextOnPath(){
    const text = svgCanvas.releaseTextPath();
    const selector = svgCanvas.selectorManager.requestSelector(text);
    selector.resize();
    editor.selectedChanged(window, [text]);
  }

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

  $('#tool_text_on_path').click(placeTextOnPath);
  $('#tool_release_text_on_path').click(releaseTextOnPath);

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
        if (!$("#text_panel").hasClass("text-path")) svgCanvas.textActions.toSelectMode();
        this.blur();
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

  function setTextPathAttr(a, val){
    svgCanvas.setTextPathAttr('startOffset', val);
    var elems = svgCanvas.getSelectedElems();
    svgCanvas.selectorManager.requestSelector(elems[0]).reset(elems[0]);
  }

  this.setBold = setBold;
  this.setItalic = setItalic;
  this.changeFontSize = changeFontSize;
  this.setTextPathAttr = setTextPathAttr;

}