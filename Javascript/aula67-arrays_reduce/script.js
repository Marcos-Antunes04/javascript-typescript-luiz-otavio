// sum all number inside array
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const totalNumbers = numbers.reduce(function(accumulator, number) {
    accumulator += number;
    return accumulator;
}, 0); //this number is the initial value of the accumulator
console.log(totalNumbers);


// create new array like FILTER
const onlyPairs = numbers.reduce(function(accumulator, number) {
    if(number % 2 === 0) accumulator.push(number);
    return accumulator;
}, [])
console.log(onlyPairs);
// sum only pair numbers
const sumOnlyPairs = numbers.reduce(function(accumulator, number){
    if (number % 2 === 0) accumulator += number;
    return accumulator;
}, 0)
console.log(sumOnlyPairs);


// create new array like MAP
const double = numbers.reduce(function(accumulator, number) {
    accumulator.push(number * 2);
    return accumulator;
}, [])
console.log(double);


// return older person
const richestPeople = [
    {name: 'Elon Musk', age: 51},
    {name: 'Jeff Bezos', age: 58},
    {name: 'Gautam Adani', age: 60},
    {name: 'Bernard Arnault', age: 73},
    {name: 'Bill Gates', age: 66},
    {name: 'Larry Page', age: 49},
    {name: 'Warren Buffett', age: 92},
    {name: 'Sergey Brin', age: 49},
    {name: 'Larry Ellison', age: 78},
    {name: 'Steve Ballmer', age: 66}
];

const olderPerson = richestPeople.reduce(function(accumulator, person) { //accumulator is the first item in the array and person is referring to the second item in the array
    if(accumulator.age > person.age) return accumulator;
    return person;
}); //if it doesn't have an initial value for accumulator, it'll be the first item in the array
console.log(olderPerson);