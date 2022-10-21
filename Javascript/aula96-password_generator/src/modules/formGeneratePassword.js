import generatePassword from "./generators";

const generatedPassword = document.querySelector('.generated-password');
const charactersQnt = document.querySelector('.characters-quantity');
const capitalLetters = document.querySelector('.check-capital-letters');
const lowercaseLetters = document.querySelector('.check-lowercase-letters');
const numbers = document.querySelector('.check-numbers');
const symbols = document.querySelector('.check-symbols');
const generatePasswordButton = document.querySelector('.generate-password');

export default () => {
    generatePasswordButton.addEventListener('click', () => {
        generatedPassword.innerHTML = generate();
    })
}

function generate() {
    const password = generatePassword(
        charactersQnt.value, 
        capitalLetters.checked, 
        lowercaseLetters.checked, 
        numbers.checked, 
        symbols.checked
    )

    return password || 'Nothing selected';
}