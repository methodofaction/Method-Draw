const hostArray = location.hostname.split(".");

const isDevOrApp = hostArray[hostArray.length - 1] === "dev" || hostArray[hostArray.length - 1] === "app";
const isDetaHost = hostArray[hostArray.length - 2] === "deta";


const isDetaRuntime = (isDetaHost && isDevOrApp)
  || location.hostname === "127.0.0.1";


const urlParams = new URLSearchParams(window.location.search);
const paths = window.location.pathname.split("/");
const isPublic = paths[1] === "public" && paths[2] !== "raw";
const publicSvgName = urlParams.get("name");

const detaMenuMods = () => {
  // replace menu with Deta Options
  document.getElementById("file_menu_main").innerHTML =
    `
      <div class="menu_title">File</div>
      <div class="menu_list inverted-undo" id="file_menu">
        <div data-action="clear" id="tool_clear" class="menu_item">New Document</div>
        <div data-action="cloudOpen" id="tool_copen" class="menu_item">Open Document</div>
        <div data-action="cloudSave" id="tool_csave" class="menu_item">Save<span class="shortcut">⌘S</span></div>
        <div data-action="cloudSaveAs" id="tool_csaveas" class="menu_item">Save As
        </div>
        <div id="tool_open" class="menu_item">
          Import SVG... <span class="shortcut">⌘O</span></div>
        <input type="file" accept="image/svg+xml" />
    
        <div id="tool_import" class="menu_item">
          Place Image... <span class="shortcut">⌘K</span></div>
        <input type="file" accept="image/*" />
        <div data-action="save" id="tool_save" class="menu_item">Export SVG </div>
        <div data-action="export" id="tool_export" class="menu_item">Export as PNG</div>
      </div>`;

  // add share option
  const menu = document.querySelector("#menu_bar");
  const shareMenu = document.getElementById("deta_menus");
  const shareDiv = document.createElement("div");
  shareDiv.setAttribute("class", "share_menu");
  shareDiv.setAttribute("id", "share_drawing");
  const shareDivTitle = document.createElement("div");
  shareDivTitle.setAttribute("id", "share_drawing_title");
  shareDivTitle.setAttribute("class", "menu_title");
  shareDivTitle.addEventListener("click", function () {
    editor.share();
  });
  shareDivTitle.innerText = `Share`;
  shareDiv.appendChild(shareDivTitle);
  shareMenu.appendChild(shareDiv);
//   menu.appendChild(shareDiv);
  document.getElementById("sponsors").style.display = "none"
}

if (isDetaRuntime && !isPublic) {
  detaMenuMods();
}
if (isPublic) {
    document.getElementById("sponsors").style.display = "inherit"
}