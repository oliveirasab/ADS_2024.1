//Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.

let readline = require("readline-sync");

//entrada

let idade_dias = parseInt(readline.question("Digite a idade expressa em dias: "));


//processamento
//para transformar dias em anos eu devo dividir os anos por 365, meses por 30

const anos = Math.floor(idade_dias / 365);
const resto = (idade_dias % 365);
const meses = Math.floor(resto / 30);
const dias = (idade_dias % 30);

//saída

console.log(`

    A idade em dias ${idade_dias}  equivale a ${anos} anos, ${meses} meses e ${dias} dias
`)