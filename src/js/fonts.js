function populateFonts(fonts){
  let options = `
    <option value='sans-serif' selected>sans-serif</option>
    <option value='serif' selected>serif</option>
    <option value='monospace' selected>monospace</option>
  `;
  let fontLinks = "";
  const formats = {
    ttf: "truetype",
    otf: "opentype",
    svg: "svg",
    woff: "woff",
    woff2: "woff2",
  };
  for (fontName in fonts) {
    const font = fonts[fontName];
    const axes = Object.keys(font.axes).join(",");
    const pairs = Object.keys(font.axes);
    fontLinks += `<link href="https://fonts.googleapis.com/css2?family=${fontName.split(" ").join("+")}" rel="stylesheet">`
    options += `
      <option value="${fontName}">${fontName}</option>
    `;
  }

  $("#font_family_dropdown").append(options);
  $("head").append('<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>');
  $("head").append(fontLinks);
};

const fonts = {

  "Alegreya": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [400, 900],
        value: 400
      }
    }
  },

  "Alumni Sans": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Andada Pro": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [400, 840],
        value: 400
      }
    }
  },

  "Antonio": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [100, 700],
        value: 400
      }
    }
  },

  "Archivo": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wdth": {
        name: "Width",
        range: [62,125],
        step: 0.1,
        value: 100
      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Arimo": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [400, 700],
        value: 400
      }
    }
  },

  "Arimo": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [400, 700],
        value: 400
      }
    }
  },

  "Asap": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [400, 700],
        value: 400
      }
    }
  },

  "Assistant": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [200, 800],
        value: 400
      }
    }
  },

  "Azeret Mono": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Besley": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [400, 900],
        value: 400
      }
    }
  },

  "Big Shoulders Display": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Bitter": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Bodoni Moda": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "opsz": {
        name: "Optical Size",
        range: [6, 96],
        value: 14,
        step: 0.1
      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Brygada 1918": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [400, 700],
        value: 400
      }
    }
  },

  "Cabin": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wdth": {
        name: "Width",
        range: [75,100],
        step: 0.1,
        value: 100

      },
      "wght": {
        name: "Weight",
        range: [400, 700],
        value: 400
      }
    }
  },

  "Catamaran": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Caveat": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [400, 700],
        value: 400
      }
    }
  },

  "Changa": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [200, 800],
        value: 400
      }
    }
  },

  "Cinzel": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [400, 900],
        value: 400
      }
    }
  },

  "Comfortaa": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [300, 700],
        value: 400
      }
    }
  },

  "Commissioner": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Crimson Pro": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [200, 900],
        value: 400
      }
    }
  },

  "Cuprum": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [400, 700],
        value: 400
      }
    }
  },

  "Dancing Script": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [400, 700],
        value: 400
      }
    }
  },

  "Domine": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [400, 700],
        value: 400
      }
    }
  },

  "Dosis": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [200, 800],
        value: 400
      }
    }
  },

  "EB Garamond": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [400, 800],
        value: 400
      }
    }
  },

  "El Messiri": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [400, 700],
        value: 400
      }
    }
  },

  "Encode Sans": {
    "axes": {
      "wdth": {
        name: "Width",
        range: [75,125],
        step: 0.1,
        value: 100

      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Epilogue": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },


  "Exo": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Faustina": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [400, 700],
        value: 400
      }
    }
  },

  "Fira Code": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [300, 700],
        value: 400
      }
    }
  },


  "Fraunces": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "opsz": {
        name: "Optical Size",
        range: [9, 144],
        value: 14,
        step: 0.1
      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      },
      "SOFT": {
        name: "Softness",
        range: [0, 100],
        value: 0,
        step: 0.1
      },
      "WONK": {
        name: "Wonky",
        range: [0, 1],
        value: 0
      }
    }
  },

  "Gemunu Libre": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [200, 800],
        value: 400
      }
    }
  },

 "Georama": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wdth": {
        name: "Width",
        range: [62.5,125],
        step: 0.1,
        value: 100

      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Glory": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [100, 800],
        value: 400
      }
    }
  },


  "Gluten": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Grandstander": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Grenze Gotisch": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Hahmlet": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Heebo": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Hepta Slab": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [1, 900],
        value: 400
      }
    }
  },

  "Ibarra Real Nova": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [400, 700],
        value: 400
      }
    }
  },

  "Imbue": {
    "axes": {
      "opsz": {
        name: "Optical Size",
        range: [10, 100],
        value: 14,
        step: 0.1
      },
      "wght": {
        name: "Weight",
        range: [400, 700],
        value: 400
      }
    }
  },

  "Inconsolata": {
    "axes": {
      "wdth": {
        name: "Width",
        range: [50,200],
        step: 0.1,
        value: 100

      },
      "wght": {
        name: "Weight",
        range: [200, 900],
        value: 400
      }
    }
  },

  "Inter": {
    "axes": {
      "slnt": {
        name: "Slant",
        range: [-10,0],
        step: 1,
        value: 0

      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "JetBrains Mono": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [100, 800],
        value: 400
      }
    }
  },

  "Josefin Sans": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [100, 700],
        value: 400
      }
    }
  },

  "Josefin Slab": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [100, 700],
        value: 400
      }
    }
  },

  "Jost": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Jura": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [300, 700],
        value: 400
      }
    }
  },

 "Karla": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [200, 800],
        value: 400
      }
    }
  },

  "Kreon": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [300, 700],
        value: 400
      }
    }
  },

 "Kufam": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [400, 900],
        value: 400
      }
    }
  },

  "Kumbh Sans": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Lemonada": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [300, 700],
        value: 400
      }
    }
  },

  "Lexend": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

 "Libre Franklin": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

 "Literata": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "opsz": {
        name: "Optical Size",
        range: [7, 72],
        value: 14,
        step: 0.1
      },
      "wght": {
        name: "Weight",
        range: [200, 900],
        value: 400
      }
    }
  },

 "Lora": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [400, 700],
        value: 400
      }
    }
  },

 "Manrope": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [200, 800],
        value: 400
      }
    }
  },

 "Manuale": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [300, 800],
        value: 400
      }
    }
  },

  "Markazi Text": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [400, 700],
        value: 400
      }
    }
  },

  "Maven Pro": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [400, 900],
        value: 400
      }
    }
  },

  "Merriweather Sans": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [300, 800],
        value: 400
      }
    }
  },

  "Mulish": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [200, 1000],
        value: 400
      }
    }
  },

  "MuseoModerno": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Newsreader": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "opsz": {
        name: "Optical Size",
        range: [6, 72],
        value: 14,
        step: 0.1
      },
      "wght": {
        name: "Weight",
        range: [200, 800],
        value: 400
      }
    }
  },

  "Noto Sans Display": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wdth": {
        name: "Width",
        range: [62.5,100],
        step: 0.1,
        value: 100
      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Noto Sans Mono": {
    "axes": {
      "wdth": {
        name: "Width",
        range: [62.5,100],
        step: 0.1,
        value: 100
      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Noto Serif Display": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wdth": {
        name: "Width",
        range: [62.5,100],
        step: 0.1,
        value: 100
      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Open Sans": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wdth": {
        name: "Width",
        range: [75,100],
        step: 0.1,
        value: 100
      },
      "wght": {
        name: "Weight",
        range: [300, 800],
        value: 400
      }
    }
  },

  "Orbitron": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [400, 900],
        value: 400
      }
    }
  },

  "Oswald": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [200, 700],
        value: 400
      }
    }
  },

  "Oxanium": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [200, 800],
        value: 400
      }
    }
  },

  "Petrona": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Piazzolla": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "opsz": {
        name: "Optical Size",
        range: [8, 30],
        value: 14,
        step: 0.1
      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Playfair Display": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [400, 900],
        value: 400
      }
    }
  },

  "Podkova": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [400, 800],
        value: 400
      }
    }
  },

  "Public Sans": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Quicksand": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [300, 700],
        value: 400
      }
    }
  },

  "Raleway": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Rasa": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [300, 700],
        value: 400
      }
    }
  },

  "Recursive": {
    "axes": {
      "slnt": {
        name: "Slant",
        range: [-15,0],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [300, 1000],
        value: 400
      },
      "CASL": {
        name: "Casual",
        range: [0,1],
        value: 0,
        step: 0.01
      },
      "CRSV": {
        name: "Cursive",
        range: [0,1],
        value: 0.5,
        step: 0.1
      },
      "MONO": {
        name: "Monospace",
        range: [0,1],
        value: 0,
        step: 0.01
      }
    }
  },

  "Red Hat Display": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [300, 900],
        value: 400
      }
    }
  },

  "Red Hat Text": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [300, 700],
        value: 400
      }
    }
  },

  "Red Rose": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [300, 700],
        value: 400
      }
    }
  },

  "Reem Kufi": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [400, 700],
        value: 400
      }
    }
  },

  "Roboto Mono": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [100, 700],
        value: 400
      }
    }
  },

  "Roboto Slab": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Rokkitt": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Rosario": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [300, 700],
        value: 400
      }
    }
  },

  "Rubik": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [300, 900],
        value: 400
      }
    }
  },

  "Ruda": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [400, 900],
        value: 400
      }
    }
  },

  "STIX Two Text": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [400, 700],
        value: 400
      }
    }
  },

  "Saira": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wdth": {
        name: "Width",
        range: [50,125],
        step: 0.1,
        value: 125
      },
      "wght": {
        name: "Weight",
        range: [300, 900],
        value: 400
      }
    }
  },

  "Sansita Swashed": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [300, 900],
        value: 400
      }
    }
  },

  "Signika": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [300, 700],
        value: 400
      }
    }
  },

  "Sora": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [100, 800],
        value: 400
      }
    }
  },

  "Space Grotesk": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [300, 700],
        value: 400
      }
    }
  },

  "Spartan": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Stick No Bills": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [200, 800],
        value: 400
      }
    }
  },

  "Syne": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [400, 800],
        value: 400
      }
    }
  },

  "Texturina": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "opsz": {
        name: "Optical Size",
        range: [12, 72],
        value: 14,
        step: 0.1
      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Tourney": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wdth": {
        name: "Width",
        range: [75,125],
        step: 0.1,
        value: 100
      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },


  "Trispace": {
    "axes": {
      "wdth": {
        name: "Width",
        range: [75,125],
        step: 0.1,
        value: 100
      },
      "wght": {
        name: "Weight",
        range: [100, 800],
        value: 400
      }
    }
  },

  "Truculenta": {
    "axes": {
      "opsz": {
        name: "Optical Size",
        range: [12, 72],
        value: 14,
        step: 0.1
      },
      "wdth": {
        name: "Width",
        range: [75,125],
        step: 0.1,
        value: 100
      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Urbanist": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Varta": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [300, 700],
        value: 400
      }
    }
  },


  "Vollkorn": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [400, 900],
        value: 400
      }
    }
  },

  "Work Sans": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [100, 900],
        value: 400
      }
    }
  },

  "Yaldevi": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [200, 900],
        value: 400
      }
    }
  },

  "Yanone Kaffeesatz": {
    "axes": {
      "wght": {
        name: "Weight",
        range: [200, 700],
        value: 400
      }
    }
  },

  "Yrsa": {
    "axes": {
      "ital": {
        name: "Italic",
        range: [0,1],
        value: 0
      },
      "wght": {
        name: "Weight",
        range: [300, 700],
        value: 400
      }
    }
  }
};

populateFonts(fonts);