$(document).ready(function () {
    var leftUIEl = $('.jcarousel-control-prev');
    var rightUIEl = $('.jcarousel-control-next');
    var elementsList = $('.carousel-list');

    var pixelsOffset = 300;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = -((elementsCount - 3) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.click(function () {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 300;
            elementsList.animate({
                left: currentLeftValue + "px"
            }, 1500);
        }
    });

    rightUIEl.click(function () {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 300;
            elementsList.animate({
                left: currentLeftValue + "px"
            }, 1500);
        }
    });
});