// It's necessary use "NEW" to declare constructor functions.

function Person(name, lastname) {
    // PRIVATES ATTRIBUTES / METHODS ()
    const id = 1; //this variable will only be available within this function, it cannot be accessed by objects properties (for example: p1.id)
    const internMethod = function () {
      console.log('Some function here');
    };

    // PUBLICS ATTRIBUTES / METHODS - can be accessed by objects properties (example: p1.fullname())
    this.name = name;
    this.lastname = lastname;

    this.fullname = () => this.name + ' ' + this.lastname;
}

const p1 = new Person('Toshio', 'Yasunaka');
const p2 = new Person('Walter', 'Yasunaka');

console.log(p1.fullname());
console.log(p2.fullname());