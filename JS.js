let resultados = document.getElementById("resultados")
let currentInput = ""
let currentOperator = ""

function appendNumber(value) {
    currentInput += value;
    resultados.textContent = currentInput;
}

function appendOperator(operator) {
    currentInput += operator;
    resultados.textContent = currentInput;
}

function calculadora() {
    try {
        let result = eval(currentInput)
        if (!Number.isInteger(result)) {
            result = result.toFixed(2)
        }
        currentInput = result
        resultados.textContent = currentInput;
    } catch(error) {
        resultados.textContent = "erro";
        currentInput = "";
    }
}

function clear() {
    console.log("Função Clear foi chamada")
    currentInput = "";
    resultados.textContent = "";
}