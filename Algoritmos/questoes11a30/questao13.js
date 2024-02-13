let readline = require('readline-sync');

//Leia um valor em real (R$), calcule e escreva 70% deste valor.

//entrada

let reais = parseFloat(readline.question('Digite um valor em reais: R$ '));

//processamento

let calculo = (reais * 0.7)

//saída

console.log(`70% de R$ ${reais} é igual a R$ ${calculo}`)