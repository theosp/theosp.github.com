$(function(){
	
	//Do what we need to when form is submitted.	
	$('#form_submit').click(function(){
	
	//Setup any needed variables.
	var input_name = $('#form_name').val(),
		input_email = $('#form_email').val(),
		input_subject = $('#form_subject').val(),
		input_message = $('#form_message').val(),
		response_text = $('#response');
		//Hide any previous response text 
		response_text.hide();
		
		//Change response text to 'loading...'
		response_text.html('Loading...').show();
		
		//Make AJAX request 
		$.post('contact/php/contact-send.php', {name: input_name, email: input_email, subject: input_subject, message: input_message}, function(data){
			response_text.html(data);
		});
		
		//Cancel default action
		return false;
	});

});