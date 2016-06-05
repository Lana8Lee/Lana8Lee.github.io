$(function() {

  var settingMasonry = {
    percentPosition: true,
    columnWidth: '.grid-sizer',
    itemSelector: '.idea'
  };

  var objURLImg = [];

  var MOBILE_BREAKPOINT  = 320;
  var TABLE_BREAKPOINT   = 768;
  var DESKTOP_BREAKPOINT = 960;

  var sizeFlag;

  getImage('');

  resizeWindow();

  $('.bxslider').bxSlider();


  $( window ).resize(resizeWindow);
  $('.search-partners__search-button').on('click', searchPartners);

  function resizeWindow() {
    var width = window.innerWidth;

    if (width < TABLE_BREAKPOINT) {
      mobile();
    } else if (width < DESKTOP_BREAKPOINT) {
      tablet();
    }
    else desktop();

    function mobile(){
      if (sizeFlag !== 'mobile') {
        sizeFlag = 'mobile';

        settingMasonry.gutter = 0;

        masonryInit();
      }
    }

    function tablet(){
      if (sizeFlag !== 'tablet') {
        sizeFlag = 'tablet';

        settingMasonry.gutter = masonryGetGutter();

        masonryInit();
      }

    }

    function desktop(){
      if (sizeFlag !== 'desktop') {
        sizeFlag = 'desktop';

        settingMasonry.gutter = masonryGetGutter();

        masonryInit();
      }
    }

  }

  function masonryGetGutter() {
    var gutter = parseInt($('.idea').css('marginBottom'));
    return gutter;
  }


  function masonryInit() {
    var $masonryConteiner = $('.ideas__content');
    $masonryConteiner.imagesLoaded(function(){
      $masonryConteiner.masonry(settingMasonry);
      titlePositionCenter();
    });
    $('.idea').imagefill();
  }

  function titlePositionCenter() {
    var ideaHeight = $('.idea').height();

    $('.idea_title').each(function () {
      var ideaTitleHeight = $(this).height();
      var ideaTitleTop = (ideaHeight - ideaTitleHeight) / 2;
      $(this).css('top', ideaTitleTop + 'px');
    });
  }

  function searchPartners(e) {
    e.preventDefault();

    var serchString = $('.search-partners__input').val();

    if (serchString) {

      serchString = serchString.replace(/^\s*/,'').replace(/\s*$/,'').replace(/ {1,}/g," ").replace(/ /ig, '+');

      getImage(serchString);
    }
  }

  function getImage(serchString) {
    $.ajax({
      url:'https://pixabay.com/api/?key=2657411-75b4b22df99708dd71bbad884&q=' + serchString + '&image_type=photo&pretty=true&callback=ajaxCallback',
      dataType: 'jsonp',
      async: false,

      success: function(data) {
        $('.idea__img').each(function(i) {
          $(this).attr('src', data.hits[i].webformatURL);
        });
        $('.idea_title').each(function(i) {
          $(this).text(data.hits[i].tags);
        });
        $('.idea').each(function(i) {
          $(this).attr('href', data.hits[i].webformatURL);
        }).imagefill();
      }
    });
  }
});
