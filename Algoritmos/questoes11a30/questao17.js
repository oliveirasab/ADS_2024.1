let readline = require('readline-sync');

//Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)

//entrada

const base = parseFloat (readline.question('Indique o valor da área: '));
const altura = parseFloat (readline.question('Indique o valor da altura: '));

//processamento

const area = base * altura

//saída

console.log(`A área do retângulo é igual a: ${area.toFixed(2)}`);