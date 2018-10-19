particlesJS.load('particle-js', 'js/particles.json');


var countDownDate = new Date("Oct 19, 2018 19:30:00").getTime();
var x = setInterval(function () {

    var now = new Date().getTime();
    var distance = countDownDate - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds)

    document.getElementById("countdown").innerHTML = hours + " : "
        + minutes + " : " + seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("logo").style.visibility = 'hidden';
        document.getElementById("countdown").innerHTML = "";
        jQuery(function () {
            jQuery(".player").YTPlayer();
        });

    }
}, 1000);

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}
