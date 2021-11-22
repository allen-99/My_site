

function startGame() {
    let hours = document.getElementById("hours").value;
    let minutes = document.getElementById("minutes").value;
    let seconds = document.getElementById("seconds").value;
    if (hours > 24 || minutes > 59 || hours < 0 || minutes < 0 || seconds > 59 || seconds < 0){
        alert("Неправильно ввел данные, попробуй еще раз. (В одном дне максимум 24 часа, в одном часу максимум 59 минут.)");
        document.getElementById("hours").value = "";
        document.getElementById("minutes").value = "";
        document.getElementById("seconds").value = "";
        return;
    }
    let input = document.querySelectorAll('.input');
    input.forEach( e =>{
        e.style.display = 'none';
    })
    let min = document.createElement('label');
    let sec = document.createElement('label');
    let hou = document.createElement('label');

    min.id = 'min';
    sec.id = 'sec';
    hou.id = 'hou';
    sec.class = "gridTimer";
    min.class = "gridTimer";
    hou.class = "gridTimer";
    min.innerHTML = minutes;
    hou.innerHTML = hours;
    sec.innerHTML = seconds;

    document.getElementById("displayHours").append(hou);
    document.getElementById("displayMinutes").append(min);
    document.getElementById("displaySeconds").append(sec);

    startTimer();
}

let timer;

function startTimer(){
    clearInterval(timer);
    let minutes = document.getElementById('minutes').value;
    let seconds = document.getElementById('seconds').value;
    let hours = document.getElementById('hours').value;
    document.getElementById('one').style.display = "inline-block";
    document.getElementById('two').style.display = "inline-block";

    update(hours,minutes,seconds);

    const promise = new Promise((resolve, reject) => {
        timer = setInterval(() => {
            if (hours > 0 || minutes > 0 || seconds > 0) {
                if (seconds != 0) {
                    seconds--;
                    console.log("seconds: " + seconds);
                    update(hours, minutes, seconds);
                } else {
                    if (minutes != 0) {
                        minutes--;
                        seconds = 59;
                        update(hours, minutes, seconds);
                        console.log("minutes: " + minutes);
                        console.log("seconds: " + seconds);

                    } else {
                        if (hours != 0){
                            hours--;
                            minutes = 59;
                            seconds = 59;
                        }
                        update(hours, minutes, seconds);
                        console.log("hours: " + hours);
                        console.log("minutes: " + minutes);
                        console.log("seconds: " + seconds);
                    }
                }
            } else {
                clearInterval(timer);
                document.getElementById('bg').style.background = "rgba(0,0,0,0.7)";
                let mess = document.createElement('div');
                mess.innerHTML = ' ТЫ СЛЕДУЮЩИЙ!';
                mess.style.fontSize = "40px";
                mess.style.color = "antiquewhite";
                document.getElementById("displaySeconds").append(mess);
            }

        }, 1000);
    })
    promise.then(function (){
        clearInterval(timer);
        document.getElementById('bg').style.background = "rgba(0,0,0,0.7)";
        let mess = document.createElement('div');
        mess.innerHTML = ' ТЫ СЛЕДУЮЩИЙ!';
        mess.style.fontSize = "40px";
        mess.style.color = "antiquewhite";
        document.getElementById("displaySeconds").append(mess);
    })

}

function update(hours, minutes, seconds){
    document.getElementById('sec').innerHTML = seconds;
    document.getElementById('min').innerHTML = minutes;
    document.getElementById('hou').innerHTML = hours;
}
