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
var rightEls = document.querySelectorAll("#correct")
var wrongEls = document.querySelectorAll("#wrong")
var answerRightEls = document.querySelectorAll("#answerRight")
var answerWrongEls = document.querySelectorAll("#answerWrong")
var answerEl = "hidden"
var answerWEl = "hidden"

rightEls.forEach(function(rightEl) {
    rightEl.addEventListener("click", function() {
        if (answerEl === "hidden") {
            answerEl = "view";
            answerRightEls.forEach(function(answerRightEl) {
              answerRightEl.style.display = "flex";
        });
        } else {
            answerEl = "hidden";
            answerRightEls.forEach(function(answerRightEl) {  
              answerRightEl.style.display = "none";
            });  
        }
    });
});
wrongEls.forEach(function(wrongEl) {
    wrongEl.addEventListener("click", function() {
        if (answerWEl === "hidden") {
            answerWEl = "view";
            answerWrongEls.forEach(function(answerWrongEl) {
              answerWrongEl.style.display = "flex";
        });
        } else {
            answerEl = "hidden";
            answerWrongEls.forEach(function(answerWrongEl) {  
              answerWrongEl.style.display = "none";
            });  
        }
    });
});