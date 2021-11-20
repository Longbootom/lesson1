let clear;
let b 
let getValue = function () {
    let number = document.getElementById('number').value;
    number++;
    document.getElementById('number').value = number;
}
function start() {
    clear = setInterval(getValue, 1000);
}
function pause(){
    clearInterval (clear);
}
function stop() {
clearInterval(clear);
b = 0
number.value = b;
}