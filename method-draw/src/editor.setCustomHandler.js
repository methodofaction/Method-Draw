// Extension mechanisms must call setCustomHandlers with two functions: opts.open and opts.save
// opts.open's responsibilities are:
// 	- invoke a file chooser dialog in 'open' mode
//	- let user pick a SVG file
//	- calls setCanvas.setSvgString() with the string contents of that file
// opts.save's responsibilities are:
//	- accept the string contents of the current document 
//	- invoke a file chooser dialog in 'save' mode
// 	- save the file to location chosen by the user
methodDraw.setCustomHandlers = function(opts) {
	Editor.ready(function() {
		if(opts.open) {
			$('#tool_open > input[type="file"]').remove();
			$('#tool_open').show();
			svgCanvas.open = opts.open;
		}
		if(opts.save) {
			Editor.show_save_warning = false;
			svgCanvas.bind("saved", opts.save);
		}
		if(opts.pngsave) {
			svgCanvas.bind("exported", opts.pngsave);
		}
		customHandlers = opts;
	});
}