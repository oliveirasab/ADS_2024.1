//Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele corresponde.

/* 1 passo: trasformar horas em semanas: uma semana tem 7 dias, 1 dia tem 24 horas, devo multiplicar
7*24 para ter o número de horas em uma semana. Para converter as horas em semanas, 
preciso dividir o número de horas pelo número de horas de uma semana.
horas para dias -> divido as horas por 24 

*/

let readline = require('readline-sync');


//entrada

const horas = parseInt(readline.question("Digite as horas:  "));

//processamento

const semanas = Math.floor(horas / 168)
const resto_horas = (horas % 168)
const dias = Math.floor(resto_horas / 24)
const horas_restantes = (horas % 24)

//saída

console.log(`O número de horas ${horas} equivale a ${semanas} semanas, ${dias} dias e ${horas_restantes} horas`)