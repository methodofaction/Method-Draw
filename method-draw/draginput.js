/* 2012 Mark MacKay, MIT License*/

(function() {
  var $;
  $ = jQuery;
  $.fn.extend({
    dragInput: function(options) {
      
      var settings = {
        decimals: 0,
        dragArea: 100,
        moveCallback: function(){},
        cursorColor: "#c00"
      };
      
      settings = $.extend(settings, options);
      var input = $(this).find('input').first();
      var dragInput = $(this)
      var cursor = $("<div class='draginput_cursor'/>").appendTo(dragInput);
      // initial values
      var min = input.attr("data-min") || 0;
      var max = input.attr("data-max") || 100;
      var step = input.attr("data-step") || 1;
      var val = input.attr("value") || 0;
      var dragArea = settings.dragArea;
      var cursorArea = dragInput.height();
      dragInput.attr("readonly", "readonly")
      var change = function(){
        cursor.css("top",  (input.attr("value")*-1) * (cursorArea/(max-min)) + cursorArea)
      };
      
      change();
      
      var start = function(event) {
        $('body').addClass('grabbing')
        var oy = event.pageY;
        var val = parseFloat(input.attr('value'));
        var el_oy = dragInput.offset().top;
        //updates on move and end
        $(window).bind("mousemove.dragInput touchmove.dragInput", function(e) {move(e, oy, val, el_oy)});
        $(window).bind("mouseup.dragInput touchend.dragInput", end);
      };
      
      
      var move = function(e, oy, val, el_oy) {
        var y = e.pageY;
        var range = (max-min) / dragArea
        var dy = (y - oy)*-1 + val/range;
        val = range * dy
        if (val > max) {
          var offset = (val*-1) * (cursorArea/(max-min)) + cursorArea;
          if (offset > -30) { dragInput.css({"-webkit-transform": "translate(0,"+ (offset) +"px)"})}
          else {dragInput.addClass("rubberband")}
          val = max;
        }
        if (val < min) {
          var offset = (val*-1) * (cursorArea/(max-min));
          if (offset > 30) {dragInput.addClass("rubberband")}
          else {dragInput.css({"-webkit-transform": "translate(0,"+ (offset) +"px)"})}
          val = min;
        }
        cursor.css("top",  (val*-1) * (cursorArea/(max-min)) + cursorArea)
        input.attr("value", parseFloat(Math.round(val * 100) / 100).toFixed(settings.decimals));
        settings.moveCallback();
      };
            
      var dblclick = function() {
        dragInput.unbind("mousedown.dragInput touchstart.dragInput");
        input.removeAttr('readonly');
        input.focus()
        input.select()
      };
            
      var relock = function() {
        input.attr('readonly', 'readonly');
        dragInput.bind("mousedown.dragInput touchstart.dragInput", start);
      }
      
      var end = function() {
        $(window).unbind("mousemove.dragInput touchmove.dragInput");
        $(window).unbind("mouseup.dragInput touchend.dragInput");
        dragInput.removeClass("rubberband").removeAttr("style")
        $('body').removeClass('grabbing');
      };
      
      
      return this.each(function() {
        $(this).bind("mousedown.dragInput touchstart.dragInput", start);
        $(this).bind("dblclick.dragInput tapHold.dragInput", dblclick);
        input.bind("blur.dragInput", relock);
        input.bind("keypress.dragInput", function(e){if (e.keyCode == 13) input.trigger("blur.dragInput")});
        input.bind("change.dragInput", function(){change()})

      });
    }
  });
}).call(this);
