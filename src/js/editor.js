const MD = {};

MD.Editor = function(){
  
  const _self = this;

  function save(){
    _self.menu.flash($('#file_menu'));
    svgCanvas.save();
  }

  function deleteSelected(){
    if (svgCanvas.pathActions.getNodePoint()) svgCanvas.pathActions.deletePathNode();
    else svgCanvas.deleteSelectedElements();
  }

  function undo(){
    if (svgCanvas.undoMgr.getUndoStackSize() > 0) {
        _self.menu.flash($('#edit_menu'));
        svgCanvas.undoMgr.undo();
    }
  }

  function switchPaint(strokeOrFill) {
    var stroke_rect = document.querySelector('#tool_stroke rect');
    $("#tool_stroke").toggleClass('active')
    $("#tool_fill").toggleClass('active')
    var fill_rect = document.querySelector('#tool_fill rect');
    var fill_color = fill_rect.getAttribute("fill");
    var stroke_color = stroke_rect.getAttribute("fill");
    var stroke_opacity = parseFloat(stroke_rect.getAttribute("stroke-opacity"));
    if (isNaN(stroke_opacity)) {stroke_opacity = 100;}
    var fill_opacity = parseFloat(fill_rect.getAttribute("fill-opacity"));
    if (isNaN(fill_opacity)) {fill_opacity = 100;}
    var stroke = editor.paintBox.stroke.getPaint(stroke_color, stroke_opacity, "stroke");
    var fill = editor.paintBox.fill.getPaint(fill_color, fill_opacity, "fill");
    editor.paintBox.fill.setPaint(stroke, true);
    editor.paintBox.stroke.setPaint(fill, true);
  };

  // called when we've selected a different element
  function selectedChanged(window,elems) {  
    const mode = svgCanvas.getMode();
    if(mode === "select") editor.toolbar.setMode("select");
    elems = elems.filter(Boolean);
    editor.panel.updateContextPanel(elems);
  };

  function changeAttribute(attr, value, completed){
    if (completed) svgCanvas.changeSelectedAttribute(attr, value);
    else svgCanvas.changeSelectedAttributeNoUndo(attr, value);      
  }

  this.selectedChanged = selectedChanged;
  this.deleteSelected = deleteSelected;
  this.changeAttribute = changeAttribute;
  this.switchPaint = switchPaint;
  this.save = save;
  this.undo = undo;
}