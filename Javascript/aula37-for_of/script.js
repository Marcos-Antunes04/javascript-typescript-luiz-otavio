//FOR OF - Only iterable objects (arrays and strings)
const array = ['Tea', 'Coffee', 'Water', 'Soda'];

for (let value of array) {
    console.log(value)
}

console.log('####')

array.forEach((el, i, array) => {
    console.log(el, i , array)
})