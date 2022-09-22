const container = document.querySelector('.container');

function calc(event) {
    event.preventDefault();

    const firstNumber = document.querySelector('#number-1').value;
    const secondNumber = document.querySelector('#number-2').value;

    const createdDiv = document.createElement('p');
    const divContent = 
        firstNumber > secondNumber ? 'O número ' + firstNumber + ' é maior.' : 
        firstNumber == secondNumber ? 'Ambos os números tem o mesmo valor' : 'O número ' + secondNumber + ' é maior.';

    createdDiv.innerText = divContent;
    container.appendChild(createdDiv);

    document.querySelector('#number-1').value = '';
    document.querySelector('#number-2').value = '';
}