// TODO as is paste is currently not working
document.onpaste = function(event){
  var items = (event.clipboardData || event.originalEvent.clipboardData).items;
  for (index in items) {
    var item = items[index];
    if (item.kind === 'file') {
      var blob = item.getAsFile();
      var reader = new FileReader();
      reader.onload = function(event){}; // remove?
      reader.readAsDataURL(blob);
    }
  }
}