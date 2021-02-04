// globals
const svgCanvas = new $.SvgCanvas(document.getElementById("svgcanvas"));
const editor = new MD.Editor();
editor.menu = new MD.Menu();
editor.toolbar = new MD.Toolbar();
editor.rulers = new MD.Rulers();
editor.canvas = new MD.Canvas();
editor.panel = new MD.Panel();
editor.zoom = new MD.Zoom();
editor.text = new MD.Text();
editor.paintBox = {
  fill: new MD.PaintBox('#fill_color', 'fill'),
  stroke: new MD.PaintBox('#stroke_color', 'stroke'),
  canvas: new MD.PaintBox('#canvas_color', 'canvas')
};
editor.palette = new MD.Palette();
editor.keyboard = new MD.Keyboard();
editor.pan = new MD.Pan();

svgCanvas.addExtension.apply(this, ["shapes", MD.Shapelib])

editor.rulers.update();
const state = new State();
state.set("canvasId", t("Untitled"));
state.set("canvasMode", state.get("canvasMode"));
state.set("canvasSize", state.get("canvasSize"));