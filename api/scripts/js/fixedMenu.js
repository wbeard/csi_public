$(function() {
	
	var menu = $('header');
	var body = $('#homeContainer').html() == null  ? ( $('.causes').html() == null ? $('#sliderContainer, #aboutContainer') : $('#sliderContainer, #aboutContainer, .causes') ) : $('#sliderContainer, #homeContainer');
	
	$(window).scroll(function() {
		if($(this).scrollTop() > 225) {
			menu.css('position', 'fixed');
			menu.css('width', '960px');
			menu.css('top', '-225px');
			body.css('position', 'relative');
			body.css('top', '275px');
		} else {
			menu.css('position', 'relative');
			menu.css('top', '0');
			body.css('top', '0px');
		}
	});
});