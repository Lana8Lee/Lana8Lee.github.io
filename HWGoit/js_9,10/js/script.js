$(document).ready(function () {

    var $links = $('.menu a');
    var $bgC = $('.submenu li a');
    console.log($bgC);


    $links.hover(function (e) {
            e.preventDefault();
            $(this).siblings('.submenu').slideDown(500, stop());
        }
        , function () {
            $(this).siblings('.submenu').slideUp(500, stop());
        });

    function stop() {
        //$(".sub-menu").stop(true, true);
        $(this).siblings('.submenu').stop(true, true);
    };



});
