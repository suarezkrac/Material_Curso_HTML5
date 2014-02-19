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
         // Load Edge Commons 
         yepnope({
         	load:	"http://cdn.edgecommons.org/an/1.0.0/js/min/EdgeCommons.js",
         	complete: function() {
         
         		// Enable SVG access
         		// Watch extended tutorial on YouTube: http://www.youtube.com/watch?v=4UEB6gaLKuw
         		EC.SVG.accessSVG(sym.$("character")).done(
         			function(svgDocument){
         
         				// add event listener
         				svgDocument.addEventListener("select", function(event) {
         
         					// Remember selected part
         					sym.setVariable("selectedPart", event.target);
         
         					// show the id of the selected part in the textfield
         					sym.$("selectedPartTxt").html( event.target.id );
         				});
         		});
         
         	}
         });
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_color}", "click", function(sym, e) {
         // get selected part of the svg 
         var selectedPart = sym.getVariable("selectedPart");
         
         // set the color of the selected part
         $(selectedPart).css("fill", $(e.currentTarget).css("background-color"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_color3}", "click", function(sym, e) {
         // get selected part of the svg 
         var selectedPart = sym.getVariable("selectedPart");
         
         // set the color of the selected part
         $(selectedPart).css("fill", $(e.currentTarget).css("background-color"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_color2}", "click", function(sym, e) {
         // get selected part of the svg 
         var selectedPart = sym.getVariable("selectedPart");
         
         // set the color of the selected part
         $(selectedPart).css("fill", $(e.currentTarget).css("background-color"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_color1}", "click", function(sym, e) {
         // get selected part of the svg 
         var selectedPart = sym.getVariable("selectedPart");
         
         // set the color of the selected part
         $(selectedPart).css("fill", $(e.currentTarget).css("background-color"));

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-13181186");