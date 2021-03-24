var gamePattern = [];
var buttonColors = ["green", "yellow", "blue", "red"];
var counter = 0;
var n = 0;
var y;
var clicks = {};
var clickCounter = 0;

//input the player
$(document).keypress(function (event) {
    nextSequence(); //define pattern
    titleChanger(2);
});

$(".btn").on("click", function (event) {
    console.log("the button was: " + event.target.id);
    clicks[clickCounter] = event.target.id;
    clickCounter++;
    console.log("clickCounter: " + clickCounter);
    console.log("clicks array: " + event.target.id);
    buttonPressed(event.target.id);
    playSound(event.target.id);

    console.log("beep");
    if (clickCounter == gamePattern.length && checkClicks()) {
        counter++;
        console.log("beep if");
        nextSequence();
        titleChanger(3)
    } else if(clickCounter == gamePattern.length && !checkClicks()) {
        restartGame();
    }
    console.log("the pattern is:")
    for(var n =0; n < gamePattern.length; n++)
    console.log(gamePattern[n]);
    console.log("counter: " + counter);

});

//process input of the player
  

function nextSequence() {
    n = Math.floor(Math.random() * 4);
    var randomColor = buttonColors[n];
    gamePattern[counter] = randomColor;
    buttonPressed(randomColor);
    playSound(randomColor);
}

function restartGame() {
    setTimeout(titleChanger(1), 2000);
    counter = 0;
    gamePattern = {};
}

function titleChanger(x) {

    switch (x) {
        case 1:
            $("h1").text("Press A Key to Start");
            break;
        case 2:
            $("h1").text("the game has started");
            break;
        case 3:
            $("h1").text("level " + counter);
            break;
        case 4:
            $("h1").text("you're wrong!");
            break;
    }
}

function buttonPressed(color) {
    document.getElementById(color).classList.add("pressed");
    setTimeout(function () {
        document.getElementById(color).classList.remove("pressed");
    }, 100);
}

function playSound(color) {
    var str = "A";
    var str2 = document.getElementById(color).id;
    var audio = str.concat(str2);
    var soundToPlay = document.getElementById(audio);
    soundToPlay.play();
}

function checkClicks() {

    console.log("comparing: " + clicks[0]);
    var result = false;
    for (var u = 0; u < clickCounter; u++) {
        if (clicks[u] != gamePattern[u]) {
            result = false;
            titleChanger(4);
            break;
        } else {
            result = true;
        }
    }
    clickCounter = 0;
    return result;
}