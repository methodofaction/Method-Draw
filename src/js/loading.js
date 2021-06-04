(function(){
  const canvasContent = localStorage.getItem("md-canvasContent");
  const isDark = localStorage.getItem("md-darkmode");
  document.body.classList.toggle("inverted", !isDark);
  if (!canvasContent) return;
  const parser = new DOMParser();
  const doc = parser.parseFromString(canvasContent, "image/svg+xml");
  const workarea = document.getElementById("workarea")
  workarea.appendChild(doc.documentElement);
  const svg = workarea.querySelector("svg");
})();