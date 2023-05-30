$(function() {
	$("#slider").bxSlider({
		auto: true,
		mode: 'horizontal',
		slideWidth: 250,
		slideMargin: 10,
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 1,
		randomStart: true,
		pause: 3000,
		captions: true,
		pager: true,
		pagerType: 'short',
		pagerCustom: '#pager'
	});
});