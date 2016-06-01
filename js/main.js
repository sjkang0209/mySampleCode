$(document).ready(function(){
	var $body = $('body'),
		$aboutWrp = $('.wrp-about'),
		$workWrp = $('.wrp-work'),
		$buttonBox = $('.button-container'),
		$title = $('.title, .about-txt'),
		$titleRotate = $('.title-container p'),
		$titleEffect = $('.title-line, .title-shadow'),

		width = $('.work-main li').width(),
		parentWidth = $('.work-main li').offsetParent().width(),
		percent = 100*width/parentWidth;


	function init()	{

		$('.header-wrp img').click(function(){
			location.reload();
		});

		$('.work-bg').height($('.work-bg').width());

			if (percent < 33 ) {
				/* Landing Animation */
				$('header img').velocity("fadeIn",600);
				$aboutWrp.velocity({top:25},600, "easeInBounce").velocity({ top:0 }, 300, "easeInSine");

				setTimeout(function(){
					$buttonBox.velocity("slideDown", 600);
				}, 1000);

				setTimeout(function(){
					$titleEffect.velocity({top:'15px'},{delay:300},600).velocity("fadeIn",{delay:700}, 600);
					$title.velocity("fadeIn",{delay:1000}, 600);
					$titleRotate.velocity({rotateZ: "-10deg"},{delay:1000}, 600);
				}, 600);

				setTimeout(function(){
				 	$workWrp.velocity({bottom:50},600, "easeInBounce").velocity({ bottom:0}, 300, "easeInSine");
				 	$('.work-main').velocity("fadeIn",600);
				}, 1400);
			}	

			if (percent > 50 ) {
				$body.velocity("fadeIn",600);
			}	
	}

	init();	

	$body.work();
	$body.contact();

});
