//Leia 3 números, calcule e escreva a média dos números.

let readline = require("readline-sync");

//entrada

let n1 = parseInt(readline.question("Digite o primeiro número: "));
let n2 = parseInt(readline.question("Digite o segundo número: "));
let n3 = parseInt(readline.question("Digite o terceiro número: "));

//processamento

const media = (n1 + n2 + n3) / 3

//saida

console.log(`A média dos números ${n1}, ${n2} e ${n3} é igual a ${media}`)