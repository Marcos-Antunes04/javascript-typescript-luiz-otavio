module.exports = class Dog {
    constructor(dogsName) {
        this.dogsName = dogsName;
    }

    bark() {
        return `${this.dogsName} is barking.`
    }
}