// Â© CodingJack www.codingjack.com
// License: http://creativecommons.org/licenses/by-sa/3.0/
// www.codingjack.com/playground/jacked/
// 16kb minified: www.codingjack.com/playground/jacked/js/codingjack/Jacked.min.js

;(function() {
	
	var compute = window.getComputedStyle ? document.defaultView.getComputedStyle : null,
	request = timeline("Request", "AnimationFrame"),
	cancel = timeline("Cancel", "AnimationFrame"),
	temp = document.createElement("span").style,
	agent = navigator.userAgent.toLowerCase(),
	defaultEase = "Quint.easeOut",
	defaultDuration = 500,
	speeds = getSpeed(),
	dictionary = [],
	css = getCSS(),
	engineRunning,
	transformProp,
	length = 0,
	skeleton,
	timeout,
	element,
	browser,
	useCSS,
	moved,
	timer,
	trans,
	run,
	leg,
	rip,
	itm,
	clrs,
	mobile,
	gotcha,
	colors,
	borColor,
	accelerate,
	comma = /,/g,
	reg = /[A-Z]/g,
	regP = /{props}/,
	regE = /{easing}/,
	regT = / cj-tween/g,
	regD = /{duration}/,
	trim = /^\s+|\s+$/g,
	positions = /(right|bottom|center)/,
	
	// credit: http://www.bitstorm.org/jquery/color-animation/
	color2 = /#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/,
	color1 = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/,
	
	// true = use CSS3 above all else when available, false = use requestAnimationFrame with Timer fallback
	// combining browsers + mobile devices is not currently supported (i.e. all Android browsers will be passed the "android" parameter)
	// Microsoft added for the future, will fallback to request/timer for now
	defaults = {ios: false, android: false, winMobile: false, firefox: false, chrome: false, safari: false, opera: false, ie: false},
	
	// set timer speed and check for IE
	intervalSpeed = speeds[0],
	version = speeds[1],
	isIE = version !== 0 && version < 9;
	
	// if css3 transitions are supported
	if(css) {
		
		var pre = css[1], sheet = document.createElement("style");
		transformProp = getTransform();
		mobile = getMobile();

		sheet.type = "text/css";
		sheet.innerHTML = ".cj-tween{" + pre + "-property:none !important;}";
		document.getElementsByTagName("head")[0].appendChild(sheet);
		
		skeleton = pre + "-property:{props};" + pre + "-duration:{duration}s;" + pre + "-timing-function:cubic-bezier({easing});";
		browser = !mobile ? css[2] : mobile;
		borColor = /(chrome|opera)/.test(browser);
		
		// force hardware acceleration in safari and ios.
		accelerate = browser === "safari" || browser === "ios";
		css = css[0];
		
		setDefaults();
		
	}
	
	if(!isIE) {
	
		element = HTMLElement;
		
		clrs = /(#|rgb)/;
		gotcha = /(auto|inherit|rgb|%|#)/;
		
	}
	// IE8
	else if(version === 8) {
	
		element = Element;
		
		// support for commonly named colors in IE8
		clrs = /(#|rgb|red|blue|green|black|white|yellow|pink|gray|grey|orange|purple)/;
		gotcha = /(auto|inherit|rgb|%|#|red|blue|green|black|white|yellow|pink|gray|grey|orange|purple)/;
		colors = {
			
			red: "#F00", 
			blue: "#00F", 
			green: "#0F0", 
			black: "#000", 
			white: "#FFF", 
			yellow: "#FF0", 
			pink: "#FFC0CB", 
			gray: "#808080", 
			grey: "#808080", 
			orange: "#FFA500", 
			purple: "#800080"
			
		};
		
	}
	// Bounce for < IE8
	else {
	
		return;
		
	}
	
	// extend the DOM Element
	element.prototype.jacked = function(to, sets) {
		
		Jacked.tween(this, to, sets);
		
	}
	
	element.prototype.fadeInJacked = function(sets) {
		
		Jacked.fadeIn(this, sets);
		
	}
	
	element.prototype.fadeOutJacked = function(sets) {
		
		Jacked.fadeOut(this, sets);
		
	}
	
	element.prototype.transformJacked = function(to, sets, fallback) {
	
		Jacked.transform(this, to, sets, fallback);
		
	}
	
	element.prototype.percentageJacked = function(to, sets) {
	
		Jacked.percentage(this, to, sets);
		
	}
	
	element.prototype.stopJacked = function(complete, callback) {
		
		Jacked.stopTween(this, complete, callback);
		
	}
	
	// extend Array if necessary
	if(!Array.prototype.indexOf) {
		
		Array.prototype.indexOf = function($this) {
			
			var i = this.length;
			
			while(i--) {
				
				if(this[i] === $this) return i;
				
			}
			
			return -1;
			
		}
		
	}
	
	// credit https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/now
	if(!Date.now) {  
    	
		Date.now = function now() {  
        	
			return +(new Date);  
			
		}
	    
	}  
	
	// static methods
	this.Jacked = {
		
		ready: function(callback) {
		
			window.onload = callback;
			
		},
		
		setEngines: function(settings) {
			
			for(var prop in settings) {
				
				if(defaults.hasOwnProperty(prop)) defaults[prop] = settings[prop];
				
			}
			
			setDefaults();
			
		},
		
		tween: function(obj, to, settings) {
			
			if(obj.cj) obj.cj.stop();
			if(!settings) settings = {};
			
			if(!settings.mode) {
			
				if(!css || !useCSS) {
					
					new CJ(obj, to, settings);
					
				}
				else {
					
					new CJcss(obj, to, settings);
					
				}	
				
			}
			else if(settings.mode === "timeline" || !css) {
					
				new CJ(obj, to, settings);
						
			}
			else {
				
				new CJcss(obj, to, settings);	
				
			}	
			
		},
		
		fadeIn: function(obj, settings) {
			
			if(!settings) settings = {};
			settings.fadeIn = true;
			
			Jacked.tween(obj, {opacity: 1}, settings);
			
		},
		
		fadeOut: function(obj, settings) {
			
			if(!settings) settings = {};
			settings.fadeOut = true;
			
			Jacked.tween(obj, {opacity: 0}, settings);
			
		},
		
		percentage: function(obj, to, settings) {
			
			if(obj.cj) obj.cj.stop();
			if(!("from" in to) || !("to" in to)) return;
			if(!settings) settings = {};	
			
			var mode = settings.mode;
			
			if(!mode) {
			
				if(css && useCSS) {
				
					percCSS(obj, to, settings);
					
				}
				else {
				
					new CJpercentage(obj, to, settings);
					
				}
				
				return;
				
			}
			
			if(mode === "css3" && css) {
				
				percCSS(obj, to, settings);
				return;
				
			}
			
			new CJpercentage(obj, to, settings);
			
		},
		
		special: function(obj, settings) {
			
			if(obj.cj) obj.cj.stop();
			
			new CJspecial(obj, settings);
			
		},
		
		transform: function(obj, to, settings, fallback) {
			
			if(obj.cj) obj.cj.stop();
			
			if(css && transformProp) {
				
				if(!settings) settings = {};
				settings.mode = "css3";
				
				if("transform" in to) {
				
					to[transformProp] = to.transform;
					delete to.transform;
					
				}
				
				new Jacked.tween(obj, to, settings);
				
			}
			else if(fallback) {
			
				new Jacked.tween(obj, fallback, settings);
				
			}
			
		},
		
		stopTween: function(obj, complete, callback) {
			
			var itm = obj.cj;
			if(!itm) return;
			
			if(!itm.isCSS) {
			
				itm.stop(complete, callback);
				
			}
			else {
			
				itm.stop(callback);
				
			}
			
		},
		
		stopAll: function(complete) {
			
			(cancel) ? cancel(engine) : clearInterval(timer);
			
			var i = dictionary.length, itm;
			length = 0;
			
			while(i--) {
				
				itm = dictionary[i];
				
				if(!itm.isCSS) {
					
					itm.stop(complete, false, true, true);
					
				}
				else {
					
					itm.stop(false, true);
					
				}
				
			}
			
			dictionary = [];
			engineRunning = false;
			itm = trans = null;
			
		},
		
		setEase: function(easing) {
			
			var ar = easing.toLowerCase().split(".");
			
			if(ar.length < 2) return;
			if(!PennerEasing[ar[0]]) return;
			if(!PennerEasing[ar[0]][ar[1]]) return;
			
			defaultEase = easing;
			
		},
		
		setDuration: function(num) {
		
			if(isNaN(num)) return;
			
			defaultDuration = num;
			
		},
		
		getMobile: function() {
		
			return mobile;
			
		},
		
		getIE: function() {
		
			return isIE;
			
		},
		
		getBrowser: function() {
		
			return browser;
			
		},
		
		getEngine: function() {
		
			return engineRunning;
			
		}
		
	}
	
	// ticker used for JS animations
	function engine() {
			
		run = false;
		leg = length;
		
		while(leg--) {
			
			itm = dictionary[leg];
			
			if(!itm) break;
			if(itm.isCss) continue;
			
			if(itm.cycle()) {
				
				run = true;

			}
			else {
				
				itm.stop(false, itm.complete, false, true);
				
			}
			
		}
		
		if(request) {
			
			if(run) {
				
				request(engine);
				
			}
			else {
				
				cancel(engine);
				itm = trans = null
				
			}
			
		}
		else {
			
			if(run) {
				
				if(!engineRunning) timer = setInterval(engine, intervalSpeed);
				
			}
			else {
				
				clearInterval(timer);
				itm = trans = null
				
			}
				
		}
		
		engineRunning = run;
		
	}
	
	// default JS transition
	this.CJ = function(obj, to, sets) {
		
		length = dictionary.length;
		
		var $this = obj.cj = dictionary[length++] = this;
		
		this.runner = function(force) {
			
			$this.obj = obj;
			$this.complete = sets.callback;
			$this.completeParams = sets.callbackParams;
			
			if(force === true) {
				
				$this.transitions = [];	
				return;
				
			}
			
			var key,
			i = 0, 
			tweens = [], 
			style = obj.style;
			duration = sets.duration || defaultDuration,
			easing = (sets.ease || defaultEase).toLowerCase().split(".");
			easing = PennerEasing[easing[0]][easing[1]];
			
			style.visibility = "visible";
				
			if(sets.fadeIn) {
				
				style.display = sets.display || "block";
				style.opacity = 0;
				
			}
			
			if(isIE && "opacity" in to && !obj.filters.length) {
				
				style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + (sets.fadeIn ? 0 : 100) + ")";
				
			}
			
			if(to.borderColor && !borColor) {
				
				var clr = to.borderColor;
				
				to.borderTopColor = clr;
				to.borderRightColor = clr;
				to.borderBottomColor = clr;
				to.borderLeftColor = clr;
				
				delete to.borderColor;
				
			}
			
			for(key in to) {
				
				if(key !== "backgroundPosition") {
				
					tweens[i++] = $this.animate(obj, key, to[key], duration, easing);
					
				}
				else {
				
					tweens[i++] = $this.bgPosition(obj, key, to[key], duration, easing);
					
				}
				
			}
			
			$this.transitions = tweens;
			(engineRunning) ? setTimeout(checkEngine, 10) : engine();
			
		}
		
		if(sets.fadeOut) {
			
			obj.cjFadeOut = true;
			
		}
		else if(sets.fadeIn) {
		
			obj.cjFadeIn = true;
			
		}
		
		if(sets.duration === 0) {
			
			this.runner(true);
			this.stop();
			return;
			
		}
		
		if(!sets.delay) {
			
			this.runner();
			
		}
		else {
			
			this.delayed = setTimeout(this.runner, sets.delay);
			
		}
		
	}
	
	// cycles through all JS animations every frame/interval
	CJ.prototype.cycle = function() {
		
		trans = this.transitions;
		if(!trans) return true;
		
		rip = trans.length;
		moved = false;
		
		while(rip--) {
				
			if(trans[rip]()) moved = true;
			
		}

		return moved;
		
	}

	// each JS animation runs through this function
	CJ.prototype.animate = function(obj, prop, value, duration, ease) {
		
		var tick, style, val, opacity = prop === "opacity", passed = true;
		
		if(!opacity || !isIE) {
			
			style = obj.style;
			val = style[prop];
			
			tick = (val !== "") ? val : compute ? compute(obj, null)[prop] : obj.currentStyle[prop];	
			
		}
		else {
			
			style = obj.filters.item("DXImageTransform.Microsoft.Alpha");
			prop = "Opacity";
			tick = style[prop];
			value *= 100;
			
		}
		
		if(!gotcha.test(tick)) {
			
			tick = parseFloat(tick);
			
		}
		else {
			
			if(!clrs.test(tick)) {
				
				tick = 0;
				
			}
			else {
				
				if(value.search("rgb") === -1) {
					
					if(isIE && tick in colors) tick = colors[tick];
					return this.color(obj, prop, tick, value, duration, ease);
					
				}
				else {

					passed = false;
					
				}
				
			}
			
		}
		
		var px = !opacity ? "px" : 0,
		constant = value - tick,
		range = tick < value,
		then = Date.now(),
		begin = tick,
		timed = 0,
		finish,
		pTick,
		now,
		px;
		
		finish = value + px;
		
		if(!opacity || isIE) {
			
			(range) ? value -= 0.25 : value += 0.25;
			
		}
		else {
			
			(range) ? value -= .025 : value += .025;
			
		}
		
		function trans() {
			
			now = Date.now();
			timed += now - then;
			tick = ease(timed, begin, constant, duration);
			then = now;
			
			if(!opacity || isIE) {

				tick = range ? (tick + 0.5) | 0 : (tick - 0.5) | 0;
					
			}
			else {
				
				tick = tick.toFixed(2);
				
			}
			
			if(tick === pTick) return true;
			
			if(range) {
				
				if(tick >= value) {
					
					style[prop] = finish;
					return false;
					
				}
				
			}
			else {
				
				if(tick <= value) {
				
					style[prop] = finish;
					return false;
					
				}
				
			}
			
			pTick = tick;
			style[prop] = tick + px;
			
			return true;
			
		}
		
		function cancelled() {
	
			return false;
			
		}
		
		if(passed) {
		
			trans.stored = [prop, finish];
			return trans;
			
		}
		else {
		
			cancelled.stored = [prop, finish];
			return cancelled;
			
		}

		
	}
	
	
	// color transitions
	CJ.prototype.color = function(obj, prop, tick, value, duration, ease) {
		
		var pound = value.search("#") !== -1 ? "" : "#",
		finish = pound + value,
		then = Date.now(),
		style = obj.style,
		passed = false,
		starts = [], 
		ends = [], 
		timed = 0,
		i = -1,
		now,
		clr,
		st;
		
		if(tick.search("rgb") !== -1) {
			
			i = -1;
			starts = tick.split("(")[1].split(")")[0].split(",");
			while(++i < 3) starts[i] = parseInt(starts[i]);	
					
		}
		else {
		
			starts = getColor(tick);
			
		}
		
		ends = getColor(value);
		i = -1;
		
		while(++i < 3) {
			
			if(starts[i] !== ends[i]) passed = true;
			
		}
		
		function trans() {
			
			now = Date.now();
			timed += now - then;
			then = now;
			
			tick = ease(timed, 0, 1, duration);
			
			if(tick < 0.99) {
				
				i = -1;
				st = "rgb(";
				
				while(++i < 3) {
					
					clr = starts[i];
					st += (clr + tick * (ends[i] - clr)) | 0;
					if(i < 2) st += ",";
					
				}
				
				style[prop] = st + ")";
				return true;
				
			}
			else {
				
				style[prop] = finish;
				return false;
				
			}
			
		}
		
		function cancelled() {
	
			return false;
			
		}
		
		if(passed) {
		
			trans.stored = [prop, finish];
			return trans;
			
		}
		else {
		
			cancelled.stored = [prop, finish];
			return cancelled;	
					
		}
		
	}
	
	
	// animates bgPosition
	CJ.prototype.bgPosition = function(obj, prop, value, duration, ease) {
		
		var style = obj.style,
		val = style[prop],
		then = Date.now(),
		passed = true,
		ie = isIE,
		timed = 0, 
		finalX,
		finalY,
		finish,
		passed,
		prevX,
		prevY,
		style,
		hasX,
		hasY,
		difX,
		difY,
		tick, 
		now,
		xx,
		yy,
		x, 
		y;
		
		if(!ie) {
			
			tick = (val !== "") ? val.split(" ") : compute(obj, null)["backgroundPosition"].split(" ");
			
			x = tick[0];
			y = tick[1];
			
		}
		else {
			
			x = obj.currentStyle.backgroundPositionX;
			y = obj.currentStyle.backgroundPositionY;
			
			if(positions.test(x) || positions.test(y)) passed = false;
			
			if(x === "left") x = 0;
			if(y === "top") y = 0;
			
		}
		
		if(x.search("%") !== -1) {
				
			if(x !== "0%") passed = false;
			
		}
		
		if(y.search("%") !== -1) {
				
			if(y !== "0%") passed = false;
			
		}
		
		x = parseInt(x);
		y = parseInt(y);
		
		if(value.hasOwnProperty("x")) {
			
			xx = value.x;
			hasX = true;
			
		}
		else {
		
			xx = x;
			hasX = false;
			
		}
		
		if(value.hasOwnProperty("y")) {
			
			yy = value.y;
			hasY = true;
			
		}
		else {
		
			yy = y;
			hasY = false;
			
		}

		hasX = hasX && x !== xx;
		hasY = hasY && y !== yy;
		if(!hasX && !hasY) passed = false;
		
		difX = xx - x;
		difY = yy - y; 
		finalX = xx + "px";
		finalY = yy + "px";
		finish = !ie ? finalX + " " + finalY : [finalX, finalY];
		
		function trans() {
					
			now = Date.now();
			timed += now - then;
			then = now;
			
			tick = ease(timed, 0, 1, duration);
			
			if(tick < 0.99) {
				
				if(hasX) {
					
					xx = ((x + (difX * tick)) + 0.5) | 0;
					
				}
				
				if(hasY) {
					
					yy = ((y + (difY * tick)) + 0.5) | 0;
					
				}
				
				if(xx === prevX && yy === prevY) return true;
				
				prevX = xx;
				prevY = yy; 
				
				if(!ie) {
				
					style.backgroundPosition = xx + "px" + " " + yy + "px";
					
				}
				else {
				
					style.backgroundPositionX = xx + "px";
					style.backgroundPositionY = yy + "px";
					
				}
				
				return true;
				
			}
			else {
				
				if(!ie) {
				
					style[prop] = finish;
					
				}
				else {
				
					style.backgroundPositionX = finalX;
					style.backgroundPositionY = finalY;
					
				}
				
				return false;
				
			}
			
		}
		
		function cancelled() {
	
			return false;
			
		}
		
		if(passed) {
		
			trans.stored = [prop, finish];
			return trans;
			
		}
		else {
		
			cancelled.stored = [prop, finish];
			return cancelled;	
					
		}
		
	}
	
	// stops JS animations
	CJ.prototype.stop = function(complete, callback, popped) {
		
		var element = this.obj;
		
		if(!element) {
			
			clearTimeout(this.delayed);
			
			this.runner(true);
			this.stop(complete, callback);
			
			return;
			
		}
		
		delete element.cj;
		
		if(complete) {
			
			var group = this.transitions, i = group.length, ar, prop;
			
			while(i--) {

				ar = group[i].stored;
				prop = ar[0];
				
				if(!isIE) {
					
					element.style[prop] = ar[1];
					
				}
				else {
					
					switch(prop) {
					
						case "Opacity":
						
							element.filters.item("DXImageTransform.Microsoft.Alpha").Opacity = ar[1] * 100;
						
						break;
						
						case "backgroundPosition":
						
							var style = element.style;
							style.backgroundPositionX = ar[1][0];
							style.backgroundPositionY = ar[1][1];
						
						break;
						
						default:
						
							element.style[prop] = ar[1];
						
						// end default
						
					}
					
				}
				
			}
			
		}
		
		checkElement(element);
		if(callback) callback = this.complete;
		if(!popped) popTween(this, element, callback, this.completeParams);
		
	}
	
	
	// CSS3 Transitions
	this.CJcss = function(obj, to, sets) {
		
		length = dictionary.length;
		
		var $this = obj.cj = dictionary[length++] = this, 
		style = obj.style, transform = transformProp in to;
		
		this.isCss = true;
		this.storage = obj;
		this.complete = sets.callback;
		this.completeParams = sets.callbackParams;
		
		this.runner = function() {
			
			if(!sets.cssStep) {
				
				$this.step();
				
			}
			else {
			
				style.visibility = "visible";
				$this.stepped = setTimeout($this.step, 30);
				
			}
			
		}
		
		this.step = function(added) {
			
			$this.obj = obj;
			
			if(added === true) {
				
				$this.moves = "";	
				return;
				
			}
			
			var j,
			key,
			str,
			cur,
			orig,
			bgPos,
			i = 0,  
			finder,
			moving,
			replaced,
			values = [], 
			tweens = [], 
			current = obj.getAttribute("style") || "",
			duration = sets.duration || defaultDuration,
			easing = (sets.ease || defaultEase).toLowerCase().split("."); 
			
			for(key in to) {
				
				str = key;
				finder = str.match(reg);
				
				if(finder) {
					
					j = finder.length;
						
					while(j--) {
						
						cur = finder[j];
						str = str.replace(new RegExp(cur, "g"), "-" + cur.toLowerCase());
						
					}
					
				}
				
				cur = orig = to[key];
				bgPos = key === "backgroundPosition";
				
				if(!gotcha.test(cur) && key !== "opacity" && !bgPos && !transform) {
					
					cur += "px;";
					
				}
				else if(!bgPos) {
					
					cur += ";";
					
				}
				else {
				
					var x = orig.x, y = orig.y, isX = isNaN(x), isY = isNaN(y);
					
					if(!isX && !isY) {
					
						x += "px";
						y += "px";
						
					}
					else {
					
						var val = style.backgroundPosition,
						tick = (val !== "") ? val.split(" ") : compute(obj, null)["backgroundPosition"].split(" ");
						
						(!isX) ? x += "px" : x = tick[0];
						(!isY) ? y += "px" : y = tick[1];
						
					}

					cur = x + " " + y + ";";
					
				}
				
				values[i] = str + ":" + cur;
				tweens[i++] = str;
				
				if(!current) continue;
				finder = current.search(str);
				
				if(finder !== -1) {
					
					total = current.length - 1;
					j = finder - 1;
					
					while(++j < total) {
						
						if(current[j] === ";") break;
						
					}
					
					current = current.split(current.substring(finder, j + 1)).join("");
					
				}
				
			}
			
			$this.moves = moving = skeleton.replace(regP, tweens.toString()).replace(regD, (duration * .001).toFixed(2)).replace(regE, CeaserEasing[easing[0]][easing[1]]);
			
			replaced = values.toString();
			if(!transform) replaced = replaced.replace(comma, "");
			
			obj.className = obj.className.replace(regT, "");
			obj.addEventListener(css, cssEnded, false);  
			obj.setAttribute("style", current.replace(trim, "") + moving + replaced);
			
		}
		
		if(!sets.fadeIn) {
				
			if(sets.fadeOut) obj.cjFadeOut = true;
				
		}
		else {
			
			obj.cjFadeIn = true;
			style.display = sets.display || "block";
			style.opacity = 0;
			
		}
		
		if(sets.duration === 0) {
		
			this.runner(true);
			this.stop();
			return;
			
		}
		
		if(!sets.cssStep) style.visibility = "visible";
		
		if(accelerate && !transform) {
			
			style["webkitTransform"] = "translate3d(0, 0, 0)";
			style["webkitBackfaceVisibility"] = "hidden";
			style["webkitPerspective"] = 1000;
			
		}
		
		if(!sets.delay) {
			
			this.delayed = setTimeout(this.runner, 30);
			
		}
		else {
			
			this.delayed = setTimeout(this.runner, sets.delay > 30 ? sets.delay : 30);
			
		}
		
	}
	
	// stops a CSS3 Transition
	CJcss.prototype.stop = function(callback, popped) {
		
		var element = this.obj, st;
		if(callback) callback = this.complete;
		
		if(!element) {
			
			clearTimeout(this.delayed);
			clearTimeout(this.stepped);
			
			checkElement(this.storage);
			if(!popped) popTween(this, element, callback, this.completeParams);
			
			return;
			
		}
		
		delete element.cj;
		
		element.removeEventListener(css, cssEnded, false);  
		element.className += " cj-tween";
		element.setAttribute("style", element.getAttribute("style").split(this.moves).join(";").split(";;").join(";"));
		
		checkElement(element);
		if(!popped) popTween(this, element, callback, this.completeParams);
		
	}
	
	// special call for animating percentages 
	this.CJpercentage = function(obj, to, sets) {
		
		length = dictionary.length;
		
		var $this = obj.cj = dictionary[length++] = this;
		
		this.obj = obj;
		this.complete = sets.callback;
		this.completeParams = sets.callbackParams;
		
		this.runner = function() {
			
			var key, 
			i = 0, 
			ar = [],
			prop, begin, end,
			newbs = to["to"],
			from = to["from"],
			duration = sets.duration || defaultDuration,
			easing = (sets.ease || defaultEase).toLowerCase().split(".");
			easing = PennerEasing[easing[0]][easing[1]];
			
			for(prop in from) {
				
				end = parseInt(newbs[prop], 10);
				begin = parseInt(from[prop], 10);
				
				ar[i++] = [end > begin, prop, end, begin];
				
			}
			
			obj.style.visibility = "visible";
			$this.transitions = $this.animate(obj, ar, duration, easing);
			(engineRunning) ? setTimeout(checkEngine, 10) : engine();
			
		}
		
		if(sets.duration === 0) {
			
			this.stop();
			return;
			
		}
		
		if(!sets.delay) {
			
			this.runner();
			
		}
		else {
			
			this.delayed = setTimeout(this.runner, sets.delay);
			
		}
		
	}
	
	CJpercentage.prototype.cycle = function() {
	
		return this.transitions();
		
	}
	
	// animate percentages
	CJpercentage.prototype.animate = function(obj, to, duration, ease) {
	
		var tick, timed = 0, then = Date.now(), now, i, style = obj.style, leg = to.length, itm, begin;
		
		return function(force) {
			
			now = Date.now();
			timed += now - then;
			then = now;
			
			tick = ease(timed, 0, 1, duration);
			i = leg;
			
			if(tick < 0.99 && !force) {
				
				while(i--) {
				
					itm = to[i];
					begin = itm[3];
					
					if(itm[0]) {
						
						style[itm[1]] = (begin + ((itm[2] - begin) * tick)) + "%";
						
					}
					else {
						
						style[itm[1]] = (begin - ((begin - itm[2]) * tick)) + "%";
						
					}
					
				}
				
				return true;
				
			}
			else {
			
				while(i--) {
				
					itm = to[i];
					style[itm[1]] = itm[2] + "%";
					
				}
				
				return false;
				
			}
			
		}
		
	}
	
	// stop a percentage animation
	CJpercentage.prototype.stop = function(complete, callback, popped) {
		
		if("delayed" in this) clearTimeout(this.delayed);
		var element = this.obj;
		
		delete element.cj;
		if(complete && this.transitions) this.transitions(true);
		
		if(callback) callback = this.complete;
		if(!popped) popTween(this, element, callback, this.completeParams);
		
	}
	
	// extends Jacked
	this.CJspecial = function(obj, sets) {
		
		if(!sets || !sets.callback) return;
		
		length = dictionary.length;
		dictionary[length++] = obj.cj = this;
		
		var callback = this.complete = sets.callback,
		easing = sets.ease || defaultEase;
		easing = easing.toLowerCase().split(".");
		easing = PennerEasing[easing[0]][easing[1]];
		
		this.obj = obj;
		this.transitions = this.numbers(obj, sets.duration || defaultDuration, easing, callback);
		
		(engineRunning) ? setTimeout(checkEngine, 10) : engine();
		
	}
	
	// extender cycle
	CJspecial.prototype.cycle = function() {
		
		return this.transitions();
		
	}
	
	// extender step
	CJspecial.prototype.numbers = function(obj, duration, ease, callback) {
		
		var tick, timed = 0, then = Date.now(), now;
		
		return function() {
			
			now = Date.now();
			timed += now - then;
			then = now;
			
			tick = ease(timed, 0, 1, duration);
			
			if(tick < 0.99) {
				
				callback(obj, tick);
				return true;
				
			}
			else {
				
				return false;
				
			}
			
		}
		
	}
	
	// stop extender
	CJspecial.prototype.stop = function(complete, callback, popped, finished) {
		
		var obj = this.obj;
		
		if(!obj) return;
		delete obj.cj;
		
		if(!popped) popTween(this);
		if(complete || finished) this.complete(obj, 1, callback);
		
	}
	
	// if CSS3 fadeIn/fadeOut gets aborted, restore the properties
	function checkElement(element) {
		
		if(element.cjFadeIn) {
			
			delete element.cjFadeIn;
			element.style.opacity = 1;
			element.style.visibility = "visible";
			
		}
		else if(element.cjFadeOut) {
			
			delete element.cjFadeOut;	
			element.style.display = "none";
			
		}
		
	}
	
	// checks to make sure the timeline engine starts
	function checkEngine() {
	
		if(!engineRunning) engine();
		
	}
	
	// removes the tween from memory when finished
	function popTween($this, element, callback, params) {
		
		dictionary.splice(dictionary.indexOf($this), 1);
		length = dictionary.length;
		
		if(callback) callback(element, params);
		
	}
	
	// CSS3 onEnded event
	function cssEnded(event) {
		
		event.stopPropagation();
		
		var $this = this.cj;
		
		if($this) $this.stop($this.complete);
		
	}
	
	// transform a CSS3 percentage call to a regular tween
	function percCSS(obj, to, settings) {
				
		var newTo = {}, prop, goTo = to["to"];
		
		for(prop in goTo) newTo[prop] = goTo[prop];
			
		Jacked.tween(obj, newTo, settings);
		
	}
	
	// checks for requestAnimstionFrame support
	function timeline(req, st) {
		
		return this["webkit" + req + st] || this["moz" + req + st] || this["o" + req + st] || this[req + st] || null;
		
	}
	
	// parse hex color
	// credit: http://www.bitstorm.org/jquery/color-animation/
	function getColor(color) {
			
		var matched;

		if(matched = color1.exec(color)) {
			
			return [parseInt(matched[1], 16), parseInt(matched[2], 16), parseInt(matched[3], 16), 1];

		} 
		else if(matched = color2.exec(color)) {
			
			return [parseInt(matched[1], 16) * 17, parseInt(matched[2], 16) * 17, parseInt(matched[3], 16) * 17, 1];

		} 
		
	}
	
	// IE9 uses a fast timer, legacy IE uses a slow timer
	function getSpeed() {
	
		var point = agent.search("msie");
	
		if(point === -1) {
			
			return [33.3, 0];
			
		}
		else {
			
			var ver = parseInt(agent.substr(point + 4, point + 5)), speed = ver >= 9 ? 16.6 : 33.3;
			
			return [speed, ver];
			
		}
		
	}
	
	// sets the default tween behaviour (CSS3, timeline, timer)
	function setDefaults() {
		
		for(var prop in defaults) {
			
			if(prop === browser) {		
					
				useCSS = defaults[prop];
				break;
				
			}
			
		}
		
	}
	
	// tests for mobile support
	function getMobile() {
	
		if(!"ontouchend" in document) {
			
			return null;	
			
		}
		else {
			
			if(agent.search("iphone") !== -1 || agent.search("ipad") !== -1) {
				
				return "ios";
				
			}
			else if(agent.search("android") !== -1) {
			
				return "android";
				
			}
			else if(agent.search("msie") !== -1) {
			
				return "winMobile";
				
			}
			
			return null;
			
		}
		
	}
	
	// tests for CSS3 Transition support
	function getCSS() {
		
		if("WebkitTransition" in temp) {
			
			return ["webkitTransitionEnd", "-webkit-transition", agent.search("chrome") !== -1 ? "chrome" : "safari"];
			
		}
		else if("MozTransition" in temp) {
		
			return ["transitionend", "-moz-transition", "firefox"];
			
		}
		else if("OTransition" in temp) {
		
			return ["oTransitionEnd", "-o-transition", "opera"];
			
		}
		else if("MSTransition" in temp) {
		
			return ["msTransitionEnd", "-ms-transition", "ie"];
			
		}
		else if("transition" in temp) {
			
			return ["transitionEnd", "transition", null];
			
		}
		
		return null;

	}
	
	// tests for CSS3 transform support
	function getTransform() {
	
		if("WebkitTransform" in temp) {
	
			return "WebkitTransform";
			
		}
		else if("MozTransform" in temp) {
		
			return "MozTransform";
			
		}
		else if("OTransform" in temp) {
		
			return "OTransform";
			
		}
		else if("msTransform" in temp) {
		
			return "msTransform";
			
		}
		else if("transform" in temp) {
			
			return "transform";
			
		}
		
		return null;
		
	}

	
	/*
	TERMS OF USE - EASING EQUATIONS
	
	Open source under the BSD License.
	
	Copyright Ãƒâ€šÃ‚Â© 2001 Robert Penner
	All rights reserved.
	
	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
	
		Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
		Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
		Neither the name of the author nor the names of contributors may be used to endorse or promote products derived from this software without specific prior written permission.
	
	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/
	
	var PennerEasing = {
		
		linear: {
			
			easenone: function(t, b, c, d) {
		
				return c * t / d + b;
				
			},
	
			easein: function(t, b, c, d) {
				
				return c * t / d + b;
				
			},
			
			easeout: function(t, b, c, d) {
				
				return c * t / d + b;
				
			},
			
			easeinout: function(t, b, c, d) {
				
				return c * t / d + b;
				
			}
		
		},
		
		quint: {
			
			easeout: function (t, b, c, d) {
				
				return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
				
			},
			
			easein: function(t, b, c, d) {
				
				return c * (t /= d) * t * t * t * t + b;
				
			},
			
			easeinout: function(t, b, c, d) {
				
				return ((t /= d / 2) < 1) ? c / 2 * t * t * t * t * t + b : c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
				
			}
			
		},
			
		quad: {
			
			easein: function (t, b, c, d) {
			
				return c * (t /= d) * t + b;
			
			},
			
			easeout: function (t, b, c, d) {
				
				return -c * (t /= d) * (t - 2) + b;
			
			},
			
			easeinout: function (t, b, c, d) {
				
				return ((t /= d / 2) < 1) ? c / 2 * t * t + b : -c / 2 * ((--t) * (t - 2) - 1) + b;
			
			}	
			
		},
		
		quart: {
		
			easein: function(t, b, c, d) {
				
				return c * (t /= d) * t * t * t + b;
				
			},
			
			easeout: function(t, b, c, d) {
				
				return -c * ((t = t / d - 1) * t * t * t - 1) + b;
				
			},
			
			easeinout: function(t, b, c, d) {
				
				return ((t /= d / 2) < 1) ? c / 2 * t * t * t * t + b : -c / 2 * ((t -= 2) * t * t * t - 2) + b;
				
			}
			
		},
		
		cubic: {
		
			easein: function(t, b, c, d) {
				
				return c * (t /= d) * t * t + b;
				
			},
			
			easeout: function(t, b, c, d) {
				
				return c * ((t = t / d - 1) * t * t + 1) + b;
				
			},
			
			easeinout: function(t, b, c, d) {
				
				return ((t /= d / 2) < 1) ? c / 2 * t * t * t + b : c / 2 * ((t -= 2) * t * t + 2) + b;
				
			}
			
		},
		
		circ: {
		
			easein: function(t, b, c, d) {
				
				return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
				
			},
			
			easeout: function(t, b, c, d) {
				
				return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
				
			},
			
			easeinout: function(t, b, c, d) {
				
				return ((t /= d / 2) < 1) ? -c / 2 * (Math.sqrt(1 - t * t) - 1) + b : c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
				
			}
			
		},
		
		sine: {
		
			easein: function(t, b, c, d) {
				
				return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
				
			},
			
			easeout: function(t, b, c, d) {
				
				return c * Math.sin(t / d * (Math.PI / 2)) + b;
				
			},
			
			easeinout: function(t, b, c, d) {
				
				return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
				
			}
			
		},
		
		expo: {
		
			easein: function(t, b, c, d) {
				
				return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
			
			},
			
			easeout: function(t, b, c, d) {
				
				return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
				
			},
			
			easeinout: function(t, b, c, d) {
				
				if(t === 0) return b;
				if(t === d) return b + c;
				if((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
				
				return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
				
			}
			
		}
		
	},
	
	// credit: http://matthewlein.com/ceaser/
	
	CeaserEasing = {
		
		linear: {
			
			easenone: "0.250, 0.250, 0.750, 0.750",
			easein: "0.420, 0.000, 1.000, 1.000",
			easeout: "0.000, 0.000, 0.580, 1.000",
			easeinout: "0.420, 0.000, 0.580, 1.000"
			
		},
		
		quint: {
			
			easein: "0.755, 0.050, 0.855, 0.060",
			easeout: "0.230, 1.000, 0.320, 1.000",
			easeinout: "0.860, 0.000, 0.070, 1.000"
			
		},
		
		quad: {
			
			easein: "0.550, 0.085, 0.680, 0.530",
			easeout: "0.250, 0.460, 0.450, 0.940",
			easeinout: "0.455, 0.030, 0.515, 0.955"
			
		},
		
		quart: {
			
			easein: "0.895, 0.030, 0.685, 0.220",
			easeout: "0.165, 0.840, 0.440, 1.000",
			easeinout: "0.770, 0.000, 0.175, 1.000"
			
		},
		
		cubic: {
			
			easein: "0.550, 0.055, 0.675, 0.190",
			easeout: "0.215, 0.610, 0.355, 1.000",
			easeinout: "0.645, 0.045, 0.355, 1.000"
			
		},
		
		circ: {
			
			easein: "0.600, 0.040, 0.980, 0.335",
			easeout: "0.075, 0.820, 0.165, 1.000",
			easeinout: "0.785, 0.135, 0.150, 0.860"
			
		},
		
		sine: {
			
			easein: "0.470, 0.000, 0.745, 0.715",
			easeout: "0.390, 0.575, 0.565, 1.000",
			easeinout: "0.445, 0.050, 0.550, 0.950"
			
		},
		
		expo: {
		
			easein: "0.950, 0.050, 0.795, 0.035",
			easeout: "0.190, 1.000, 0.220, 1.000",
			easeinout: "1.000, 0.000, 0.000, 1.000"
			
		}
		
	};
	
	element = speeds = temp = null;

	
})(window);


// the jQuery plugin
if(typeof jQuery !== "undefined") {

	(function($) {
		
		$.fn.jacked = function(to, settings) {
			
			return this.each(createJack, [to, settings]);
			
		}
		
		$.fn.fadeInJacked = function(settings) {
			
			return this.each(showJack, [settings]);
			
		}
		
		$.fn.fadeOutJacked = function(settings) {
			
			return this.each(hideJack, [settings]);
			
		}
		
		$.fn.transformJacked = function(to, settings, fallback) {
			
			return this.each(transformJack, [to, settings, fallback]);
			
		}
		
		$.fn.percentageJacked = function(to, settings) {
			
			return this.each(percentageJack, [to, settings]);
			
		}
		
		$.fn.stopJacked = function(complete, callback) {
		
			return this.each(stopJack, [complete, callback]);
			
		}
		
		$.fn.stopJackedSet = function(complete) {
		
			return this.each(stopSet, [complete]);
			
		}
		
		function createJack(to, sets) {
		
			Jacked.tween(this, to, sets);
			
		}
		
		function showJack(sets) {
		
			Jacked.fadeIn(this, sets);
			
		}
		
		function hideJack(sets) {
		
			Jacked.fadeOut(this, sets);
			
		}
		
		function transformJack(to, sets, fallback) {
		
			Jacked.transform(this, to, sets, fallback);
			
		}
		
		function percentageJack(to, sets) {
		
			Jacked.percentage(this, to, sets);
			
		}
		
		function stopJack(complete, callback) {
		
			Jacked.stopTween(this, complete, callback);
			
		}
		
		function stopSet(complete) {
		
			recursiveStop($(this), complete);
			
		}
		
		function recursiveStop($this, complete) {
		
			$this.children().each(stopItem, [complete]);
			
		}
		
		function stopItem(complete) {
		
			Jacked.stopTween(this, complete);
			recursiveStop($(this), complete); 
			
		}
		
	})(jQuery);
	
}














