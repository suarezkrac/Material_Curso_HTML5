
$(document).ready(function(){

$('#rojo').click(function(){

	$('#lienzo').mousemove(function(event){
		var x = event.clientX;

		var y = event.clientY;
		
		$('#lienzo').append('<div style="position:absolute; width:10px; height:10px; background:red; border-radius:5px; transform:translate('+x+'px,'+y+'px); -webkit-transform:translate('+x+'px,'+y+'px); -moz-transform:translate('+x+'px,'+y+'px);"></div>');

	});
});

$('#verde').click(function(){

	$('#lienzo').mousemove(function(event){
		var x = event.clientX;

		var y = event.clientY;
		
		$('#lienzo').append('<div style="position:absolute; width:10px; height:10px; background:green; border-radius:5px; transform:translate('+x+'px,'+y+'px); -webkit-transform:translate('+x+'px,'+y+'px); -moz-transform:translate('+x+'px,'+y+'px);"></div>');

	});
});

$('#azul').click(function(){

	$('#lienzo').mousemove(function(event){
		var x = event.clientX;

		var y = event.clientY;
		
		$('#lienzo').append('<div style="position:absolute; width:10px; height:10px; background:blue; border-radius:5px; transform:translate('+x+'px,'+y+'px); -webkit-transform:translate('+x+'px,'+y+'px); -moz-transform:translate('+x+'px,'+y+'px);"></div>');

	});
});


});