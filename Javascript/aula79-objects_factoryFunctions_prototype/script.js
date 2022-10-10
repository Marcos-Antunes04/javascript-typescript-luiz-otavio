const talk = {
  talk() {
    console.log(this.name + ' está falando.');
  }
}

const eat = {
  eat() {
    console.log(this.name + ' está comendo.');
  },
}

const drink = {
  drink() {
    console.log(this.name + ' está bebendo.');
  }
}

//COMPOSITION -> compose an object with several other objects
// const personPrototype = {...talk, ...eat, ...drink} //or
const personPrototype = Object.assign({}, talk, eat, drink);

function createPerson(name, lastname) {
  return Object.create(personPrototype, {
    name: {value: name}, 
    lastname: {value: lastname},
  });
};

const p1 = createPerson('Toshio', 'Yasunaka');
console.log(p1);
p1.talk();
p1.eat();
p1.drink();

const p2 = createPerson('Walter', 'Yasunaka');
console.log(p2);
p2.talk();
p2.eat();
p2.drink();