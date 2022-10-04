// don't change the original array
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const greaterThan10 = numbers.filter(number => number > 10);
console.log(greaterThan10);

const richestPeople = [
    {name: 'Elon Musk', age: 51},
    {name: 'Jeff Bezos', age: 58},
    {name: 'Gautam Adani', age: 60},
    {name: 'Bernard Arnault', age: 73},
    {name: 'Bill Gates', age: 66},
    {name: 'Larry Page', age: 49},
    {name: 'Warren Buffett', age: 92},
    {name: 'Sergey Brin', age: 49},
    {name: 'Larry Ellison', agr: 78},
    {name: 'Steve Ballmer', age: 66}
];

// people who have 5 or more letters in their first name
const more4letters = richestPeople.filter(people => people.name.split(' ')[0].length >= 5);
console.log(more4letters);

// people who have more than 60 years old
const more60yo = richestPeople.filter(people => people.age > 60);
console.log(more60yo);

// People whose surname starts with vowels
const surnameInitVowels = richestPeople.filter(function(people) {
    let surname = people.name.split(' ')[people.name.split(' ').length - 1];
    if(surname[0] === 'A' || surname[0] === 'E' || surname[0] === 'I' || surname[0] === 'O' || surname[0] === 'U') {
        return people;
    }
});
console.log(surnameInitVowels);