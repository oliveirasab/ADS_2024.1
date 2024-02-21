/*
Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para 
decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o 
saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor 
disponíveis fossem distribuídas em número mínimo possível. Por exemplo, se a maquina só dispõe de 
notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87, o algoritmo deveria 
indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um 
algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o 
critério da distribuição ótima.
*/

let readline = require("readline-sync");

function main (){
    
    console.log(`********************************************************************`)
    const valor = Number(readline.question("Valor que deseja sacar: "));

    const sacar = valor_saque // chamei a function valor_saque

    const {saque_50, saque_10, saque_5, saque_1} = valor_saque(valor) //aqui eu preciso chamar as variaveis que coloquei na function

    console.log(`

    Dado o valor de saque de R$${valor}, você terá:
    - ${saque_50} nota(s) de $50;
    - ${saque_10} nota(s) de $10;
    - ${saque_5} nota(s) de $5
    - ${saque_1} nota(s) de $1

`)
}


function valor_saque(valor){
//Processamento
    const saque_50 = Math.floor(valor / 50);
    const resto50 = valor % 50;
    const saque_10 = Math.floor(resto50 / 10);
    const resto10 = resto50 % 10;
    const saque_5 = Math.floor(resto10 / 5);
    const resto5 = resto10 % 5;
    const saque_1 = Math.floor(resto5);

    return {saque_50, saque_10, saque_5, saque_1}
}


main()