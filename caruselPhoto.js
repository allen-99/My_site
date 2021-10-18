
$('section.awSlider .carousel').carousel({
    pause: "hover",
    interval: 5000 });
  
  

  
  $('section.awSlider .carousel').on('slid.bs.carousel', function () {
    var bscn = $(this).find('.item.active > img').attr('src');
    $('section.awSlider > img').attr('src', bscn);
  });


function openCity(evt, cityName) {
    // Declare all variables
    let i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";

    }

    let fistPage = document.getElementsByClassName("FirstPage");
    for (i =0; i < fistPage.length; i++) {
        fistPage[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";

    evt.currentTarget.className += " active";

    // document.getElementById("defaultOpen").click();
}

let messages = [];

function onchang() {

    document.getElementById("urText").focus();
    let urText = document.getElementById("urText");
    let dive = document.createElement('div');
    dive.className = "alertText";
    dive.innerHTML = urText.value;
    if (urText.value === "" || urText.value === " ") return;

    document.getElementById("urPlace").append(dive);
    let inputLine = document.getElementsByClassName("inputLine");

    document.getElementById("urPlace").scrollTo(0,document.getElementById("urPlace").scrollHeight);
    document.getElementById("urText").value = "";
    messages.push(dive.innerHTML);
    localStorage.setItem('messgs',JSON.stringify(messages));
}

window.onload = function() {

    document.getElementById("urText").focus();
    if (localStorage.getItem('messgs') !== null)
    {
        messages = JSON.parse(localStorage.getItem('messgs'));
        messages.forEach(a => {
            let value  = document.createElement('div');
            value.innerHTML = a;
            value.className = "alertText";
            document.getElementById("urPlace").append(value);
            document.getElementById("urPlace").scrollTo(0,document.getElementById("urPlace").scrollHeight);

        })

    }


}
document.getElementById("urText").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        onchang();
    }});

let phrasez = ['да','нет','зачем?','ты уверен?','не думаю что это хорошая идея','скучно','я вызываю полицию','маме привет','Алиса Аликаева пуська']

function youMessage(){
    let urText = document.getElementById("himText");
    let dive = document.createElement('div');
    dive.className = "alertText";
    dive.innerHTML = urText.value;
    if (urText.value === "" || urText.value === " ") return;
    document.getElementById("himPlace").append(dive);
    answerFromHim( urText.value);
    document.getElementById("himPlace").scrollTo(0,document.getElementById("himPlace").scrollHeight);
    document.getElementById("himText").value = "";

}
document.getElementById("himText").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        youMessage();
    }});
function answerFromHim(word){
    let urText = phrasez[Math.floor(Math.random() * (phrasez.length))];
    // if (word === 'да') urText = 'пизда';
    // if (word === 'нет') urText = 'пидора ответ';
    if (word === 'на добром') urText = 'на счастливом';
    if (word === 'люблю тебя') urText = 'и я тебя, кит';
    let dive = document.createElement('div');
    dive.className = "alertText2";
    dive.innerHTML = urText;
    document.getElementById("himPlace").append(dive);
    document.getElementById("himPlace").scrollTo(0,document.getElementById("himPlace").scrollHeight);


}
