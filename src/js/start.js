// globals
const svgCanvas = new $.SvgCanvas(document.getElementById("svgcanvas"));
const editor = new MD.Editor();
editor.menu = new MD.Menu();
editor.toolbar = new MD.Toolbar();
editor.rulers = new MD.Rulers();
editor.canvas = new MD.Canvas();
editor.text = new MD.Text();
editor.panel = new MD.Panel();
editor.zoom = new MD.Zoom();
editor.paintBox = {
  fill: new MD.PaintBox('#fill_color', 'fill'),
  stroke: new MD.PaintBox('#stroke_color', 'stroke'),
  canvas: new MD.PaintBox('#canvas_color', 'canvas')
};
editor.palette = new MD.Palette();
editor.keyboard = new MD.Keyboard();
editor.pan = new MD.Pan();
editor.modal = new MD.Modal();
editor.import = new MD.Import();
editor.contextMenu = new MD.ContextMenu();

// bind the selected event to our function that handles updates to the UI
svgCanvas.bind("selected", editor.selectedChanged);
svgCanvas.bind("transition", editor.elementTransition);
svgCanvas.bind("changed", editor.elementChanged);
svgCanvas.bind("exported", editor.exportHandler);
svgCanvas.bind("zoomed", editor.zoom.changed);
svgCanvas.bind("contextset", editor.contextChanged);
svgCanvas.bind("extension_added", editor.extensionAdded);
svgCanvas.textActions.setInputElem($("#text")[0]);
const shapeLib = svgCanvas.addExtension.apply(this, ["shapes", MD.Shapelib]);
const eyedropper = svgCanvas.addExtension.apply(this, ["eyedropper", MD.Eyedropper]);
const state = new State();
state.set("canvasId", t("Untitled"));
state.set("canvasMode", state.get("canvasMode"));
state.set("canvasSize", state.get("canvasSize"));
svgCanvas.setSvgString(state.get("canvasContent"));
editor.paintBox.fill.setPaint(state.get("canvasFill"))
editor.paintBox.stroke.setPaint(state.get("canvasStroke"))
editor.paintBox.canvas.setPaint(state.get("canvasBackground"))

editor.rulers.update();