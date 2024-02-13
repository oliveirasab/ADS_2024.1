let readline = require('readline-sync');

//Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).
// g = kg * 1000

//entrada

let valor_kg = parseFloat(readline.question("Valor em kg: "));

//processamento

const gramas = (valor_kg * 1000)

//saída

console.log(`O valor ${valor_kg} kg em gramas é ${gramas} g`)