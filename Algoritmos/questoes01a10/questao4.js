let readline = require('readline-sync');

//Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).

console.log('----------- Bem-vindo ao Convert ------------')

//Entrada

let cotacao = Number(readline.question('Cotação de hoje: '));
let dolar = Number(readline.question('Valor a ser convertido: '));

//Processamento

let resultado = (cotacao * dolar);

//Saída

console.log(`O valor ${dolar} em reais é de R$ ${resultado.toFixed(2)}`);