function Calculator(){
    this.display = document.querySelector('#display');
    this.number1 = 0;
    this.operator = '';

    this.start = function() {
        this.keyupAction();
    };

    this.keyupAction = function() {
        document.addEventListener('keyup', e => {
            if (e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' || e.key === '5' || e.key === '6' || e.key === '7' || e.key === '8' || e.key === '9' || e.key === '0') {
                this.includeNumber(e.key);                    
            }
            if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
                this.includeOperator(e.key);
            }
            if (e.key === '.') {
                this.includeComma(e.key);
            }
            if (e.key === 'Enter') {
                this.calculate();
            }
        })
    };

    this.includeNumber = function(number) {
        if(this.operator) {
            if(this.display.innerHTML != this.number1) {
                this.display.innerHTML += number;
            }
            else this.display.innerHTML = number;               
        }
        else this.display.innerHTML += number;
    };

    this.includeOperator = function(operator) {
        this.number1 = Number(this.display.innerHTML);            
        this.operator = operator;
    };

    this.includeComma = function() {
        if(this.display.innerHTML.includes('.')) return;
        else this.display.innerHTML += '.';
    };

    this.clear = function() {
        this.display.innerHTML = '';
        this.number1 = 0;
        operator = 0;
    };

    this.getValue = function(number2) {
        if(this.operator === '+') return this.number1 + number2;
        if(this.operator === '-') return this.number1 - number2;
        if(this.operator === '*') return this.number1 * number2;
        if(this.operator === '/') return this.number1 / number2;
        return number2;
    };

    this.calculate = function() {
        const number2 = Number(this.display.innerHTML);
        const result = this.getValue(number2);

        this.display.innerHTML = result;
        this.number1 = result;
        this.operator = '';
    };
}

const calculator = new Calculator();
calculator.start();