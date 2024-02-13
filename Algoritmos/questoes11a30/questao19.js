let readline = require('readline-sync');

//Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)

//entrada
const raio_esfera = parseFloat(readline.question('Qual o raio da esfera?: '));

//processamento

const volume = (4*3.14* raio_esfera ** 3)/3

//saída

console.log(`O volume é ${volume.toFixed(2)}`)