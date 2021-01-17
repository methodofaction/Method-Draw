function t(key){

  const lang = typeof state === "undefined" ? "en" : state.get("language");

  const dict = {
    "Untitled": "Sin Título",
  }

  const keys = Object.keys(dict);
  const values = Object.values(dict);
  const originWord = keys.find(word => key === word);
  const destinationWord = values.find(word => key === word);

  if (!originWord && !destinationWord) {
    console.log( "translation missing: " + key);
    return key;
  }

  const translation = lang === "en" ? key : dict[key]// english input;

  return translation

}

function translateDom(lang){
  const els = dom.qsa("[data-translate]");
  els.forEach(el => {
    const translation = el.getAttribute("data-translate");
    const source = el.innerHTML; 
    el.innerHTML = translation;
    el.setAttribute("data-translate", source);
  });
}