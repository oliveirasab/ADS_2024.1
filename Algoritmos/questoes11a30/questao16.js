let readline = require("readline-sync");

//Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2)

//entrada
const lado = Number(readline.question('Qual o valor do lado: '));

//processamento

const area = lado * lado

//saída

console.log(`A área do quadrado é igual a ${area}`);