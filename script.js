/* SELECIONAR DISPLAY */
const display = document.getElementById('display');

/* ADICIONAR ELEMENTOS AO DISPLAY */
function appendToDisplay(input) {
    display.value += input
}

/* LIMPAR */
function clearDisplay() {
    display.value = '';
}

/* CALCULAR */
function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error';
    }
}