var svgedit = svgedit || {};

(function() {

/*
/* setmode.js
/* Changes the mode in the editor
/*––––––––––––––––––––––––––––––––––––––––––––*/

var modes = {
	    select: function() { methodDraw.canvas.setMode('select') },
	    fhpath: function() { methodDraw.canvas.setMode('fhpath') },
	      line: function() { methodDraw.canvas.setMode('line') },
	      rect: function() { methodDraw.canvas.setMode('rect') },
	   ellipse: function() { methodDraw.canvas.setMode('ellpse') },
	   		path: function() { methodDraw.canvas.setMode('path') },
	   		text: function() { methodDraw.canvas.setMode('text') },
	   	 image: function() { methodDraw.canvas.setMode('image') },
	   		zoom: function() { methodDraw.canvas.setMode('zoom') },
	eyedropper: function() { methodDraw.canvas.setMode('eyedropper') },
	shapelib: function() { methodDraw.canvas.setMode('shapelib') }
};

var setCurrent = function(mode) {
	var current = $("#tool_" + mode);
	var previous = $('.tool_button_current');
	if (!current.hasClass("tool_button")) return false;
	previous.removeClass('tool_button_current').addClass("tool_button");
	current.addClass("tool_button_current").removeClass("tool_button")
	$('.tools_flyout').fadeOut(100);
	$('#styleoverrides').text('');

}

var setMode = function(mode) {
	setCurrent(mode);
	if (mode && modes[mode]) { modes[mode].call(); }
	return mode;
}

/* Public API
/*––––––––––––––––––––––––––––––––––––––––––––*/
svgedit.setMode = setMode;

})();

