let readline = require('readline-sync');

//Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).

//entrada

const temperatura_f = parseFloat(readline.question('Qual a temperatura: ºF  '));

//processamento

const convert_c = (5 * temperatura_f - 160) / 9

//saída

console.log(`A temperatura ºF ${temperatura_f} convertida em ºC é ${convert_c}`);
