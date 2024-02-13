let readline = require('readline-sync');

//Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)

//Entrada

let num = Number(readline.question('Digite um número de 3 digitos: '));

//Processamento
/*
Como eu descubro quantas centenas tem um número? : eu devo pegar esse número e dividir por 100,
o quociente inteiro (resultado inteiro) é a quant de centenas;
com o resto dessa divisão, eu consigo extrair as dezenas, dividindo-as por 10 e pegando apenas a parte inteira;
faz-se o mesmo para saber as unidades, pego o resto da divisão e divido por 10

*/
const centena = Math.floor(num / 100);
const resto = (num % 100);

const dezena = Math.floor(resto / 10);
const unidade = (resto % 10);

/*para conseguir inverter o número é só fazer os cálculos com os números invertidos
multiplicar a unidade por 100, a dezena por 10 e a unidade por 1
*/

const inverso = unidade*100 + dezena*10 + centena
const soma = num + inverso

//Saída

console.log(`C = ${centena}, D = ${dezena}, U = ${unidade}`);
console.log(`A soma de ${num} + ${inverso} é igual a ${soma}`);