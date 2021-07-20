function exportHandler(window, data) {
  var issues = data.issues;
  
  if(!$('#export_canvas').length) {
    $('<canvas>', {id: 'export_canvas'}).hide().appendTo('body');
  }
  var c = $('#export_canvas')[0];
  
  c.width = svgCanvas.contentW;
  c.height = svgCanvas.contentH;
  canvg(c, data.svg, {renderCallback: function() {
    var datauri = c.toDataURL('image/png');  
    if (!datauri) return false;
    var filename = "Method Draw Image";
    var type = 'image/png';
    var file = svgedit.utilities.dataURItoBlob(datauri, type);
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
  }});
}