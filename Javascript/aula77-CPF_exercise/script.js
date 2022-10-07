function isSequence(cleanCpf) {
  const sequence = cleanCpf[0].repeat(cleanCpf.length);
  return sequence === cleanCpf;
}

function firstValidations(cleanCpf) {
  if (cleanCpf === 'undefined') return false;
  if (cleanCpf.length !== 11) return false;
  if (isSequence(cleanCpf)) return false;
  return true;
}

function calculateNumbers(numbersToCalculate) {
  let calculatedNumbers = [];
  
  for (let index in numbersToCalculate) {
    calculatedNumbers.push(numbersToCalculate[index] * ((numbersToCalculate.length + 1) - index))
  }

  return calculatedNumbers;
}

function getCalculatedNumbersSum(calculatedNumbers) {
  return calculatedNumbers.reduce((accumulator, number) => accumulator += Number(number), 0)
}

function getNewNumber(number) {
  let newNumber = 11 - (number % 11);
  return newNumber > 9 ? 0 : newNumber;
}

function validateCpf(cpf) {
  const cleanCpf = cpf.replace(/\D+/g, '');
  if(firstValidations(cleanCpf)) {
    const cpfArray = cleanCpf.split('');
    //const cpfArray = Array.from(cleanCpf);  //"Array.from()" build a new array;
    let numbersToCalculate = cpfArray.slice(0, 9);
    let calculatedNumbers = calculateNumbers(numbersToCalculate);
    let calculatedNumbersSum = getCalculatedNumbersSum(calculatedNumbers);
    const tenthNumber = getNewNumber(calculatedNumbersSum);
  
    if (cpfArray[9] == tenthNumber) {
      numbersToCalculate.push(tenthNumber);
    
      calculatedNumbers = calculateNumbers(numbersToCalculate);
      calculatedNumbersSum = getCalculatedNumbersSum(calculatedNumbers);
      
      const tenthfirstNumber = getNewNumber(calculatedNumbersSum);
      return tenthfirstNumber == cpfArray[10];
    }
    return false;
  }
  return false;
}

console.log(validateCpf('705.484.450-52'));