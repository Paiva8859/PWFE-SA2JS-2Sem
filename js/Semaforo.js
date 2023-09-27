// Função para fazer uma contagem regressiva
function contagem(a) {
    var valor = a;

    setInterval(function () {
        if (valor > 0) {
            valor = valor - 1;
            document.querySelector('.cont').innerHTML = valor;
        }
    }, 1000);
}

// Função para mostrar a luz vermelha
function red() {
    contagem(10); // Inicia uma contagem regressiva de 15 segundos
    var lamp = document.getElementById('red');
    lamp.style.backgroundColor = "red";
    setTimeout(function () {
        lamp.style.backgroundColor = "rgb(99, 44, 44)";
        green(); // Muda para a luz verde após 15 segundos
    }, 15000);
}

// Função para mostrar a luz amarela
function yellow() {
    var lamp = document.getElementById('yellow');
    var amarelo = setInterval(function () {
        lamp.style.backgroundColor = "yellow";
        setTimeout(function () {
            lamp.style.backgroundColor = "rgb(88, 88, 37)";
        }, 500);
    }, 1000);
    setTimeout(function () {
        lamp.style.backgroundColor = "rgb(88, 88, 37)";
        clearInterval(amarelo);
        red(); // Muda para a luz vermelha após 4 segundos de luz amarela
    }, 4000);
}

// Função para mostrar a luz verde
function green() {
    contagem(10); // Inicia uma contagem regressiva de 10 segundos
    var lamp = document.getElementById('green');
    lamp.style.backgroundColor = "rgb(43, 255, 43)";
    setTimeout(function () {
        lamp.style.backgroundColor = "rgb(46, 97, 46)";
        yellow(); // Muda para a luz amarela após 10 segundos
    }, 10000);
}

// Inicia o ciclo de semáforo chamando a função green()
green();
