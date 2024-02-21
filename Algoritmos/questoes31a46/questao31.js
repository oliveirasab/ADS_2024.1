//31 Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal

let readline = require("readline-sync");

//Entrada

let numero = readline.question("Digite um número de 4 digitos: ");

//Processamento

const d1 = Number(numero[3] * (2**0));
const d2 = Number(numero[2] * (2**1));
const d3 = Number(numero[1] * (2**2));
const d4 = Number(numero[0] * (2** 3));

const decimal = (d1 + d2 + d3 + d4);

//Saída

console.log(`
    Número binário escolhido pelo ussuário: ${numero}
    Número decimal convertido:  ${decimal}
    `)