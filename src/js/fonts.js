function populateFonts(){
  let options = `
    <option value='sans-serif' selected>sans-serif</option>
    <option value='serif' selected>serif</option>
    <option value='monospace' selected>monospace</option>
  `;
  let fontfaces = "";
  const formats = {
    ttf: "truetype",
    otf: "opentype",
    svg: "svg",
    woff: "woff",
    woff2: "woff2",
  };
  for (fontName in window.fonts) {
    const variants = window.fonts[fontName];
    for (variantName in variants) {
      const variant = variants[variantName];
      const ext = variant.file.split(".")[1].toLowerCase();
      const format = formats[ext];
      let src = `url('font-files/${variant.file}') format('${format}')`;
      if (isDetaRuntime) {
        src = `url('https://method-draw-fonts.s3.eu-central-1.amazonaws.com/font-files/${variant.file}') format('${format}')`;
      }
      fontfaces += `
        @font-face {
          font-family: '${fontName}';
          src: ${src};
          font-weight: ${variant["font-weight"]};
          font-style: ${variant["font-style"]};
        }
      `;
    }
    options += `
      <option value="${fontName}">${fontName}</option>
    `;
  }

  $("#font_family_dropdown").append(options);
  $("head").append("<style>" + fontfaces +"</style>");

};

