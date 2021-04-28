MD.Modal = function(config){

  const el = document.createElement("div");
  el.classList.add("modal", "hidden");

  const item = document.createElement("div");
  item.innerHTML = config.html;
  item.classList.add("modal-item");
  el.appendChild(item);

  el.addEventListener("click", close);
  
  item.addEventListener("click", function(e){
    e.stopPropagation();
  });

  document.body.appendChild(el);



  function open(){
    el.classList.remove("hidden");
  }

  function close(){
    el.classList.add("hidden");
  }

  function confirm(cb){
    if (cb) cb();
    close();
  }

  this.open = open;
  this.close = close;
  this.confirm = confirm;
  this.cb = config.cb || function(){};
  this.el = el;

  if (config.js) {
    const el = this.el;
    config.js(el);
  }

  return this

}