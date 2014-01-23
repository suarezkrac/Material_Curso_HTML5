function out_cuerda(cuerda){
		$('#'+cuerda+'').css("background","url('img/string.jpg')");
	}	
	
function in_cuerda(cuerda, nota){
		$('#sonido_'+cuerda+'').html('<audio src="sonido/'+nota+'.ogg" autoplay="autoplay"></audio>');
		$ce('#'+cuerda+'').css("background","url('img/string2.jpg')");
	}
$(document).ready(function(){


	$('#E').click(function(){
		$('#sexta').mouseover(function(){
			in_cuerda("sexta", "6E");
		});
		$('#sexta').mouseout(function(){
			out_cuerda("sexta");
		});
		$('#quinta').mouseover(function(){
			in_cuerda("quinta", "5B");
		});
		$('#quinta').mouseout(function(){
			out_cuerda("quinta");
		});
		$('#cuarta').mouseover(function(){
			in_cuerda("cuarta", "4E");
		});
		$('#cuarta').mouseout(function(){
			out_cuerda("cuarta");
		});
			$('#tercera').mouseover(function(){
			in_cuerda("tercera", "3Gs");
		});
		$('#tercera').mouseout(function(){
			out_cuerda("tercera");
		});
		$('#segunda').mouseover(function(){
			in_cuerda("segunda", "2B");
		});
		$('#segunda').mouseout(function(){
			out_cuerda("segunda");
		});
			$('#prima').mouseover(function(){
			in_cuerda("prima", "1E");
		});
		$('#prima').mouseout(function(){
			out_cuerda("prima");
		});

	});

	$('#F').click(function(){
		$('#sexta').mouseover(function(){
			in_cuerda("sexta", "6F");
		});
		$('#sexta').mouseout(function(){
			out_cuerda("sexta");
		});
		$('#quinta').mouseover(function(){
			in_cuerda("quinta", "5C");
		});
		$('#quinta').mouseout(function(){
			out_cuerda("quinta");
		});
		$('#cuarta').mouseover(function(){
			in_cuerda("cuarta", "4F");
		});
		$('#cuarta').mouseout(function(){
			out_cuerda("cuarta");
		});
			$('#tercera').mouseover(function(){
			in_cuerda("tercera", "3A");
		});
		$('#tercera').mouseout(function(){
			out_cuerda("tercera");
		});
		$('#segunda').mouseover(function(){
			in_cuerda("segunda", "2C");
		});
		$('#segunda').mouseout(function(){
			out_cuerda("segunda");
		});
			$('#prima').mouseover(function(){
			in_cuerda("prima", "1F");
		});
		$('#prima').mouseout(function(){
			out_cuerda("prima");
		});

	});

	$('#G').click(function(){
		$('#sexta').mouseover(function(){
			in_cuerda("sexta", "6G");
		});
		$('#sexta').mouseout(function(){
			out_cuerda("sexta");
		});
		$('#quinta').mouseover(function(){
			in_cuerda("quinta", "5B");
		});
		$('#quinta').mouseout(function(){
			out_cuerda("quinta");
		});
		$('#cuarta').mouseover(function(){
			in_cuerda("cuarta", "4D");
		});
		$('#cuarta').mouseout(function(){
			out_cuerda("cuarta");
		});
			$('#tercera').mouseover(function(){
			in_cuerda("tercera", "3G");
		});
		$('#tercera').mouseout(function(){
			out_cuerda("tercera");
		});
		$('#segunda').mouseover(function(){
			in_cuerda("segunda", "2B");
		});
		$('#segunda').mouseout(function(){
			out_cuerda("segunda");
		});
			$('#prima').mouseover(function(){
			in_cuerda("prima", "1G");
		});
		$('#prima').mouseout(function(){
			out_cuerda("prima");
		});

	});
	

});