$(document).ready(function() { 
	$('.form-item > #form-input').mouseover(function (){ 
		$(this).next('div.form-input-help').fadeIn(500); 
	});

	$('.form-item > #form-input').mouseleave(function (){
		$(this).next('div.form-input-help').fadeOut(300); 
	});

	$('.form-help-show').click(function (){ 
		$('.form-item').find('div.form-input-help').slideToggle(500);
			return false;
	}); 
});