particlesJS.load('particle-js', 'js/particles.json');


// Set the date we're counting down to
//var countDownDate = new Date("Oct 19, 2018 19:00:00").getTime();
var countDownDate = new Date("Oct 17, 2018 3:02:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds)

    // Display the result in the element with id="demo"
    document.getElementById("countdown").innerHTML = hours + " : "
        + minutes + " : " + seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "";
        var myPlayer;
        jQuery(function () {
            myPlayer = jQuery(".player").YTPlayer();
        });

    }
}, 1000);

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}


