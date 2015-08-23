$(document).ready(function(){
	/* bxslider */
	if ($('.product__slider-list').length) {
		$('.product__slider-list').bxSlider({
			slideWidth: 75,
			minSlides: 3,
			maxSlides: 3,
			slideMargin: 10,
			pager: false,
			nextText: '>',
			prevText: '<'
		});
	}
	/* placeholder ie8 */
	$('input').placeholder();
	/* odd - color */
	$('.product-desc__table tr:odd').addClass('grey');
	$('.header__basket-item:odd').addClass('grey');
	/* button up */
	$(window).scroll(function() {
	if($(this).scrollTop() != 0) {
	$('.btn-up').fadeIn();
	}
	else {
	$('.btn-up').fadeOut();
	}
		});
	$('.btn-up').on('click', function(e){
		console.log('btn');
		e.preventDefault();

		$('body, html').animate({scrollTop: 0}, 300);
	});

});