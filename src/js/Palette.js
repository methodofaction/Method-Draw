MD.Palette = function(){
  var palette = [
    "#444444", "#482816", "#422C10", "#3B2F0E", "#32320F", 
    "#293414", "#1F361B", "#153723", "#0C372C", "#083734", 
    "#0E353B", "#1A333F", "#273141", "#332D40", "#3E2A3C", 
    "#462735", "#4B252D", "#4D2425", "#4C261D", "#666666", 
    "#845335", "#7B572D", "#6F5C2A", "#62612C", "#546433", 
    "#46673D", "#396849", "#306856", "#2D6862", "#33666C", 
    "#426373", "#535F75", "#645A73", "#74556D", "#805064", 
    "#884D58", "#8B4D4B", "#894F3F", "#999999", "#C48157", 
    "#B8874D", "#A98E49", "#97944B", "#849854", "#729C62", 
    "#619E73", "#559E84", "#529D94", "#5B9BA2", "#6D97AB", 
    "#8391AE", "#9A8AAB", "#AF84A3", "#BF7E96", "#C97A86", 
    "#CE7975", "#CC7C65", "#BBBBBB", "#FFB27C", "#FABA6F", 
    "#E6C36A", "#CFCA6D", "#B8D078", "#A0D58A", "#8CD79F", 
    "#7DD8B5", "#7AD6CA", "#84D3DB", "#9ACEE6", "#B6C7EA", 
    "#D3BEE7", "#EDB6DC", "#FFAFCC", "#FFAAB8", "#FFA9A2", 
    "#FFAC8D", "#DDDDDD", "#FFE7A2", "#FFF093", "#FFFA8D", 
    "#FFFF91", "#EEFF9F", "#D1FFB4", "#B9FFCE", "#A8FFE9", 
    "#A4FFFF", "#B1FFFF", "#CBFFFF", "#EDFFFF", "#FFF5FF", 
    "#FFEBFF", "#FFE2FF", "#FFDCEC", "#FFDBD2", "#FFDFB8"
  ];

  var str = '<div class="palette_item transparent" data-rgb="none"></div>\
             <div class="palette_item black" data-rgb="#000000"></div>\
             <div class="palette_item white" data-rgb="#ffffff"></div>'
  palette.forEach(function(item, i){
    str += '<div class="palette_item" style="background-color: ' + item + ';" data-rgb="' + item + '"></div>';
  });
  $('#palette').append(str);

  var toolStroke = document.getElementById('tool_stroke');
  var picking = false;

  $(document).on("mouseup", function(){picking = false;})

  $('#palette').on("mousemove mousedown touchstart touchmove", ".palette_item", function(evt){
    
    evt.preventDefault();
    if (evt.type === "mousedown" || evt.type === "touchstart") picking = true;
    if (!picking) return;

    var isStroke = toolStroke.classList.contains('active') || evt.shiftKey;
    var picker = isStroke ? "stroke" : "fill";
    var color = this.getAttribute('data-rgb');
    var paint = null;
    var noUndo = true;

    paint = color === 'none' 
      ? new $.jGraduate.Paint() 
      : new $.jGraduate.Paint({alpha: 100, solidColor: color.substr(1)});

    editor.paintBox[picker].setPaint(paint);
    
    if (isStroke) {
      svgCanvas.setColor('stroke', color, noUndo);
      if (color != 'none' && svgCanvas.getStrokeOpacity() != 1) {
        svgCanvas.setPaintOpacity('stroke', 1.0);
      }
    } else {
      svgCanvas.setColor('fill', color, noUndo);
      if (color != 'none' && svgCanvas.getFillOpacity() != 1) {
        svgCanvas.setPaintOpacity('fill', 1.0);
      }
    }
  }).bind('contextmenu', function(e) {e.preventDefault()});
};


