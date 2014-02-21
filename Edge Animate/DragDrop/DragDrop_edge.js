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
                id: 'part_022',
                type: 'image',
                rect: ['203', '217px','189px','112px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part_02.png",'0px','0px']
            },
            {
                id: 'part_042',
                type: 'image',
                rect: ['8px', '319px','178px','112px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part_04.png",'0px','0px']
            },
            {
                id: 'part_08',
                type: 'image',
                rect: ['25px', '220px','178px','109px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part_08.png",'0px','0px']
            },
            {
                id: 'part_14',
                type: 'image',
                rect: ['209px', '319px','199px','146px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part_14.png",'0px','0px']
            },
            {
                id: 'body',
                type: 'image',
                rect: ['361px', '59px','392px','353px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"body.png",'0px','0px']
            },
            {
                id: 'part',
                type: 'rect',
                rect: ['138px', '94px','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            }],
            symbolInstances: [
            {
                id: 'part',
                symbolName: 'part',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_part_042}": [
                ["style", "left", '8px'],
                ["style", "top", '319px']
            ],
            "${_part}": [
                ["style", "top", '94px'],
                ["style", "left", '138px'],
                ["style", "cursor", 'pointer']
            ],
            "${_body}": [
                ["style", "top", '59px'],
                ["style", "left", '361px']
            ],
            "${_part_022}": [
                ["style", "top", '217px']
            ],
            "${_part_14}": [
                ["style", "left", '209px'],
                ["style", "top", '319px']
            ],
            "${_part_08}": [
                ["style", "left", '25px'],
                ["style", "top", '220px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '500px'],
                ["gradient", "background-image", [270,[['rgba(116,180,202,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
                ["style", "width", '1000px']
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
"part": {
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
                    id: 'part',
                    type: 'image',
                    rect: ['0px', '0px', '198px', '112px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/part_03.png', '0px', '0px']
                },
                {
                    type: 'ellipse',
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    rect: ['25px', '11px', '61px', '84px', 'auto', 'auto'],
                    id: 'Ellipse',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    clip: ['rect(0px 61.375pxpx 84.15625pxpx 0px)'],
                    fill: ['rgba(135,130,99,1.00)']
                },
                {
                    type: 'ellipse',
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    rect: ['25px', '11px', '61px', '84px', 'auto', 'auto'],
                    id: 'EllipseCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    clip: ['rect(0px 61.375pxpx 84.15625pxpx 0px)'],
                    fill: ['rgba(135,130,99,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(135,130,99,1.00)'],
                ["style", "left", '25px'],
                ["style", "clip", [0,61.375,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_EllipseCopy}": [
                ["color", "background-color", 'rgba(135,130,99,1.00)'],
                ["style", "left", '116px'],
                ["style", "clip", [0,61.375,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_part}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '112px'],
                ["style", "width", '198px']
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
                { id: "eid18", tween: [ "style", "${_Ellipse}", "clip", [0,61.375,84.15625,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,61.375,0,0]}], position: 0, duration: 500, easing: "easeInOutQuad" },
                { id: "eid19", tween: [ "style", "${_Ellipse}", "clip", [0,61.375,1,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,61.375,84.15625,0]}], position: 500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid20", tween: [ "style", "${_EllipseCopy}", "clip", [0,61.375,84.15625,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,61.375,0,0]}], position: 0, duration: 500, easing: "easeInOutQuad" },
                { id: "eid21", tween: [ "style", "${_EllipseCopy}", "clip", [0,61.375,1,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,61.375,84.15625,0]}], position: 500, duration: 500, easing: "easeInOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-34189304");
