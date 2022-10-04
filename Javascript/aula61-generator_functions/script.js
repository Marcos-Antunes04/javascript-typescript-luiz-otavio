function* generator1() {
    // Code here    
    yield 'Valor1';
    // Code here    
    yield 'Valor2';
    // Code here    
    yield 'Valor3';
}

const g1  = generator1();
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next());
// console.log(g1.next());

// for(let value of g1) {
//     console.log(value)
// }

function* generator2() {
    yield 1;
    yield 2;
    yield 3;
}

function* generator3() {
    yield* generator2();
    yield 4;
    yield 5;
    yield 6;
}

const g3 = generator3();

function* generator4() {
    yield function() {
        console.log('Vim do y1');
    }

    // a lot of code here

    yield function() {
        console.log('Vim do y2');
    }
}

const g4 = generator4();
const func1 = g4.next().value;
const func2 = g4.next().value;

func1();
func2();