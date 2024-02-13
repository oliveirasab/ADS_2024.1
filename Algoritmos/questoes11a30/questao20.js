let readline = require('readline-sync');

//Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)


//entrada

const temperatura_celsius = parseFloat(readline.question('Qual a temperatura: ºC  '));

//processamento

const convert_f = (9 * temperatura_celsius + 160) / 5

//saída

console.log(`A temperatura ºC ${temperatura_celsius} convertida em ºF é ${convert_f}`);
