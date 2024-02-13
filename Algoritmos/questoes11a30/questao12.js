let readline = require('readline-sync');

//Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.

//Entrada

let salario = Number(readline.question("Informe o seu salário atual: R$ "));

//Processamento

const aumento = salario + (salario * 0.25)

//Saída

console.log(`O salário atual de ${salario}, com um aumento de 25% ficará R$ ${aumento}`)
