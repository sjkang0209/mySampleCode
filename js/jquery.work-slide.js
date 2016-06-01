(function($){

	$.fn.work = function(){

		var width = $('.work-main li').width(),
			parentWidth = $('.work-main li').offsetParent().width(),
			percent = 100*width/parentWidth,

			/* top summary */
			$workTopRow = $('.first-section li'),
			currentTopIndex = -1,
			topSummaryIsOpen = false,
			$summaryTop = $('.summary-container1'),
			/* bottom summary */

			$workBottomRow = $('.second-section li'),
			currentBottomIndex = -1,
			bottomSummaryIsOpen = false,
			$summaryBottom = $('.summary-container2');

			/* tablet SLIDE */
			if (percent < 33 ) {


				/* Nav Move */
				$('nav a, .greeting a').click(function(){
					var id = $(this).attr('href')
					$(id).velocity('scroll', {duration: 600, offset: '12px'});
				});

				/* Sticky Header */
				$(window).scroll(function(){
					var scroll = $(window).scrollTop();
					if (scroll > 155){
						$('.button-container').addClass('stuck');
					}else{
						$('.button-container').removeClass('stuck');
					}
				})


				$workTopRow.click(function(e){
					e.preventDefault();
					var newIndex = $workTopRow.index($(this)),
						summary = $(this).find('.work-summary').html(),
						$figure = $(this).find('figure');
						$workTopRow.find('figure').removeClass('selected');
						$workBottomRow.find('figure').removeClass('selected');

					if(bottomSummaryIsOpen){
						//close it
						$summaryBottom.velocity("slideUp", 300);
						bottomSummaryIsOpen = false;
						currentBottomIndex = -1;
					}

					if(!topSummaryIsOpen){
						//open
						$workTopRow.velocity("scroll", {duration: 300, offset: -250, complete: function(){
							$summaryTop.html(summary).css({height:"300px", overflow:"auto"}).velocity("slideDown", 300);	
							currentTopIndex = newIndex;
							topSummaryIsOpen = true;
							$figure.addClass('selected');
						}});

					}else if(topSummaryIsOpen && newIndex === currentTopIndex){
						//close
						$summaryTop.velocity("slideUp", 300);
						topSummaryIsOpen = false;
						currentTopIndex = -1;
						$figure.removeClass('selected');

					}else if(topSummaryIsOpen && newIndex !== currentTopIndex){
						//change the content
						//$workTopRow.velocity("scroll", { duration: 600, offset: -250});
						$summaryTop.html(summary).velocity("fadeIn", 300);
						currentTopIndex = newIndex;
						$figure.addClass('selected');
					}
				});

				$workBottomRow.click(function(e){
					e.preventDefault();
					var newIndex = $workBottomRow.index($(this)),
						summary = $(this).find('.work-summary').html(),
						$figure = $(this).find('figure');
						$workTopRow.find('figure').removeClass('selected');
						$workBottomRow.find('figure').removeClass('selected');

					if(topSummaryIsOpen){
						//close it
						$summaryTop.velocity("slideUp", 300);
						topSummaryIsOpen = false;
						currentTopIndex = -1;
					}

					if(!bottomSummaryIsOpen){
						//open
						$summaryBottom.html(summary).css({height:"300px", overflow:"auto"}).velocity("slideDown", 300);	
						$workBottomRow.velocity("scroll", {delay:300, duration: 300, offset: 250});
						currentBottomIndex = newIndex;
						bottomSummaryIsOpen = true;
						$figure.addClass('selected');
	

					}else if(bottomSummaryIsOpen && newIndex === currentBottomIndex){
						//close
						$summaryBottom.velocity("slideUp", 300);
						bottomSummaryIsOpen = false;
						currentBottomIndex = -1;
						$figure.removeClass('selected');

					}else if(bottomSummaryIsOpen && newIndex !== currentBottomIndex){
						//change the content
						//$workTopRow.velocity("scroll", { duration: 600, offset: -250});
						$summaryBottom.html(summary).velocity("fadeIn", 300);
						currentBottomIndex = newIndex;
						$figure.addClass('selected');
					}
				});
			}

			/* MOBILE SLIDE */
			if (percent > 50 ) {
				
				var $workRow = $('.work-main li'),
					$figure = $workRow.find('figure');

				/* Nav Move */

				$('nav a, .greeting a, figure a').click(function(){
					var id = $(this).attr('href');
					$(id).velocity('scroll', {duration: 600, offset: '-80px'});
					if($figure.hasClass('selected')){
						$(id).velocity('scroll', {delay:100, duration: 600, offset: '-80px'});
					}
				});

				/* Sticky Header */
				$(window).scroll(function(){
					var scroll = $(window).scrollTop();
					if (scroll > 135){
						$('.button-container').addClass('stuck');
					}else{
						$('.button-container').removeClass('stuck');
					}
				})

				$figure.click(function(e){
					e.preventDefault();
					var $this = $(this);

					if(!$this.hasClass('open')){
						//close any other open summary
						$workRow.find('figure.open').removeClass('selected');
						$workRow.find('figure.open').removeClass('open').next().velocity("slideUp", 300);
						//open the selected summary
						$this.addClass('selected');
						$this.addClass('open').next().velocity("slideDown", 300);
					}else{
						$this.removeClass('selected');
						$this.removeClass('open').next().velocity("slideUp", 300);
					}
				});

			}
	}
})(jQuery)