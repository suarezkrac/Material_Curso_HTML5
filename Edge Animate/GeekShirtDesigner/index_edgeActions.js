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
         	load:	"http://cdn.edgecommons.org/an/1.0.2/js/min/EdgeCommons.js",
         	complete: function() {
         
         		// Setup store to save data
         		var stage = sym;
         		stage.setVariable("store", {});
         
         		// Enable SVG access
         		EC.SVG.accessSVG(sym.$("Preview")).done(
         			function(svgDocument){
         
         				// Add event listener
         				svgDocument.addEventListener("select", function(event) {
         
         					// Remember selected part
         					sym.setVariable("selectedPart", event.target);
         
         					// Show the id of the selected part in the textfield
         					sym.$("selectedPartTxt").html( event.target.id );
         
         				});
         		});
         
         		// Define global function on stage level to change color
         		sym.setVariable("changeColor", function(color) {
         
         			// Get selected part of the svg 
         			var selectedPart = sym.getVariable("selectedPart");
         
         			// Set the color of the selected part
         			$(selectedPart).css("fill", color);
         
         			// Save to store
         			var store = sym.getComposition().getStage().getVariable("store");
         			store[selectedPart.id] = color;
         		});
         
         	}
         });
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_EllipseCopy3}", "click", function(sym, e) {
         // Call global "changeColor()" function to set new color
         var stage = sym.getComposition().getStage();
         var changeColor = stage.getVariable("changeColor");
         changeColor( $(e.currentTarget).css("background-color") );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_EllipseCopy2}", "click", function(sym, e) {
         // Call global "changeColor()" function to set new color
         var stage = sym.getComposition().getStage();
         var changeColor = stage.getVariable("changeColor");
         changeColor( $(e.currentTarget).css("background-color") );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_EllipseCopy}", "click", function(sym, e) {
         // Call global "changeColor()" function to set new color
         var stage = sym.getComposition().getStage();
         var changeColor = stage.getVariable("changeColor");
         changeColor( $(e.currentTarget).css("background-color") );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ellipse}", "click", function(sym, e) {
         // Get reference to function "changeColor"
         var stage = sym.getComposition().getStage();
         var changeColor = stage.getVariable("changeColor");
         
         // Call function with the color of the selected circle
         changeColor( $(e.currentTarget).css("background-color") );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_EllipseCopy4}", "click", function(sym, e) {
         // Call global "changeColor()" function to set new color
         var stage = sym.getComposition().getStage();
         var changeColor = stage.getVariable("changeColor");
         changeColor( $(e.currentTarget).css("background-color") );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_EllipseCopy5}", "click", function(sym, e) {
         // Call global "changeColor()" function to set new color
         var stage = sym.getComposition().getStage();
         var changeColor = stage.getVariable("changeColor");
         changeColor( $(e.currentTarget).css("background-color") );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_EllipseCopy6}", "click", function(sym, e) {
         // Call global "changeColor()" function to set new color
         var stage = sym.getComposition().getStage();
         var changeColor = stage.getVariable("changeColor");
         changeColor( $(e.currentTarget).css("background-color") );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_EllipseCopy7}", "click", function(sym, e) {
         // Call global "changeColor()" function to set new color
         var stage = sym.getComposition().getStage();
         var changeColor = stage.getVariable("changeColor");
         changeColor( $(e.currentTarget).css("background-color") );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button}", "click", function(sym, e) {
         // Show order view and update by playing
         sym.getSymbol("order").getSymbolElement().show();
         sym.getSymbol("order").play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'order'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_close}", "click", function(sym, e) {
         // Close order view
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         //--------------------
         // Update output
         //--------------------
         
         // Get store
         var store = sym.getComposition().getStage().getVariable("store");
         
         sym.$("output").empty();
         for (prop in store) {
         	sym.$("output").append(prop+": "+store[prop]+"<br/>");
         }
         
         //--------------------------------------------------------------------------------
         // (Optional) Send to server to store in database or send as email...
         //--------------------------------------------------------------------------------
         // Send store as JSON to server
         console.debug( JSON.stringify(store) );
         
         $.ajax({
           type: "POST",
           url: "store.php",
           data: {data: JSON.stringify(store)},
           success: function() {},
           dataType: "json"
         });

      });
      //Edge binding end

   })("order");
   //Edge symbol end:'order'

})(jQuery, AdobeEdge, "EDGE-13181186");