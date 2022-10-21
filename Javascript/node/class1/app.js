// **** Importing firstname, lastname and sayName by mod1.js ****
const { firstname, lastname, sayName } = require('./mod1');

console.log(firstname);
console.log(lastname);
console.log(sayName());


// **** Importing class Person by person.js ****
const { Person } = require('./person');
const p1 = new Person('Walter');
console.log(p1);