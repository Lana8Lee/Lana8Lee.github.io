$(function(){
var slides = [
    
    {src: 'img/build.jpg'},
    {src: 'img/your.jpg'},
    {src: 'img/business.jpg'},
    
];

$('.jR3DCarouselGallery').jR3DCarousel({
                    width: 1160,         
                    height: 470,
                    slides: slides,
                    slideLayout : 'fill',
                    autoplay: null,
                    animation: 'slide3D',
                    navigation: 'squares'
                });

$(function() {
    $( "#accordion" ).accordion();
  });
  
    
});
