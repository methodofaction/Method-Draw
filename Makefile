NAME=method-draw
VERSION=2.6
PACKAGE=$(NAME)
MAKEDOCS=naturaldocs/NaturalDocs
CLOSURE=build/tools/closure-compiler.jar
YUICOMPRESSOR=build/tools/yuicompressor-2.4.7.jar

# All files that will be compiled by the Closure compiler.

JS_FILES=\
  js-hotkeys/jquery.hotkeys.min.js \
  jquerybbq/jquery.bbq.min.js \
  svgicons/jquery.svgicons.js \
  jgraduate/jquery.jgraduate.min.js \
  spinbtn/JQuerySpinBtn.min.js \
  touch.js \
  contextmenu/jquery.contextmenu.js \
  browser.js \
  svgtransformlist.js \
  math.js \
  units.js \
  svgutils.js \
  sanitize.js \
  history.js \
  select.js \
  draw.js \
  path.js \
  svgcanvas.js \
  svg-editor.js \
  contextmenu.js \
  locale/locale.js \
  jquery-ui/jquery-ui-1.8.17.custom.min.js \
  jgraduate/jpicker.min.js \
  mousewheel.js \
	extensions/ext-eyedropper.js \
	extensions/ext-markers.js \
	extensions/ext-grid.js \
	extensions/ext-imagelib.js \

CSS_FILES=\
  fonts.css \
	jgraduate/css/jPicker.css \
  jgraduate/css/jgraduate.css \
  svg-editor.css \
  spinbtn/JQuerySpinBtn.css \

JS_INPUT_FILES=$(addprefix editor/, $(JS_FILES))
CSS_INPUT_FILES=$(addprefix editor/, $(CSS_FILES))
JS_BUILD_FILES=$(addprefix $(PACKAGE)/, $(JS_FILES))
CSS_BUILD_FILES=$(addprefix $(PACKAGE)/, $(CSS_FILES))
CLOSURE_JS_ARGS=$(addprefix --js , $(JS_INPUT_FILES))
COMPILED_JS=editor/svgedit.compiled.js
COMPILED_CSS=editor/svgedit.compiled.css

all: release

# The build directory relies on the JS being compiled.
$(PACKAGE): $(COMPILED_JS) $(COMPILED_CSS)
	rm -rf config
	mkdir config
	if [ -x $(MAKEDOCS) ] ; then $(MAKEDOCS) -i editor/ -o html docs/ -p config/ -oft -r ; fi

	# Make build directory and copy all editor contents into it
	mkdir -p $(PACKAGE)
	cp -r editor/* $(PACKAGE)

	# Remove all hidden .svn directories
	-find $(PACKAGE) -name .svn -type d | xargs rm -rf {} \;
	-find $(PACKAGE) -name .git -type d | xargs rm -rf {} \;

	# Create the release version of the main HTML file.
	build/tools/ship.py --i=editor/svg-editor.html --on=svg_edit_release > $(PACKAGE)/svg-editor.html

# NOTE: Some files are not ready for the Closure compiler: (jquery)
# NOTE: Our code safely compiles under SIMPLE_OPTIMIZATIONS
# NOTE: Our code is *not* ready for ADVANCED_OPTIMIZATIONS
# NOTE: WHITESPACE_ONLY and --formatting PRETTY_PRINT is helpful for debugging.

$(COMPILED_CSS):
	cat $(CSS_INPUT_FILES) > editor/temp.css;
	java -jar $(YUICOMPRESSOR) editor/temp.css -o $(COMPILED_CSS) --line-break 0;

$(COMPILED_JS):
	java -jar $(CLOSURE) \
		--compilation_level SIMPLE_OPTIMIZATIONS \
		$(CLOSURE_JS_ARGS) \
		--js_output_file $(COMPILED_JS)

compile: $(COMPILED_JS) $(COMPILED_CSS)

release: $(PACKAGE)

deploy:
	cp -R  method-draw  ../Method.ac/public

clean:
	rm -rf config
	rm -rf $(PACKAGE)
	rm -rf $(COMPILED_JS)
	rm -rf $(COMPILED_CSS)