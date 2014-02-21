/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // By EdgeDocks.com - Everything Edge
         // Follow us on Twitter: @edgedocks & @simonwidjaja
         
         
         // Load Edge Commons 
         yepnope({
         	load:	"http://cdn.edgecommons.org/an/1.0.2/js/min/EdgeCommons.js",
         	complete: function() {
         		// Load sound manifest
         		var assetsPath = "media/";
         		EC.Sound.setup(
         			[
         				{src: assetsPath + "BassDrum.mp3|" + assetsPath + "BassDrum.ogg", id: "Base_x5F_Schlagfläche"},
         				{src: assetsPath + "Snare.mp3|" + assetsPath + "Snare.ogg", id: 'Snare_x5F_Schlagfläche'},
         				{src: assetsPath + "Hi-Hat.mp3|" + assetsPath + "Hi-Hat.ogg", id: 'HiHat_x5F_Schlagfläche'},
         				{src: assetsPath + "Tom1.mp3|" + assetsPath + "Tom1.ogg", id: 'Tom1_x5F_Schlagfläche'},
         				{src: assetsPath + "Tom2.mp3|" + assetsPath + "Tom2.ogg", id: 'Tom2_x5F_Schlagfläche'},
         				{src: assetsPath + "Tom3.mp3|" + assetsPath + "Tom3.ogg", id: 'Tom3_x5F_Schlagfläche'},
         				{src: assetsPath + "Becken.mp3|" + assetsPath + "Becken.ogg", id: 'Becken_x5F_Schlagfläche'}
         			]
         		);
         
         		// Enable SVG access
         		EC.SVG.accessSVG(sym.$("drums")).done(
         			function(svgDocument){
         				// add event listener
         				svgDocument.addEventListener("select", function(event) {
         
         					//Log selected part in console
         					console.log(event.target.id+"was clicked");
         
         					//Play different sounds
         					EC.Sound.play(event.target.id);
         				});
         			}
         		);
         	}
         });
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-185311444");