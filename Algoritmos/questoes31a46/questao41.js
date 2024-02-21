/*
O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do 
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor 
seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e 
escreva o custo ao consumidor.

custo_cons = custo_fabrica + (custo_fabrica * percentagem do distribuidor) + (custo_fabrica * impostos) 

*/

let readline = require("readline-sync");
//entrada

let custo_fabrica = parseFloat(readline.question("Digite o custo de fábrica do carro: "));

//processamento

let percentagem_distribuidor = 0.28
let impostos = 0.45

let custo_consumidor = custo_fabrica + (custo_fabrica * percentagem_distribuidor) + (custo_fabrica * impostos);

//saída

console.log(`
    O custo ao consumidor é: ${custo_consumidor}
`)