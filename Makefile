NAME=method-draw
VERSION=2.6
PACKAGE=$(NAME)
MAKEDOCS=naturaldocs/NaturalDocs
CLOSURE=build/tools/closure-compiler.jar
YUICOMPRESSOR=build/tools/yuicompressor-2.4.7.jar

# All files that will be compiled by the Closure compiler.

JS_FILES=\
	lib/touch.js \
	lib/js-hotkeys/jquery.hotkeys.min.js \
	lib/jquerybbq/jquery.bbq.min.js \
	icons/jquery.svgicons.js \
	lib/jgraduate/jquery.jgraduate.js \
	lib/contextmenu/jquery.contextMenu.js \
	src/browser.js \
	src/svgtransformlist.js \
	src/math.js \
	src/units.js \
	src/svgutils.js \
	src/sanitize.js \
	src/history.js \
	src/select.js \
	src/draw.js \
	src/path.js \
	src/svgcanvas.js \
	src/method-draw.js \
	lib/jquery-draginput.js \
	lib/contextmenu.js \
	lib/jquery-ui/jquery-ui-1.8.17.custom.min.js \
	lib/jgraduate/jpicker.min.js \
	lib/mousewheel.js \
	extensions/ext-eyedropper.js \
	extensions/ext-grid.js \
	extensions/ext-shapes.js \
	lib/requestanimationframe.js \
	lib/taphold.js

CSS_FILES=\
	lib/jgraduate/css/jPicker.css \
	lib/jgraduate/css/jgraduate.css \
	css/method-draw.css \

JS_INPUT_FILES=$(addprefix editor/, $(JS_FILES))
CSS_INPUT_FILES=$(addprefix editor/, $(CSS_FILES))
JS_BUILD_FILES=$(addprefix $(PACKAGE)/, $(JS_FILES))
CSS_BUILD_FILES=$(addprefix $(PACKAGE)/, $(CSS_FILES))
CLOSURE_JS_ARGS=$(addprefix --js , $(JS_INPUT_FILES))
COMPILED_JS=editor/method-draw.compiled.js
COMPILED_CSS=editor/css/method-draw.compiled.css

all: release

# The build directory relies on the JS being compiled.
$(PACKAGE): $(COMPILED_JS) $(COMPILED_CSS)
	rm -rf config;
	mkdir config;
	if [ -x $(MAKEDOCS) ] ; then $(MAKEDOCS) -i editor/ -o html docs/ -p config/ -oft -r ; fi

	# Make build directory and copy all editor contents into it
	mkdir -p $(PACKAGE)
	cp -r editor/* $(PACKAGE)

	# Remove all hidden .svn directories
	-find $(PACKAGE) -name .svn -type d | xargs rm -rf {} \;
	-find $(PACKAGE) -name .git -type d | xargs rm -rf {} \;

	# Create the release version of the main HTML file.
	build/tools/ship.py --i=editor/index.html --on=svg_edit_release > $(PACKAGE)/index.html

# NOTE: Some files are not ready for the Closure compiler: (jquery)
# NOTE: Our code safely compiles under SIMPLE_OPTIMIZATIONS
# NOTE: Our code is *not* ready for ADVANCED_OPTIMIZATIONS
# NOTE: WHITESPACE_ONLY and --formatting PRETTY_PRINT is helpful for debugging.

$(COMPILED_CSS):
	cat $(CSS_INPUT_FILES) > editor/temp.css;
	java -jar $(YUICOMPRESSOR) editor/temp.css -o $(COMPILED_CSS) --line-break 0;
	rm editor/temp.css;

$(COMPILED_JS):
	java -jar $(CLOSURE) \
		--compilation_level SIMPLE_OPTIMIZATIONS \
		$(CLOSURE_JS_ARGS) \
		--js_output_file $(COMPILED_JS)
	rm editor/method-draw.compiled.js

compile: $(COMPILED_JS) $(COMPILED_CSS)

release: $(PACKAGE)

clean:
	rm -rf config
	rm -rf $(PACKAGE)
	rm -rf $(COMPILED_JS)
	rm -rf $(COMPILED_CSS)
