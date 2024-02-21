// Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele corresponde.

let readline = require('readline-sync');

//entrada

let minutos = parseInt(readline.question("Digite os minutos: "));

//processamento

const dias = Math.floor(minutos / 1440);
const resto = (minutos % 1440);
const horas = Math.floor(resto / 60)
const resto_minutos = (minutos % 60)

//saída

console.log(`A quantidade de ${minutos} minutos, equivale a ${dias} dias, ${horas} horas e ${resto_minutos} minutos`)