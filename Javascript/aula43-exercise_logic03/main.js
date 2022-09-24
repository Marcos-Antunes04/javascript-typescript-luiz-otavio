let fizzBuzz = function(n) {
        if (typeof n !== "number") return 'Insira um número'
        if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
        if (n % 3 === 0 ) return 'fizz';
        if (n % 5 === 0 ) return 'buzz';
        return n;
}

for (let n = 0; n <= 100; n++) {
    console.log(fizzBuzz(n))
}
