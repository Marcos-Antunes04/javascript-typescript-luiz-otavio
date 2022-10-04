const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// double values
const doubles = numbers.map(number => number * 2);
console.log(doubles);


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
// for each element:
// return only a string with the person's name
const nameRichestPeople = richestPeople.map(person => person.name);
console.log(nameRichestPeople);

// remove only the "name" key from the object
const ageRichestPeople = richestPeople.map(function(person) {
    const newPerson = {...person}; // a copy was made so as not to mess with the original array (by reference)
    delete newPerson.name;
    return newPerson;
});
console.log(ageRichestPeople);
// or
// const ageRichestPeople2 = richestPeople.map(function(person) {
//     return {age: person.age}
// });
const ageRichestPeople2 = richestPeople.map(person => ({age : person.age})); //arrow function from function above
console.log(ageRichestPeople2);

// add a key id for each object
const richestPeopleWithId = richestPeople.map(function(person, index) {
    const newPerson = {...person}; //a copy was made so as not to mess with the original array (by reference)
    newPerson.id = index + 1;
    return newPerson
});
console.log(richestPeopleWithId);