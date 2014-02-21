/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['lato, sans-serif']='<script src=\"http://use.edgefonts.net/lato:n9,i4,n1,i7,i9,n7,i1,i3,n4,n3:all.js\"></script>';


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
            id:'clouds_background_sym',
            type:'rect',
            rect:['195','27','auto','auto','auto','auto']
         },
         {
            id:'textup_sym',
            type:'rect',
            rect:['0','132','auto','auto','auto','auto']
         },
         {
            id:'birdfly_sym',
            type:'rect',
            rect:['-358','-270','auto','auto','auto','auto']
         },
         {
            id:'leftbrace',
            type:'text',
            rect:['0px','-12px','176px','412px','auto','auto'],
            text:"{",
            align:"center",
            font:['lato, sans-serif',338,"rgba(255,255,255,1.00)","100","none","normal"]
         },
         {
            id:'rightbrace',
            type:'text',
            rect:['auto','-12px','176px','412px','-13px','auto'],
            text:"}",
            align:"center",
            font:['lato, sans-serif',338,"rgba(255,255,255,1.00)","100","none","normal"]
         },
         {
            id:'clouds_foreground_sym',
            type:'rect',
            rect:['418','-99','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'textup_sym',
            symbolName:'textup_sym'
         },
         {
            id:'clouds_background_sym',
            symbolName:'clouds_background_sym'
         },
         {
            id:'birdfly_sym',
            symbolName:'birdfly_sym'
         },
         {
            id:'clouds_foreground_sym',
            symbolName:'clouds_foreground_sym'
         }
         ]
      },
   states: {
      "Base State": {
         "${_clouds_foreground_sym}": [
            ["transform", "scaleX", '1.66706'],
            ["style", "top", '233px'],
            ["style", "left", '121px'],
            ["transform", "scaleY", '1.66706']
         ],
         "${_birdfly_sym}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,217,250,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '400px'],
            ["gradient", "background-image", [270,[['rgba(251,255,192,1.00)',0],['rgba(255,197,252,1.00)',100]]]],
            ["style", "width", '100%']
         ],
         "${_rightbrace}": [
            ["style", "top", '-12px'],
            ["style", "height", '412px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "right", '-13px'],
            ["style", "left", 'auto'],
            ["style", "font-size", '338px']
         ],
         "${_leftbrace}": [
            ["style", "top", '-12px'],
            ["style", "height", '412px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "font-size", '338px']
         ],
         "${_clouds_background_sym}": [
            ["style", "top", '167px'],
            ["transform", "scaleY", '1.17083'],
            ["transform", "scaleX", '1.17083'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-337px']
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
            { id: "eid48", tween: [ "style", "${_clouds_background_sym}", "top", '167px', { fromValue: '167px'}], position: 0, duration: 0 },
            { id: "eid47", tween: [ "transform", "${_clouds_background_sym}", "scaleY", '1.17083', { fromValue: '1.17083'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "gradient", "${_Stage}", "background-image", [311,[['rgba(192,249,255,1.00)',0],['rgba(199,255,197,1.00)',100]]], { fromValue: [270,[['rgba(251,255,192,1.00)',0],['rgba(255,197,252,1.00)',100]]]}], position: 0, duration: 10000 },
            { id: "eid2", tween: [ "subproperty", "${_clouds_background_sym}", "filter.blur", '10px', { fromValue: '0px'}], position: 0, duration: 10000 },
            { id: "eid46", tween: [ "transform", "${_clouds_background_sym}", "scaleX", '1.17083', { fromValue: '1.17083'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "style", "${_clouds_background_sym}", "left", '-157px', { fromValue: '-337px'}], position: 0, duration: 10000 },
            { id: "eid51", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,217,250,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,217,250,1.00)'}], position: 0, duration: 0 },
            { id: "eid42", tween: [ "style", "${_clouds_foreground_sym}", "left", '-515px', { fromValue: '121px'}], position: 0, duration: 10000 }         ]
      }
   }
},
"birdfly_sym": {
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
      id: 'birdsprite2',
      type: 'rect',
      rect: ['28.2%','384px','auto','auto','auto','auto']
   },
   {
      id: 'birdsprite1',
      type: 'rect',
      rect: ['79.9%','384px','auto','auto','auto','auto'],
      transform: [[0,0],['-19']]
   }],
   symbolInstances: [
   {
      id: 'birdsprite1',
      symbolName: 'birdsprite_sym'
   },
   {
      id: 'birdsprite2',
      symbolName: 'birdsprite_sym'
   }   ]
   },
   states: {
      "Base State": {
         "${_birdsprite2}": [
            ["style", "top", '-32px'],
            ["transform", "scaleY", '-0.52515'],
            ["transform", "scaleX", '-0.52515'],
            ["subproperty", "filter.blur", '10px'],
            ["style", "left", '-20.92%']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '100%']
         ],
         "${_birdsprite1}": [
            ["style", "top", '290px'],
            ["transform", "scaleY", '-0.52515'],
            ["transform", "rotateZ", '-19deg'],
            ["transform", "scaleX", '-0.52515'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-31.85%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6342,
         autoPlay: true,
         timeline: [
            { id: "eid68", tween: [ "transform", "${_birdsprite2}", "scaleY", '-0.71994', { fromValue: '-0.52515'}], position: 0, duration: 1899 },
            { id: "eid66", tween: [ "style", "${_birdsprite2}", "top", '292px', { fromValue: '-32px'}], position: 0, duration: 1899 },
            { id: "eid74", tween: [ "subproperty", "${_birdsprite1}", "filter.blur", '10px', { fromValue: '0px'}], position: 2149, duration: 1250 },
            { id: "eid65", tween: [ "style", "${_birdsprite2}", "left", '98.04%', { fromValue: '-20.92%'}], position: 0, duration: 1899 },
            { id: "eid70", tween: [ "subproperty", "${_birdsprite2}", "filter.blur", '0px', { fromValue: '10px'}], position: 0, duration: 1250 },
            { id: "eid67", tween: [ "transform", "${_birdsprite2}", "scaleX", '-0.71994', { fromValue: '-0.52515'}], position: 0, duration: 1899 },
            { id: "eid73", tween: [ "style", "${_birdsprite1}", "left", '98.03%', { fromValue: '-31.85%'}], position: 1500, duration: 1899 },
            { id: "eid71", tween: [ "style", "${_birdsprite1}", "top", '-19px', { fromValue: '290px'}], position: 1500, duration: 1899 }         ]
      }
   }
},
"birdsprite_sym": {
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
      type: 'image',
      id: 'birdsprite',
      rect: ['0px','0px','600px','785px','auto','auto'],
      clip: ['rect(0px 123.93212890625px 172.838623046875px 0px)'],
      fill: ['rgba(0,0,0,0)','images/birdsprite.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '193px'],
            ["style", "width", '212px']
         ],
         "${_birdsprite}": [
            ["style", "top", '0px'],
            ["style", "clip", [0,123.93212890625,154.9427490234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '46px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 236,
         autoPlay: true,
         timeline: [
            { id: "eid56", tween: [ "style", "${_birdsprite}", "clip", [0,123.93212890625,154.9427490234375,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,123.93212890625,154.9427490234375,0]}], position: 0, duration: 0 },
            { id: "eid17", tween: [ "style", "${_birdsprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid18", tween: [ "style", "${_birdsprite}", "background-position", [-120,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 13, duration: 0 },
            { id: "eid19", tween: [ "style", "${_birdsprite}", "background-position", [-240,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-120,0]}], position: 26, duration: 0 },
            { id: "eid20", tween: [ "style", "${_birdsprite}", "background-position", [-360,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-240,0]}], position: 39, duration: 0 },
            { id: "eid21", tween: [ "style", "${_birdsprite}", "background-position", [-480,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-360,0]}], position: 54, duration: 0 },
            { id: "eid23", tween: [ "style", "${_birdsprite}", "background-position", [0,-157], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-480,0]}], position: 66, duration: 0 },
            { id: "eid24", tween: [ "style", "${_birdsprite}", "background-position", [-120,-157], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-157]}], position: 80, duration: 0 },
            { id: "eid25", tween: [ "style", "${_birdsprite}", "background-position", [-240,-157], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-120,-157]}], position: 93, duration: 0 },
            { id: "eid26", tween: [ "style", "${_birdsprite}", "background-position", [-360,-157], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-240,-157]}], position: 105, duration: 0 },
            { id: "eid27", tween: [ "style", "${_birdsprite}", "background-position", [-480,-157], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-360,-157]}], position: 119, duration: 0 },
            { id: "eid29", tween: [ "style", "${_birdsprite}", "background-position", [0,-314], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-480,-157]}], position: 132, duration: 0 },
            { id: "eid30", tween: [ "style", "${_birdsprite}", "background-position", [-120,-314], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-314]}], position: 145, duration: 0 },
            { id: "eid31", tween: [ "style", "${_birdsprite}", "background-position", [-240,-314], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-120,-314]}], position: 160, duration: 0 },
            { id: "eid32", tween: [ "style", "${_birdsprite}", "background-position", [-360,-314], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-240,-314]}], position: 172, duration: 0 },
            { id: "eid35", tween: [ "style", "${_birdsprite}", "background-position", [-480,-314], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-360,-314]}], position: 183, duration: 0 },
            { id: "eid36", tween: [ "style", "${_birdsprite}", "background-position", [0,-471], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-480,-314]}], position: 197, duration: 0 },
            { id: "eid37", tween: [ "style", "${_birdsprite}", "background-position", [-120,-471], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-471]}], position: 210, duration: 0 },
            { id: "eid38", tween: [ "style", "${_birdsprite}", "background-position", [-240,-471], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-120,-471]}], position: 223, duration: 0 },
            { id: "eid39", tween: [ "style", "${_birdsprite}", "background-position", [-360,-471], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-240,-471]}], position: 236, duration: 0 }         ]
      }
   }
},
"text_sym": {
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
      font: ['lato, sans-serif',125,'rgba(85,85,85,1.00)','100','none',''],
      type: 'text',
      id: 'Text',
      text: 'this is responsive',
      align: 'center',
      rect: ['0px','0px','960px','208px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "top", '0px'],
            ["style", "font-size", '125px'],
            ["style", "text-align", 'center'],
            ["style", "font-weight", '100'],
            ["color", "color", 'rgba(85,85,85,1.00)'],
            ["style", "font-family", 'lato, sans-serif'],
            ["style", "left", '0px'],
            ["style", "width", '960px']
         ],
         "${symbolSelector}": [
            ["style", "height", '208px'],
            ["style", "width", '960px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid76", tween: [ "color", "${_Text}", "color", 'rgba(0,130,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(85,85,85,1)'}], position: 0, duration: 1000 },
            { id: "eid75", tween: [ "style", "${_Text}", "top", '-110px', { fromValue: '0px'}], position: 0, duration: 1000 }         ]
      }
   }
},
"clouds_background_sym": {
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
      id: 'cloud',
      type: 'image',
      rect: ['773px','20px','315px','243px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cloud.png','0px','0px']
   },
   {
      id: 'cloud5',
      type: 'image',
      rect: ['493px','-49px','444px','342px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cloud.png','0px','0px']
   },
   {
      id: 'cloud4',
      type: 'image',
      rect: ['-150px','-38px','444px','342px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cloud.png','0px','0px']
   },
   {
      id: 'cloud2',
      type: 'image',
      rect: ['802px','-31px','161px','97px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cloud2.png','0px','0px']
   },
   {
      id: 'cloud3',
      type: 'image',
      rect: ['147px','20px','252px','196px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cloud3.png','0px','0px']
   },
   {
      id: 'cloud1',
      type: 'image',
      rect: ['349px','18px','266px','207px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cloud3.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cloud5}": [
            ["style", "height", '342px'],
            ["style", "top", '-49px'],
            ["style", "left", '493px'],
            ["style", "width", '444px']
         ],
         "${_cloud1}": [
            ["style", "height", '207px'],
            ["style", "top", '18px'],
            ["style", "left", '349px'],
            ["style", "width", '266px']
         ],
         "${_cloud3}": [
            ["style", "left", '147px'],
            ["style", "top", '20px']
         ],
         "${symbolSelector}": [
            ["style", "height", '243px'],
            ["style", "width", '315px']
         ],
         "${_cloud2}": [
            ["style", "top", '-31px'],
            ["style", "height", '97px'],
            ["style", "left", '802px'],
            ["style", "width", '161px']
         ],
         "${_cloud}": [
            ["style", "left", '773px'],
            ["style", "top", '20px']
         ],
         "${_cloud4}": [
            ["style", "top", '-38px'],
            ["style", "height", '342px'],
            ["style", "left", '-150px'],
            ["style", "width", '444px']
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
},
"clouds_foreground_sym": {
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
      id: 'cloud',
      type: 'image',
      rect: ['773px','20px','315px','243px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cloud.png','0px','0px']
   },
   {
      id: 'cloud5',
      type: 'image',
      rect: ['493px','-49px','444px','342px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cloud.png','0px','0px']
   },
   {
      id: 'cloud4',
      type: 'image',
      rect: ['-150px','-38px','444px','342px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cloud.png','0px','0px']
   },
   {
      id: 'cloud3',
      type: 'image',
      rect: ['147px','20px','252px','196px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cloud3.png','0px','0px']
   },
   {
      id: 'cloud2',
      type: 'image',
      rect: ['349px','18px','266px','207px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cloud3.png','0px','0px']
   },
   {
      transform: [[0,0],[],[],['0.47','0.47']],
      id: 'cloud1',
      type: 'image',
      rect: ['147px','-90px','252px','196px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cloud3.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cloud5}": [
            ["style", "top", '-49px'],
            ["style", "height", '342px'],
            ["style", "left", '493px'],
            ["style", "width", '444px']
         ],
         "${_cloud1}": [
            ["transform", "scaleX", '0.46987'],
            ["transform", "scaleY", '0.46987'],
            ["style", "left", '147px'],
            ["style", "top", '-90px']
         ],
         "${_cloud2}": [
            ["style", "top", '18px'],
            ["style", "height", '207px'],
            ["style", "left", '349px'],
            ["style", "width", '266px']
         ],
         "${symbolSelector}": [
            ["style", "height", '243px'],
            ["style", "width", '315px']
         ],
         "${_cloud3}": [
            ["style", "left", '147px'],
            ["style", "top", '20px']
         ],
         "${_cloud}": [
            ["style", "left", '773px'],
            ["style", "top", '20px']
         ],
         "${_cloud4}": [
            ["style", "height", '342px'],
            ["style", "top", '-38px'],
            ["style", "left", '-150px'],
            ["style", "width", '444px']
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
},
"textup_sym": {
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
      type: 'text',
      rect: ['0px','0px','100%','208px','auto','auto'],
      id: 'Text',
      text: 'this is responsive',
      align: 'center',
      font: ['lato, sans-serif',60,'rgba(78,78,78,1.00)','100','none','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "top", '0px'],
            ["style", "font-size", '60px'],
            ["style", "text-align", 'center'],
            ["style", "font-weight", '100'],
            ["color", "color", 'rgba(78,78,78,1.00)'],
            ["style", "font-family", 'lato, sans-serif'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${symbolSelector}": [
            ["style", "height", '208px'],
            ["style", "width", '672px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid50", tween: [ "color", "${_Text}", "color", 'rgba(159,161,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(78,78,78,1)'}], position: 0, duration: 1000 },
            { id: "eid49", tween: [ "style", "${_Text}", "top", '-110px', { fromValue: '0px'}], position: 0, duration: 1000 }         ]
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
})(jQuery, AdobeEdge, "EDGE-124939132");
