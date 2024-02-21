//Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o resultado em forma de fração.

let readline = require('readline-sync');

//Entrada : primeiro peço o numerador e denominador de cada fração

let numerador1 = parseInt(readline.question("Digite o numerador da primeira fração: "));
let denominador1 = parseInt(readline.question("Digite o denominador da primeira fração: "));
let numerador2 = parseInt(readline.question("Digite o numerador da segunda fração: "));
let denominador2 = parseInt(readline.question("Digite o denominador da primeira fração: "));

//Processamento : preciso multiplicar os denominadores para encontrar o denominador comum e dps fazer a multiplicação cruzada para achar os novos numeradores

const denominador_comum = (denominador1 * denominador2);

const novo_numerador1 = (numerador1 * denominador2);
const novo_numerador2 = (numerador2 * denominador1);

let soma_numeradores = (novo_numerador1 + novo_numerador2);

//Saída

console.log(`

A soma das frações ${numerador1}/${denominador1} e ${numerador2}/${denominador2} é igual a ${soma_numeradores}/${denominador_comum}

`)