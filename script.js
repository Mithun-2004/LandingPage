var countDownDate = new Date("Sep 17, 2023 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.querySelector('#days').innerHTML = (days<10?"0":"") + days;
    document.querySelector('#hours').innerHTML = (hours<10?"0":"") + hours;
    document.querySelector('#minutes').innerHTML =  (minutes<10?"0":"") + minutes;
    document.querySelector('#seconds').innerHTML = (seconds<10?"0":"") + seconds;

    if (distance < 0){
        clearInterval(x);
        document.querySelector('#days').innerHTML = "00";
        document.querySelector('#hours').innerHTML = "00";
        document.querySelector('#minutes').innerHTML = "00";
        document.querySelector('#seconds').innerHTML = "00";
    }
}, 1000);