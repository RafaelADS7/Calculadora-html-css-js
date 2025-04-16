

function adicionar(valor) {
    document.getElementById('display').value += valor;
} 

function limpar() {
    document.getElementById('display').value = '';
}

function operadores(operador) {
    document.getElementById('display').value += operador;
}

function calcular() {
    let resultado = eval(document.getElementById('display').value);
    document.getElementById('display').value = resultado;
}
