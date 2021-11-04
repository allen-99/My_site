let hitPosition;
let timer;
let c = 40;
let timeC = 40;
document.getElementById("volume").addEventListener("change", function(){
    c = this.value;
    timeC = this.value;
});
let shots = 0;
document.getElementById("volume").addEventListener("change", function(){
    document.getElementById("volumeRange").innerHTML = this.value + " секунд";
});


function displayNo(){
    document.getElementById("inputSize").style.display = "none";
    document.getElementById("inputButton").style.display = "none";
    document.getElementById("articleFirst").style.display = "none";
    document.getElementById("definition").style.display = "none";
    document.getElementById("volumeLabel").style.display = "none";
    document.getElementById("volume").style.display = "none";
    document.getElementById("volumeRange").style.display = "none";
}

function startGame(){
    let size = document.getElementById("inputSize").value;
    if (size < 2 || size > 5){
        alert("Размер поля может быть от 2 до 5 клеточек");
        document.getElementById("inputSize").value = '';
        return;
    }
    let count = 0;
    let grid = document.getElementById("grid");
    grid.style.height = size*114 + 'px';
    grid.style.width = size*114 + 'px';
    for (let i =0; i < size; i++){
        for (let j =0; j < size; j++){
            let dive = document.createElement('div');
            dive.className = "blockX";
            dive.id = 'block ' +count;
            document.getElementById("grid").append(dive);
            dive.addEventListener('click',() => {
                if (hitPosition === dive.id){
                    if (dive.classList.contains('mole')){
                        shots += 1;
                    }

                    hitPosition = null;
                }
            })
        }
    }
    displayNo();
    createArticle('score','Очки: ', 'forScore');
    createArticle('time','Время: ', 'forTime');
    document.getElementById("dataTime").style.display = "inline-block";
    document.getElementById("dataTime").innerHTML = `1:00`;
    document.getElementById("dataScore").style.display = "inline-block";
    document.getElementById("dataScore").innerHTML = 0;

    const squares = document.querySelectorAll('.blockX');
    let randomSquare = squares[Math.floor(Math.random() * (size*size-1))];
    randomSquare.classList.add('mole');
    randomSquare.style.backgroundImage = "url(\"img/wac3.png\")";

    startTimer(size);

}


function startTimer(size){
    clearInterval(timer);
    timer = setInterval(() =>{
        updateUi(size)
    },1000);
}

function updateUi(size) {

    c--;
    document.getElementById("dataTime").innerHTML =  `0:${c}`;
    if (c === 0) {

        alert(`Игра окончена. Ты молодец, твой счет ${shots}`);
        clearInterval(timer);
        let dive = document.createElement('button');
        dive.id = "restartButton";
        dive.className = "butt";
        dive.onclick = restartGame;
        dive.innerHTML = "сыграть еще раз";
        document.getElementById("grid").append(dive);
    }
    randomRat(size);
    document.getElementById("dataScore").innerHTML = shots;
}

function randomRat(size){
    const squares = document.querySelectorAll('.blockX');

    squares.forEach(square => {
        square.classList.remove('.mole');
        square.style.backgroundImage = '';
    })
    let randomSquare = squares[Math.floor(Math.random() * (size*size-1))];

    randomSquare.classList.add('mole');
    randomSquare.style.backgroundImage = "url(\"img/wac3.png\")";
    hitPosition = randomSquare.id;
}

function restartGame(){
    let size = document.getElementById("inputSize").value;
    c = timeC;
    console.log(timeC);
    shots = 0;
    document.getElementById("restartButton").remove();
    startTimer(size);


}




function createArticle(name, nameRus, where){
    let score = document.createElement('h2');
    score.id = name;
    score.style.display = "inline-block";
    score.innerHTML = nameRus;
    document.getElementById(where).prepend(score);
}