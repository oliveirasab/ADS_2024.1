let readline = require('readline-sync');

//Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.
/*
como se calcula a média ponderada: 
Para calcular a média ponderada, você multiplica cada valor pelo seu respectivo peso,
soma os resultados e divide pela soma dos pesos. 
*/

console.log("----------- Cálculo da média do aluno --------------")
//entrada

const nota1 = parseFloat(readline.question('Digite a primeira nota: '));
const peso1 = Number(readline.question('Digite o peso da primeira nota: '));
const nota2 = parseFloat(readline.question('Digite a segunda nota: '));
const peso2 = Number(readline.question('Digite o peso da segunda nota: '));
const nota3 = parseFloat(readline.question('Digite a terceira nota: '));
const peso3 = Number(readline.question('Digite o peso da terceira nota: '));

//processamento

const calculo_notas_pesos = nota1*peso1 + nota2*peso2 + nota3*peso3;
const calculo_pesos = peso1 + peso2 + peso3;
const media_ponderada = calculo_notas_pesos / calculo_pesos;

//saída

console.log(`A média ponderada é: ${media_ponderada.toFixed(2)}`);