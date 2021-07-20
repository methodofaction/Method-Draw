const dao = [

  // public, appears in builder

  {
    name: "canvasId",
    label: "Canvas ID",
    type: "id",
    default: "",
    private: true,
    save: true
  },

  {
    name: "canvasTitle",
    label: "Canvas Title",
    type: "string",
    default: "Drawing",
    private: false,
    save: true
  },

  {
    name: "canvasSize",
    label: "Canvas Size",
    type: "array",
    default: [800, 600],
    private: false,
    save: true
  },

  {
    name: "canvasSnap",
    label: "Snap to Grid",
    type: "boolean",
    default: false,
    private: false,
    save: true
  },

  {
    name: "canvasSnapStep",
    label: "Snap Step",
    type: "number",
    default: 10,
    private: false,
    save: true
  },

  {
    name: "canvasRulers",
    label: "Canvas Rulers",
    type: "boolean",
    default: true,
    private: false,
    save: true
  },

  {
    name: "canvasContent",
    label: "Canvas Content",
    type: "string",
    default: "<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'></svg>",
    private: true,
    save: true
  },

  {
    name: "canvasMode",
    label: "Canvas Mode",
    type: "string",
    default: "select",
    private: true,
    save: true
  },

  {
    name: "canvasFill",
    label: "Canvas Fill",
    type: "object",
    default: {type: "solidColor", solidColor: 'ffffff', alpha: 100},
    private: true,
    save: true
  },

  {
    name: "canvasStroke",
    label: "Canvas Stroke",
    type: "object",
    default: {type: "solidColor", solidColor: '000000', alpha: 100},
    private: true,
    save: true
  },

  {
    name: "canvasBackground",
    label: "Canvas Background",
    type: "object",
    default: {type: "solidColor", solidColor: 'ffffff', alpha: 100},
    private: true,
    save: true
  },

  {
    name: "canvasCreationDate",
    label: "Canvas Creation Date",
    type: "string",
    default: new Date().toString(),
    private: true,
    save: false
  },
  // When this page was created
  {
    name: "canvasLastModified",
    label: "Canvas Last Modified",
    type: "string",
    default: new Date().toString(),
    private: true,
    save: false
  },
 
  // system level fields
  {
    name: "darkmode",
    label: "Dark Mode",
    type: "boolean",
    default: true,
    private: true,
    save: true,
  },
  // future use
  {
    name: "language",
    label: "Language",
    type: "string",
    default: null,
    private: true,
    save: true,
  },
  // if it is the first time visitor we can onboard them
  {
    name: "visited",
    label: "Has visited before",
    type: "boolean",
    default: false,
    private: true,
    save: true,
  },

];

dao.forEach(thing => {
  thing.clean = function(value){
     if (thing.type === "number") return isNaN(value) ? 0 : parseInt(value, 10);
     if (thing.type === "string") return value  || "";
     if (thing.type === "boolean") return value === "true" || value === true ? true : false;
     if (thing.type === "url") return value || "";
     if (thing.type === "id") return value || 0;
     if (thing.type === "array") return typeof value === "object" ? value : value ? value.split(",") : [];
     if (thing.type === "object") return typeof value === "object" ? value : value ? JSON.parse(value) : {};
     else throw "type " + thing.type + " does not exist";
  }
});
