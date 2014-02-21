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
         // Control the timeline with the mouse cursor - Get the tutorial here http://tinyurl.com/cxws32a
         this.onMove = function( posX, posY ){
         	timelineControl = Number(posX)*10;
         	sym.stop(timelineControl);
         }
         
         // Center textup_sym
         
         sym.$("textup_sym").css({
         "width":"70%",
         "position":"relative",
         "margin":"0 auto"
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "mousemove", function(sym, e) {
         // Playback the timeline based on the position of the mouse cursor
         this.onMove( e.pageX, e.pageY );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "click", function(sym, e) {
         // Play textup_sym when the stage is clicked
         
         sym.getSymbol("textup_sym").play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'birdfly_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6342, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("birdfly_sym");
   //Edge symbol end:'birdfly_sym'

   //=========================================================
   
   //Edge symbol: 'birdsprite_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 236, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("birdsprite_sym");
   //Edge symbol end:'birdsprite_sym'

   //=========================================================
   
   //Edge symbol: 'text_sym'
   (function(symbolName) {   
   
   })("text_sym");
   //Edge symbol end:'text_sym'

   //=========================================================
   
   //Edge symbol: 'clouds_background_sym'
   (function(symbolName) {   
   
   })("clouds_background_sym");
   //Edge symbol end:'clouds_background_sym'

   //=========================================================
   
   //Edge symbol: 'clouds_background_sym_1'
   (function(symbolName) {   
   
      })("clouds_foreground_sym");
   //Edge symbol end:'clouds_foreground_sym'

   //=========================================================
   
   //Edge symbol: 'textup_sym'
   (function(symbolName) {   
   
   })("textup_sym");
   //Edge symbol end:'textup_sym'

})(jQuery, AdobeEdge, "EDGE-124939132");