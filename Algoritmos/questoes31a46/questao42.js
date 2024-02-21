/*
Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e 
ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo
*/

let readline = require("readline-sync");

//entrada

const x1 = Number(readline.question("Digite o ponto x1: "));
const y1 = Number(readline.question("Digite o ponto y1: "));
const x2 = Number(readline.question("Digite o ponto x2: "));
const y2 = Number(readline.question("Digite o ponto y2: "));

//processamento // função math.pow para exponenciação; função math.sqrt p raiz quadrada

const parcial = Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2);
const distancia = Math.sqrt(parcial);

//saída

const mensagem = `
-----------------------------------------------------------  
|          A distância entre os pontos será :             |
|                  ${distancia.toFixed(2)}                |
|                                                         |
-----------------------------------------------------------
`
console.log(`${mensagem}`)