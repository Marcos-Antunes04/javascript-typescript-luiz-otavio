function createPerson(firstname, lastname, height, weight) {
    return {
        firstname, 
        lastname,
        height,
        weight,
        say(matter) {
            return `${firstname} is saying something about ${matter}.`
        },
        get imc() {
            const index = weight / (height ** 2)
            return index.toFixed(2);
        }
    }
}

const person1 = createPerson('Toshio', 'Yasunaka', 1.74, 65);
console.log(person1.imc)