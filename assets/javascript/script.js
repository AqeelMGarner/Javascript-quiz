function time() {
    let seconds = 15;
    let timeInterval = setInterval(function() {
        document.getElementById("time").innerHTML = seconds;
        if (seconds == 0) {
            clearInterval(timeInterval);
            document.getElementById("time").innerHTML = "0"
            window.location.href = "../../html/gameover.html";
        } else {
            seconds--;
        }
    }, 1000);
};
time()
