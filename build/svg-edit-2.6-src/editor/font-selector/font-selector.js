var Smm = {
    fontDirectory: 'font-selector/fonts/',
    imageDirectory: 'font-selector/fonts/font-images/',
    selectorId: 'font-selector',
    visible: false //Status of font-selector
};

Smm.fonts = {
    Junction: {
        cssFile: 'Junction.css',
        imageFile: 'junction.png',
        loadType: 'custom',
        loaded: true
    },
    "League Gothic": {
        cssFile: 'League_Gothic.css',
        imageFile: 'league_gothic.png',
        loadType: 'custom',
        loaded: false
    },
    Fanwood: {
        cssFile: 'Fanwood.css',
        imageFile: 'fanwood.png',
        loadType: 'custom',
        loaded: false
    },
};


Smm.loadFont = function(fontFace, active, loading){
    console.log('Loading font: ' + fontFace);
    if(Smm.fonts[fontFace]['loaded'] === false){
        console.log('Font not loaded... Getting css file now');
        Smm.fonts[fontFace]['loaded'] = true;
        
        WebFont.load({
            custom: { 
                families: [fontFace],
                urls: [ Smm.fontDirectory + Smm.fonts[fontFace]['cssFile'] ] 
            },
            loading: loading,
            active: active
        });
    }
    else {
        console.log('Font already loaded, using file.');
        active();
    }
};

Smm.init = function(divId){
    $('#tool_font_family').css('position','relative').append('<div id="font-selector"></div>');
    var selector = $('#'+Smm.selectorId);
    $.each(Smm.fonts, function(index,value){
        selector.append('<div class="font-item" font-name="' + index + '"><img src="' + Smm.imageDirectory + value['imageFile'] + '" /></div>');
    });
    
    $("#close-selector").click(Smm.hideSelector);
    $(".font-item").click(Smm.selectFont);
    $('#font_family_dropdown button').unbind('mousedown').bind('mousedown',function(event){
        if (Smm.visible === false) {
            Smm.showSelector();
        } else {
            Smm.hideSelector();
        }
    });
    $(window).mouseup(function(evt) {
        if(!Smm.visible === true) {
            Smm.hideSelector();
        }
        Smm.visible = false;
    });
    $('#'+Smm.selectorId).mouseup(function(){
        Smm.showSelector();
    });
};

Smm.showSelector = function(){
    $('#'+Smm.selectorId).show();
    Smm.visible = true;
};

Smm.hideSelector = function(){
    $('#'+Smm.selectorId).hide();
    Smm.visible = false;
};

Smm.selectFont = function(){
    var font = $(this).attr('font-name');
    var active = function(){
        svgCanvas.setFontFamily(font); 
    };
    var loading = function(){

    };
    Smm.loadFont(font, active, loading);
    Smm.hideSelector();
}