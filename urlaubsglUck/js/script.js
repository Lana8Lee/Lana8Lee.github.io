$(function(){
    
    
    
// JQuery-plugin-slider 
var id1 = $('#slider1');
var id2 = $('#slider2');
var id3 = $('#slider3');

slider(id1);
slider(id2);
slider(id3);

function slider(idSlider){
    
    var elWrap = idSlider,
        el =  elWrap.find('.img'),
        indexImg = 1,
        indexMax = el.length,
        phase = 3000;
    
    function change () {
        el.fadeOut(500);
        el.filter(':nth-child('+indexImg+')').fadeIn(500);
    }   
        
    function autoCange () { 
        indexImg++;
        if(indexImg > indexMax) {
            indexImg = 1;
        }           
        change ();
    }   
    var interval = setInterval(autoCange, phase);

    elWrap.mouseover(function() {
        clearInterval(interval);
    });
    elWrap.mouseout(function() {
        interval = setInterval(autoCange, phase);
    });
    
    elWrap.append('<span class="next"></span><span class="prev"></span>');
    var btnNext = $('span.next'),
        btnPrev = $('span.prev');
        
    btnNext.click(function() {
        indexImg++;
        if(indexImg > indexMax) {
            indexImg = 1;
        }
        change ();
    });
    btnPrev.click(function() {
        indexImg--;
        if(indexImg < 1) {
            indexImg = indexMax;
        }
        change ();
    }); 
    
    }
    
 // End JQuery-plugin-slider  
 
   
    //Isotope plugin jQuery

    var $grid = $('.grid').imagesLoaded( function() {
  // init Isotope after all images have loaded
  $grid.isotope({
    // options...
      itemSelector: '.grid-item',
      layoutMode: 'fitRows'
  });
});

    //End Isotope plugin jQuery


// ajax 
$.ajax({
        type: 'GET',
        url:'http://api.pixplorer.co.uk/image?word=' + 'hawaii' + '&amount=7&size=300',

        dataType: 'json',
        success: function(data){
//console.log('data', data); 
     var arrImageurl = _.map(data.images, 'imageurl');
    
   //console.log('arrImageurl', arrImageurl); 
   
    $('.grid-item').each(function(i){
     
       $(this).css('backgroundImage', 'url('+arrImageurl[i]+')');
       
   });

        },
        error: function(){
            // ошибка в IE8 IE9 не работает 
            console.log('Request is bad');
        }
        
            
    });



$('.input-activities__find-btn').on('click', function(e){
  
  var search = $('.input-activities__input-search').val();
  
  
e.preventDefault();
    if(search){
        $('.input-activities__input-search').val('');
     $.ajax({
        type: 'GET',
        url:'http://api.pixplorer.co.uk/image?word=' + search + '&amount=7&size=300',

        dataType: 'json',
        success: function(data){
//console.log('data', data); 
     var arrImageurl = _.map(data.images, 'imageurl');
    
  // console.log('arrImageurl', arrImageurl); 
   
    $('.grid-item').each(function(i){
     
       $(this).css('backgroundImage', 'url('+arrImageurl[i]+')');
       
   });
   
   $('.grid-item > div > p').text(search);

        },
        error: function(){
            console.log('Request is bad');
        }
        
            
    });
  }
    
    
    
});
// End ajax 

 










    
});