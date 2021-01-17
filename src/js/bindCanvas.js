// bind the selected event to our function that handles updates to the UI
svgCanvas.bind("selected", editor.selectedChanged);
svgCanvas.bind("transition", elementTransition);
//svgCanvas.bind("changed", elementChanged);
svgCanvas.bind("exported", exportHandler);
svgCanvas.bind("zoomed", zoomChanged);
svgCanvas.bind("contextset", contextChanged);
svgCanvas.textActions.setInputElem($("#text")[0]);