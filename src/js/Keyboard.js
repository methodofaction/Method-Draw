MD.Keyboard = function(){

  document.addEventListener("keydown", function(e){
    const modKey = !svgedit.browser.isMac() ? "ctrlKey" : "metaKey";
    const cmd = e[modKey] ? "cmd_" : "";
    const shift = e.shiftKey ? "shift_" : "";;
    const key = cmd + shift + e.key.toLowerCase();

    const keys = {
      v:     ()=> state.set("canvasMode", "select"),
      q:     ()=> state.set("canvasMode", "fhpath"),
      l:     ()=> state.set("canvasMode", "line"),
      r:     ()=> state.set("canvasMode", "rect"),
      o:     ()=> state.set("canvasMode", "ellipse"),
      s:     ()=> state.set("canvasMode", "shapelib"),
      p:     ()=> state.set("canvasMode", "path"),
      t:     ()=> state.set("canvasMode", "text"),
      z:     ()=> state.set("canvasMode", "zoom"),
      e:     ()=> state.set("canvasMode", "eyedropper"),
      x:     ()=> editor.switchPaint(),
"cmd_s":     ()=> editor.save(),
"cmd_z":     ()=> editor.undo(),
"backspace": () => editor.deleteSelected()
    };

    // keyboard shortcut exists
    if (keys[key]) {
      e.preventDefault();
      keys[key]();
    }

  });

}