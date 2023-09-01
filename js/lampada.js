const lamp = document.getElementById ( 'lamp' );
const alavanca = document.getElementById ('alavanca')
const redstone = document.getElementById ('redstone')
let lampadaLigada = false;

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = '../img/ligada.png';
        alavanca.src = '../img/alavancaLigada.png';
        redstone.src = '../img/RedAcesa.png';
        alavanca.style.height="30vh";
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = '../img/desligada.png';
        alavanca.src = '../img/alavancaDesligada.png';
        redstone.src = '../img/RedApagada.png';
        alavanca.style.height="40vh";
    }
}

function lampBroken () {
    lamp.src = '../img/quebrado.jpg';
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
    l
});
