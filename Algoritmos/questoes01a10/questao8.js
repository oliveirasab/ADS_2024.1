let readline = require('readline-sync');

//'Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.');


//entrada

let num1 = parseFloat(readline.question('Digite um número: '));
let num2 = parseFloat(readline.question('Digite outro número: '));

//processamento

let soma = (num1 + num2);
let subtracao = (num1 - num2)
let resultado = (soma / subtracao)

//saída

console.log(`À divisão da soma pela subtração dos números lidos é ${resultado}`);