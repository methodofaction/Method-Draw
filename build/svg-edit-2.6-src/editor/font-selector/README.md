[svg-font-loader](http://clintberry.com/2010/07/custom-fonts-with-google-webfont-loader/) - Custom Font Loader for [svg-edit](http://code.google.com/p/svg-edit/)
================================

About
-----

This is a custom font loader written for the amazing svg-edit project.
It allows you to use completely custom fonts by loading them with the 
Google Font Loader. 

For more details, see the [original blog post](http://clintberry.com/2010/07/custom-fonts-with-google-webfont-loader/)

Installation
------------
* Create a folder called "font-selector" in the root of your svg-edit installation.
  
* Copy all the files from this github into that folder
   
* Add the following JavaScript snippet into svg-editor.html after all
     other JavaScript files in the head section:
 
     <!-- Font Loader Start -->
        <link rel="stylesheet" href="font-selector/font-selector.css" type="text/css"/>
        <script type="text/javascript" src="http://www.google.com/jsapi"></script>
        <script type="text/javascript">
          google.load("webfont", "1");
        </script>
        <script type="text/javascript" src="font-selector/font-selector.js"></script>
        <script>
        $(function(){
            Smm.init('tool_font_family');
        });
        </script>
    <!-- Font Loader End -->


    That's it! Now you can add custom generated fonts!

Adding Fonts
------------

There are three steps to adding custom fonts to the font-loader

### 1. Generate the font files and CSS
   Font Squirrel has a very neat tool for creating browser compatible
   font files with the CSS files included. [http://www.fontsquirrel.com/fontface/generator](http://www.fontsquirrel.com/fontface/generator)
   
### 2. Create a font preview image
To make it so that svg-edit doesn't have to download every font at load time (some fonts
are 100k+) it uses preview images in the drop down font selector. To take advantage of 
this performance boost you need to create an image showing what the font looks like for 
the selector. Create this image in your favorite editor and upload it to /fonts/font-images
   
### 3. Upload and configure
Upload the CSS for your new font to /fonts and upload all font files to /fonts/font-files.
Edit your font CSS file so that all the URLs are pointing to the font-files directory. 
Edit font-selector.js and add your font name with the corresponding font css file and preview 
image file to the Smm.fonts variable. Follow the examples provided.
   
Now you have added a completely custom font to your svg-edit!
    
License
-------

This code is released under the [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0), the same license for svg-edit. 

    
       
More Information
----------------

* See my [blog post](http://clintberry.com/2010/07/custom-fonts-with-google-webfont-loader/) on this project for more details.

    
* Read about [svg-edit](http://code.google.com/p/svg-edit/), a javascript based image editor (It's amazing-- trust me).