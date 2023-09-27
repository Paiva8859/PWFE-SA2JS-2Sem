const lamp = document.getElementById('lamp');
const calc = document.getElementById('calc');
const semaf = document.getElementById('semaf');

lamp.addEventListener('click', function(){
    window.location.href = "../html/lampada.html";
})

calc.addEventListener('click', function(){
    window.location.href = "../html/calculadora.html";
})

semaf.addEventListener('click', function(){
    window.location.href = "../html/semaforo.html";
})