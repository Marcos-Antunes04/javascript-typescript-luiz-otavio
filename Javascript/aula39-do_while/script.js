const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {

    if (number === 2 || number === 3) {
        console.log('Pulei')
        continue; //"continue" forces the loop to continue to the next iteration, skipping the rest of the code
    }

    console.log(number);

    if (number === 7) {
        console.log('Número 7 encontrado, saindo...')
        break; //stop the iteration
    }
}