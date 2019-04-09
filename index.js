var count = 5;

function increment() {
    count = count + 1;

    updateCounter(count);
}

function decrement() {
    count = count - 1;

    updateCounter(count);
}

function updateCounter(count) {
    container.innerText = count;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    return new Array(6)
        .fill(null)
        .reduce((color) => color + letters[Math.floor(Math.random() * 16)], '#');
}

var buttonInc = document.getElementById('inc');
var buttonDec = document.getElementById('dec');
var container = document.getElementById('count');

buttonInc.addEventListener('click', increment);
buttonDec.addEventListener('click', decrement);

updateCounter(count);

var colorChangeButton = document.getElementById('color');

colorChangeButton.addEventListener('click', function() {
    var color = getRandomColor();
    var header = document.getElementsByTagName('h1')[0];
    header.style.cssText = color;

})