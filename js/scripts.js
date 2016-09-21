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





})( jQuery );