const numbers = [10, 20, 30];

// structure
numbers.forEach(function(value, index, array) {
    console.log(value, index, array);
})

// Reduce simulation
let total = 0;
numbers.forEach(number => total += number);
console.log(total)