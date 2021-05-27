// deta modals

const urlParams = new URLSearchParams(window.location.search);
const paths = window.location.pathname.split("/");
const isPublic = paths[1] === "public" && paths[2] !== "raw";
const publicSvgName = urlParams.get("name");

const detaModals = {
    cloudSaveAs: new MD.Modal({
        html: `<h3>Please name your drawing.</h3>
        <div class='save_text_block'>
           <textarea id='filename' class='save_textarea' spellcheck='false'></textarea>
           <div class='ext_tag'> .svg</div>
        </div>
        <h4 id="save_warning" class="save_warning"></h4>
        <div class="modal_btn_row">
           <button id="save_cancel_btn" class="cancel">Cancel</button>
           <button id="save_ok_btn" class="ok">Ok</button>
           <button id="save_confirm_btn" class="save_confirm_btn">Confirm</button>
        </div>
        `,
        js: function (el) {
            const revertState = () => {
                document.getElementById("filename").value = "";
                document.getElementById("save_warning").style.display = "none";
                document.getElementById("save_confirm_btn").style.display = "none";
                document.getElementById("save_ok_btn").style.display = "inherit";
                $('#filename').prop('readonly', false);
            };

            const successHandler = (filename) => {
                window.deta.setOpen(filename);
                editor.modal.cloudSaveAs.close();
                revertState();
            }

            const b1 = el.querySelector("#save_cancel_btn");
            b1.addEventListener("click", function () {
                b1.blur();
                editor.modal.cloudSaveAs.close();
                revertState();
            });

            const b2 = el.querySelector("#save_ok_btn");
            b2.addEventListener("click", function () {
                let filename = `${document.getElementById("filename").value}.svg`;
                window.deta.saveDocumentAs(filename).then(res => {
                    if (res.status === 409) {
                        document.getElementById("save_warning").innerHTML = `${filename} already exists. Please click 'confirm' if you would like to overwrite it.`
                        document.getElementById("save_warning").style.display = "block";
                        document.getElementById("save_ok_btn").style.display = "none";
                        document.getElementById("save_confirm_btn").style.display = "block";
                        $('#filename').prop('readonly', true);
                    } else if (res.status === 200) {
                        b2.blur();
                        successHandler(filename);
                    } else {
                        document.getElementById("save_warning").innerHTML = `Internal Server Error.`
                        document.getElementById("save_warning").style.display = "block";
                    }
                })
            });

            const b3 = el.querySelector("#save_confirm_btn");

            b3.addEventListener("click", function () {
                filename = `${document.getElementById("filename").value}.svg`;
                window.deta.saveDocumentAs(filename, true).then(res => {
                    if (res.status === 200) {
                        b3.blur();
                        successHandler(filename);
                    }
                })
            })
        }
    }),
    cloudOpen: new MD.Modal({
        html: `
        <div class="modal_header">Please select an svg to open:</div>
        <div id="drawing_list" class="open_drawing_list">
          Loading drawings...
        </div>
        <div class="modal_btn_row">
          <button id="open_cancel" class="cancel">Cancel</button>
          <button id="open_ok" class="open">Ok</button>
        </div>
        `,
        js: function (el) {
            window.deta.toOpen = null;

            const b1 = el.querySelector("#open_cancel");

            b1.addEventListener("click", function () {
                b1.blur();
                editor.modal.cloudOpen.close();
            });

            const b2 = el.querySelector("#open_ok");

            b2.addEventListener("click", function () {
                if (window.deta.toOpen == null) {
                    b2.blur();
                    editor.modal.cloudOpen.close();
                } else {
                    // load the drawing
                    window.deta.loadDocument();
                    b2.blur();
                    editor.modal.cloudOpen.close();
                }
            });
        }
    }),
    cloudDelete: new MD.Modal({
        html: `
        <div class="delete_wrapper">
        <div class="modal_header">Do you want to delete <span id="delete_name">your drawing</span>?</div>
        <p>This will delete the drawing from the cloud, clear the canvas, and erase your undo history.</p>
        <p id="delete_error" class="delete_error">There was an error deleting your drawing, please refresh and try again.</p>
        </div>
        <div class="modal_btn_row">
           <button id="delete_cancel_btn" class="cancel">Cancel</button>
           <button id="delete_btn" class="delete_btn">Delete</button>
        </div>
        `,
        js: function (el) {

            const b1 = el.querySelector("#delete_cancel_btn");

            b1.addEventListener("click", function () {
                b1.blur();
                editor.modal.cloudDelete.close();
            });

            const b2 = el.querySelector("#delete_btn");

            b2.addEventListener("click", function () {
                window.deta.deleteDocument().then(res => {
                    if (res) {
                        b2.blur();
                        editor.modal.cloudDelete.close();
                    } else {
                        // add error handling
                    }
                })
            })
        }
    }),

    cloudError: new MD.Modal({
        html: `
        <div class="modal_header">Save Error</div>
        <div id="cloud_error" class="cloud_error">
          There was an error saving to the cloud. Please try again.
        </div>
        <div class="modal_btn_row">
          <button id="error_btn" class="cancel">Close</button>
        </div>
        `,
        js: function (el) {
            const b1 = el.querySelector("#error_btn");

            b1.addEventListener("click", function () {
                b1.blur();
                editor.modal.cloudError.close();
            });
        }
    }),

    share: new MD.Modal({
        html: `
        <div class="share_wrap">
            <div class="share_controls">
                <div class="share_info">
                    <div class="share_title">Share to the web.</div>
                    <div id="share_desc" class="share_desc">Make your drawing public and share a link with anyone.</div>
                </div>    
                <div class="switch">
                    <input id="switch-1" type="checkbox" class="switch-input" />
                    <label for="switch-1" class="switch-label">Switch</label>
                </div>
            </div>
            
            <div id="share_links" class="share_links">
                <div class="share_link_title">Raw SVG:</div>
                <div class="share_url_wrapper">
                    <textarea readonly class="share_url" id="raw_url">
                    https://deta.dev
                    </textarea>
                    <button class="share_button" id="copy_raw"> 
                        Copy
                    </button>
                </div>
                <div class="share_link_title">Your SVG in Method Draw:</div>
                <div class="share_url_wrapper">
                    <textarea readonly class="share_url" id="edit_url">
                    https://deta.dev/edit
                    </textarea>
                    <button class="share_button" id="copy_edit">
                    Copy
                    </button>
                </div>
            </div>
        </div>
        `,
        js: function (el) {
            el.querySelector("#switch-1").addEventListener(
                "change",
                async function () {
                    const isPublic = document.getElementById("switch-1");
                    const res = await window.deta.modifyIsPublic(
                        isPublic.checked
                    );

                    if (isPublic.checked && res.status === 200) {
                        document.getElementById("share_links").style.display = "block";
                        document.getElementById("raw_url").value = `${window.location.hostname}/public/raw/${window.deta.currOpen}`;
                        document.getElementById("edit_url").value = `${window.location.hostname}/public/?name=${window.deta.currOpen}`;
                        document.getElementById("share_desc").innerHTML =
                            "Anyone with the link can view your work.";
                    } else if (!isPublic.checked && res.status === 200) {

                        document.getElementById("share_desc").innerHTML =
                            "Make your drawing public and share a link with anyone.";
                        document.getElementById("share_links").style.display = "none";
                    } else {
                        // handle errors
                    }
                }
            );
            el.querySelector("#copy_raw").addEventListener("click", function () {
                const raw_url = document.getElementById("raw_url");
                raw_url.select();
                raw_url.setSelectionRange(0, 99999);
                document.execCommand("copy");
            });
            el.querySelector("#copy_edit").addEventListener("click", function () {
                const edit_url = document.getElementById("edit_url");
                edit_url.select();
                edit_url.setSelectionRange(0, 99999);
                document.execCommand("copy");
            });
        },
    })
}

const publicLoader = async () => {
    if (isPublic && publicSvgName) {
        const success = await window.deta.loadPublicDocument(publicSvgName);
        if (!success) {
            svgCanvas.setSvgString(state.get("canvasContent"));
        }
    } else {
        svgCanvas.setSvgString(state.get("canvasContent"));
    }
}



if (isDetaRuntime) {
    Object.keys(detaModals).forEach(modal => {
        editor.modal[modal] = detaModals[modal]
    });
    publicLoader();
}