//DESAFIO: Deixar as variáveis na ordem (sem setar elas)-> B C A 
let varA = 'A';
let varB = 'B';
let varC = 'C';

let varD = '';
varD = varA;
varA = varB;
varB = varC;
varC = varD;

console.log('Old', varA, varB, varC)

//com o Javascript moderno agora é possivel reescrever o código acima
//da seguinte maneira:

let var1 = '1';
let var2 = '2';
let var3 = '3';

[var1, var2, var3] = [var2, var3, var1]
console.log('New', var1, var2, var3)