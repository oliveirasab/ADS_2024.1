let readline = require('readline-sync');

//Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)

//Entrada

let velocidade = Number(readline.question('Digite a velocidade em Km/h '));

//Processamento

let vms = (velocidade / 3.6)

//Saída

console.log(`A velocidade ${velocidade} em Vm/s é ${vms.toFixed(2)}`)