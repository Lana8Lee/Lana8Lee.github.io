var arr = [];
for (var i = 0; i < 5; i++){
    arr.push(prompt('Enter Name'));
};

var flag;
var userName = prompt('Enter your User Name');
for (i = 0; i < arr.length; i++){
    if (arr[i] === userName){
        flag = true;
    }
};
if (flag == true) {
    alert('Welcome, '+ userName );
} else
    {
        alert('Sorry, but username' + userName + ' Not Found :(((')
    };