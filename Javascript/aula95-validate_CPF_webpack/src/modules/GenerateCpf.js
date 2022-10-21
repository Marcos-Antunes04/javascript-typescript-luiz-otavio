import ValidateCpf from './ValidateCpf'

export default class GenerateCpf {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    transformCpf(cpfWithoutDigit) {
        console.log(cpfWithoutDigit)
        let formatedCpf = '';
        for (let i = 0; i < cpfWithoutDigit.length; i = i + 3) {
            let numbers = cpfWithoutDigit.slice(i, i + 3);
            if (formatedCpf.length < 5) {
                formatedCpf = formatedCpf + numbers + '.';
            } else {
                formatedCpf = formatedCpf + numbers;
                return formatedCpf;
            }
        }
    }

    generateNewCpf() {
        const cpfWithoutDigit = this.rand();
        const digit1 = ValidateCpf.generateDigit(cpfWithoutDigit);
        const digit2 = ValidateCpf.generateDigit(cpfWithoutDigit + digit1);
        const formatedCpf = this.transformCpf(cpfWithoutDigit) + '-' + digit1 + digit2;
        return formatedCpf;
    }
}