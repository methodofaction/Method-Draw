MD.ContextMenu = function(){
  $("#workarea").contextMenu({
        menu: 'cmenu_canvas',
        inSpeed: 0
      },
      function(action, el, pos) {
        switch ( action ) {
          case 'delete':
            editor.deleteSelected();
            break;
          case 'cut':
            editor.cutSelected();
            break;
          case 'copy':
            editor.copySelected();
            break;
          case 'paste':
            editor.pasteSelected();
            break;
          case 'paste_in_place':
            svgCanvas.pasteElements('in_place');
            break;
          case 'group':
            editor.groupSelected();
            break;
          case 'ungroup':         
            editor.ungroupSelected();  
            break;
          case 'move_front':
            editor.moveToTopSelected();
            break;
          case 'move_up':
            editor.moveUpSelected();
            break;
          case 'move_down':
            editor.moveDownSelected();
            break;
          case 'move_back':
            editor.moveToBottomSelected();
            break;
            default:
            if(svgedit.contextmenu && svgedit.contextmenu.hasCustomHandler(action)){
              svgedit.contextmenu.getCustomHandler(action).call();
              }
              break;
        }
        
    });
    
    $('.contextMenu li').mousedown(function(ev) {
      ev.preventDefault();
    })
    
    $('#cmenu_canvas li').disableContextMenu();
    $("#cmenu_canvas").enableContextMenuItems('#delete,#cut,#copy');
}