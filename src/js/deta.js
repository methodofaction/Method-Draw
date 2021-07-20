(function () {

    // client side interactions

    // status

    const removeStatus = () => {
        const statNode = document.querySelector('#status_indicator');
        if (statNode) {
            statNode.remove();
        }
    }


    const setStatus = (input) => {
        let status = input || "DEFAULT";
        const statusMap = {
            LOCAL_CHANGES: {
                text: "unsaved changes",
                class: "status_unsaved"
            },
            SAVING: {
                text: "saving...",
                class: "status_saving"
            },
            SAVED: {
                text: "saved",
                class: "status_saved"
            },
            ERROR: {
                text: "error",
                class: "status_error"
            },
            DEFAULT: {
                text: "error",
                class: "status_error"
            }
        }
        const statNode = document.querySelector('#status_indicator_title');
        if (statNode) {
            statNode.setAttribute("class", `status_title ${statusMap[status].class}`);
            statNode.innerText = statusMap[status].text;
        } else {
            const menu = document.querySelector('#tools_bottom');
            const statusItem = document.createElement("div");
            statusItem.setAttribute("class", `status_wrap ${statusMap[status].class}`);
            statusItem.setAttribute("id", "status_indicator");
            const statusItemTitle = document.createElement("div");
            statusItemTitle.setAttribute("class", `status_title ${statusMap[status].class}`);
            statusItemTitle.setAttribute("id", "status_indicator_title");
            statusItemTitle.innerText = statusMap[status].text;
            statusItem.appendChild(statusItemTitle);
            const zoomPanel = document.querySelector('#zoom_panel');
            menu.insertBefore(statusItem, zoomPanel);
        }
        window.deta.status = statusMap[status].text;
    }

    // for closing an 'open' drawing
    const close = () => {
        removeStatus();

        const currOpenNodeMenu = document.querySelector('#curr_open_drawing');

        if (currOpenNodeMenu) {
            currOpenNodeMenu.remove();
        }

        // remove delete node
        const deleteNode = document.getElementById('tool_cdelete');

        if (deleteNode) {
            deleteNode.remove();
        }

        // reset share modal when closing a document
        document.getElementById("share_links").style.display = 'none';
        document.getElementById("share_desc").innerHTML = 'Make your drawing public and share a link with anyone.';
        document.getElementById("switch-1").checked = false;

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

        removeStatus();

        // add new menu item to show the file name
        const menu = document.querySelector('#menu_bar');
        const detaMenus = document.getElementById("deta_menus");
        const openItem = document.createElement("div");
        openItem.setAttribute("class", "menu");
        openItem.setAttribute("id", "curr_open_drawing");
        const openItemTitle = document.createElement("strong");
        openItemTitle.setAttribute("class", "curr_open_drawing");
        openItemTitle.innerText = filename;
        openItem.appendChild(openItemTitle);
        detaMenus.appendChild(openItem);

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
        editor.canvas.rename(filename);
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


            const onDrawingClick = function () {
                this.style.backgroundColor = "var(--d15)";
                this.style.fontWeight = "bold";
                const lastSelect = window.deta.toOpen;
                if (lastSelect !== null && lastSelect !== this) {
                    lastSelect.style.backgroundColor = "white";
                    lastSelect.style.fontWeight = "normal";
                }
                window.deta.toOpen = this;
            }

            for (let i = 0; i < drawings.length; i++) {
                const newNode = document.createElement("a");
                newNode.setAttribute("id", drawings[i].key);
                newNode.setAttribute("class", "open_drawing_item");
                newNode.addEventListener("click", onDrawingClick);
                newNode.textContent = drawings[i].name;
                openList.appendChild(newNode);
            }
        } else if (response.status === 401) {
            document.getElementById("open_warning").innerHTML = `There was an issue while retrieving your drawings. Please refresh the page, and try again.`
            document.getElementById("open_warning").style.display = "block";
            document.getElementById("open_ok_err_btn").style.display = "inherit";
            document.getElementById("open_ok").style.display = "none";
        }
    }

    // open a specific document
    const setShareStatus = async () => {
        const md_response = await window.api.app.getMetadata(window.deta.currOpen);

        if (md_response.status === 200) {
            const meta_data = await md_response.json();
            const { public } = meta_data;
            document.getElementById("switch-1").checked = public;
            if (public) {
                document.getElementById("share_links").style.display = "block";
                document.getElementById("raw_url").value = `https://${window.location.hostname}/public/raw/${window.deta.currOpen}`;
                document.getElementById("edit_url").value = `https://${window.location.hostname}/public/?name=${window.deta.currOpen}`;
                document.getElementById("share_desc").innerHTML =
                    "Anyone with the link can view your work.";
            } else {
                document.getElementById("share_links").style.display = "none";
            }
        } else {
            // error handling
        }
    }

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
                clearCanvas();
                svgCanvas.setSvgString(JSON.parse(reader.result));
                // needs to come after the svg is loaded onto canvas
                setOpen(filename);
                // change share modal values
                setShareStatus();
                editor.modal.cloudOpen.close();
                $('#canvas_title').val(filename);
                svgCanvas.setDocumentTitle(filename);
            };
            reader.onerror = function () {
                console.log(reader.error);
            };
        } else if (response.status == 401) {
            document.getElementById("open_warning").innerHTML = `There was an issue while opening the drawing. Please refresh the page, and try again.`
            document.getElementById("open_warning").style.display = "block";
            document.getElementById("open_ok_err_btn").style.display = "inherit";
            document.getElementById("open_ok").style.display = "none";
        }
        else {
            document.getElementById("open_warning").innerHTML = `There was an issue while opening the drawing. Please try again.`
            document.getElementById("open_warning").style.display = "block";
        }
    }

    // load a public document DRY refactor with last function ?
    const loadPublicDocument = async (name) => {
        const response = await window.api.app.loadPublicDrawing(name);
        if (response.status === 200) {
            const bod = response.body;
            const stream = new Response(bod);
            const file = await stream.blob();
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function () {
                svgCanvas.setSvgString(JSON.parse(reader.result));
                return true;
            };
            reader.onerror = function () {
                console.log(reader.error);
                return false;
            };
        } else {
            return false;
        }
    }

    const deleteDocument = async () => {
        const response = await window.api.app.deleteDrawing(window.deta.currOpen);
        if (response.status === 200) {
            clearCanvas();
            close();
            return response.status;
        } else {
            return response.status;
        }

    }

    const saveDocumentAs = async (name, overwrite = false) => {
        const form = createFileForm(name);
        form.append("overwrite", overwrite);
        const response = await window.api.app.saveDrawingAs(form);
        return response;
    }

    const saveDocument = async () => {
        setStatus("SAVING");
        if (!window.deta.currOpen) {
            // no open drawing
            return null;
        }
        const name = window.deta.currOpen;
        const form = createFileForm(name);
        const response = await window.api.app.saveDrawing(form);
        if (response.status === 200) {
            setStatus("SAVED");
            return response;
        } else if (response.status === 401) {
            editor.modal.cloudError.open();
            document.getElementById("cloud_error").innerHTML = `There was an issue while saving the drawing. Please download any unsaved work ('export svg'), refresh the page, and try again.`
            setStatus("ERROR");
            return null
        } else {
            editor.modal.cloudError.open();
            document.getElementById("cloud_error").innerHTML = `There was an issue saving to the cloud. Please try again.`
            setStatus("ERROR");
            return null;
        }
    }

    const modifyIsPublic = async (nextPublic) => {
        if (!window.deta.currOpen) {
            // no open drawing
            return null;
        }
        const name = window.deta.currOpen;
        const response = await window.api.app.modifyPublicity(name, nextPublic);
        return response;
    }

    window.deta = {
        toOpen: null,
        // dom node
        currOpen: null,
        // string
        status,
        //string
        setOpen,
        close,
        setStatus,
        listDocuments,
        loadDocument,
        loadPublicDocument,
        deleteDocument,
        saveDocumentAs,
        saveDocument,
        modifyIsPublic
    }
})();