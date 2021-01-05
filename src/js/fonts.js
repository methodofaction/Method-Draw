function populateFonts(fonts){
  let options = "<option value='Arial' selected>Arial</option>";
  let fontfaces = "";
  const formats = {
    ttf: "truetype",
    otf: "opentype",
    svg: "svg",
    woff: "woff",
    woff2: "woff2",
  };
  for (fontName in fonts) {
    const variants = fonts[fontName];
    for (variantName in variants) {
      const variant = variants[variantName];
      const ext = variant.file.split(".")[1].toLowerCase();
      const format = formats[ext];
      const src = `url('font-files/${variant.file}') format('${format}')`;
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

const fonts = {

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

  "Bankoli": {
    "Bold": {
      "file": "BAIR.TTF",
      "font-weight": "bold",
      "font-style": "normal"
    }
  },

  "Bauhaus 93": {
    "Normal": {
      "file": "BAUHS93_0.TTF",
      "font-weight": "normal",
      "font-style": "normal"
    }
  },

  "Beastmachine": {
    "Regular": {
      "file": "Beastmachine.otf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Calistoga": {
    "Regular": {
      "file": "Calistoga-Regular.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    }
  },

  "Cooper Std Black": {
    "Regular": {
      "file": "CooperBlackStd.otf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Italic": {
      "file": "CooperBlackStd-Italic.otf",
      "font-style": "italic",
      "font-weight": "normal"
    },
  },

  "Diner": {
    "Regular": {
      "file": "diner_.ttf",
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

  "Noto Serif JP": {
    "Regular": {
      "file": "NotoSerifJP-Regular.otf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Bold": {
      "file": "NotoSerifJP-Bold.otf",
      "font-weight": "bold",
      "font-style": "normal"
    },
  },
  "Noto Serif ExtraLight": {
    "Regular": {
      "file": "NotoSerifJP-ExtraLight.otf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },
  "Noto Serif Light": {
    "Regular": {
      "file": "NotoSerifJP-ExtraLight.otf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },
  "Noto Serif Medium": {
    "Regular": {
      "file": "NotoSerifJP-Medium.otf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },
  "Noto Serif SemiBold": {
    "Regular": {
      "file": "NotoSerifJP-SemiBold.otf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },
  "Noto Serif Black": {
    "Regular": {
      "file": "NotoSerifJP-Black.otf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Noto Sans JP": {
    "Regular": {
      "file": "NotoSerifJP-Regular.otf",
      "font-weight": "normal",
      "font-style": "normal"
    },
    "Bold": {
      "file": "NotoSerifJP-Bold.otf",
      "font-weight": "bold",
      "font-style": "normal"
    },
  },


  "Noto Sans JP Thin": {
    "Regular": {
      "file": "NotoSansJP-Thin.otf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Noto Sans JP Light": {
    "Regular": {
      "file": "NotoSerifJP-Light.otf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Noto Sans JP Medium": {
    "Regular": {
      "file": "NotoSerifJP-Medium.otf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Noto Sans JP Black": {
    "Regular": {
      "file": "NotoSerifJP-Black.otf",
      "font-weight": "normal",
      "font-style": "normal"
    },
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

  "RA BALI": {
    "Regular": {
      "file": "RA BALI.otf",
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

  "Santana Script": {
    "Regular": {
      "file": "Santana-Script.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Sawarabi Mincho": {
    "Regular": {
      "file": "SawarabiMincho-Regular.ttf",
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

  "Takota": {
    "Takota": {
      "file": "Takota.otf",
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
  },

  "Gen Jyuu Gothic Regular": {
    "Regular": {
      "file": "GenJyuuGothic-Regular.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    }
  },

  "Gen Jyuu Gothic ExtraLight": {
    "Regular": {
      "file": "GenJyuuGothic-ExtraLight.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Gen Jyuu Gothic Light": {
    "Regular": {
      "file": "GenJyuuGothic-Light.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Gen Jyuu Gothic Normal": {
    "Regular": {
      "file": "GenJyuuGothic-Normal.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Gen Jyuu Gothic Medium": {
    "Regular": {
      "file": "GenJyuuGothic-Medium.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Gen Jyuu Gothic Bold": {
    "Bold": {
      "file": "GenJyuuGothic-Bold.ttf",
      "font-weight": "normal",
      "font-style": "bold"
    },
  },

  "Gen Jyuu Gothic Heavy": {
    "Bold": {
      "file": "GenJyuuGothic-Heavy.ttf",
      "font-weight": "normal",
      "font-style": "bold"
    },
  },

  "Gen Jyuu Gothic Monospace Regular": {
    "Regular": {
      "file": "GenJyuuGothic-Monospace-Regular.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Gen Jyuu Gothic Monospace ExtraLight": {
    "Regular": {
      "file": "GenJyuuGothic-Monospace-ExtraLight.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Gen Jyuu Gothic Monospace Light": {
    "Regular": {
      "file": "GenJyuuGothic-Monospace-Light.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Gen Jyuu Gothic Monospace Normal": {
    "Regular": {
      "file": "GenJyuuGothic-Monospace-Normal.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Gen Jyuu Gothic Monospace Medium": {
    "Regular": {
      "file": "GenJyuuGothic-Monospace-Medium.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Gen Jyuu Gothic Monospace Bold": {
    "Regular": {
      "file": "GenJyuuGothic-Monospace-Bold.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Gen Jyuu Gothic Monospace Heavy": {
    "Regular": {
      "file": "GenJyuuGothic-Monospace-Heavy.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Gen Jyuu Gothic P Regular": {
    "Regular": {
      "file": "GenJyuuGothic-P-Regular.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Gen Jyuu Gothic P ExtraLight": {
    "Regular": {
      "file": "GenJyuuGothic-P-ExtraLight.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Gen Jyuu Gothic P Light": {
    "Regular": {
      "file": "GenJyuuGothic-P-Light.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Gen Jyuu Gothic P Normal": {
    "Regular": {
      "file": "GenJyuuGothic-P-Normal.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Gen Jyuu Gothic P Medium": {
    "Regular": {
      "file": "GenJyuuGothic-P-Medium.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "Gen Jyuu Gothic P Bold": {
    "Bold": {
      "file": "GenJyuuGothic-P-Bold.ttf",
      "font-weight": "normal",
      "font-style": "bold"
    },
  },

  "Gen Jyuu Gothic P Heavy": {
    "Bold": {
      "file": "GenJyuuGothic-P-Heavy.ttf",
      "font-weight": "normal",
      "font-style": "bold"
    },
  },


  "SetoFont": {
    "Regular": {
      "file": "",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "SetoFont": {
    "Regular": {
      "file": "setofont.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "SetoFont-ex": {
    "Regular": {
      "file": "setofont-ex.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "HanaMinA": {
    "Regular": {
      "file": "HanaMinA.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "HanaMinB": {
    "Regular": {
      "file": "HanaMinB.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "KouzanBrushFontGyousyoOTF": {
    "Regular": {
      "file": "KouzanGyoushoOTF.otf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "KouzanBrushFontOTF": {
    "Regular": {
      "file": "KouzanMouhituFontOTF.otf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "KouzanBrushFontSousyoOTF": {
    "Regular": {
      "file": "KouzanSoushoOTF.otf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },

  "aoyagireisyo2": {
    "Regular": {
      "file": "aoyagireisyosimo_ttf_2_02.ttf",
      "font-weight": "normal",
      "font-style": "normal"
    },
  },
};

populateFonts(fonts);