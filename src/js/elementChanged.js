 
    // called when any element has changed
    var elementChanged = function(window,elems) {
      var mode = svgCanvas.getMode();
      if(mode === "select") {
        setSelectMode();
      }
      
      for (var i = 0; i < elems.length; ++i) {
        var elem = elems[i];
        
        // if the element changed was the svg, then it could be a resolution change
        if (elem && elem.tagName === "svg") {
          //populateLayers();
          updateCanvas();
        } 
        // Update selectedElement if element is no longer part of the image.
        // This occurs for the text elements in Firefox
        else if(elem && selectedElement && selectedElement.parentNode == null) {
//            || elem && elem.tagName == "path" && !multiselected) { // This was added in r1430, but not sure why
          selectedElement = elem;
        }
      }
        
      // we update the contextual panel with potentially new
      // positional/sizing information (we DON'T want to update the
      // toolbar here as that creates an infinite loop)
      // also this updates the history buttons
  
      // we tell it to skip focusing the text control if the
      // text element was previously in focus
      updateContextPanel();
      
      // In the event a gradient was flipped:
      if(selectedElement && mode === "select") {
        Editor.paintBox.fill.update();
        Editor.paintBox.stroke.update();
      }
      
      svgCanvas.runExtensions("elementChanged", {
        elems: elems
      });
    };