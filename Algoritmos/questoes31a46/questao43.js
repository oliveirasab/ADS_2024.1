/*Um sistema de equações lineares do tipo , pode ser resolvido segundo mostrado abaixo
Escreva um algoritmo que leia os coeficientes a, b, c, d, e e f, calcule e escreva os valores de x e y.
*/

/*Um sistema de equações lineares do tipo , pode ser resolvido segundo mostrado abaixo
Escreva um algoritmo que leia os coeficientes a, b, c, d, e e f, calcule e escreva os valores de x e y.
*/

const { question } = require("readline-sync");


// x = (c*e  - b * f) / (a*e - b*d)
// y = (a*f - c*d) / (a*e - b*d) 

//entrada

const a = Number(question("Digite um valor para 'a': "));
const b = Number(question("Digite um valor para 'b': "));
const c = Number(question("Digite um valor para 'c': "));
const d = Number(question("Digite um valor para 'd': "));
const e = Number(question("Digite um valor para 'e': "));
const f = Number(question("Digite um valor para 'f': "));


// processamento

const x = (c*e  - b * f) / (a*e - b*d)
const y = (a*f - c*d) / (a*e - b*d) 

//saída

console.log(`
    O valor de x ${x.toFixed(3)}
    O valor de y ${y.toFixed(3)}

`)


