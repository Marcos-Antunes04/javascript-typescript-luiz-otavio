function criaPessoa(name, lastName, weight, height) {
    return {
        name, 
        lastName,
        weight,
        height,
        talk(subject) {
            return `${name} is talking about ${subject}`;
            //"this" is refering the object that called it
        },
        imc() {
            const index = this.weight / (this.height**2);
            return index.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Toshio', 'Yasunaka', 65, 1.74);
console.log(p1.talk('JS'));
console.log(p1.imc())

const p2 = criaPessoa('Walter', 'White', 80, 1.80);
console.log(p2.talk('methamphetamine'));
console.log(p2.imc())