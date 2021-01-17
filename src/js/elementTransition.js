// Call when part of element is in process of changing, generally
// on mousemove actions like rotate, move, etc.
var elementTransition = function(window,elems) {
  var mode = svgCanvas.getMode();
  var elem = elems[0];
  
  if(!elem) return;
  
  const multiselected = (elems.length >= 2 && elems[1] != null) ? elems : null;
  // Only updating fields for single elements for now
  if(!multiselected) {
    switch ( mode ) {
      case "rotate":
        var ang = svgCanvas.getRotationAngle(elem);
        $('#angle').val(Math.round(ang));
        rotateCursor(ang);
        $('#tool_reorient').toggleClass('disabled', ang == 0);
        break;
    }
  }
  svgCanvas.runExtensions("elementTransition", {
    elems: elems
  });
};