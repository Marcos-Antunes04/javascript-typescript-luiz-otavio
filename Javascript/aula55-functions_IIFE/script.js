// IMMEDIATELY INVOKED FUNCTION EXPRESSION
(function (age, weight, height) {
    const lastname = 'Yasunaka';
    function createName(firstname) {
        return firstname + ' ' + lastname;
    }

    function sayName() {
        console.log(createName('Toshio'));
    }

    sayName();
    console.log(age, weight, height)
})(25, 65, 1.74)