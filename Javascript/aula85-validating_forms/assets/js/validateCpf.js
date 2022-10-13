class ValidateCpf {
  constructor(cpf) {
    Object.defineProperty(this, 'cleanCpf', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpf.replace(/\D+/g, '')
    });
  }

  //static method
  static generateDigit(partOfCpf) {
    let total = 0;
    let counter = partOfCpf.length + 1;

    for(let digit of partOfCpf) {
      total += Number(digit) * counter;
      counter--;
    }

    const newDigit = 11 - (total % 11);
    return newDigit >= 10 ? 0 : newDigit;
  }
  
  isSequence() {
    return this.cleanCpf.charAt(0).repeat(this.cleanCpf.length) === this.cleanCpf;
  }

  createNewCpf() {
    const partOfCpf = this.cleanCpf.slice(0, -2);
    const digit10 = ValidateCpf.generateDigit(partOfCpf); //calls static method
    const digit11 = ValidateCpf.generateDigit(partOfCpf + digit10); //calls static method

    return partOfCpf + '' + digit10 + '' + digit11;
  }

  validate() {
    if (!this.cleanCpf) return false;
    if (typeof this.cleanCpf !== 'string') return false;
    if (this.cleanCpf.length !== 11) return false;
    if (this.isSequence()) return false;
    const newCpf = this.createNewCpf();

    return Number(newCpf) === Number(this.cleanCpf);
  }
}