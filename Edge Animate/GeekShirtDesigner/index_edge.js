/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['abel, sans-serif']='<script src=\"http://use.edgefonts.net/abel:n4:all.js\"></script>';


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
            id:'selectedBase',
            type:'rect',
            rect:['15px','440px','470px','44px','auto','auto'],
            fill:["rgba(50,50,50,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'selectedPartTxt',
               type:'text',
               rect:['-2px','11px','472px','33px','auto','auto'],
               text:"&lt;SELECTION&gt;",
               align:"center",
               font:['abel, sans-serif',20,"rgba(255,255,255,1.00)","normal","none","normal"]
            }]
         },
         {
            id:'RealShirt2',
            type:'image',
            rect:['15px','15px','470px','426px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"RealShirt.jpg",'0px','0px']
         },
         {
            id:'Preview',
            type:'image',
            rect:['17px','14px','468px','425px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Preview.svg",'0px','0px']
         },
         {
            id:'base',
            type:'rect',
            rect:['491px','280px','295px','155px','auto','auto'],
            fill:["rgba(50,50,50,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'EllipseCopy3',
               type:'ellipse',
               rect:['12px','12px','52px','52px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(148,198,0,1.00)"],
               stroke:[4,"rgba(255,255,255,1.00)","solid"]
            },
            {
               id:'EllipseCopy2',
               type:'ellipse',
               rect:['82px','12px','52px','52px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(8,173,188,1.00)"],
               stroke:[4,"rgba(255,255,255,1.00)","solid"]
            },
            {
               id:'EllipseCopy',
               type:'ellipse',
               rect:['151px','12px','52px','52px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(45,20,75,1.00)"],
               stroke:[4,"rgba(255,255,255,1.00)","solid"]
            },
            {
               id:'Ellipse',
               type:'ellipse',
               rect:['221px','12px','52px','52px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(216,0,106,1.00)"],
               stroke:[4,"rgba(255,255,255,1.00)","solid"]
            },
            {
               id:'EllipseCopy7',
               type:'ellipse',
               rect:['12px','83px','52px','52px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(255,135,0,1.00)"],
               stroke:[4,"rgba(255,255,255,1.00)","solid"]
            },
            {
               id:'EllipseCopy6',
               type:'ellipse',
               rect:['82px','83px','52px','52px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(255,178,107,1.00)"],
               stroke:[4,"rgba(255,255,255,1.00)","solid"]
            },
            {
               id:'EllipseCopy5',
               type:'ellipse',
               rect:['151px','83px','52px','52px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(255,255,255,1.00)"],
               stroke:[4,"rgba(255,255,255,1.00)","solid"]
            },
            {
               id:'EllipseCopy4',
               type:'ellipse',
               rect:['221px','83px','52px','52px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(0,0,0,1.00)"],
               stroke:[4,"rgba(255,255,255,1.00)","solid"]
            }]
         },
         {
            id:'speechBubble',
            type:'rect',
            rect:['491px','190px','295px','84px','auto','auto'],
            fill:["rgba(74,74,74,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'Rectangle3',
               type:'rect',
               rect:['-14px','20px','31px','34px','auto','auto'],
               fill:["rgba(74,74,74,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[[],['45']]
            },
            {
               id:'Text',
               type:'text',
               rect:['18px','15px','266px','60px','auto','auto'],
               text:"Select a part and change the color to match your style!",
               font:['abel, sans-serif',20,"rgba(255,255,255,1.00)","normal","none",""]
            }]
         },
         {
            id:'Title',
            type:'text',
            rect:['509px','13px','278px','186px','auto','auto'],
            text:"CREATE YOUR OWN GEEK SHIRT.",
            align:"left",
            font:['abel, sans-serif',53,"rgba(255,255,255,1)","700","none","normal"]
         },
         {
            id:'button',
            type:'rect',
            rect:['491px','441px','295px','43px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["8px 8px","8px 8px","8px 8px","8px 8px"],
            fill:["rgba(15,98,178,1.00)"],
            stroke:[4,"rgb(255, 255, 255)","none"],
            boxShadow:["inset",3,3,66,0,"rgba(0,0,0,0.65)"],
            filter:[0,0,1,1,0,0,0,0,"rgba(0,0,0,0)",0,0,0],
            c:[
            {
               id:'Buy_Now',
               type:'text',
               rect:['42px','5px','211px','33px','auto','auto'],
               text:"BUY NOW",
               align:"center",
               font:['abel, sans-serif',28,"rgba(255,255,255,1)","normal","none","normal"],
               textShadow:["rgba(50,50,50,0.65)",2,2,0]
            }]
         },
         {
            id:'order',
            display:'none',
            type:'rect',
            rect:['15','15','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'order',
            symbolName:'order'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Title}": [
            ["style", "line-height", '53px'],
            ["style", "font-weight", '700'],
            ["style", "left", '509px'],
            ["style", "font-size", '53px'],
            ["style", "top", '13px'],
            ["style", "text-align", 'left'],
            ["style", "height", '186px'],
            ["style", "font-family", 'abel, sans-serif'],
            ["style", "width", '278px']
         ],
         "${_selectedBase}": [
            ["style", "top", '440px'],
            ["style", "left", '15px']
         ],
         "${_RealShirt2}": [
            ["style", "left", '15px'],
            ["style", "top", '15px']
         ],
         "${_base}": [
            ["color", "background-color", 'rgba(50,50,50,1.00)'],
            ["style", "height", '155px'],
            ["style", "top", '280px'],
            ["style", "left", '491px'],
            ["style", "width", '295px']
         ],
         "${_Buy_Now}": [
            ["subproperty", "textShadow.blur", '0px'],
            ["subproperty", "textShadow.offsetH", '2px'],
            ["subproperty", "textShadow.offsetV", '2px'],
            ["style", "left", '42px'],
            ["style", "font-size", '28px'],
            ["style", "top", '5px'],
            ["style", "text-align", 'center'],
            ["style", "height", '33px'],
            ["subproperty", "textShadow.color", 'rgba(50,50,50,0.65)']
         ],
         "${_speechBubble}": [
            ["color", "background-color", 'rgba(74,74,74,1.00)'],
            ["style", "height", '84px'],
            ["style", "top", '190px'],
            ["style", "left", '491px'],
            ["style", "width", '295px']
         ],
         "${_EllipseCopy6}": [
            ["color", "background-color", 'rgba(255,178,107,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '52px'],
            ["style", "top", '83px'],
            ["style", "height", '52px'],
            ["color", "border-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '82px'],
            ["style", "border-width", '4px']
         ],
         "${_EllipseCopy2}": [
            ["color", "background-color", 'rgba(8,173,188,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '52px'],
            ["style", "top", '12px'],
            ["style", "height", '52px'],
            ["color", "border-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-width", '4px'],
            ["style", "left", '82px']
         ],
         "${_selectedPartTxt}": [
            ["style", "top", '11px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '33px'],
            ["style", "font-family", 'abel, sans-serif'],
            ["style", "left", '-2px'],
            ["style", "width", '472px']
         ],
         "${_button}": [
            ["color", "background-color", 'rgba(15,98,178,1.00)'],
            ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '66px'],
            ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '295px'],
            ["style", "top", '441px'],
            ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "height", '43px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.inset", 'inset']
         ],
         "${_EllipseCopy5}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '52px'],
            ["style", "top", '83px'],
            ["style", "height", '52px'],
            ["color", "border-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '151px'],
            ["style", "border-width", '4px']
         ],
         "${_Text}": [
            ["style", "top", '15px'],
            ["style", "font-size", '20px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "height", '60px'],
            ["style", "font-family", 'abel, sans-serif'],
            ["style", "left", '18px'],
            ["style", "width", '266px']
         ],
         "${_EllipseCopy7}": [
            ["color", "background-color", 'rgba(255,135,0,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '52px'],
            ["style", "top", '83px'],
            ["style", "height", '52px'],
            ["color", "border-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '12px'],
            ["style", "border-width", '4px']
         ],
         "${_EllipseCopy3}": [
            ["color", "background-color", 'rgba(148,198,0,1.00)'],
            ["style", "border-width", '4px'],
            ["color", "border-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '52px'],
            ["style", "border-style", 'solid'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '52px']
         ],
         "${_EllipseCopy}": [
            ["color", "background-color", 'rgba(45,20,75,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '52px'],
            ["style", "top", '12px'],
            ["style", "height", '52px'],
            ["color", "border-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-width", '4px'],
            ["style", "left", '151px']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(74,74,74,1.00)'],
            ["style", "top", '20px'],
            ["style", "left", '-14px'],
            ["transform", "rotateZ", '45deg']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(216,0,106,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '52px'],
            ["style", "top", '12px'],
            ["style", "height", '52px'],
            ["color", "border-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-width", '4px'],
            ["style", "left", '221px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(38,38,38,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '500px'],
            ["style", "width", '800px']
         ],
         "${_order}": [
            ["style", "display", 'none'],
            ["style", "top", '14px']
         ],
         "${_Preview}": [
            ["style", "left", '17px'],
            ["style", "top", '14px']
         ],
         "${_EllipseCopy4}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '52px'],
            ["style", "top", '83px'],
            ["style", "height", '52px'],
            ["color", "border-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '221px'],
            ["style", "border-width", '4px']
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
            { id: "eid28", tween: [ "style", "${_order}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid31", tween: [ "style", "${_order}", "top", '14px', { fromValue: '14px'}], position: 0, duration: 0 }         ]
      }
   }
},
"order": {
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
      type: 'rect',
      id: 'order',
      stroke: [4,'rgb(255, 255, 255)','none'],
      rect: ['0px','0px','770px','468px','auto','auto'],
      fill: ['rgba(15,98,178,1)']
   },
   {
      rect: ['45px','26px','621px','76px','auto','auto'],
      font: ['abel, sans-serif',53,'rgba(255,255,255,1)','700','none','normal'],
      id: 'Text6',
      text: 'Your order:',
      align: 'left',
      type: 'text'
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [1,'rgba(255,255,255,1.00)','solid'],
      rect: ['45px','127px','678px','301px','auto','auto'],
      fill: ['rgba(255,255,255,0.17)']
   },
   {
      rect: ['60px','143px','647px','266px','auto','auto'],
      font: ['abel, sans-serif',26,'rgba(0,0,0,1.00)','700','none','normal'],
      id: 'output',
      text: 'output',
      align: 'left',
      type: 'text'
   },
   {
      type: 'image',
      id: 'close',
      rect: ['724px','20px','26px','26px','auto','auto'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/close.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_output}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '60px'],
            ["style", "font-size", '26px'],
            ["style", "top", '143px'],
            ["style", "text-align", ''],
            ["style", "height", '266px'],
            ["style", "width", '647px'],
            ["style", "opacity", '0']
         ],
         "${symbolSelector}": [
            ["style", "height", '468px'],
            ["style", "width", '770px']
         ],
         "${_order}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,0.17)'],
            ["style", "border-style", 'solid'],
            ["style", "left", '45px'],
            ["style", "height", '301px'],
            ["color", "border-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-width", '1px'],
            ["style", "width", '678px']
         ],
         "${_close}": [
            ["style", "top", '20px'],
            ["style", "left", '724px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text6}": [
            ["style", "top", '26px'],
            ["style", "text-align", ''],
            ["style", "width", '621px'],
            ["style", "font-weight", '700'],
            ["style", "left", '45px'],
            ["style", "font-size", '53px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid30", tween: [ "style", "${_output}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 }         ]
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
})(jQuery, AdobeEdge, "EDGE-13181186");
