$(document).ready(function() {
    
    var $dropItem = $(".dropdown__item");
    
            $('.iconToggle').click(function(){
$(this).siblings('.submenu').slideToggle();
$('.menu__dropdown').hide();

if ($(this).attr("src") == "img/open-icon.png")
   $(this).fadeIn(2000).attr("src", "img/close.png");
else
   $(this).fadeIn(2000).attr("src", "img/open-icon.png");
     });
    
    //Profile__dropdown
    $('.caret').on('click', function(){
    $(this).siblings('.menu__dropdown').slideToggle();
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