
(function () {

    // client side interactions

    // for closing an 'open' drawing
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

    // for clearing the canvas

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

    // for setting a drawing as open in the client

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

    // for creating the form data from the 

    const createFileForm = name => {
        svgCanvas.clearSelection();
        const str = svgCanvas.svgCanvasToString();
        const blob = new Blob([str], { type: "image/svg+xml" });
        const file = new File([blob], name, { type: "image/svg_xml" });
        const formData = new FormData();
        formData.append("file", file);
        formData.append("filename", name);
        return formData;
    }

    // server side interactions

    // list drawings

    const listDocuments = async () => {
        const response = await window.api.app.listDrawings();
        if (response.status === 200) {
            const drawings = await response.json();
            drawings.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });

            const openList = document.querySelector('#drawing_list');
            openList.textContent = "";

            if (drawings.length === 0) {
                openList.textContent = "No drawings saved to the cloud.";
            }

            var onDrawingClick = function () {
                this.style.backgroundColor = "var(--d15)";
                this.style.fontWeight = "bold";
                const lastSelect = window.deta.toOpen;
                if (lastSelect !== null) {
                    lastSelect.style.backgroundColor = "white";
                    lastSelect.style.fontWeight = "normal";
                }
                window.deta.toOpen = this;
            }

            for (var i = 0; i < drawings.length; i++) {
                const newNode = document.createElement("a");
                newNode.setAttribute("id", drawings[i].key);
                newNode.setAttribute("class", "open_drawing_item");
                newNode.addEventListener("click", onDrawingClick);
                newNode.textContent = drawings[i].name;
                openList.appendChild(newNode);
            }
        }
    }

    // open a sepcific document

    const loadDocument = async () => {
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

    const saveDocumentAs = async (name, overwrite = false) => {
        const form = createFileForm(name);
        form.append("overwrite", overwrite);
        const response = await window.api.app.saveDrawingAs(form);
        return response;
    }

    const saveDocument = async () => {
        if (!window.deta.currOpen) {
            // no open drawing
            return null;
        }
        const name = window.deta.currOpen;
        const form = createFileForm(name);
        const response = await window.api.app.saveDrawing(form);
        return response;
    }

    window.deta = {
        toOpen: null,
        // dom node
        currOpen: null,
        // string
        setOpen,
        close,
        listDocuments,
        loadDocument,
        deleteDocument,
        saveDocumentAs,
        saveDocument
    }
})();