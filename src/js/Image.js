MD.Image = function(){

  const reader = new FileReader();

  function importImage(e){
    const file = (e.type === "drop") ? e.dataTransfer.files[0] : this.files[0];
    if (!file || file.type.indexOf("image") ) return alert("That doesn't seem to be an image");
    
    if(file.type.indexOf("svg") != -1) importSvg(file)
    else importImageFile(file);
  }

  function importImageFile(file) {
    
    reader.onloadend = function(e) {
      // lets insert the new image until we know its dimensions
      insertNewImage = function(img_width, img_height){
          var newImage = svgCanvas.addSvgElementFromJson({
          "element": "image",
          "attr": {
            "x": 0,
            "y": 0,
            "width": img_width,
            "height": img_height,
            "id": svgCanvas.getNextId(),
            "style": "pointer-events:inherit"
          }
        });
        svgCanvas.setHref(newImage, e.target.result);
        svgCanvas.selectOnly([newImage])
        svgCanvas.alignSelectedElements("m", "page")
        svgCanvas.alignSelectedElements("c", "page")
        updateContextPanel();
      }
      // put a placeholder img so we know the default dimensions
      var img_width = 100;
      var img_height = 100;
      var img = new Image()
      img.src = e.target.result
      document.body.appendChild(img);
      img.onload = function() {
        img_width = img.offsetWidth
        img_height = img.offsetHeight
        insertNewImage(img_width, img_height);
        document.body.removeChild(img);
      }
    };
    reader.readAsDataURL(file)
  }

  function importSvgFile(file){
    reader.onloadend = function(e) {
      importSvg(e.target.result);
    };
    reader.readAsText(file);
  }

  function importSvg(string) {
    svgCanvas.importSvgString(e.target.result, true);
    svgCanvas.alignSelectedElements("m", "page")
    svgCanvas.alignSelectedElements("c", "page")
  }

  const workarea = document.getElementById("workarea");

  workarea.addEventListener('dragenter', function(e){
    e.stopPropagation();
    e.preventDefault();
    workarea.style.transform = "scale(1.1)";
  }, false)

  workarea.addEventListener('dragleave', function(e){
    e.stopPropagation();
    e.preventDefault();
    workarea.style.transform = "scale(1)";
  }, false)

  workarea.addEventListener('drop', function(e){
    e.stopPropagation();
    e.preventDefault();
    workarea.style.transform = "scale(1)";
    importImage(e);
  }, false)


  this.importImage = importImage;
}         

