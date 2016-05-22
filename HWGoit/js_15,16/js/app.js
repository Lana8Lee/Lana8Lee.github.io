//Prototype

alert('Go to Console :)');

function Human(name, age, sex, height, weight) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.height = height;
    this.weight = weight
};

Human.prototype.constructor = Human;

function Worker(name, age, sex, height, weight, job, salary) {
    Human.apply(this, arguments);
    this.job = job;
    this.salary = salary;
}

Worker.prototype = Object.create(Human.prototype);

Worker.prototype.work = function () {
    console.log("I'm work");
}

Worker.prototype.constructor = Worker;

function Student(name, age, sex, height, weight, study, stipend) {
    Human.apply(this, arguments);
    this.study = study;
    this.stipend = stipend;
}

Student.prototype = Object.create(Human.prototype);

Student.prototype.watchTvShows = function () {
    console.log("I'm watch TV shows");
}

Student.prototype.constructor = Student;

worker1 = new Worker('Sonya', 37, 'female', '170cm', '50kg', 'it', '1000$');
console.log(worker1);
worker2 = new Worker('Luke', 30, 'male', '190cm', '100kg', 'driver', '5000 uah');
console.log(worker2);
student1 = new Student('Merry', 20, 'female', '170cm', '60kg', 'student', '600 uah');
console.log(student1);










var formSearch = document.querySelector('form');
console.log(formSearch);
var inputText = document.querySelector('input');
console.log(inputText);

formSearch.addEventListener("submit",function (e){
  e.preventDefault();
  var inputQuery = inputText.value;
    if (inputQuery) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://www.googleapis.com/customsearch/v1?key=AIzaSyAKQNO0Bto3Pib9GHhtZWiRvbKAXpwsAX0&cx=008015106549682795632:lvamsymmvqm&q=' + inputQuery, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) return;

            if (xhr.status != 200) {
                alert(xhr.status + ': ' + xhr.statusText);
            } 
            else {
                var response = JSON.parse(xhr.responseText);

                var result = document.createElement('ul');

                response.items.forEach(function (item, i) {
                    var li = document.createElement('li');
                    li.innerHTML = '<a href="' + item.formattedUrl +
                        '" title="' + item.formattedUrl +
                        '" target="_blank">' + item.htmlTitle +
                        '</a><br><a class="green_link" href="' + item.formattedUrl +
                        '" title="' + item.formattedUrl +
                        '" target="_blank">' + item.displayLink +
                        '</a><br><p>' + item.htmlSnippet + '</p>';

                    result.appendChild(li);
                });

                var box = document.querySelector('div');
                box.appendChild(result);
            };
        };

        xhr.send();
    };
 return false;
},false);

