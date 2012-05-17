/*
 * ext-eyedropper.js
 *
 * Licensed under the Apache License, Version 2
 *
 * Copyright(c) 2010 Jeff Schiller
 *
 */

// Dependencies:
// 1) jQuery
// 2) history.js
// 3) svg_editor.js
// 4) svgcanvas.js

svgEditor.addExtension("eyedropper", function(S) {
		var svgcontent = S.svgcontent,
			svgns = "http://www.w3.org/2000/svg",
			svgdoc = S.svgroot.parentNode.ownerDocument,
			svgCanvas = svgEditor.canvas,
			ChangeElementCommand = svgedit.history.ChangeElementCommand,
			addToHistory = function(cmd) { svgCanvas.undoMgr.addCommandToHistory(cmd); },
			currentStyle = {fillPaint: "red", fillOpacity: 1.0,
							strokePaint: "black", strokeOpacity: 1.0, 
							strokeWidth: 5, strokeDashArray: null,
							opacity: 1.0,
							strokeLinecap: 'butt',
							strokeLinejoin: 'miter',
							};
		function getStyle(opts) {
			// if we are in eyedropper mode, we don't want to disable the eye-dropper tool
			var mode = svgCanvas.getMode();
			if (mode == "eyedropper") return;

			var elem = null;
			var tool = $('#tool_eyedropper');
			// enable-eye-dropper if one element is selected
			
			if (!opts.multiselected && opts.elems[0] &&
				$.inArray(opts.elems[0].nodeName, ['svg', 'g', 'use']) == -1) 
			{
				elem = opts.elems[0];
				tool.removeClass('disabled');
			}
			// disable eye-dropper tool
			else {
				tool.addClass('disabled');
			}

		}
		
		return {
			name: "eyedropper",
			svgicons: "extensions/eyedropper-icon.xml",
			buttons: [{
				id: "tool_eyedropper",
				type: "mode",
				title: "Eye Dropper Tool",
				key: "I",
				class: "disabled",
				events: {
					"click": function() {
						svgCanvas.setMode("eyedropper");
					}
				}
			}],
			
			
			// if we have selected an element, grab its paint and enable the eye dropper button
			selectedChanged: getStyle,
			elementChanged: getStyle,
			mouseDown: function(opts) {
				var mode = svgCanvas.getMode();
				if (mode == "eyedropper") {
					var e = opts.event;
					var target = e.target;
					currentStyle.fillPaint = target.getAttribute("fill") || "white";
  				currentStyle.fillOpacity = target.getAttribute("fill-opacity") || 1.0;
  				currentStyle.strokePaint = target.getAttribute("stroke");
  				currentStyle.strokeOpacity = target.getAttribute("stroke-opacity") || 1.0;
  				currentStyle.strokeWidth = target.getAttribute("stroke-width");
  				currentStyle.strokeDashArray = target.getAttribute("stroke-dasharray");
  				currentStyle.strokeLinecap = target.getAttribute("stroke-linecap");
  				currentStyle.strokeLinejoin = target.getAttribute("stroke-linejoin");
  				currentStyle.opacity = target.getAttribute("opacity") || 1.0;
					if ($.inArray(target.nodeName, ['g', 'use']) == -1) {
						var changes = {};

						var change = function(elem, attrname, newvalue) {
							changes[attrname] = elem.getAttribute(attrname);
							elem.setAttribute(attrname, newvalue);
						};
						
						if (currentStyle.fillPaint) 		change(opts.selectedElements[0], "fill", currentStyle.fillPaint);
						if (currentStyle.fillOpacity) 		change(opts.selectedElements[0], "fill-opacity", currentStyle.fillOpacity);
						if (currentStyle.strokePaint) 		change(opts.selectedElements[0], "stroke", currentStyle.strokePaint);
						if (currentStyle.strokeOpacity) 	change(opts.selectedElements[0], "stroke-opacity", currentStyle.strokeOpacity);
						if (currentStyle.strokeWidth) 		change(opts.selectedElements[0], "stroke-width", currentStyle.strokeWidth);
						if (currentStyle.strokeDashArray) 	change(opts.selectedElements[0], "stroke-dasharray", currentStyle.strokeDashArray);
						if (currentStyle.opacity) 			change(opts.selectedElements[0], "opacity", currentStyle.opacity);
						if (currentStyle.strokeLinecap) 	change(opts.selectedElements[0], "stroke-linecap", currentStyle.strokeLinecap);
						if (currentStyle.strokeLinejoin) 	change(opts.selectedElements[0], "stroke-linejoin", currentStyle.strokeLinejoin);
						
						addToHistory(new ChangeElementCommand(target, changes));
					}
				}
			},
		};
});
