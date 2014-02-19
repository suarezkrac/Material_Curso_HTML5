/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['source-sans-pro, sans-serif']='<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>';


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Rectangle2',
            type:'rect',
            rect:['0px','259px','700px','141px','auto','auto'],
            fill:["rgba(113,113,113,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'house',
            type:'group',
            rect:['206px','37px','144','229','auto','auto'],
            c:[
            {
               id:'Rectangle3',
               type:'rect',
               rect:['0px','0px','144px','229px','auto','auto'],
               fill:["rgba(113,113,113,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Rectangle4',
               type:'rect',
               rect:['18px','30px','32px','42px','auto','auto'],
               fill:["rgba(76,76,76,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Rectangle4Copy',
               type:'rect',
               rect:['92px','30px','32px','42px','auto','auto'],
               fill:["rgba(76,76,76,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Rectangle4Copy3',
               type:'rect',
               rect:['19px','101px','32px','42px','auto','auto'],
               fill:["rgba(76,76,76,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Rectangle4Copy2',
               type:'rect',
               rect:['93px','101px','32px','42px','auto','auto'],
               fill:["rgba(76,76,76,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Rectangle4Copy5',
               type:'rect',
               rect:['19px','170px','32px','42px','auto','auto'],
               fill:["rgba(76,76,76,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Rectangle4Copy4',
               type:'rect',
               rect:['93px','170px','32px','42px','auto','auto'],
               fill:["rgba(76,76,76,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            }]
         },
         {
            id:'houseCopy',
            type:'group',
            rect:['540px','37px','144','229','auto','auto'],
            c:[
            {
               id:'Rectangle3Copy',
               type:'rect',
               rect:['0px','0px','144px','229px','auto','auto'],
               fill:["rgba(113,113,113,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Rectangle4Copy11',
               type:'rect',
               rect:['18px','30px','32px','42px','auto','auto'],
               fill:["rgba(76,76,76,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Rectangle4Copy10',
               type:'rect',
               rect:['92px','30px','32px','42px','auto','auto'],
               fill:["rgba(76,76,76,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Rectangle4Copy9',
               type:'rect',
               rect:['19px','101px','32px','42px','auto','auto'],
               fill:["rgba(76,76,76,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Rectangle4Copy8',
               type:'rect',
               rect:['93px','101px','32px','42px','auto','auto'],
               fill:["rgba(76,76,76,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Rectangle4Copy7',
               type:'rect',
               rect:['19px','170px','32px','42px','auto','auto'],
               fill:["rgba(76,76,76,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Rectangle4Copy6',
               type:'rect',
               rect:['93px','170px','32px','42px','auto','auto'],
               fill:["rgba(76,76,76,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            }]
         },
         {
            id:'character',
            type:'rect',
            rect:['0','83','auto','auto','auto','auto']
         },
         {
            id:'Bubble',
            display:'none',
            type:'rect',
            rect:['224px','29px','220px','90px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'Rectangle5',
               type:'rect',
               rect:['178px','67px','30px','30px','auto','auto'],
               fill:["rgba(255,255,255,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[[],['45']]
            },
            {
               id:'Text',
               type:'text',
               rect:['8px','14px','206px','63px','auto','auto'],
               text:"More tutorials at<br>EdgeDocks.com",
               align:"center",
               font:['source-sans-pro, sans-serif',[24,""],"rgba(0,0,0,1)","100","none",""]
            }]
         }],
         symbolInstances: [
         {
            id:'character',
            symbolName:'character'
         }
         ]
      },
   states: {
      "Base State": {
         "${_house}": [
            ["style", "top", '37px'],
            ["style", "left", '206px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '259px'],
            ["color", "background-color", 'rgba(113,113,113,1.00)'],
            ["style", "height", '141px']
         ],
         "${_Rectangle4Copy7}": [
            ["color", "background-color", 'rgba(76,76,76,1.00)'],
            ["style", "left", '19px'],
            ["style", "top", '170px']
         ],
         "${_Rectangle4Copy3}": [
            ["color", "background-color", 'rgba(76,76,76,1.00)'],
            ["style", "left", '19px'],
            ["style", "top", '101px']
         ],
         "${_Rectangle4Copy}": [
            ["color", "background-color", 'rgba(76,76,76,1.00)'],
            ["style", "left", '92px'],
            ["style", "top", '30px']
         ],
         "${_Rectangle4Copy10}": [
            ["color", "background-color", 'rgba(76,76,76,1.00)'],
            ["style", "left", '92px'],
            ["style", "top", '30px']
         ],
         "${_Rectangle4}": [
            ["color", "background-color", 'rgba(76,76,76,1.00)'],
            ["style", "left", '18px'],
            ["style", "top", '30px']
         ],
         "${_Text}": [
            ["style", "top", '14px'],
            ["style", "text-align", 'center'],
            ["style", "font-weight", '100'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "left", '8px'],
            ["style", "width", '206px']
         ],
         "${_Bubble}": [
            ["style", "top", '29px'],
            ["style", "display", 'none'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '224px'],
            ["style", "width", '220px']
         ],
         "${_Rectangle4Copy5}": [
            ["color", "background-color", 'rgba(76,76,76,1.00)'],
            ["style", "left", '19px'],
            ["style", "top", '170px']
         ],
         "${_Rectangle4Copy8}": [
            ["color", "background-color", 'rgba(76,76,76,1.00)'],
            ["style", "left", '93px'],
            ["style", "top", '101px']
         ],
         "${_Rectangle4Copy2}": [
            ["color", "background-color", 'rgba(76,76,76,1.00)'],
            ["style", "left", '93px'],
            ["style", "top", '101px']
         ],
         "${_Rectangle5}": [
            ["style", "top", '67px'],
            ["transform", "rotateZ", '45deg'],
            ["style", "height", '30px'],
            ["style", "left", '178px'],
            ["style", "width", '30px']
         ],
         "${_Rectangle3Copy}": [
            ["style", "top", '0px'],
            ["style", "height", '229px'],
            ["style", "left", '0px'],
            ["style", "width", '144px']
         ],
         "${_Rectangle4Copy9}": [
            ["color", "background-color", 'rgba(76,76,76,1.00)'],
            ["style", "left", '19px'],
            ["style", "top", '101px']
         ],
         "${_Rectangle3}": [
            ["style", "height", '229px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '144px']
         ],
         "${_Rectangle4Copy4}": [
            ["color", "background-color", 'rgba(76,76,76,1.00)'],
            ["style", "left", '93px'],
            ["style", "top", '170px']
         ],
         "${_houseCopy}": [
            ["style", "left", '540px'],
            ["style", "top", '37px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(159,191,223,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '400px'],
            ["style", "width", '700px']
         ],
         "${_Rectangle4Copy6}": [
            ["color", "background-color", 'rgba(76,76,76,1.00)'],
            ["style", "left", '93px'],
            ["style", "top", '170px']
         ],
         "${_Rectangle4Copy11}": [
            ["color", "background-color", 'rgba(76,76,76,1.00)'],
            ["style", "left", '18px'],
            ["style", "top", '30px']
         ],
         "${_character}": [
            ["style", "left", '-200px'],
            ["style", "top", '95px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid17", tween: [ "style", "${_character}", "left", '297px', { fromValue: '-200px'}], position: 0, duration: 3600 },
            { id: "eid31", tween: [ "style", "${_character}", "left", '700px', { fromValue: '297px'}], position: 6400, duration: 3600 },
            { id: "eid19", tween: [ "style", "${_houseCopy}", "left", '372px', { fromValue: '540px'}], position: 0, duration: 3600 },
            { id: "eid35", tween: [ "style", "${_Bubble}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
            { id: "eid36", tween: [ "style", "${_Bubble}", "display", 'none', { fromValue: 'block'}], position: 6400, duration: 0 },
            { id: "eid18", tween: [ "style", "${_house}", "left", '38px', { fromValue: '206px'}], position: 0, duration: 3600 },
            { id: "eid22", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_character}', ['stop'] ], ""], position: 3600 },
            { id: "eid23", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_character}', ['sad'] ], ""], position: 4200 },
            { id: "eid24", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_character}', ['talk'] ], ""], position: 4600 },
            { id: "eid25", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_character}', ['stop'] ], ""], position: 4800 },
            { id: "eid26", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_character}', ['talk'] ], ""], position: 5000 },
            { id: "eid27", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_character}', ['stop'] ], ""], position: 5400 },
            { id: "eid28", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_character}', ['talk'] ], ""], position: 5600 },
            { id: "eid29", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_character}', ['stop'] ], ""], position: 5800 },
            { id: "eid30", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_character}', ['smile'] ], ""], position: 6000 },
            { id: "eid34", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_character}', ['walk'] ], ""], position: 6400 }         ]
      }
   }
},
"character": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Welcome_Spritesheet',
      type: 'image',
      rect: ['-200px','0px','2600px','265px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Welcome_Spritesheet.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '265px'],
            ["style", "width", '200px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Welcome_Spritesheet}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1300,
         autoPlay: true,
         labels: {
            "walk": 100,
            "stop": 1000,
            "talk": 1100,
            "sad": 1200,
            "smile": 1300
         },
         timeline: [
            { id: "eid2", tween: [ "style", "${_Welcome_Spritesheet}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1", tween: [ "style", "${_Welcome_Spritesheet}", "left", '-200px', { fromValue: '0px'}], position: 100, duration: 0 },
            { id: "eid3", tween: [ "style", "${_Welcome_Spritesheet}", "left", '-400px', { fromValue: '-200px'}], position: 200, duration: 0 },
            { id: "eid4", tween: [ "style", "${_Welcome_Spritesheet}", "left", '-600px', { fromValue: '-400px'}], position: 300, duration: 0 },
            { id: "eid5", tween: [ "style", "${_Welcome_Spritesheet}", "left", '-800px', { fromValue: '-600px'}], position: 400, duration: 0 },
            { id: "eid6", tween: [ "style", "${_Welcome_Spritesheet}", "left", '-1000px', { fromValue: '-800px'}], position: 500, duration: 0 },
            { id: "eid7", tween: [ "style", "${_Welcome_Spritesheet}", "left", '-1200px', { fromValue: '-1000px'}], position: 600, duration: 0 },
            { id: "eid8", tween: [ "style", "${_Welcome_Spritesheet}", "left", '-1400px', { fromValue: '-1200px'}], position: 700, duration: 0 },
            { id: "eid9", tween: [ "style", "${_Welcome_Spritesheet}", "left", '-1600px', { fromValue: '-1400px'}], position: 800, duration: 0 },
            { id: "eid10", tween: [ "style", "${_Welcome_Spritesheet}", "left", '-1800px', { fromValue: '-1600px'}], position: 1000, duration: 0 },
            { id: "eid11", tween: [ "style", "${_Welcome_Spritesheet}", "left", '-2000px', { fromValue: '-1800px'}], position: 1100, duration: 0 },
            { id: "eid12", tween: [ "style", "${_Welcome_Spritesheet}", "left", '-2200px', { fromValue: '-2000px'}], position: 1200, duration: 0 },
            { id: "eid13", tween: [ "style", "${_Welcome_Spritesheet}", "left", '-2400px', { fromValue: '-2200px'}], position: 1300, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-207390603");
