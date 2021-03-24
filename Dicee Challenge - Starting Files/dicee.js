document.getElementById('button').onclick = function() {
var x = Math.floor(Math.random() * 7 );
var y = Math.floor(Math.random() * 7 );

if(x == 0 ){
    x++;
}
if(y == 0) {
    y++;
}

var w = "dice" + x;
var s = "dice" + y;

document.getElementsByTagName('img')[0].attributes[1].textContent = "images/" + w + ".png";
document.getElementsByTagName('img')[1].attributes[1].textContent = "images/" + s + ".png";

console.log(x)
console.log(y)
}