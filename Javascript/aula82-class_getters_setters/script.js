const _speed = Symbol();

class Carro {
  constructor(name) {
    this.name = name;
    this[_speed] = 0;
  }

  set speed (value) {
    if (typeof value !== 'number') return;
    if (value >= 100 || value <= 0) return;
    this[_speed] = value;
  }

  get speed () {
    return this[_speed];
  }

  accelerate() {
    if (this[_speed] >= 100) return;
    this[_speed]++;
  }

  brake() {
    if (this[_speed] <= 0) return;
    this[_speed]--;
  }
}

const c1 = new Carro('Fusca');

for (let i = 0; i <= 200; i++) {
  c1.accelerate();
}

c1.speed = 99; //falls on the "set" that will do the validations and then falls on the "get" that renders;
console.log(c1);