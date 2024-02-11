let readline = require('readline-sync');

//Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).

//Entrada

let num = Number(readline.question('Digite um número de três digitos: '));

//Processamento

var centena = Math.floor(num / 100)

/*
 Esta linha calcula o valor da centena do número digitado pelo usuário. 
 Math.floor é utilizado para arredondar para baixo o resultado da divisão.
 por exemplo: se a divisão der 2.5, o math.floor só pega a parte inteira do número.
 */
var resto = num % 100

/*
Calcula o resto da divisão do número digitado pelo usuário por 100, que nos dará as dezenas e unidades.
*/

var dezena = Math.floor(resto / 10)
/*
Calcula as dezenas do número. O valor do resto da divisão por 10 dará as dezenas.

*/

var unidade = resto % 10

/*
Calcula as unidades do número. O resto da divisão por 10 dará as unidades.
*/

var somatorio = centena + dezena + unidade

// Saída
console.log(`> ${centena} + ${dezena} + ${unidade} é igual a ${somatorio}`)