/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'character',
                type: 'image',
                rect: ['37px', '38px','207px','350px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SVG_Character.svg",'0px','0px']
            },
            {
                id: 'selectedPartTxt',
                type: 'text',
                rect: ['264px', '207px','312px','61px','auto', 'auto'],
                text: "selectedPartTxt<br>",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(0,0,0,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['270px', '57px','312px','98px','auto', 'auto'],
                fill: ["rgba(72,72,72,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle3',
                type: 'rect',
                rect: ['260px', '102px','31px','34px','auto', 'auto'],
                fill: ["rgba(72,72,72,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],['45']]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['288px', '72px','279px','74px','auto', 'auto'],
                text: "Hi! Select my cap, shirt or pants and change the color!",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(255,255,255,1.00)", "normal", "none", ""]
            },
            {
                id: 'color',
                type: 'ellipse',
                rect: ['275px', '288px','61px','61px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(44,153,72,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'color3',
                type: 'ellipse',
                rect: ['349px', '288px','61px','61px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(223,126,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'color2',
                type: 'ellipse',
                rect: ['426px', '288px','61px','61px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(0,76,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'color1',
                type: 'ellipse',
                rect: ['506px', '288px','61px','61px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(142,43,153,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_color2}": [
                ["color", "background-color", 'rgba(0,76,255,1)'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '426px'],
                ["style", "top", '288px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(72,72,72,1)'],
                ["style", "left", '270px'],
                ["style", "top", '57px']
            ],
            "${_color1}": [
                ["color", "background-color", 'rgba(142,43,153,1)'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '506px'],
                ["style", "top", '288px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '102px'],
                ["style", "left", '260px'],
                ["transform", "rotateZ", '45deg']
            ],
            "${_Text}": [
                ["style", "top", '72px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "left", '288px'],
                ["style", "font-size", '20px']
            ],
            "${_color}": [
                ["color", "background-color", 'rgba(44,153,72,1)'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '275px'],
                ["style", "top", '288px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(191,191,191,1.00)'],
                ["style", "width", '600px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_selectedPartTxt}": [
                ["style", "top", '207px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "left", '264px'],
                ["style", "text-align", 'center']
            ],
            "${_color3}": [
                ["color", "background-color", 'rgba(223,126,0,1)'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '349px'],
                ["style", "top", '288px']
            ],
            "${_character}": [
                ["style", "top", '38px'],
                ["style", "height", '350px'],
                ["style", "left", '37px'],
                ["style", "width", '207px']
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


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-13181186");
