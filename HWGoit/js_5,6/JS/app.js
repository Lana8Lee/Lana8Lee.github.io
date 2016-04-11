
function StopWatch(el) {
    var time = 0;
    var interval;
    var offset;

    function update() {
        if (this.isOn) {
           time += delta();
        }
        var formattedTime = timeFormatter(time);
        el.textContent = formattedTime;
    }

    function delta() {
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;
        return timePassed;
    }

    function timeFormatter (timeInMilliseconds) {

        var time = new Date(timeInMilliseconds);
        time.setHours(0);
        var hours = time.getHours().toString();
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        var milliseconds = time.getMilliseconds().toString();

        if (hours.length < 2) {
            hours = '0' + hours;
        }
        if (minutes.length < 2) {
            minutes = '0' + minutes;
        }
        if (seconds.length < 2) {
            seconds = '0' + seconds;
        }
        while (milliseconds.length < 3) {
            milliseconds = '0' + milliseconds;
        }
        return hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
    }

    this.isOn = false;

    this.start = function() {
        if(!this.isOn) {
           interval = setInterval(update.bind(this), 10);
           offset = Date.now();
           this.isOn = true;
        }
    };

    this.stop = function() {
        clearInterval(interval);
        interval = null;
        this.isOn = false;
    };

    this.reset = function() {
        time = 0;
        update();
    };
}


var timer = document.getElementById('timer');
var startStop = document.getElementById('startStop');
var clear = document.getElementById('clear');
var watch = new StopWatch(timer);

startStop.addEventListener('click', function() {
    if(watch.isOn) {
        watch.stop();
        startStop.textContent = "Start";
    } else {
        watch.start();
        startStop.textContent = "Stop";
    }
});

clear.addEventListener('click', function() {
    watch.reset();
    watch.stop();
    startStop.textContent = "Start";
});
