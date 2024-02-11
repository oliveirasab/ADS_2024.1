let readline = require('readline-sync');

//Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.

//Entrada

let num1 = Number(readline.question('Digite o primeiro número: '));
let num2 = Number(readline.question('Digite o segundo número: '));
let num3 = Number(readline.question('Digite o terceiro número: '));

//Processamento

let soma = (num1 + num2);
let diferenca = (num2 / num3)

//Saída

console.log(`A soma dos ${num1} e ${num2} é ${soma}
A diferença dos ${num2} e ${num3} é ${diferenca.toFixed (2)}`)