
(function () {
    const close = () => {
        const currOpenNodeMenu = document.querySelector('#curr_open_drawing');

        if (currOpenNodeMenu) {
            currOpenNodeMenu.remove();
        }

        // remove delete node
        const deleteNode = document.getElementById('tool_cdelete');

        if (deleteNode) {
            deleteNode.remove();
        }

        // set currOpen var to null
        window.deta.currOpen = null;
    };

    const clearCanvas = () => {
        // clear canvas
        const dims = state.get("canvasSize");
        state.set("canvasMode", "select");
        svgCanvas.clear();
        svgCanvas.setResolution(dims[0], dims[1]);
        editor.canvas.update(true);
        editor.zoom.reset();
        editor.panel.updateContextPanel();
        editor.paintBox.fill.prep();
        editor.paintBox.stroke.prep();
        svgCanvas.runExtensions('onNewDocument');
    }

    const setOpen = (filename) => {
        // sets a recently saved file as open
        if (window.deta.currOpen) {
            close();
        }

        // add new menu item to show the file name
        const menu = document.querySelector('#menu_bar');
        const openItem = document.createElement("div");
        openItem.setAttribute("class", "menu");
        openItem.setAttribute("id", "curr_open_drawing");
        const openItemTitle = document.createElement("strong");
        openItemTitle.setAttribute("id", "curr_open_item");
        openItemTitle.setAttribute("class", "menu_title");
        openItemTitle.innerText = filename;
        openItem.appendChild(openItemTitle);
        menu.appendChild(openItem);

        // add delete option to the the file menu
        const saveAs = document.getElementById('tool_csaveas');
        const deleteItem = document.createElement("div");
        deleteItem.setAttribute("class", "menu_item");
        deleteItem.setAttribute("data-action", "cloudDelete");
        deleteItem.setAttribute("id", "tool_cdelete");
        deleteItem.innerText = "Delete Document";
        deleteItem.addEventListener("click", function () {
            editor.cloudDelete();
        });
        saveAs.parentNode.insertBefore(deleteItem, saveAs.nextSibling);
        // set currOpen in deta state
        window.deta.currOpen = filename;
    }

    const open = async () => {
        const filename = window.deta.toOpen.innerText;
        const response = await window.api.app.loadDrawing(filename);
        if (response.status === 200) {
            const bod = response.body;
            const stream = new Response(bod);
            const file = await stream.blob();
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function () {
                // set open
                setOpen(filename);
                clearCanvas();
                svgCanvas.setSvgString(JSON.parse(reader.result));
                // change share modal values
            };
            reader.onerror = function () {
                console.log(reader.error);
            };
        } else {

        }
    }

    const deleteDocument = async () => {
        const response = await window.api.app.deleteDrawing(window.deta.currOpen);
        if (response.status === 200) {
            close();
            clearCanvas();
            return 200;
        } else {
            return null;
        }

    }

    window.deta = {
        toOpen: null,
        // string
        currOpen: null,
        // string
        setOpen,
        open,
        close,
        deleteDocument,
    }
})();