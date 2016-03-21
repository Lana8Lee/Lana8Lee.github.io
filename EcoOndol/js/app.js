$(document).ready(function(){
	$("a[href^='#']").on("click",function(e){
		e.preventDefault();
		var top = $($(this).attr("href")).offset().top;
		
		console.log(top);
		
		$("body").animate({
			scrollTop: top,
			
		},2000,'easeInSine');
		
	});
    	$(".eTimer").eTimer({
			etType: 1, etDate: "07.03.2016.0.0", etTitleText: "До окончания акции осталось:", etTitleSize: 21, etShowSign: 1, etSep: " ", etFontFamily: "Trebuchet MS", etTextColor: "#f3ebeb", etPaddingTB: 22, etPaddingLR: 10, etBackground: "#f1691e", etBorderSize: 0, etBorderRadius: 19, etBorderColor: "white", etShadow: " 0px 0px 10px 0px #333333", etLastUnit: 4, etNumberFontFamily: "Impact", etNumberSize: 35, etNumberColor: "white", etNumberPaddingTB: 0, etNumberPaddingLR: 8, etNumberBackground: "#262423", etNumberBorderSize: 0, etNumberBorderRadius: 5, etNumberBorderColor: "white", etNumberShadow: "inset -3px 8px 5px 0px rgba(153, 143, 143, 0.5)"
		});
    
	new WOW().init();
	
	 CloudZoom.quickStart();
    
	var left = 0;
	$(".main-menu a").mouseenter(function(){
		console.log($(this).parent().find(".line-menu"));
		
		if($("body").find("p.line-menu").length != 0 )
		{
			 left = $(this).offset().left;
			$("p.line-menu").animate({
				width: $(this).width(),
				left:left,
				
			},100);
			
			
		}
		else{
			 left = $(this).offset().left;
				$(this).parent().append($("<p>",{
				class:"line-menu",
				height:"2px",
				width: "0",


			}).css({
				margin: "0",
				padding: "0",
				background:"orange",
				position:"absolute",
				left:left	

			}).animate({
				width : $(this).width()



				},100));
		}
		
		
		
		
		
	});
    

  $grid = $('.grid').isotope({
  
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});
    
    
   $("input[name='phone']").mask("+3 8(999) 999-99-99",{completed:function(){alert("You typed the following: "+this.val());}});
    $(".fancybox").fancybox();
   



$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
    
    
    var getbid = function(){
        $.ajax({
			type: "GET",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
        
    };
    
$("input[name='bids']").click(getbid);
    $("input[name='bid']").click(getbid);
    $("input[name='know']").click(getbid);
    $("input[name='gift']").click(getbid);
      $("input[name='userbid']").click(getbid);
    

    
    
   $(".owl1").owlCarousel(
     {
 
//      autoPlay: 3000, 
 
      items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsMobile : [479,1],
    navigation : true,
 
  }
     );
    $(".onfa").on("click",function(){
        $(".dn").toggle(".db");
    });
    
    
    
    

    
});