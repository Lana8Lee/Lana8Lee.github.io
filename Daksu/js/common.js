$(document).ready(function() {
    
    var $dropItem = $(".dropdown__item");
    
            $dropItem.click(function(){
$(this).children('.submenu').slideToggle();
if ($(this).children(".iconToggle").attr("src") == "img/open-icon.png")
   $(this).children(".iconToggle").fadeIn(2000).attr("src", "img/close.png");
else
   $(this).children(".iconToggle").fadeIn(2000).attr("src", "img/open-icon.png");
     });


//  ===========  MENU

$('.main__nav').children('li').on('click', function(){
    $('.main__nav').children("li").children("p").removeClass('active');
    $(this).children("p").addClass('active');
});
    $('.fa-bars').on('click', function(){
    $('.main__nav').slideToggle();
    });





});