window.fonts = {

  "Anton": {
    "Regular": {
      "file": "Anton-Regular.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    }
  },

  "Asset": {
    "Regular": {
      "file": "Asset-Regular.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    }
  },

  "Calistoga": {
    "Regular": {
      "file": "Calistoga-Regular.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    }
  },

  "Emilys Candy": {
    "Regular": {
      "file": "EmilysCandy-Regular.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    }
  },

  "Great Vibes": {
    "Regular": {
      "file": "GreatVibes-Regular.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    }
  },

  "Harlow Solid Italic": {
    "Italic": {
      "file": "HARLOWSI_0.TTF",
      "font-weight": "normal",
      "font-style": "italic",
    }
  },

  "Rounded Mplus 1c": {
    "Regular": {
      "file": "MPLUSRounded1c-Regular.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    }
  },

  "Rounded Mplus 1c Thin": {
    "Regular": {
      "file": "MPLUSRounded1c-Thin.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    }
  },
  
  "Rounded Mplus 1c Light": {
    "Regular": {
      "file": "MPLUSRounded1c-Light.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    }
  },
  "Rounded Mplus 1c Medium": {
    "Regular": {
      "file": "MPLUSRounded1c-Medium.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    }
  },
  "Rounded Mplus 1c Bold": {
    "Regular": {
      "file": "MPLUSRounded1c-Bold.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    }
  },
  "Rounded Mplus 1c ExtraBold": {
    "Regular": {
      "file": "MPLUSRounded1c-ExtraBold.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    }
  },
  "Rounded Mplus 1c Black": {
    "Regular": {
      "file": "MPLUSRounded1c-Black.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    }
  },

  "Montserrat": {
    "Regular": {
      "file": "Montserrat-Regular.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "Montserrat-Italic.ttf",
      "font-weight": "normal",
      "font-style": "italic",
    },
    "Bold": {
      "file": "Montserrat-Bold.ttf",
      "font-weight": "bold",
      "font-style": "normal"
    },
    "Bold Italic": {
      "file": "Montserrat-BoldItalic.ttf",
      "font-weight": "bold",
      "font-style": "italic",
    }
  },
  "Montserrat Thin": {
    "Regular": {
      "file": "Montserrat-Thin.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "Montserrat-ThinItalic.ttf",
      "font-style": "italic",
      "font-weight": "normal"
    }
  },
  "Montserrat ExtraLight": {
    "Regular": {
      "file": "Montserrat-ExtraLight.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "Montserrat-ExtraLightItalic.ttf",
      "font-weight": "normal",
      "font-style": "italic",
    }
  },
  "Montserrat Light": {
    "Regular": {
      "file": "Montserrat-Light.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "Montserrat-LightItalic.ttf",
      "font-weight": "normal",
      "font-style": "italic",
    }
  },
  "Montserrat Medium": {
    "Regular": {
      "file": "Montserrat-Medium.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "Montserrat-MediumItalic.ttf",
      "font-weight": "normal",
      "font-style": "italic",
    }
  },
  "Montserrat SemiBold": {
    "Regular": {
      "file": "Montserrat-SemiBold.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "Montserrat-SemiBoldItalic.ttf",
      "font-weight": "normal",
      "font-style": "italic",
    }
  },
  "Montserrat ExtraBold": {
    "Regular": {
      "file": "Montserrat-ExtraBold.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "Montserrat-ExtraBoldItalic.ttf",
      "font-style": "italic",
      "font-weight": "normal"
    }
  },
  "Montserrat Black": {
    "Regular": {
      "file": "Montserrat-Black.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "Montserrat-BlackItalic.ttf",
      "font-weight": "normal",
      "font-style": "italic",
    }
  },

  "Nunito": {
    "Regular": {
      "file": "Nunito-Regular.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "Nunito-Italic.ttf",
      "font-weight": "normal",
      "font-style": "italic"
    },
    "Bold": {
      "file": "Nunito-Bold.ttf",
      "font-weight": "bold",
      "font-style": "normal"
    },
    "Bold Italic": {
      "file": "Nunito-BoldItalic.ttf",
      "font-style": "italic",
      "font-weight": "bold"
    },
  },

  "Nunito ExtraLight": {
    "Regular": {
      "file": "Nunito-ExtraLight.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "Nunito-ExtraLightItalic.ttf",
      "font-weight": "normal",
      "font-style": "italic"
    }
  },

  "Nunito Light": {
    "Regular": {
      "file": "Nunito-Light.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "Nunito-LightItalic.ttf",
      "font-weight": "normal",
      "font-style": "italic"
    }
  },

  "Nunito SemiBold": {
    "Regular": {
      "file": "Nunito-SemiBold.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "Nunito-SemiBoldItalic.ttf",
      "font-weight": "normal",
      "font-style": "italic"
    }
  },

  "Nunito ExtraBold": {
    "Regular": {
      "file": "Nunito-ExtraBold.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "Nunito-ExtraBoldItalic.ttf",
      "font-weight": "normal",
      "font-style": "italic"
    }
  },

  "Nunito Black": {
    "Regular": {
      "file": "Nunito-Black.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "Nunito-BlackItalic.ttf",
      "font-weight": "normal",
      "font-style": "italic"
    }
  },

  "Open Sans": {
    "Regular": {
      "file": "OpenSans-Regular.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "OpenSans-Italic.ttf",
      "font-weight": "normal",
      "font-style": "italic"
    },
    "Bold": {
      "file": "OpenSans-Bold.ttf",
      "font-weight": "bold",
      "font-style": "normal"
    },
    "Bold Italic": {
      "file": "OpenSans-BoldItalic.ttf",
      "font-style": "italic",
      "font-weight": "bold"
    },
  },

  "Open Sans Light": {
    "Regular": {
      "file": "OpenSans-Light.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "OpenSans-LightItalic.ttf",
      "font-weight": "normal",
      "font-style": "italic"
    },
  },

  "Open Sans SemiBold": {
    "Regular": {
      "file": "OpenSans-SemiBold.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "OpenSans-SemiBoldItalic.ttf",
      "font-weight": "normal",
      "font-style": "italic"
    },
  },

  "Open Sans ExtraBold": {
    "Regular": {
      "file": "OpenSans-ExtraBold.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "OpenSans-ExtraBoldItalic.ttf",
      "font-weight": "normal",
      "font-style": "italic"
    },
  },

  "Plaster": {
    "Regular": {
      "file": "Plaster-Regular.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    }
  },

  "Playball": {
    "Regular": {
      "file": "Playball-Regular.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    }
  },

  "Poppins": {
    "Regular": {
      "file": "Poppins-Regular.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "Poppins-Italic.ttf",
      "font-weight": "normal",
      "font-style": "italic"
    },
    "Bold": {
      "file": "Poppins-Bold.ttf",
      "font-weight": "bold",
      "font-style": "normal"
    },
    "Bold Italic": {
      "file": "Poppins-BoldItalic.ttf",
      "font-style": "italic",
      "font-weight": "bold"
    },
  },

  "Poppins Thin": {
    "Regular": {
      "file": "Poppins-Thin.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "Poppins-ThinItalic.ttf",
      "font-weight": "normal",
      "font-style": "italic"
    }
  },

  "Poppins ExtraLight": {
    "Regular": {
      "file": "Poppins-ExtraLight.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "Poppins-ExtraLightItalic.ttf",
      "font-weight": "normal",
      "font-style": "italic"
    }
  },

  "Poppins Light": {
    "Regular": {
      "file": "Poppins-Light.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "Poppins-LightItalic.ttf",
      "font-weight": "normal",
      "font-style": "italic"
    }
  },

  "Poppins SemiBold": {
    "Regular": {
      "file": "Poppins-SemiBold.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "Poppins-SemiBoldItalic.ttf",
      "font-weight": "normal",
      "font-style": "italic"
    }
  },

  "Poppins ExtraBold": {
    "Regular": {
      "file": "Poppins-ExtraBold.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "Poppins-ExtraBoldItalic.ttf",
      "font-weight": "normal",
      "font-style": "italic"
    }
  },

  "Poppins Black": {
    "Regular": {
      "file": "Poppins-Black.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "Poppins-BlackItalic.ttf",
      "font-weight": "normal",
      "font-style": "italic"
    }
  },

  "Quicksand": {
    "Regular": {
      "file": "Quicksand-Regular.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Bold": {
      "file": "Quicksand-Bold.ttf",
      "font-weight": "bold",
      "font-style": "normal"
    },
  },

  "Quicksand Light": {
    "Regular": {
      "file": "Quicksand-Light.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Quicksand Medium": {
    "Regular": {
      "file": "Quicksand-Medium.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Quicksand SemiBold": {
    "Regular": {
      "file": "Quicksand-SemiBold.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Racing Sans One": {
    "Regular": {
      "file": "RacingSansOne-Regular.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Sacramento": {
    "Regular": {
      "file": "Sacramento-Regular.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Special Elite": {
    "Regular": {
      "file": "SpecialElite-Regular.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Tangerine": {
    "Regular": {
      "file": "Tangerine-Regular.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Bold": {
      "file": "Tangerine-Bold.ttf",
      "font-weight": "bold",
      "font-style": "normal"
    }
  },

  "UnifrakturMaguntia": {
    "Book": {
      "file": "UnifrakturMaguntia-Regular.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  }
};

populateFonts();