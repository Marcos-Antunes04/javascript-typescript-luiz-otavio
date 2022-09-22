//FOR IN
const array = ['Pear', 'Apple', 'Banana', 'Guava'];
const person = {
    name: 'Toshio',
    lastname: 'Yasunaka',
    age: 25,
    occupation: 'Developer',
}

for (let i in array) {
    console.log(array[i])
}

for (let details in person) {
    console.log(details, person[details])
}