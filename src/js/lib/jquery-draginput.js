// Mark MacKay http://method.ac MIT License


$.fn.dragInput = function(cfg){
  return this.each(function(){

    this.repeating = false;
    // Apply specified options or defaults:
    // (Ought to refactor this some day to use $.extend() instead)
    this.dragCfg = {
      min: cfg && !isNaN(parseFloat(cfg.min)) ? Number(cfg.min) : null, // Fixes bug with min:0
      max: cfg && !isNaN(parseFloat(cfg.max)) ? Number(cfg.max) : null,
      step: cfg && Number(cfg.step) ? cfg.step : 1,
      stepfunc: cfg && cfg.stepfunc ? cfg.stepfunc : false,
      dragAdjust: cfg && cfg.dragAdjust ? cfg.dragAdjust : 1,
      height: 70,
      cursor: cfg && cfg.cursor ? Boolean(cfg.cursor) : false,
      start: cfg && cfg.start ? Number(cfg.start) : 0,
      _btn_width: 20,
      _direction: null,
      _delay: null,
      _repeat: null,
      callback: cfg && cfg.callback ? cfg.callback : () => console.log("cb does not exist")
    };
    // if a smallStep isn't supplied, use half the regular step
    this.dragCfg.smallStep = cfg && cfg.smallStep ? cfg.smallStep : this.dragCfg.step/2;
    var dragAdjust = this.dragCfg.dragAdjust;
    var $label = $(this).parent();
    var $input = $(this);
    var cursorHeight = this.dragCfg.height;
    var min = this.dragCfg.min;
    var max = this.dragCfg.max
    var step = this.dragCfg.step
    var area = (max - min > 0) ?  (max - min) / step : 200;
    var scale = area/cursorHeight * step;
    var lastY = 0;
    var attr = this.getAttribute("data-attr");
    var completed = true //for mousewheel
    var $cursor = (area && this.dragCfg.cursor)
      ? $("<div class='draginput_cursor' />").appendTo($label) 
      : false
    $input.attr("readonly", "readonly")
    if ($cursor && !isNaN(this.dragCfg.start)) $cursor.css("top", (this.dragCfg.start*-1)/scale+cursorHeight)
   
    //this is where all the magic happens  
    this.adjustValue = function(i, completed = false){
      var v;
      i = parseFloat(i);
      if(isNaN(this.value)) {
        v = this.dragCfg.reset;
      } else if($.isFunction(this.dragCfg.stepfunc)) {
        v = this.dragCfg.stepfunc(this, i);
      } else {
        v = Number((Number(this.value) + Number(i)).toFixed(5));
      }
      if (max !== null) v = Math.min(v, max);
      if (min !== null) v = Math.max(v, min);
      if ($cursor) this.updateCursor(v);
      this.value = v;
      this.dragCfg.callback(attr, v, completed);
    };
          
    $label.toggleClass("draginput", $label.is("label"))
    
    // when the mouse is down and moving
    this.move = function(e, oy, val) {
      // just got started let's save for undo purposes
      if (lastY === 0) {
        lastY = oy;
      }
      var deltaY = (e.pageY - lastY) *-1
      lastY = e.pageY;
      val = (deltaY * scale) * dragAdjust
      var fixed = (step < 1) ? 1 : 0
      this.adjustValue(val.toFixed(fixed))  //no undo true
    };
    
    //when the mouse is released
    this.stop = function() {
      var selectedElems = svgCanvas.getSelectedElems();
      $('body').removeClass('dragging');
      $label.removeClass("active");
      completed = true;
      $(window).unbind("mousemove.draginput touchmove.draginput mouseup.draginput touchend.draginput");
      lastY = 0;
      if (selectedElems[0]) {
        var batchCmd = svgCanvas.undoMgr.finishUndoableChange();
        if (!batchCmd.isEmpty()) svgCanvas.undoMgr.addCommandToHistory(batchCmd);
      }
      this.adjustValue(0, completed);
    }
    
    this.updateCursor = function(){
      var value = parseFloat(this.value);
      var pos = (value*-1)/scale+cursorHeight;
      $cursor.css("top", pos);
    }
    
    this.launch = function(e) {
      var selectedElems = svgCanvas.getSelectedElems();
      var oy = e.pageY;
      var val = this.value;
      var el = this;
      if (attr && selectedElems.length) svgCanvas.undoMgr.beginUndoableChange(attr, selectedElems)
      $('body').addClass('dragging');
      $label.addClass('active');
      $(window).bind("mousemove.draginput touchmove.draginput", function(e){el.move(e, oy, parseFloat(val))})
      $(window).bind("mouseup.draginput touchend.draginput", function(e){el.stop()})
      $("input").blur();
    }
    
    const delta = 2;
    let startX;
    let startY;

    $(this)
      .attr("readonly", "readonly")
      .attr("data-scale", scale)
      .attr("data-domain", cursorHeight)
      .attr("data-cursor", ($cursor !== false))
          
    .bind("mousedown touchstart", function(e){
      startX = event.pageX;
      startY = event.pageY;
      this.blur();
      this.launch(e);
    })

    .bind("mouseup touchend", function(e) {
      const diffX = Math.abs(event.pageX - startX);
      const diffY = Math.abs(event.pageY - startY);

      if (diffX < delta && diffY < delta) {
          this.removeAttribute("readonly", "readonly");
          this.focus();
          this.select();
      }
      
    })
    
    .bind("dblclick taphold", function(e) {
      this.removeAttribute("readonly", "readonly");
      this.focus();
      this.select();
    })
    
    .keydown(function(e){
      // Respond to up/down arrow keys.
      var key = e.key;
      var _self = this;
      var keys = {
        "ArrowUp": function(){ _self.adjustValue(1) },
        "ArrowDown": function(){ _self.adjustValue(-1) },
        "ArrowDown": function(){ _self.adjustValue(-1) },
        "Enter": function(){ _self.adjustValue(0); _self.blur(); },
      }
      if (keys[key]) {
        e.preventDefault();
        keys[key]();
      }
    })
    
    .focus(function(e){
      if (this.getAttribute("readonly") === "readonly") this.blur()
    })
    
    .blur(function(e){
      window.getSelection().removeAllRanges();
      this.setAttribute("readonly", "readonly")
    })
    
    .bind("mousewheel", function(e, delta, deltaX, deltaY){
      const panels = document.getElementById("panels");
      if (panels.scrollHeight > panels.clientHeight) return;
      var selectedElems = svgCanvas.getSelectedElems();
      if (completed) svgCanvas.undoMgr.beginUndoableChange(attr, selectedElems)
      completed = false
      clearTimeout(window.undoTimeout)
      window.undoTimeout = setTimeout(function(){
        wheel_input.stop()
      },200)
      
      var wheel_input = this;
      if (deltaY > 0)
        this.adjustValue(this.dragCfg.step);
      else if (deltaY < 0)
        this.adjustValue(-this.dragCfg.step);
      e.preventDefault();
      
    })

  });
  
};

// public function
$.fn.dragInput.updateCursor = function(el){
  var value = parseFloat(el.value);
  var scale = parseFloat(el.getAttribute("data-scale"));
  var domain = parseFloat(el.getAttribute("data-domain"));
  var pos = ((value*-1)/scale+domain) + "px";
  var cursor = el.parentNode.lastChild
  if (cursor.className === "draginput_cursor") cursor.style.top = pos;
}

