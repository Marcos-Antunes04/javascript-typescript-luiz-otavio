const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generateCapitalLetters = () => String.fromCharCode(rand(65, 91));
const generateLowercaseLetters = () => String.fromCharCode(rand(97, 123));
const generateNumbers = () => String.fromCharCode(rand(48, 58));
const symbols = ',.<>;:/?~^[]{}=+-_()*&%$#@!'
const generateSymbols = () => symbols[rand(0, symbols.length)];

export default function generatePassword(qnt, capital, lowercase, numbers, symbols) {
    const passwordArray = [];
    qnt = Number(qnt)

    for (let i = 0; i < qnt; i++) {
        capital && passwordArray.push(generateCapitalLetters());
        lowercase && passwordArray.push(generateLowercaseLetters());
        numbers && passwordArray.push(generateNumbers());
        symbols && passwordArray.push(generateSymbols());
    }

    return passwordArray.join('').slice(0, qnt);
}