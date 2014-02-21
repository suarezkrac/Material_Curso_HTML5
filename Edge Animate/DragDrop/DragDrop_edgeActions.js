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
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         yepnope({nope:['jquery-ui-1.10.0.custom.min.js'], complete: init});
         
         
         function init(){
         
         	//Use the code! Draggable! Droppable!!
         	sym.$('part').draggable();
         
         
         
         
         	//Droppable... on the target!
         	sym.$('body').droppable({drop: function() {sym.getSymbol("part").play();}});
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'part'
   (function(symbolName) {   
   
   })("part");
   //Edge symbol end:'part'

})(jQuery, AdobeEdge, "EDGE-34189304");