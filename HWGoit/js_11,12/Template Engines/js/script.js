$(document).ready(function () {

    var html = $('#profile-tmpl').html();

    var contents = [
        {
            title: 'Литвиненко Светлана Игоревна'
            , content: ['Frontend Developer',
                        'Учу фронтенд, потому что:',
                        'Мой контактный телефон:', '+38508428506' ,
                        'Мой профиль:',
                        'Мой фидбэк:',
                        'Большое Вам спасибо!!!:))'
  	    ]
  	  },
        {
            list: ['Мне это нравится',
                   'Это невероятно интересно', 
                   'Хочу освоить новую специальность и работать в IT-индустрии',
                   'Это перспективно' ]
  	  },
        {
            link: 'S.Litvinenko'
  	  }
  ];

    var insert = tmpl(html, {
        data: contents
    });

    $('body').append(insert);

    $('a').attr('href', '#');

    $('img').attr('src', 'img/image.gif');
    $('img').attr('alt', 'cat');

    $('img').addClass('displayed');
});