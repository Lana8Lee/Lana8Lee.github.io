var arr = document.getElementsByClassName("coll1");
arr[0].onclick=f;

function f(){
    var arr1 = document.getElementsByClassName("icon");
    arr1[0].classList.toggle("on");
    var arr2 = document.getElementsByClassName("menu");
    arr2[0].classList.toggle("menu1");
};
  
$(document).ready(function(){
  
     $(".inner").owlCarousel(
     {
 
      autoPlay: 3000, 
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  }
     );
    
    $("a[href^='#']").on("click",function(e){
        e.preventDefault();
        var top = $($(this).attr("href")).offset().top;
        $("body").animate({
            scrollTop: top,
        },5000,'easeInOutCubic');
        
    });
    
    new WOW().init();
    
});


