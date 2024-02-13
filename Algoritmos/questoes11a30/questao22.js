let readline = require('readline-sync');

//Leia um valor em km, calcule e escreva o equivalente em m.

// Para converter km em m é preciso multiplicar o valor em km por 1000 (1km possui mil metros)

//entrada

let valor_km = parseFloat(readline.question('Valor a ser convertido em m: '));

//processamento

const convert_m = (valor_km * 1000);

//saída

console.log(`O valor em km ${valor_km} convertido em m é igual a ${convert_m.toFixed(2)}m`);