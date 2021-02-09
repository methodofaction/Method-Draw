MD.Keyboard = function(){
  document.addEventListener("keydown", function(e){
    const modKey = !svgedit.browser.isMac() ? "ctrlKey" : "metaKey";
    const cmd = e[modKey] ? "cmd_" : "";
    const shift = e.shiftKey ? "shift_" : "";
    const key = cmd + shift + e.key.toLowerCase();
    const canvasMode = state.get("canvasMode");
    const keys = {
      v: ()=> state.set("canvasMode", "select"),
      q: ()=> state.set("canvasMode", "fhpath"),
      l: ()=> state.set("canvasMode", "line"),
      r: ()=> state.set("canvasMode", "rect"),
      o: ()=> state.set("canvasMode", "ellipse"),
      s: ()=> state.set("canvasMode", "shapelib"),
      p: ()=> state.set("canvasMode", "path"),
      t: ()=> state.set("canvasMode", "text"),
      z: ()=> state.set("canvasMode", "zoom"),
      e: ()=> state.set("canvasMode", "eyedropper"),
      x: ()=> editor.switchPaint(),
      "alt": ()=> { if (canvasMode === "zoom") $("#workarea").addClass("out") },
      "cmd_s": ()=> editor.save(),
      "cmd_z": ()=> editor.undo(),
      "cmd_shift_z": ()=> editor.redo(),
      "cmd_c": ()=> editor.copySelected(),
      "cmd_x": ()=> editor.cutSelected(),
      "cmd_v": ()=> editor.pasteSelected(),
      "cmd_u": ()=> editor.modal.viewSource(),
      "cmd_a": ()=> svgCanvas.selectAllInCurrentLayer(),
      "cmd_b": ()=> editor.text.setBold(),
      "cmd_i": ()=> editor.text.setItalic(),
      "cmd_g": ()=> editor.groupSelected(),
      "cmd_shift_g": ()=> editor.ungroupSelected(),
      "backspace": () => editor.deleteSelected(),
      "ctrl_arrowleft": () => editor.rotateSelected(0,1),
      "ctrl_arrowright": () => editor.rotateSelected(1,1),
      "ctrl_shift_arrowleft": () => editor.rotateSelected(0,5),
      "ctrl_shift_arrowright": () => editor.rotateSelected(1,5),
      "shift_o": () => svgCanvas.cycleElement(0),
      "shift_p": () => svgCanvas.cycleElement(1),
      "shift_r": () => editor.rulers.toggleRulers(),
      "cmd_+": () => editor.zoom.multiply(1.5),
      "cmd_=": () => editor.zoom.multiply(1.5),
      "cmd_-": () => editor.zoom.multiply(0.75),
      "arrowleft": () => editor.moveSelected(-1,0),
      "arrowright": () => editor.moveSelected(1,0),
      "arrowup": () => editor.moveSelected(0,-1),
      "arrowdown": () => editor.moveSelected(0,1),
      "cmd_arrowup": () => editor.moveUpSelected(),
      "cmd_arrowdown": () => editor.moveDownSelected(),
      "cmd_shift_arrowup": () => editor.moveToTopSelected(),
      "cmd_shift_arrowdown": () => editor.moveToBottomSelected(),
      "shift_arrowleft":  () => editor.moveSelected(state.get("canvasSnapStep") * -1, 0),
      "shift_arrowright": () => editor.moveSelected(state.get("canvasSnapStep") * 1, 0),
      "shift_arrowup":    () => editor.moveSelected(0, state.get("canvasSnapStep") * -1),
      "shift_arrowdown":  () => editor.moveSelected(0, state.get("canvasSnapStep") * 1),
      "escape": () => editor.escapeMode(),
      " ": ()=> editor.pan.startPan(),
    };

    // keyboard shortcut exists
    if (keys[key]) {
      e.preventDefault();
      keys[key]();
    }
  });

  document.addEventListener("keyup", function(e){
    const canvasMode = state.get("canvasMode");
    const key = e.key.toLowerCase();
    const keys = {
    "alt":     ()=> $("#workarea").removeClass("out"),
    " ": ()=> editor.pan.stopPan(),
    }
    if (keys[key]) {
      e.preventDefault();
      keys[key]();
    }

  })

}