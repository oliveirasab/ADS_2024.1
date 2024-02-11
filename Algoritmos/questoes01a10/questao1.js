let readline = require('readline-sync');
//Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)

//Entrada

let Velocidade = Number(readline.question('Qual a velocidade: '));

//Processamento

let Vkm = (Velocidade * 3.6);

//Saída

console.log (`A velocidade ${Velocidade} em m/s é equivalente a Km/h é: ${Vkm}`);
