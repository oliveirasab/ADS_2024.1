let readline = require('readline-sync');

//Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos segundos ele corresponde.
//para tranformar os segundos em horas, devo dividir os segundos por 3600;

//entrada

let segundos = parseInt(readline.question('Digite os segundos: '));

//processamento 

//calcular as horas
const horas = Math.floor(segundos / 3600);
const resto = (segundos % 3600);

//calcular os minutos
const minutos = Math.floor(segundos / 60)

//calcular os segundos restantes
const resto_seg = (segundos % 60)

//saída

console.log(`O número de segundos ${segundos} equivale a ${horas} horas, ${minutos} minutos e ${resto_seg} segundos `)
