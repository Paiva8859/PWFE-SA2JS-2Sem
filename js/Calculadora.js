let display = document.getElementById('display');

function appendToDisplay(value) {
    if (value === '<=') {
        let currentValue = display.value;
        if (currentValue.length > 0) {
            display.value = currentValue.substring(0, currentValue.length - 1);
        }
    }
    if (value != '<=') {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Erro';
    }
}
