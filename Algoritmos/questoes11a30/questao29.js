//Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.
 
let readline = require('readline-sync');

//entrada
let meses = parseInt(readline.question("Número de meses:  "));

//processamento
const anos = Math.floor(meses / 12);
const resto_meses = (meses % 12)

//saída
console.log(`Os ${meses} meses equivalem a ${anos} anos e a ${resto_meses} meses`)