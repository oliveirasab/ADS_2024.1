let readline = require('readline-sync');

//Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.
//km = m / 1000

//entrada
let metros = parseFloat(readline.question('Valor em metros:  '))

//processamento

const valor_km = Math.floor(metros / 1000);
const resto = (metros % 1000)

//saída

console.log(`O valor ${metros} m corresponde a ${valor_km} km e ${resto}`)