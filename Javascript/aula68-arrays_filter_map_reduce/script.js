// Returns the sum of the double of all pairs
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function sumDoublePairs(numbers) {
    const pairNumbers = numbers.filter(number => number % 2 === 0);
    const double = pairNumbers.map(number => number * 2);
    const sum = double.reduce((accumulator, number) => accumulator += number);
    return sum;
}

console.log(sumDoublePairs(numbers));