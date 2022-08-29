editor.keyboard = new MD.Keyboard();
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
editor.pan = new MD.Pan();

editor.import = new MD.Import();
editor.contextMenu = new MD.ContextMenu();
editor.darkmode = new MD.Darkmode();
editor.title = new MD.Title();

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
state.set("canvasId", t("Untitled"));
state.set("canvasMode", state.get("canvasMode"));

// load from param
if (!window.location.search.includes("?load=")) {
  svgCanvas.setSvgString(state.get("canvasContent"));
}
else {
  
  const error = function(err) {
      console.log(err);
      svgCanvas.setSvgString(state.get("canvasContent"));
  }

  const url = utils.findGetParameter("load");
  fetch(url)
    .then(r => r.text())
    .then(text => {
      if (text.includes("Error response")) return error("Error response");
      svgCanvas.setSvgString(text);
    })
    .catch(error);
}

state.set("canvasTitle", svgCanvas.getDocumentTitle());

//editor.paintBox.fill.setPaint(state.get("canvasFill"));
//editor.paintBox.stroke.setPaint(state.get("canvasStroke"));
//editor.paintBox.canvas.setPaint(state.get("canvasBackground"));

document.body.classList.remove("loading");
document.getElementById("svgcanvas").removeAttribute("title");