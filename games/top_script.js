
let shots = 0;

function startGame(){

    let isWin = false;
    let size = document.getElementById("inputSize").value;
    if (size < 2 || size > 5){
        alert("Размер поля может быть от 2 до 5 клеточек");
        document.getElementById("inputSize").value = '';
        return;
    }
    document.getElementById("inputSize").style.display = "none";
    document.getElementById("inputButton").style.display = "none";
    document.getElementById("definition").style.display = "none";
    document.getElementById("articleFirst").style.display = "none";

    let grid = document.getElementById("grid");
    grid.style.height = size*114 + 'px';
    grid.style.width = size*114 + 'px';

    for (let i =0; i < size; i++){
        for (let j =0; j < size; j++){
            const dive = document.createElement('link');
            dive.className = "blockX";
            dive.id = `${i}${j}`;

            dive.onclick = e => {
                let i = e.target.id[0];
                let j =  e.target.id[1];
                const squares = document.querySelectorAll('.blockX');
                let count = 0;
                squares.forEach(square =>{

                    if (square.id[0] === i && square.id[1] !== j && !isWin){
                        swap(square);

                    }
                    if (square.id[0] !== i && square.id[1] === j && !isWin){
                        swap(square);

                    }
                    if (square.id[0] === i && square.id[1] === j && !isWin){
                        swap(square);

                    }
                    if (square.classList.contains('mole')){
                        count++;
                    }

                })
                if (!isWin) shots += 1;
                if (count === size*size && !isWin){
                    setTimeout("alert('ты смог это сделать за ' + shots + ' шагов')",500);
                    isWin = true;

                }

                document.getElementById("dataScore").innerHTML = shots;

            };
            document.getElementById("grid").append(dive);



        }
    }
    createArticle('score','Ходы: ', 'forScore');
    document.getElementById("dataScore").style.display = "inline-block";
    document.getElementById("dataScore").innerHTML = 0;
}


function swap(obj){
    if (obj.classList.contains('mole')){
        obj.classList.remove('mole');
        obj.style.backgroundImage = "";
    }
    else{
        obj.classList.add('mole');
        obj.style.backgroundImage = "url(\"img/wac3.png\")";
    }


}
function createArticle(name, nameRus, where){
    let score = document.createElement('h2');
    score.id = name;
    score.style.display = "inline-block";
    score.innerHTML = nameRus;
    document.getElementById(where).prepend(score);
}