// This sets up alternative dialog boxes. They mostly work the same way as
// their UI counterparts, expect instead of returning the result, a callback
// needs to be included that returns the result as its first parameter.
// In the future we may want to add additional types of dialog boxes, since 
// they should be easy to handle this way.

(function() {
  $('#dialog_container').draggable({cancel:'#dialog_content, #dialog_buttons *', containment: 'window'});
  var box = $('#dialog_box'), btn_holder = $('#dialog_buttons');
  
  var dbox = function(type, msg, callback, defText) {
    $('#dialog_content').html('<p>'+msg.replace(/\n/g,'</p><p>')+'</p>')
      .toggleClass('prompt',(type=='prompt'));
    btn_holder.empty();
    
    var ok = $('<input type="button" value="' + uiStrings.common.ok + '">').appendTo(btn_holder);
  
    if(type != 'alert') {
      $('<input type="button" value="' + uiStrings.common.cancel + '">')
        .appendTo(btn_holder)
        .on("click touchstart", function() { box.hide();callback(false)});
    }
    
    if(type == 'prompt') {
      var input = $('<input type="text">').prependTo(btn_holder);
      input.val(defText || '');
      input.bind('keydown', 'return', function() {ok.trigger("click touchstart");});
    }
    
    if(type == 'process') {
      ok.hide();
    }

    box.show();
    
    ok.on("click touchstart", function() { 
      box.hide();
      var resp = (type == 'prompt')?input.val():true;
      if(callback) callback(resp);
    }).focus();
    
    if(type == 'prompt') input.focus();
  }
  
  $.alert = function(msg, cb) { dbox('alert', msg, cb);};
  $.confirm = function(msg, cb) { dbox('confirm', msg, cb);};
  $.process_cancel = function(msg, cb) {  dbox('process', msg, cb);};
  $.prompt = function(msg, txt, cb) { dbox('prompt', msg, cb, txt);};
}());