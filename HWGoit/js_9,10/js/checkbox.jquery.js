$(function () {
	$('.checkbox2').checkator()

	$('#activate_checkator4').click(function () {
		if ($('#checkbox2_1').data('checkator') === undefined) {
			$('.checkbox2').checkator();
			$('#activate_checkator4').val('destroy checkator');
		} else {
			$('.checkbox2').checkator('destroy');
			$('#activate_checkator4').val('activate checkator');
		}
	});
});