var myModule = (function() {

		var init = function() {
			_setUpListeners();
		};

		var _setUpListeners = function() {
			_placeholder();
			_bxSlider();
			_scrollTop();
			_tableOdd();
			_btnUp();
		};

			/* bxslider */
		var _bxSlider = function() {
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
		};
			/* placeholder ie8 */
		var _placeholder = function() {
			$('input').placeholder();
		};
			/* odd - color */
		var _tableOdd = function() {
			$('.product-desc__table tr:odd').addClass('grey');
			$('.header__basket-item:odd').addClass('grey');
		};
			/* button up */
		var _scrollTop = function() {
			$(window).scroll(function() {
					if($(this).scrollTop() != 0) {
						$('.btn-up').fadeIn();
					} else {
						$('.btn-up').fadeOut();
					}
				});
		};
		var _btnUp = function() {
			$('.btn-up').on('click', function(e){
				console.log('btn');
				e.preventDefault();

				$('body, html').animate({scrollTop: 0}, 500);
			});
		};

		return {
		init: init
		};
})();

myModule.init();