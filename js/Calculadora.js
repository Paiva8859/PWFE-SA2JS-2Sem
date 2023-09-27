// Obtém o elemento HTML com o id 'display'
let display = document.getElementById('display');

// Função para adicionar valores ao visor
function appendToDisplay(value) {
    // Se o valor for '<=', remove o último caractere do visor
    if (value === '<=') {
        let currentValue = display.value;
        if (currentValue.length > 0) {
            display.value = currentValue.substring(0, currentValue.length - 1);
        }
    }
    // Se o valor não for '<=', anexa-o ao visor
    else{ //(simbolo usado para apagar o "ngc")
        display.value += value;
    }
}

// Função para limpar o visor
function clearDisplay() {
    display.value = '';
}

// Função para calcular o resultado da expressão no visor
function calculateResult() {
    try {
        // Avalia a expressão no visor usando a função 'eval' e atualiza o visor com o resultado
        display.value = eval(display.value);
    } catch (e) {
        // Se ocorrer um erro durante a avaliação, exibe 'Erro' no visor
        display.value = 'Erro';
    }
}

