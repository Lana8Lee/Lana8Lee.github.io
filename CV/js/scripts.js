(function ( $ ){

	'use strict';
	// Banner 
	//*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*		
	var navBar = 77;			
	$('.home-bnr').height( $(window).height() - navBar );
	
	$(window).resize(function(){	
		$('.home-bnr').height( $(window).height() - navBar );
	})
	
	// Animate Name on nav bar 
	//*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*		
	if ( $('#home').length > 0 ){
		var flag = false;
		$(window).scroll(function() {
			var $nav = $('#home .navbar-default'); 
			//var navPos = $nav.offset().top;
			var topOfWindow = $(window).scrollTop();
			var heightScreen = $(window).height();	
			
			if ( topOfWindow > heightScreen ) {				
				$nav.addClass('fixed-nav');
				flag = true; 			
			} else {
				$nav.removeClass('fixed-nav');
			} 
			
		});
	}
	

	// Menu navigation scroll animation
	//*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*		
	var lastId,
		topMenu = $('.navbar-default'),
		topMenuHeight = topMenu.outerHeight() + 0,
		// All list items
		menuItems = topMenu.find("a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
		  var item = $($(this).attr("href"));
		  if (item.length) { return item; }
		});
	
	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = $(this).attr("href"),
		  offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	  $('html, body').stop().animate({ 
		  scrollTop: offsetTop
	  }, 300);
	  //When screen is less than 767
	  if ($(window).width()<767){
	  	$('.navbar-toggle').click();
	  }
	  
	  e.preventDefault();
	});
	
	$('.link-more').click(function(e){
	  var href = $(this).attr("href"),
		  offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	  $('html, body').stop().animate({ 
		  scrollTop: offsetTop
	  }, 300);

	  e.preventDefault();
	});
	
	// Resize
	$(window).resize(function(){
		topMenu = $('.navbar-default');
		topMenuHeight = topMenu.outerHeight() + 0;
		
		// All list items
		menuItems = topMenu.find("a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
		  var item = $($(this).attr("href"));
		  if (item.length) { return item; }
		});
	})
	
	
	
	$(window).load(function(){
		var widthThumb = widthThumbnail();
		$('.container-portfolio img').width( widthThumb );
		
		var heightThumb = heightThumbnail() * 3/5;
		$('.container-portfolio .element .text').outerHeight( heightThumb ); 
		
		var fontSizeThumb = fontSize() + '%';
		$('.text h3').css({'font-size': fontSizeThumb});
		
		function widthThumbnail(){		
			var widthScreen = $(window).width();
			var nElements = $(window).width() > 1200 ? 5 : $(window).width() > 1000 ? 4 : $(window).width() > 800 ? 3 : $(window).width() > 480 ? 2 : 1;
			return ( parseInt( widthScreen / nElements, 10) );
		}
		
		function heightThumbnail(){
			heightThumb = $('.thumb img').height();
			return ( heightThumb );
		}
		
		function fontSize(){
			var widthThumbSize = 381;
			var fontSize = 160;
			var widthThumbNow = widthThumbnail();
			return ( widthThumbNow * fontSize / widthThumbSize );
		}
		
		// Resize
		$(window).resize(function(){	
			widthThumb = widthThumbnail();	
			$('.container-portfolio img').width( widthThumb );
			
			heightThumb = heightThumbnail() * 3/5;
			 $('.container-portfolio .element .text').outerHeight( heightThumb ); 
			 
			var fontSizeThumb = fontSize() + '%';
			$('.text h3').css({'font-size': fontSizeThumb});
			
		})
		
		$('.element').hover(function(){
			$(this).find('.thumb').stop().animate({ marginTop: - heightThumb + 'px' });
			$(this).find('.text').stop().animate({ bottom: - heightThumb + 'px' });
		}, function(){
			$(this).find('.thumb').stop().animate({ marginTop: '0px' });
			$(this).find('.text').stop().animate({ bottom: '0px' });
		})
		
		// Initialize isotope
		//*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*	
		 var $container = $('#container');
		  
		 $container.isotope({
			 layoutMode : 'fitRows',		 
			itemSelector: '.element'
			
		 });
	
		 // filter items when filter link is clicked
		 $('#filters li a').click(function(){
			$('#filters').find('.active').removeClass('active');	
			$(this).parent().addClass('active');
			
			var selector = $(this).attr('data-filter');
			$container.isotope({ filter: selector }, function(){
				$('body').scrollspy('refresh');
			});
			
			return false;
		  });	 
	});
	
	
	// Bind to scroll
	$(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
		 if ($(this).offset().top < fromTop)
		   return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
		   lastId = id;
		   // Set/remove active class
		   menuItems
			 .parent().removeClass("active")
			 .end().filter("[href=#"+id+"]").parent().addClass("active");
	   }                   
	});

	

	
	

	// Lightbox
	//*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*	
	var screenWidth, marginLeft;
	
	var stateObj = {foo: "bar"};
    var pathname = window.location.pathname;
	
	function AnimateLightBox( poplink, postWidth ){
		
		var contentWidth = postWidth ? 0.62 : 0.75; 
		
		if ( postWidth ) {
			screenWidth = ($(window).width() * contentWidth) > 770 ?  770 : $(window).width() * contentWidth;
		} else {
			screenWidth = ($(window).width() * contentWidth) > 770 ?  770 : $(window).width() * contentWidth;
		}
		
		marginLeft =  ((screenWidth) / 2);
		
		// Change the url of the page to the one in the post
		history.pushState( stateObj, 'page', poplink );
				

		
		$('.overlay').animate({ opacity : '1' },'fast', function(){
			
			$('.overlay-container').append('<div class="popup-back load-lightbox" /><div class="close-btn"><span class="left"></span><span class="right"></span></div><div class="popup" /> ');

			$.ajax({
				url: " ",
				data: {},
				cache: false,
				success: function(data){
					// Change the url of the page to the one in the post
					history.pushState( stateObj, 'page', poplink );			
					
					$('.popup').empty().css({marginLeft : -marginLeft + 'px',  width : screenWidth + 'px'});
					
					if ( $(window).width() > 940 ){
						$('.popup').addClass('animated bounceInDown')
					} else {
						$('.popup').animate({top: '+=100', opacity: 1}, 'fast','swing');
					}
					
					$('.popup-back').removeClass('load-lightbox');
					// Get the information from the portfolio div
					$('.popup').html($(data).find('.content-element')).fadeIn();				
					
					$('.popup-back, .close-btn').on ('click touchend',  function(e){
						
						$('.popup').animate({top: '-=140', opacity: 0}, 'fast','linear', function(){
							$('.overlay-container, .overlay').fadeOut('fast',function(){
						
								$(this).remove();
								$('body').removeClass('noscroll');
							});
														
							history.pushState(stateObj, "page", pathname);
						});
					})						   																
				},
				complete: function(){	
					
					var popHeight = $('.popup').height();
					$('.popup-back').height(popHeight);			
									
					if 	( $('.flexslider').length > 0 ){			
					
					// Flexslider for lightbox		
					  $('.flexslider').fitVids().flexslider({
						animation: "fade",
						smoothHeight: true,
						useCSS: true, 
						touch: true,
						video: true, 
						pauseOnHover: false,
						slideshow: false,
						start: function( slider ){
							
							var sliderHeight = slider.slides.eq(0).height();
							slider.height(sliderHeight);	
									
														
						 }//start
						 						 
					  }); //flexslider
					} else {
					
						if ( $('iframe').length > 0 ){					
					   		$('.media').fitVids();
						}
								
					}
				}
			});//ajax		
		});

	}

	// Testimonial
	//*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*	
	$('.nav-testimonials li a').click(function(e){		
		e.preventDefault();
		var index = $(this).parent().index();
		
		$(this).parent().siblings().removeClass('active');
		$(this).parent().addClass('active');
		
		$('.content-testimonials li').removeClass('active');
		$('.content-testimonials li').eq(index).addClass('active');

	})

	
	// When the user click on thumbnails
	//*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*	
	$('.open-popup').on('click touchend', function(e){
		
		e.preventDefault();
		var postWidth = false;
		
		if ( $(window).width() >= 360 && ( navigator.appName !== 'Microsoft Internet Explorer') ){
			
			e.preventDefault();	
			if ($(this).parents().hasClass('preview') || $(this).parents().hasClass('post_image')){
				postWidth = true;
			} else {
				postWidth = false;
			}
			AnimateLightBox($(this).attr('href'), postWidth);
		} else {
			window.location = $(this).attr('href');
		}
	});
	
	// Send Email 
	//*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*	
//	$('').submit(function(e){
//		e.preventDefault();
//		$('.loading').show();
//		$.post('sendmail.php', $('.form').serialize(), function(data){
//			$('.results').html(data);
//		}).success(function(){
//			$('.loading').hide();
//		})
//	});
    
    $("#ajax-contact-form").submit(function() {
        
        $('.loading').show();
		$.ajax({
			type: "GET",
			url: "sendmail.php",
			data: $(this).serialize(),
            function(data){
            $('.results').html(data)}
		}).done(function() {
            $('.loading').hide();
//			alert("Thank You!");
//			
		});
		return false;
	});
    
	
	// Flexslider	
	//*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*		
	if ( $('.flexslider').length > 0 ){		
		$('.flexslider').fitVids().flexslider({
			animation: "fade",
			smoothHeight: true,
			useCSS: true,
			pauseOnHover: false,
			touch: true,
			video: true,
			slideshow: false 
	
		});
	}
	
	// Fit videos not in a slider	
	//*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*	
	$('.media').fitVids();
	

})( jQuery );