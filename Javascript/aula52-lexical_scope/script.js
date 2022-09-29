function createMultiplier(multiplier) {
    return function(n) {
        return n * multiplier;
    }
}

const duplicate = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(duplicate(3));
console.log(triple(3));
console.log(quadruple(3));