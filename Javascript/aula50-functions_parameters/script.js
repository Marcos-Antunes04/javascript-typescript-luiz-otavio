// ARGUMENTS
// function function001() {
//     let total = 0;
//     for (let index in arguments) {
//         total += arguments[index];
//     }
//     console.log(total)
// }
// function001(1,2,3,4,5);

// ************


// SET PARAMETERS
// function function002(a, b = 2, c = 2){
//     console.log(a + b + c)
// }
// function002(2, undefined, 5)

// ************


//PARAMETERS BY DESTRUCTURING (OBJECTS)
// function function003({name, lastname, age}) {
//     console.log(name, lastname, age)
// }
// function003({name: 'Toshio', lastname: 'Yasunaka', age: 25})

// ************


//PARAMETERS BY DESTRUCTURING (ARRAY)
// function function003([value1, value2, value3]) {
//     console.log(value1, value2, value3)
// }

// function003(['Cat', 'Dog', 'Bird'])

// ************


// PARAMETERS WITH REST OPERATOR
function function004(operator, accumulator, ...numbers) {
    for (let index in numbers) {
        if (operator === '+') accumulator += numbers[index];
        if (operator === '-') accumulator -= numbers[index];
        if (operator === '/') accumulator /= numbers[index];
        if (operator === '*') accumulator *= numbers[index];
    } 
    console.log(accumulator)
}
function004('*', 1, 1, 2, 3, 4, 5)