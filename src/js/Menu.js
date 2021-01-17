MD.Menu = function(){
  // top dropdown menus
  $('.menu_title')
    .on('mousedown', function() {
      $("#tools_shapelib").hide()
      $("#menu_bar").toggleClass('active');
      $('.menu').removeClass('open');
      $(this).parent().addClass('open');
    })
    .on('mouseover', function() {
       $('.menu').removeClass('open');
       $(this).parent().addClass('open');
     });
  
  function blink(e) {
    e.target.style.background = "#fff";
    setTimeout(function(){e.target.style.background = "#ddd";}, 50);
    setTimeout(function(){e.target.style.background = "#fff";}, 150);
    setTimeout(function(){e.target.style.background = "#ddd";}, 200);
    setTimeout(function(){e.target.style.background = "";}, 200);
    setTimeout(function(){$('#menu_bar').removeClass('active')}, 250);
    return false;
  }

  function close(e){
    if (e.target.nodeName && e.target.nodeName.toLowerCase() === "input") return false;
    if (!$(e.target).hasClass("menu_title") && !$(e.target).parent().hasClass("menu_title")) {
      if(!$(e.target).hasClass("disabled") && $(e.target).hasClass("menu_item")) blinker(e)
      else $('#menu_bar').removeClass('active')
    } 
  }

  function flash($menu){
    var menu_title = $menu.prev();
    menu_title.css({
      "background": "white",
      "color": "black"
    });
    setTimeout(function(){menu_title.removeAttr("style")}, 200);
  }
  
  $('.menu_item').on('click', blink);
  $("body").on('mousedown', close);

  this.flash = flash;

}
