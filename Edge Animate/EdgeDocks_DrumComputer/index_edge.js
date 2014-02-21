/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'bg',
            type:'image',
            rect:['-255px','-172px','1353px','916px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bg.svg",'0px','0px']
         },
         {
            id:'drums',
            type:'image',
            rect:['-121px','-2px','1041px','603px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"drums.svg",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '600px'],
            ["style", "width", '800px']
         ],
         "${_drums}": [
            ["style", "top", '-2px'],
            ["style", "height", '603px'],
            ["style", "left", '-121px'],
            ["style", "width", '1041px']
         ],
         "${_bg}": [
            ["style", "left", '-255px'],
            ["style", "top", '-172px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-185311444");
