// CLASSES
class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }

  talk() {
    console.log(`${this.name} is talking.`)
  }

  eat() {
    console.log(`${this.name} is eating.`)
  }

  drink() {
    console.log(`${this.name} is drinking.`)
  }
}

// CONSTRUCTOR FUNCTIONS
function Person2(name, lastname) {
  this.name = name;
  this.lastname = lastname;
}

Person2.prototype.talk = function() {
  console.log(`${this.name} is talking.`)
}

const p1 = new Person('Toshio', 'Yasunaka');
const p2 = new Person2('Walter', 'Yasunaka');

console.log(p1)
console.log(p2)