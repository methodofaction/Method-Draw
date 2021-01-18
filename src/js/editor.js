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
  this.save = save;
  this.undo = undo;
}