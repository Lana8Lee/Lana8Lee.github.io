$(document).ready(function () {

    var $links = $('.menu a');
    var $bgC = $('.submenu li a');
    console.log($bgC);


    $links.hover(function (e) {
            e.preventDefault();
            $(this).siblings('.submenu').slideToggle(1000, stop());
        }
        , function () {});

    function stop() {
        $(this).siblings('.submenu').stop(true, true);
    };



});