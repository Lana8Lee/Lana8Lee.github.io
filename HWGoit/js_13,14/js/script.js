'use strict';

//Questions
var testData = [
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

//Questions & answers set in the localStorage
localStorage.setItem('questionAnswer', JSON.stringify(testData));

$(function() {

var test = $('#test').html();

var content = localStorage.getItem('questionAnswer');
content = JSON.parse(content);

var page = tmpl(test, { 
	data: content
});
//button
$('.show_test').click(function() { 
	$('.show_test').hide();
	$('.check').css("display", "block");
    $('.check').before(page);
});
//check the results
$('.check').on('click', function() { 
    var $result = true;
        $('.checkbox').each(function() {
    	if ($(this).prop('checked') != ($(this).attr('value') == 'true')) {
    			$result = false;
                return false;
    		}
    });
    console.log($result);

$('.modal_text')[0].innerHTML = $result ? 'Ответы верные, тест пройден' : 'Ответы неверные, тест не пройден'; 
    
$('.modal_window').css("display", "block").animate({opacity: 1}, 200); 
    
$('.overlay').show('fast'); 

});

$('.modal_button').on('click', function(){
    
    $('.modal_window').animate({opacity: 0}, 200, function() {
        
        $(this).css("display", "none"); 
        $('.overlay').hide('fast'); 
        
    });
    
    $('.checkbox').each(function() { 
        
        $(this).prop('checked', false);
    });
});

})