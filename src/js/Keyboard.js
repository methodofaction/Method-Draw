MD.Keyboard = function(){

  const keys = {
    "v": { name: "Select tool",         cb: ()=> state.set("canvasMode", "select") },
    "q": { name: "Freehand tool",       cb: ()=> state.set("canvasMode", "fhpath") },
    "l": { name: "Line tool",           cb: ()=> state.set("canvasMode", "fhplineath")},
    "r": { name: "Rectangle tool",      cb: ()=> state.set("canvasMode", "rect")},
    "o": { name: "Ellipse tool",        cb: ()=> state.set("canvasMode", "ellipse")},
    "s": { name: "Shape tool",          cb: ()=> state.set("canvasMode", "shapelib")},
    "p": { name: "Path tool",           cb: ()=> state.set("canvasMode", "path")},
    "t": { name: "Text tool",           cb: ()=> state.set("canvasMode", "text")},
    "z": { name: "Zoom tool",           cb: ()=> state.set("canvasMode", "zoom")},
    "e": { name: "Eyedropper tool",     cb: ()=> state.set("canvasMode", "eyedropper")},
    "x": { name: "Focus fill/stroke",   cb: ()=> editor.focusPaint()}, 
"shift_x":   { name: "Switch fill/stroke",  cb: ()=> editor.switchPaint()},  
    "alt":   { name: false,                 cb: ()=> $("#workarea").toggleClass("out", state.get("canvasMode") === "zoom" )},  
    "cmd_s": { name: "Save SVG File",       cb: ()=> editor.save()},
    "cmd_z": { name: "Undo",                cb: ()=> editor.undo()},
    "cmd_y": { name: "Redo",                cb: ()=> editor.redo()},
"cmd_shift_z": { name: "Redo",              cb: ()=> editor.redo()},
    "cmd_c": { name: "Copy",                cb: ()=> editor.copySelected()},
    "cmd_x": { name: "Cut",                 cb: ()=> editor.cutSelected()},
    "cmd_v": { name: "Paste",               cb: ()=> editor.pasteSelected()},
    "cmd_d": { name: "Duplicate",           cb: ()=> editor.duplicateSelected()},
    "cmd_u": { name: "View source",         cb: ()=> editor.source()},
    "cmd_a": { name: "Select All",          cb: ()=> svgCanvas.selectAllInCurrentLayer()},
    "cmd_b": { name: "Set bold text",       cb: ()=> editor.text.setBold()},
    "cmd_i": { name: "Set italic text",     cb: ()=> editor.text.setItalic()},
    "cmd_g": { name: "Group selected",      cb: ()=> editor.groupSelected()},
    "cmd_shift_g":  { name: "Ungroup",      cb: ()=> editor.ungroupSelected()},
    "cmd_o": { name: "Open SVG File",       cb: ()=> editor.import.open()},
    "cmd_k": { name: "Place image",         cb: ()=> editor.import.place()},
    "backspace": { name: "Delete",          cb: ()=> editor.deleteSelected()},
    "delete":    { name: "Delete",          cb: ()=> editor.deleteSelected()},
    "ctrl_arrowleft":        { name: "Rotate -1deg",  cb: ()=> editor.rotateSelected(0,1)},
    "ctrl_arrowright":       { name: "Rotate +1deg",  cb: ()=> editor.rotateSelected(1,1)},
    "ctrl_shift_arrowleft":  { name: "Rotate -5deg",  cb: ()=> editor.rotateSelected(0,5)},
    "ctrl_shift_arrowright": { name: "Rotate +5deg ", cb: ()=> editor.rotateSelected(1,5)},
    "shift_o":  { name: "Next item",         cb: ()=> svgCanvas.cycleElement(0)},
    "shift_p":  { name: "Prev item",         cb: ()=> svgCanvas.cycleElement(1)},
    "shift_r":  { name: "Show/hide rulers",  cb: ()=> editor.rulers.toggleRulers()},
    "cmd_+":  { name: "Zoom in",             cb: ()=> editor.zoom.multiply(1.5)},
    "cmd_-":  { name: "Zoom out",            cb: ()=> editor.zoom.multiply(0.75)},
    "cmd_=":  { name: "Actual size",         cb: ()=> editor.zoom.reset()},
    "arrowleft":  { name: "Nudge left",      cb: ()=> editor.moveSelected(-1,0)},
    "arrowright":  { name: "Nudge right",    cb: ()=> editor.moveSelected(1,0)},
    "arrowup":  { name: "Nudge up",          cb: ()=> editor.moveSelected(0,-1)},
    "arrowdown":  { name: "Nudge down",      cb: ()=> editor.moveSelected(0,1)},
    "shift_arrowleft": {name: "Jump left",   cb: () => editor.moveSelected(state.get("canvasSnapStep") * -1, 0)},
    "shift_arrowright": {name: "Jump right", cb: () => editor.moveSelected(state.get("canvasSnapStep") * 1, 0)},
    "shift_arrowup": {name: "Jump up",       cb: () => editor.moveSelected(0, state.get("canvasSnapStep") * -1)},
    "shift_arrowdown": {name: "Jump down",   cb: () => editor.moveSelected(0, state.get("canvasSnapStep") * 1)},
    "cmd_arrowup":{ name: "Bring forward",   cb: () => editor.moveUpSelected()},
    "cmd_arrowdown":{ name: "Send backward", cb: () => editor.moveDownSelected()},
    "cmd_shift_arrowup":{ name: "Bring to front", cb: () => editor.moveToTopSelected()},
    "cmd_shift_arrowdown":{ name: "Send to back", cb: () => editor.moveToBottomSelected()},
    "escape":  { name: false,    cb: ()=> editor.escapeMode()},
    "enter":    { name: false,   cb: ()=> editor.escapeMode()},
    " ":  { name: "Pan canvas",  cb: (e)=> editor.pan.startPan(e)},
  };

  document.addEventListener("keydown", function(e){
    const exceptions = $(":focus").length || $("#color_picker").is(":visible");
    if (exceptions) return false;
    const modKey = !svgedit.browser.isMac() ? "ctrlKey" : "metaKey";
    const cmd = e[modKey] ? "cmd_" : "";
    const shift = e.shiftKey ? "shift_" : "";
    const key = cmd + shift + e.key.toLowerCase();
    const canvasMode = state.get("canvasMode");
    
    const modalIsOpen = Object.values(editor.modal).filter((modal) => {
      const isHidden = modal.el.classList.contains("hidden");
      if (!isHidden && key === "cmd_enter") modal.confirm();
      if (!isHidden && key === "escape") modal.close();
      return !isHidden;
    }).length;

    // keyboard shortcut exists for app
    if (!modalIsOpen && keys[key]) {
      e.preventDefault();
      keys[key].cb();
    }
  });

  document.addEventListener("keyup", function(e){
    if ($("#color_picker").is(":visible")) return e;
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

  // modal shortcuts
  const shortcutEl = document.getElementById("shortcuts");
  const docFrag = document.createDocumentFragment();
  for (const key in keys) {
    const name = keys[key].name;
    if (!name) continue;
    const shortcut = document.createElement("div");
    shortcut.classList.add("shortcut")
    const chords = key.split("_");
    const shortcutKeys = document.createElement("div");
    shortcutKeys.classList.add("shortcut-keys")
    chords.forEach(key => {
      const shortcutKey = document.createElement("div"); 
      shortcutKey.classList.add("shortcut-key");
      if (key === "arrowright") key = "→";
      if (key === "arrowleft") key = "←";
      if (key === "arrowup") key = "↑";
      if (key === "arrowdown") key = "↓";
      if (key === " ") key = "SPACEBAR";
      if (key === "shift") key = "⇧";
      if (key === "cmd") key = svgedit.browser.isMac() ? "⌘" : "Ctrl";
      shortcutKey.textContent = key;
      shortcutKeys.appendChild(shortcutKey);
      shortcut.appendChild(shortcutKeys);
    });

    const shortcutName = document.createElement("div"); 
    shortcutName.classList.add("shortcut-name");
    shortcutName.textContent = name;
    shortcutKeys.appendChild(shortcutName);

    docFrag.appendChild(shortcutKeys);
  }

  shortcutEl.appendChild(docFrag);


}