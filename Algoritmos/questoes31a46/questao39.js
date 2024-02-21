//Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão

let readline = require("readline-sync");

//Entrada

let A = parseInt(readline.question("Digite um número inteiro positivo: "));
let B = parseInt(readline.question("Digite um número inteiro positivo: "));
let C = parseInt(readline.question("Digite um número inteiro positivo: "));

//Processamento

const R = Math.pow((A + B), 2 );
const S = Math.pow((B + C), 2);

const D = (R + S) / 2


//Saída

console.log(`
    Dado três números inteiros ${A}, ${B} e ${C}
    Calculamos que D = (R + S) / 2, onde R = (${A} + ${B})² e S = (${B} + ${C})²

    O resultado da expressão será :  ${D}

`)