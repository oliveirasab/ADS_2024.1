/*Sabendo que latão é constituído de 70% de cobre e 30% de zinco,
 escreva um algoritmo que calcule a quantidade de cada um desses 
 componentes para se obter certa quantidade de latão (em kg), informada pelo usuário.

 primeiro devo pedir a quantidade de latão p o usuário;
 após isso devo multiplicar a qtd_latao pela porcentagem de cobre  e de zinco
 */

let readline = require('readline-sync');

//Entrada 
//O parseFloat é uma função em JavaScript que converte uma string em um número de ponto flutuante (número decimal). 

let qtd_latao = parseFloat(readline.question("Informe a quantidade de latão em: kg "));

//processamento

let qtd_cobre = (qtd_latao * 0.7);
let qtd_zinco = (qtd_latao * 0.3);

//saida

const mensagem = `
    Para obter ${qtd_latao} kg de latao, são necessários : 
    Cobre: ${qtd_cobre.toFixed(2)} kg  
    Zinco: ${qtd_zinco.toFixed(2)} kg
`
console.log(`${mensagem}`);