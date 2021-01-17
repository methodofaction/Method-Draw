var contextChanged = function(win, context) {
  
  var link_str = '';
  if(context) {
    var str = '';
    link_str = '<a href="#" data-root="y">' + svgCanvas.getCurrentDrawing().getCurrentLayerName() + '</a>';
    
    $(context).parentsUntil('#svgcontent > g').addBack().each(function() {
      if(this.id) {
        str += ' > ' + this.id;
        if(this !== context) {
          link_str += ' > <a href="#">' + this.id + '</a>';
        } else {
          link_str += ' > ' + this.id;
        }
      }
    });

    cur_context = str;
  } else {
    cur_context = null;
  }
  $('#cur_context_panel').toggle(!!context).html(link_str);

}