const lamp = document.getElementById ( 'lamp' );
const alavanca = document.getElementById ('alavanca')
const redstone = document.getElementById ('redstone')
const bau = document.getElementById ('bau')
let lampadaLigada = false;
let broken = false;

function isLampBroken () {
    broken = true;
}

function lampOn () {
    if ( broken == false ) {
        lamp.src = '../img/ligada.png';
        alavanca.src = '../img/alavancaLigada.png';
        redstone.src = '../img/RedAcesa.png';
        alavanca.style.height="30vh";
    } else{
        alavanca.src = '../img/alavancaLigada.png';
        redstone.src = '../img/RedAcesa.png';
        alavanca.style.height="30vh";
    }
}

function lampOff () {
    if ( broken == false ) {
        lamp.src = '../img/desligada.png';
        alavanca.src = '../img/alavancaDesligada.png';
        redstone.src = '../img/RedApagada.png';
        alavanca.style.height="40vh";
    } else{
        alavanca.src = '../img/alavancaDesligada.png';
        redstone.src = '../img/RedApagada.png';
        alavanca.style.height="40vh";
    }
}

function lampBroken () {
    lamp.src = '../img/desligada.png';
    bau.src = '../img/BauAberto.png';
    isLampBroken();
}

function lampFix () {
    bau.src = '../img/BauFechado.png';
    lamp.src = '../img/desligada.png';
    broken = false;
}

lamp.addEventListener ( 'dblclick', lampBroken );

alavanca.addEventListener('click', function () {
    if (lampadaLigada) {
        lampOff();
        lampadaLigada = false;
    } else {
        lampOn();
        lampadaLigada = true;
    }
});


bau.addEventListener ( 'click', function () {
    if (broken == true) {
        lampFix();
    }
});
