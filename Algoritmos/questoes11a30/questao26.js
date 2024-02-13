let readline = require('readline-sync');

//Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.
//preciso divir o número de dias pelo número de dias em uma semana

//entrada

const dias = parseInt(readline.question('Quantos dias:  ')); //converte a string para número inteiro

//processamento - preciso dizer quantas semanas e quantos dias equivalem os dias;

const semanas = Math.floor(dias / 7)
const resto = (dias % 7)

//saída

console.log(`O valor de dias ${dias} convertido em semanas e dias é ${semanas} semanas e ${resto} dias`)