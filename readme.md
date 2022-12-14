# Method Draw

Method Draw is a web based vector drawing application. The purpose of Method Draw is to provide a simple and easy-to-use SVG editor experience. It purposely removes some features such as layers and line-caps/corners in exchange for a more simple and pleasant experience. If you are looking for a more complete vector editing open-source solution, please check out [SVG Edit](https://github.com/SVG-Edit/svgedit).

#### [Try Method Draw](https://editor.method.ac) online.

![Method Draw](https://method.ac/img/method-draw2021.png)

## Development

Develop and run a local web server under `src`;

```
cd src
python -m SimpleHTTPServer 8000
```

or if you have Python 3: 

```
cd src
python -m http.server 8000
```

## Build

Install dev dependencies:

`npm install`

Then you can build into `dist` by running:

`gulp build`

Deploy `dist` to your static file server of choice.

## Release notes

**2021.05.26** Minor redesign
**2021.05.12** Solved stability issues
**2021.02.15** Major code refactor  
**2021.01.15** Added new fonts  
**2021.01.01** Text handling improvements  
**2020.12.10** Gradient fixes on Windows and Safari MacOS  
**2020.08.04** Vast code simplification  
**2020.08.02** File clean-up and gulp build implemented  
**2020.08.01** Project thawed  
**2015.01.01** Project frozen  
**2013.01.01** Project forked from SVG-Edit  

Sponsor development by [donating to the author](https://method.ac/donate/).

Method Draw is Copyright (c)
Mark MacKay [mark@method.ac](mailto:mark@method.ac)

Published under an MIT License. Enjoy.
