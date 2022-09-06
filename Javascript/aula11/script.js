

function add() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let resultado = num1 + num2;

    document.getElementById('resultado').innerHTML = resultado;

    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
}