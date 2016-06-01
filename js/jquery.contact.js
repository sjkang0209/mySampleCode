(function($){
	$.fn.contact = function(){

		var $this = $(this),
			$body = $('body'),
			$overlay,
			windowWidth = $(window).width(),
			width = $('.work-main li').width(),
			parentWidth = $('.work-main li').offsetParent().width(),
			percent = 100*width/parentWidth;

		function init(){
			renderOverlayView();
			addOverlayControllers();
		}

		function renderOverlayView(){
			$overlay = $(Templates.overlay());
		}

		function addOverlay(){
			$overlay.velocity({opacity:'1'}, 1000);
			$body.append($overlay).css({overflow : 'hidden'});
		}

		function removeOverlay(){
			$overlay.detach();
			$body.css({overflow: 'scroll'});
		}

		$('.contact-btn').click(function(){
			addOverlay();
			//alert('overlay');
		})

		function addOverlayControllers(){
			var	$closeBtn = $overlay.find('.cancel'),
				$contactForm = $overlay.find('.contact-container');
				$contactForm.formValidation();

			$contactForm.fadeIn();

			$closeBtn.click(function(){
				removeOverlay();
				init();
			});

			$overlay.find('form').formValidation(); 

			if(windowWidth > 767){
				$overlay.click(function(e){
					if(e.target === this){
						removeOverlay();
					}
				});
				$contactForm.click(function(e){
					if(e.target === this){
						removeOverlay();
					}
				});
			}
		}
		init();
	}
})(jQuery)