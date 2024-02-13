let readline = require("readline-sync");

//Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)

//entrada

const raio = parseFloat(readline.question("Qual é o raio da circunferência?: "));

//processamento

const comprimento = (2 * 3.14 * raio)

//saída

console.log(`O comprimento da circunferência é igual a ${comprimento.toFixed(2)}`);