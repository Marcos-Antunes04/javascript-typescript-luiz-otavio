class EletronicDevice {
  constructor(name) {
    this.name = name;
    this.on = false;
  }

  turnOn() {
    if(this.on) {
      console.log(this.name + ' already on.')
      return;
    }

    this.on = true;
  }

  turnOff() {
    if (!this.on) {
      console.log(this.name + ' already off.')
      return
    }
    this.on = false;
  }
}

// heritage here
class Smartphone extends EletronicDevice {
  constructor(name, color, model) {
    super(name); // to pass the paramethers of the parent class, hit add the "super()" with the paramethers you want to pass.
    this.color = color;
    this.model = model;
  }
};

const s1 = new Smartphone('iPhone', 'white', 'iPhone X');
console.log(s1);
