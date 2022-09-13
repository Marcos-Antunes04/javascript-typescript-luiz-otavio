const form = document.querySelector('#form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputWeight = e.target.querySelector('#weight');
    const inputHeight = e.target.querySelector('#height');
    
    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    if (!weight) {
        setResult('Peso inválido!', false)
        return 
    }    

    if (!height) {
        setResult('Altura inválida!', false)
        return 
    }    

    const imc = getImc(weight, height);
    const imcLevel = getImcLevel(imc);

    const msg = `Seu IMC é ${imc} (${imcLevel})`;

    setResult(msg, true);
});

function getImcLevel(imc) {
    const level = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.90) return level[5];
    if (imc >= 34.90) return level[4];
    if (imc >= 29.90) return level[3];
    if (imc >= 24.90) return level[2];
    if (imc >= 18.50) return level[1];
    if (imc < 18.50) return level[0];
}

function getImc(weight, height) {
    const imc = Number(weight / height ** 2);
    return imc.toFixed(2);
};

function createP() {
    const p = document.createElement('p');
    return p
}

function setResult(msg, isValid) {
    const result = document.querySelector('#result');
    result.innerHTML = '';  

    const p = createP();

    if (isValid) p.classList.add('p-valid-result');
    if (!isValid) p.classList.add('p-invalid-result');

    p.innerHTML = `${msg}`;

    result.appendChild(p);
};