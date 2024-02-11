let readline = require('readline-sync');

//Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.

//Entrada

let num_Min = Number(readline.question('Indique os minutos a serem convertidos: '));


//Processamento

let transform_horas = (num_Min / 60); //primeiro devo transformar os minutos em horas
let horas = ((transform_horas) - (Math.floor(transform_horas))); // após pegar a parte inteira e decimal, ex. 1.16; devo subtrair para pegar apenas a parte decimal : 0,16
let totalminutos = Math.floor((horas * 60)); //para encontrar os minutos, devo pegar a parte decimal e multiplicar por 60
let totalhoras = Math.floor(transform_horas); //aqui estou pegando a parte inteira das horas que já foi transformada




//Saída

console.log (`O valor dos minutos em horas e minutos é: ${totalhoras}:${totalminutos}`);