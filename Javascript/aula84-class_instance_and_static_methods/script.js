class RemoteControl {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  //instance method
  turnUpVolume() {
    this.volume++;
  }

  //instance method
  lowerVolume() {
    this.volume--;
  }

  // static method
  static changeBattery() {
    console.log('Ok. I will change')
  }
}

const control1 = new RemoteControl('LG');
control1.turnUpVolume(); // instance method -> can access the instance properties.
RemoteControl.changeBattery(); // static method -> can only be called by passing the Superclass name. Change all classes that it extends. Can't access the specific instance data.
console.log(control1)