(function () {
    var xfetch = function (resource, init) {
        init = init || {};
        if (["post", "put", "delete"].indexOf(init.method) !== -1) {
            console.log("PUT, POST, DELETE");
        }
        return fetch(resource, init);
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
            loadDrawing: function (name) {
                const resp = api("GET", `./api/drawings/${name}`);
                return resp;
            }
        },
    };
})();
