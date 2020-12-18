const api = "/api"
let fetchDesigns = () => {
    fetch(api).then(r => r.json()).then(ds => {
        if (ds.length === 0) return 
        let keys = ds.map(s => `<div class="menu_item remote_design" onclick="cloudOpen(event)">${s.key}</div>`)
        document.getElementById("open_menu").innerHTML = keys.join("")
    })
}

let cloudSave = (svg, name) => {
    console.log("apiSave", svg, name)
    fetch(api, {
        method: "post",
        body: JSON.stringify({key: name, svg: svg})
    })
    fetchDesigns()
    
}



let cloudOpen = e => {
    
    let cdn = e.target.innerText

    fetch(`${api}/${cdn}`).then(r => r.json()).then(cd => {
        console.log(cdn, cd)
    
        svgCanvas.setSvgString(cd.svg, cdn)
        document.getElementById("save_name").innerText =cdn;
    })

  
    

}
fetchDesigns()
