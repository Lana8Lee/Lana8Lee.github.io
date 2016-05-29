'use strict';

// массив объектов с вопросами и ответами
let testData = [
{
    question: 'Вопрос №1',
    answer: ['Ответ №1', 'Ответ №2', 'Ответ №3'],
    check: ['true', 'false', 'false'],
    name: 'first'
},
{
    question: 'Вопрос №2',
    answer: ['Ответ №1', 'Ответ №2', 'Ответ №3'],
    check: ['false', 'true', 'false'],
    name: 'second'
},
{
    question: 'Вопрос №3',
    answer: ['Ответ №1', 'Ответ №2', 'Ответ №3'],
    check: ['false', 'false', 'true'],
    name: 'third'
}
];

//записываем в localStorage
localStorage.setItem('questionAnswer', JSON.stringify(testData));

$(function() {

let test = $('#test').html();

let content = localStorage.getItem('questionAnswer');
content = JSON.parse(content);

let page = tmpl(test, { //шаблонизатор
	data: content
});

$('.show_test').click(function() { 
	$('.show_test').hide();
	$('.check').css("display", "block");
    $('.check').before(page);
});

$('.check').on('click', function() { 
    let $result = true;
        $('.checkbox').each(function() {
    	if ($(this).prop('checked') != ($(this).attr('value') == 'true')) {
    			$result = false;
                return false;
    		}
    });
    console.log($result);

$('.modal_text')[0].innerHTML = $result ? 'Ответы верные, тест пройден' : 'Ответы неверные, тест не пройден'; 
    
$('.modal_window').css("display", "block").animate({opacity: 1}, 500); 
    
$('.overlay').show('slow'); 

});

$('.modal_button').on('click', function(){
    $('.modal_window').animate({opacity: 0}, 500, function() {
        $(this).css("display", "none"); 
        
        $('.overlay').hide('slow');
    })
    $('.checkbox').each(function() { 
        $(this).prop('checked', false);
    });
});

});
