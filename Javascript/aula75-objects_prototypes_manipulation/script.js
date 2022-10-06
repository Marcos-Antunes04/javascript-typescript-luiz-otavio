function Pessoa(name, lastname) {
  this.name = name;
  this.lastname = lastname;
  // this.fullname = () => this.name + ' ' + this.lastname; //now, the method below will be used Pessoa.prototype.fullname
}

Pessoa.prototype.fullname = function() {
  return this.name + ' ' + this.lastname;

}

const pessoa1 = new Pessoa('Toshio', 'Yasunaka');
const pessoa2 = new Pessoa('Walter', 'Yasunaka');

console.log(pessoa1);