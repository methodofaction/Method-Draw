/**
 * Package: svedit.select
 *
 * Licensed under the Apache License, Version 2
 *
 * Copyright(c) 2010 Alexis Deveria
 * Copyright(c) 2010 Jeff Schiller
 */

// Dependencies:
// 1) jQuery
// 2) browser.js
// 3) math.js
// 4) svgutils.js

var svgedit = svgedit || {};

(function() {

if (!svgedit.hover) {
	svgedit.hover = {};
}

var svgFactory_;
var config_;
var hoverManager_; // A Singleton

// Class: svgedit.select.Selector
// Private class for DOM element selection boxes
// 
// Parameters:
// id - integer to internally indentify the selector
// elem - DOM element associated with this selector
svgedit.hover.Hoverer = function(id, elem) {
	// this is the selector's unique number
	this.id = id;

	// this holds a reference to the element for which this selector is being used
	this.hoveredElement = elem;

	// this is a flag used internally to track whether the selector is being used or not
	this.locked = true;

	// this holds a reference to the <g> element that holds all visual elements of the selector
	this.hoverGroup = svgFactory_.createSVGElement({
		'element': 'g',
		'attr': {'id': ('hoverGroup' + this.id)}
	});

	// this holds a reference to the path rect
	this.hoverElem = this.selectorGroup.appendChild(
		svgFactory_.createSVGElement({
			'element': 'path',
			'attr': {
				'id': ('hoverBox' + this.id),
				'fill': 'none',
				'stroke': '#4F80FF',
				'stroke-width': '1',
				'shape-rendering': 'crispEdges',
				'style': 'pointer-events:none'
			}
		})
	);


	this.reset(this.hoveredElement);
};


// Function: svgedit.select.Selector.reset 
// Used to reset the id and element that the selector is attached to
//
// Parameters: 
// e - DOM element associated with this selector
svgedit.hover.Hoverer.prototype.reset = function(e) {
	this.locked = true;
	this.hoveredElement = e;
	this.resize();
	this.hoverGroup.setAttribute('display', 'inline');
};


// Class: svgedit.select.SelectorManager
svgedit.hover.HoverManager = function() {
	// this will hold the <g> element that contains all hover elements
	this.hoverParentGroup = null;
	this.initGroup();
};

// Function: svgedit.select.SelectorManager.initGroup
// Resets the parent selector group element
svgedit.hover.HoverManager.prototype.initGroup = function() {
	// remove old selector parent group if it existed
	if (this.hoverParentGroup && this.hoverParentGroup.parentNode) {
		this.hoverParentGroup.parentNode.removeChild(this.hoverParentGroup);
	}

	// create parent selector group and add it to svgroot
	this.selectorParentGroup = svgFactory_.createSVGElement({
		'element': 'g',
		'attr': {'id': 'hoverParentGroup'}
	});
	

	if($('#canvasBackground').length) return;

	var rect = svgFactory_.createSVGElement({
		'element': 'rect',
		'attr': {
			'width': '100%',
			'height': '100%',
			'x': 0,
			'y': 0,
			'stroke-width': 1,
			'stroke': '#000',
			'fill': '#FFF',
			'shape-rendering': 'crispEdges',
			'style': 'pointer-events:none'
		}
	});

	// Both Firefox and WebKit are too slow with this filter region (especially at higher
	// zoom levels) and Opera has at least one bug
//	if (!svgedit.browser.isOpera()) rect.setAttribute('filter', 'url(#canvashadow)');
	canvasbg.appendChild(rect);
	svgFactory_.svgRoot().insertBefore(canvasbg, svgFactory_.svgContent());
};



svgedit.hover.init = function(config, svgFactory) {
	config_ = config;
	svgFactory_ = svgFactory;
	selectorManager_ = new svgedit.hover.HoverManager();
};

/**
 * Function: svgedit.select.getSelectorManager
 *
 * Returns:
 * The SelectorManager instance.
 */
svgedit.hover.getHoverManager = function() {
	return selectorManager_;
};

})();