function contagem(a) {
    var valor = a;

    setInterval(function () {
        if (valor > 0) {
            valor = valor - 1
            document.querySelector('.cont').innerHTML = valor;
        }
    }, 1000)
}



function red() {
    contagem(15)
    var lamp = document.getElementById('red');
    lamp.style.backgroundColor = "red"
    setTimeout(function () {
        lamp.style.backgroundColor = "rgb(99, 44, 44)";
        green()
    }, 15000)
}
function yellow() {
    var lamp = document.getElementById('yellow');
    var amarelo = setInterval(function () {
        lamp.style.backgroundColor = "yellow"
        setTimeout(function () {
            lamp.style.backgroundColor = "rgb(88, 88, 37)";
        }, 500)
    }, 1000)
    setTimeout(function () {
        lamp.style.backgroundColor = "rgb(88, 88, 37)";
        clearInterval(amarelo)
        red()
    }, 4000)
}
function green() {
    contagem(10)
    var lamp = document.getElementById('green');
    lamp.style.backgroundColor = "rgb(43, 255, 43)";
    setTimeout(function () {
        lamp.style.backgroundColor = "rgb(46, 97, 46)";
        yellow()
    }, 10000)
}
green() 