//Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.:número = 9534 ; soma = 9+5+3+4 = 21.

let readline = require('readline-sync');

//entrada

let numero = (readline.question("Digite um número de 4 dígitos: "));

//processamento

const num1 = parseInt(numero[0]) //devo usar o index para extrair o número inteiro 
const num2 = parseInt(numero[1])
const num3 = parseInt(numero[2])
const num4 = parseInt(numero[3])

const soma = (num1 + num2 + num3 + num4)

//saida

console.log(`A soma dos elementos do número ${numero} é igual a ${soma}`)