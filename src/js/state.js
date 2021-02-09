function State(){

  const _self = this;
  const tenThousandThings = dao.map(thing => thing.name);
  const saveableKeys = dao.filter(thing => thing.save).map(thing => thing.name);

  this.data = _loadData();
  
  this.set = (key, val) => {
    key = key.split("-")[0] || key;
    if (tenThousandThings.indexOf(key) === -1) return console.warn( key + " not implemented");
    const archetype = dao.find(thing => thing.name === key);
    val = _self.data[_getKey(key)] = archetype.clean(val);
    if (~saveableKeys.indexOf(key)) _save(_getKey(key), val);
    _self[key](val);
  }

  this.get = (key) => {
    return _self.data[_getKey(key)];
  }

  this.refresh = ()     => { dao.forEach(thing => this[thing.name]( this.get(thing.name) ) ); }
  
  // canvas data
  this.canvasId = (id)      => {/* noop */}
  this.canvasMode = (mode)  => { editor.toolbar.setMode(mode) }
  this.canvasSize = (size)  => { editor.canvas.resize(...size.map(Number)) }
  this.canvasContent = (svgString)  => { /* noop */ }
  this.canvasRulers = (bool)  => { /* noop */ }


  this.clean = (warn = true) => {
    if (warn) {
      const confirmed = confirm("Deletes all configuration and text, are you sure?");
      if (!confirmed) return;
    }

    Object.keys(localStorage).forEach(key => localStorage.removeItem(key));
    write.reset();
  }

  // INNER UTILS

  function _save(key, val) {
    // basic checks
    //console.log(key, val)
    if (val === undefined || val === null) throw "wont save nuthin, " + key + " " + val;
    localStorage.setItem("write" + "-" + key, val.toString());
  }

  function _getKey(name) {
    const key = name.indexOf("page") !== -1
          || name.indexOf("assignment") !== -1
          ? name + ID
          : name + "-0"; // system
     return key;
  }

  function _loadData() {

    const data = dao.map(thing => {
      return {
        [_getKey(thing.name)]: _getValue(_getKey(thing.name), utils.findGetParameter(thing.name) || thing.default)
      }
    });
    return Object.assign({}, ...data);
  };

  function _getValue(key, def) {
    const item = localStorage.getItem("write-" + key) || def;
    const archetype = dao.find(thing => thing.name === key.split("-")[0]);
    if (archetype) return archetype.clean(item);
    else throw "Unkown archetype";
  }

}