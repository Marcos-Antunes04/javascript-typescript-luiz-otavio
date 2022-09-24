const container = document.querySelector('.container');

function calc(event) {
    event.preventDefault();

    const firstNumber = Number(document.querySelector('#number-1').value);
    const secondNumber = Number(document.querySelector('#number-2').value);

    const createdDiv = document.createElement('p');
    createdDiv.id = 'result';

    const divContent = 
        firstNumber > secondNumber ? 'O número ' + firstNumber + ' é maior.' : 
        firstNumber == secondNumber ? 'Ambos os números tem o mesmo valor' : 'O número ' + secondNumber + ' é maior.';

    let hasResult = document.querySelector('#result');
    if (hasResult) {
        hasResult.innerHTML = divContent;
    } else {
        createdDiv.innerText = divContent;
        container.appendChild(createdDiv);
    }

    document.querySelector('#number-1').value = '';
    document.querySelector('#number-2').value = '';
}

//FUNÇÃO QUE RECEBE 2 NÚMEROS E RETORNA O MAIOR
let max = (num1, num2) => {return num1 > num2 ?  num1 : num1 == num2 ? 'Números iguais' : num2;}

console.log(max(10,2))