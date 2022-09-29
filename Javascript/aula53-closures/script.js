//CLOSURE: abilty of a function to access its lexical scope
function returnFunction(firstname) {
    return function() {
        return firstname;
    }
}

const function001 = returnFunction('Toshio');
const function002 = returnFunction('Walter');

console.log(function001())
console.log(function002())