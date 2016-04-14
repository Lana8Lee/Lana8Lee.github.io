
$(function() {

	$('ul.menu').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.box-menu').find('div.block-content').removeClass('active').eq($(this).index()).addClass('active');
	});

});
