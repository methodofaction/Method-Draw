NAME=svg-edit
VERSION=2.6
PACKAGE=$(NAME)-$(VERSION)
MAKEDOCS=naturaldocs/NaturalDocs
CLOSURE=build/tools/closure-compiler.jar
YUICOMPRESSOR=build/tools/yuicompressor.jar
ZIP=zip

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

CSS_FILES=\
  jgraduate/css/jPicker.css \
  jgraduate/css/jgraduate.css \
  svg-editor.css \
  spinbtn/JQuerySpinBtn.css \

JS_INPUT_FILES=$(addprefix editor/, $(JS_FILES))
CSS_INPUT_FILES=$(addprefix editor/, $(CSS_FILES))
JS_BUILD_FILES=$(addprefix build/$(PACKAGE)/, $(JS_FILES))
CSS_BUILD_FILES=$(addprefix build/$(PACKAGE)/, $(CSS_FILES))
CLOSURE_JS_ARGS=$(addprefix --js , $(JS_INPUT_FILES))
COMPILED_JS=editor/svgedit.compiled.js
COMPILED_CSS=editor/svgedit.compiled.css

all: release

# The build directory relies on the JS being compiled.
build/$(PACKAGE): $(COMPILED_JS) $(COMPILED_CSS)
	rm -rf config
	mkdir config
	if [ -x $(MAKEDOCS) ] ; then $(MAKEDOCS) -i editor/ -o html docs/ -p config/ -oft -r ; fi

	# Make build directory and copy all editor contents into it
	mkdir -p build/$(PACKAGE)
	cp -r editor/* build/$(PACKAGE)

	# Remove all hidden .svn directories
	-find build/$(PACKAGE) -name .svn -type d | xargs rm -rf {} \;
	-find build/$(PACKAGE) -name .git -type d | xargs rm -rf {} \;

	# Create the release version of the main HTML file.
	build/tools/ship.py --i=editor/svg-editor.html --on=svg_edit_release > build/$(PACKAGE)/svg-editor.html

# NOTE: Some files are not ready for the Closure compiler: (jquery)
# NOTE: Our code safely compiles under SIMPLE_OPTIMIZATIONS
# NOTE: Our code is *not* ready for ADVANCED_OPTIMIZATIONS
# NOTE: WHITESPACE_ONLY and --formatting PRETTY_PRINT is helpful for debugging.

$(COMPILED_CSS):
	java -jar $(YUICOMPRESSOR) \
		$(CSS_INPUT_FILES) \
		-o $(COMPILED_CSS)

$(COMPILED_JS):
	java -jar $(CLOSURE) \
		--compilation_level SIMPLE_OPTIMIZATIONS \
		$(CLOSURE_JS_ARGS) \
		--js_output_file $(COMPILED_JS)

compile: $(COMPILED_JS) $(COMPILED_CSS)

release: build/$(PACKAGE)
	cd build ; $(ZIP) $(PACKAGE).zip -r $(PACKAGE) ; cd ..
	tar -z -c -f build/$(PACKAGE)-src.tar.gz \
	    --exclude='\.svn' \
	    --exclude='\.git' \
	    --exclude='build/*' \
	    .

deploy:
	cp -R  build/svg-edit-2.6  ../Method.ac/public

clean:
	rm -rf config
	rm -rf build/$(PACKAGE)
	#rm -rf build/firefox
	#rm -rf build/opera
	#rm -rf build/$(PACKAGE).zip
	#rm -rf build/$(PACKAGE)-src.tar.gz
	#rm -rf build/$(PACKAGE).xpi
	#rm -rf build/$(PACKAGE).wgt
	rm -rf $(COMPILED_JS)
	rm -rf $(COMPILED_CSS)