let readline = require('readline-sync');

//Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.

//Entrada  

let num_Hora = Number(readline.question("Horas: "));
let num_Min = Number(readline.question("Minutos: "));

//Processamento

const total = (num_Hora * 60) + num_Min

//Saída

console.log (`As horas e os minutos equivalem a ${total}`);