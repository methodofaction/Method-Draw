const utils = {};

utils.findGetParameter = function(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

utils.throttle = function (callback, limit) {
    var waiting = false;                
    return function () {                
      if (!waiting) {                   
        callback.apply(this, arguments);
        waiting = true;                 
        setTimeout(function () {        
          waiting = false;              
        }, limit);
      }
    }
  }