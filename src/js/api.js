(function () {
    var xfetch = function (resource, init) {
      init = init || {};
      if (["post", "put", "delete"].indexOf(init.method) !== -1) {
        console.log("PUT, POST, DELETE");
      }
      return fetch(resource, init)
        .then((res) => res)
        .catch((err) => {
          return {status: 401}
        });
    };
    var api = function (method, endpoint, data) {
      const resp = xfetch(endpoint, {
        method: method,
        body: data,
      });
      return resp;
    };
  
    var json = function (res) {
      return res.json();
    };
  
    window.api = {
      app: {
        listDrawings: function () {
          const resp = api("GET", `./api/drawings`);
          return resp;
        },
        saveDrawing: function (formData) {
          const resp = api("POST", `./api/save`, formData);
          return resp;
        },
        saveDrawingAs: function (formData) {
          const resp = api("POST", `./api/saveas`, formData)
          return resp;
        },
        loadDrawing: function (name) {
          const resp = api("GET", `./api/drawings/${name}`);
          return resp;
        },
        getMetadata: function (name) {
          const resp = api("GET", `./api/metadata/${name}`);
          return resp;
        },
        deleteDrawing: function (name) {
          const resp = api("DELETE", `./api/drawings/${name}`);
          return resp;
        },
        modifyPublicity: function (name, isPublic) {
          const bod = { public: isPublic };
          const resp = api("PUT", `./api/public/${name}`, JSON.stringify(bod));
          return resp;
        },
        loadPublicDrawing: function (name) {
          const resp = api("GET", `/public/bytes/${name}`);
          return resp;
        },
      },
    };
  })();