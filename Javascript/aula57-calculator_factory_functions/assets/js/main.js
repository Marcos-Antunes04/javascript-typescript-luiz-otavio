function createCalculator(){
    return {
        display: document.querySelector('#display'),
        number1: 0,
        operator: '',

        start() {
            this.numberHighlight();
            this.keyupAction();
        },

        numberHighlight() {
            
        },

        keyupAction() {
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
        },

        includeNumber(number) {
            if(this.operator) {
                if(this.display.innerHTML != this.number1) {
                    this.display.innerHTML += number;
                }
                else this.display.innerHTML = number;               
            }
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
            if(this.operator === '*') return this.number1 * number2;
            if(this.operator === '/') return this.number1 / number2;
            return number2;
        },

        calculate() {
            const number2 = Number(this.display.innerHTML);
            const result = this.getValue(number2);

            this.display.innerHTML = result;
            this.number1 = result;
            this.operator = '';
        },
    }
}

const calculator = createCalculator();
calculator.start();