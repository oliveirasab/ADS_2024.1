let readline = require('readline-sync');


//Leia um valor em m, calcule e escreva o equivalente em cm. 


//entrada

let metros = parseFloat(readline.question("Valor em m: "));

//processamento

const centimetros = (metros * 100);

//saída

console.log(`${metros} m em centimetros é ${centimetros} cm`)