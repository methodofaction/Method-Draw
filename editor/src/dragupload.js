window.onload = function () {
  document.querySelector('body').addEventListener('drop', function(e) {
    e.preventDefault();
    var reader = new FileReader();
    reader.onload = function(evt) {
      //document.querySelector('img').src = evt.target.result;
    };

    reader.readAsDataURL(e.dataTransfer.files[0]);
  }, false);
}