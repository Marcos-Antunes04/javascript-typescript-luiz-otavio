function criaPessoa(firstName, lastName, weight, height) {
    return {
        firstName, 
        lastName,
        weight,
        height,
        talk(subject) {
            return `${this.firstName} is talking about ${subject}`;
            //**1: "this" is refering the object that called it
        },

        get imc() { //**2: with "get" in front of the method it's not necessary to call the method with parentheses to trigger it (like an attribute)
            const index = this.weight / (this.height**2);
            return index.toFixed(2);
        },

        get fullName() {
            return `${this.firstName} ${this.lastName}`
        },

        set fullName(fullName) { //**3: "set" can hold any value of any data type
            splitFullName = fullName.split(' ');
            this.firstName = splitFullName.shift()
            this.lastName = splitFullName.join(' ')
        },
    }
}

const p1 = criaPessoa('Toshio', 'Yasunaka', 65, 1.74);
p1.fullName = 'Walter Toshio Yasunaka'
console.log(p1.talk('JS'));
console.log(p1.imc) //**2: with "get" in front of the method it's not necessary to call the method with parentheses to trigger it (like an attribute)
console.log(p1.fullName)

const p2 = criaPessoa('Walter', 'White', 80, 1.80);
p2.fullName = 'Walter White Careca'
console.log(p2.talk('methamphetamine'));
console.log(p2.imc) 
console.log(p2.fullName)