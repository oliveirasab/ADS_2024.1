//Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.

let readline = require("readline-sync");

//entrada

let idade = parseInt(readline.question("Digite a idade: "));
let meses = parseInt(readline.question("Digite os meses: "));
let dias = parseInt(readline.question("Digite os dias: "));

//processamento
//para transformar anos em dias eu devo multiplicar os anos por 365, meses por 30

const total_dias = (idade * 365) + (meses*30) + dias


//saída

console.log(`A idade em dias é ${total_dias}`)