//leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.

let readline = require("readline-sync");

//entrada

let numero = parseInt(readline.question("Digite um número de 3 dígitos: "));

//processamento

const centena = Math.floor(numero / 100);
const resto = (numero % 100);

const dezena = Math.floor(resto / 10);
const unidade = (resto % 10);

const inverso = (unidade*100 + dezena*10 + centena);

const diferenca = (numero - inverso);


//saida

console.log(`
    
    diferença entre ${numero} e ${inverso} é igual a ${diferenca}

`)