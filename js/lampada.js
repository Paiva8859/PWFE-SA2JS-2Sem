// Obtém elementos HTML pelo ID
const lamp = document.getElementById('lamp');
const alavanca = document.getElementById('alavanca');
const redstone = document.getElementById('redstone');
const bau = document.getElementById('bau');

// Variável para rastrear se a lâmpada está quebrada ou não
let broken = false;

// Função para marcar a lâmpada como quebrada
function isLampBroken() {
    broken = true;
}

// Função para ligar a lâmpada
function lampOn() {
    if (!broken) {
        lamp.src = '../img/ligada.png';
        alavanca.src = '../img/alavancaLigada.png';
        redstone.src = '../img/RedAcesa.png';
        alavanca.style.height = '30vh';
    } else {
        alavanca.src = '../img/alavancaLigada.png';
        redstone.src = '../img/RedAcesa.png';
        alavanca.style.height = '30vh';
    }
}

// Função para desligar a lâmpada
function lampOff() {
    if (!broken) {
        lamp.src = '../img/desligada.png';
        alavanca.src = '../img/alavancaDesligada.png';
        redstone.src = '../img/RedApagada.png';
        alavanca.style.height = '40vh';
    } else {
        alavanca.src = '../img/alavancaDesligada.png';
        redstone.src = '../img/RedApagada.png';
        alavanca.style.height = '40vh';
    }
}

// Função para quebrar a lâmpada
function lampBroken() {
    lamp.src = '../img/desligada.png';
    bau.src = '../img/BauAberto.png';
    isLampBroken();
}

// Função para consertar a lâmpada
function lampFix() {
    bau.src = '../img/BauFechado.png';
    lamp.src = '../img/desligada.png';
    broken = false;
}

// Evento de duplo clique na lâmpada para quebrá-la
lamp.addEventListener('dblclick', lampBroken);

// Evento de clique na alavanca para ligar ou desligar a lâmpada
alavanca.addEventListener('click', function () {
    if (broken) {
        // Se a lâmpada estiver quebrada, não faz nada
        return;
    }
    if (lamp.src.endsWith('desligada.png')) {
        lampOn();
    } else {
        lampOff();
    }
});

// Evento de clique no baú para consertar a lâmpada (se estiver quebrada)
bau.addEventListener('click', function () {
    if (broken) {
        lampFix();
    }
});
