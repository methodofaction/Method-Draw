const MD = {};

MD.Editor = function(){
  
  const serializer = new XMLSerializer();
  const _self = this;
  _self.selected = [];


  function save(){
    _self.menu.flash($('#file_menu'));
    svgCanvas.save();
  }

  function undo(){
    if (!svgCanvas.undoMgr.getUndoStackSize()) return false;
    _self.menu.flash($('#edit_menu'));
    svgCanvas.undoMgr.undo();
  }

  function deleteSelected(){
    if (svgCanvas.pathActions.getNodePoint()) svgCanvas.pathActions.deletePathNode();
    else svgCanvas.deleteSelectedElements();
  }

  function cutSelected(){
    if (!_self.selected.length) return false;
    flash($('#edit_menu'));
    svgCanvas.cutSelectedElements(); 
  }

  function copySelected(){
    if (!_self.selected.length) return false;
    flash($('#edit_menu'));
    svgCanvas.copySelectedElements();
  }
  
  function pasteSelected(){
    flash($('#edit_menu'));
    var zoom = svgCanvas.getZoom();       
    var x = (workarea[0].scrollLeft + workarea.width()/2)/zoom  - svgCanvas.contentW; 
    var y = (workarea[0].scrollTop + workarea.height()/2)/zoom  - svgCanvas.contentH;
    svgCanvas.pasteElements('point', x, y); 
  }

  function moveToTopSelected(){
    if (!_self.selected.length) return false;
    flash($('#object_menu'));
    svgCanvas.moveToTopSelectedElement();
  }

  function moveToBottomSelected(){
    if (!_self.selected.length) return false;
    flash($('#object_menu'));
    svgCanvas.moveToBottomSelectedElement();
  }
    
  function moveUpSelected(){
    if (!_self.selected.length) return false;
    flash($('#object_menu'));
    svgCanvas.moveUpDownSelected("Up");
  }

  function moveDownSelected(){
    if (!_self.selected.length) return false;
    flash($('#object_menu'));
    svgCanvas.moveUpDownSelected("Down");
  }
 
  function convertToPath(){
    if (!_self.selected.length) return false;
    svgCanvas.convertToPath();
    var elems = svgCanvas.getSelectedElems()
    svgCanvas.selectorManager.requestSelector(elems[0]).reset(elems[0])
    svgCanvas.selectorManager.requestSelector(elems[0]).selectorRect.setAttribute("display", "none");
    svgCanvas.setMode("pathedit")
    path.toEditMode(elems[0]);
    svgCanvas.clearSelection();
    updateContextPanel();
  }

  function reorientPath(){
    if (!_self.selected.length) return false;
    path.reorient();
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
    _self.selected = elems.filter(Boolean);
    editor.panel.updateContextPanel(_self.selected);
  };

  function changeAttribute(attr, value, completed) {
    if (completed) {
      svgCanvas.changeSelectedAttribute(attr, value);
      state.set("canvasContent", serializer,serializeToString(svgCanvas.getContentElem()));
    }
    else svgCanvas.changeSelectedAttributeNoUndo(attr, value);      
  }

  function elementTransition(window, elems){
    // TODO live attr updates on transition
  }

  function moveSelected(dx,dy) {
    if (!_self.selected.length) return false;
    if(state.get("canvasSnap")) {
      // Use grid snap value regardless of zoom level
      var multi = svgCanvas.getZoom() * state.get("canvasSnapStep");
      dx *= multi;
      dy *= multi;
    }
    $('input').blur()
    svgCanvas.moveSelectedElements(dx,dy);
  };

  this.selectedChanged = selectedChanged;
  this.changeAttribute = changeAttribute;
  this.elementTransition = elementTransition;
  this.switchPaint = switchPaint;
  this.save = save;
  this.undo = undo;
  this.deleteSelected = deleteSelected;
  this.cutSelected = cutSelected;
  this.copySelected = copySelected;
  this.pasteSelected = pasteSelected;
  this.pasteSelected = pasteSelected;
  this.moveToTopSelected = moveToTopSelected;
  this.moveUpSelected = moveUpSelected;
  this.moveToBottomSelected = moveToBottomSelected;
  this.moveDownSelected = moveDownSelected;
  this.moveSelected = moveSelected;
  this.convertToPath = convertToPath;
  this.reorientPath = reorientPath;
}