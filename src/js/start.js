// globals
const svgCanvas = new $.SvgCanvas(document.getElementById("svgcanvas"));
const editor = new MD.Editor();
editor.menu = new MD.Menu();
editor.toolbar = new MD.Toolbar();
editor.rulers = new MD.Rulers();
const state = new State();
state.set("canvasId", t("Untitled"));
state.set("canvasMode", state.get("canvasMode"));