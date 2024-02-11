let readline = require('readline-sync');

//Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.

//Entrada

let num1 = parseInt (readline.question('Digite o primeiro número: '));
let num2 = parseInt (readline.question('Digite o segundo número: '));

//Processamento

let quociente = Math.floor(num1 / num2) //é necessário colocar a função Math.floor, pois o quociente deve ser inteiro
let resto = num1 % num2 //calculo do resto dos num1 e num2

//Saída

console.log(`O quociente é ${quociente} e o resto da divisão do número ${num1} pelo número ${num2} é ${resto}`)