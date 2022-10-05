// Literal creation of Objects
const person = {
  name: 'Toshio',
  lastname: 'Yasunaka',
  age: 25,
}

// Constructor creation of Objects
const cellphone = new Object();
cellphone.model = 'iPhone11';
cellphone.brand = 'Apple';

// Ways to access a property
console.log(person.name);
console.log(person['lastname']);

// Delete a property
delete person.lastname;
console.log(person);

// Methods
person.sayName = function() {
  return this.name + ' is saying your name.';
}

person.getBirthday = function() {
  let date = new Date();
  date = date.getFullYear();
  return date - this.age;
}

console.log(person.sayName(), person.getBirthday());

// FOR IN in Objects - to access the keys and your values
for (let key in person) {
  console.log(key, person[key]);
}

// Factory functions
function createPerson(name, lastname) {
  return {
    name, 
    lastname,
    get fullName() {
      return this.name + ' ' + this.lastname;
    }
  }
}
const p1 = createPerson('Walter', 'Yasunaka');
console.log(p1);
console.log(p1.fullName);

// Constructor functions
function Character(name, crew) {
  this.name = name,
  this.crew = crew
}
const luffy = new Character('Monkey D. Luffy', 'Straw Hat');
console.log(luffy);

// Freeze -> prevent the object from being changed
function Game(name, developer, genre) {
  this.name = name;
  this.developer = developer;
  this.genre = genre;
}
const leagueOfLegends = new Game('League of Legends', 'RIOT', 'MOBA');
leagueOfLegends.mode = 'Multiplayer';

Object.freeze(leagueOfLegends); // -> after this command the object can no longer be modified
leagueOfLegends.release = 2013; // it has no effects
delete leagueOfLegends.mode; // it has no effects

console.log(leagueOfLegends);