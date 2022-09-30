// Após selecionar um operador, ñ tem como colocar um segundo numero com mais de uma casa decimal
function createCalculator(){
    return {
        display: document.querySelector('#display'),
        number1: 0,
        operator: '',

        start() {
            this.display.focus();
        },

        includeNumber(number) {
            if(this.operator) this.display.innerHTML = number;
            else this.display.innerHTML += number;
        },

        includeOperator(operator) {
            this.number1 = Number(this.display.innerHTML);            
            this.operator = operator;
        },

        includeComma() {
            if(this.display.innerHTML.includes('.')) return;
            else this.display.innerHTML += '.';
        },

        clear() {
            this.display.innerHTML = '';
            this.number1 = 0;
            this.operator = 0;
        },

        getValue(number2) {
            if(this.operator === '+') return this.number1 + number2;
            if(this.operator === '-') return this.number1 - number2;
            if(this.operator === 'x') return this.number1 * number2;
            if(this.operator === '÷') return this.number1 / number2;
            return number2;
        },

        calculate() {
            number2 = Number(this.display.innerHTML);

            this.display.innerHTML = this.getValue(number2);

            this.operator = '';
            this.number1 = 0;
        },
    }
}

const calculator = createCalculator();
calculator.start();