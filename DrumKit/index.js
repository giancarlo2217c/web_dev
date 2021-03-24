var x = document.getElementById("crash");
var y = document.getElementById("tom-1");
var z = document.getElementById("tom-2");
var w = document.getElementById("tom-3");
var s = document.getElementById("snare");
var r = document.getElementById("tom-4");
var t = document.getElementById("kick-bass");

document.addEventListener('keydown', logKey);

function logKey(e) {
    var char = (e.code).slice(3, 4).toLowerCase() + " drum";
    console.log(char);
    var pressed = document.getElementsByClassName(char)[0];
    if (e.code == "KeyW") {
        x.play();
        pressed.classList.add("pressed");
        setTimeout(function () {
            pressed.classList.remove("pressed");
        }, 100);
    } else if (e.code == "KeyA") {
        y.play();
        pressed.classList.add("pressed");
        setTimeout(function () {
            pressed.classList.remove("pressed");
        }, 100);
    } else if (e.code == "KeyS") {
        s.play();
        pressed.classList.add("pressed");
        setTimeout(function () {
            pressed.classList.remove("pressed");
        }, 100);
    } else if (e.code == "KeyD") {
        z.play();
        pressed.classList.add("pressed");
        setTimeout(function () {
            pressed.classList.remove("pressed");
        }, 100);
    } else if (e.code == "KeyJ") {
        w.play();
        pressed.classList.add("pressed");
        setTimeout(function () {
            pressed.classList.remove("pressed")
        }, 100);
    } else if (e.code == "KeyK") {
        r.play();
        pressed.classList.add("pressed");
        setTimeout(function () {
            pressed.classList.remove("pressed");
        }, 100);
    } else if (e.code == "KeyL") {
        t.play();
        pressed.classList.add("pressed");
        setTimeout(function () {
            pressed.classList.remove("pressed");
        }, 100);
    }
}

function buttonAnimation(currentKey) {

}