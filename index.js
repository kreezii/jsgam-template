var jsgam=window.jsgam.default;

//Basic game configuration
var config={
  width:960, //Must be the same the image backgrounds
  height:540, //Must be the same the image backgrounds
  //autoResize:false
  //parent:'layerInMyWebpage';
  files:[
    //Add the path to the atlas JSONs files, the fonts and the JSON generated with the JSGAM Editor
    //For example:

    /*
    'data/atlas.json',
    'data/font.fnt',
    'data/game.json',
    */
  ]
};

new jsgam(config); //This command makes all the magic
