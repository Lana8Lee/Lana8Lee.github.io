$(document).ready(function () {

    //var $links = $('.menu a');
    var $bgC = $('.submenu li a');
    console.log($bgC);


    $('.dropdown').hover(
function(){
$(this).children('.submenu').slideDown(500,stop()); 
},
function(){
$(this).children('.submenu').slideUp(500,stop()); 
}
);
function stop(){
$('.submenu').stop(true, true);
}



});
