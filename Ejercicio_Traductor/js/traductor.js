$(document).ready(function(){
	$('#termino_input').focus(function(){
		$(this).attr('value','');
	});
	$('#termino_input').blur(function(){
		var x= $(this).attr('value');
		if(x==""){
			var x= $(this).attr('value','Español-Aleman');
		}
	
	});
	$('#termino_input').keypress(function(){
		$('.resultado_ajax').hide();
		$.ajax({
			type: 'POST',
			url: $('form').attr('action'),
			data: $('form').serialize(),
			success: function(data){
				$('.resultado_ajax').fadeIn("slow");
				$('.resultado_ajax').html(data);

			}

		});

	});




});