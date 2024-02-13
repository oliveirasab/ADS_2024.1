let readline = require('readline-sync');
// Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)

console.log("--- CALCULO DA ÁREA DE UM TRIÂNGULO ---")
//entrada

const base = Number(readline.question('Digite a base do triângulo: '));
const altura = Number(readline.question('Digite a altura do triângulo:  '))

//processamento

const area = (base * altura)/2;

//saída

console.log(`A área do triângulo é igual a: ${area}`);