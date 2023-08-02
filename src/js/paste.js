
document.onpaste = function (event) {
  var item = (event.clipboardData || event.originalEvent.clipboardData).items[0];
  if (item && item.kind === 'file') {
    editor.import.importFile(item.getAsFile(), () => {
      if (editor.copySelected() !== false) {
        navigator.clipboard.writeText("");
      }
    })
  } else {
    editor.pasteSelected();
  }

}