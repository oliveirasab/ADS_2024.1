/*
Calcule a quantidade de dinheiro gasta por um fumante. 
Dados de entrada: o número de anos que ele fuma, 
o nº de cigarros fumados por dia e o 
preço de uma carteira (1 carteira tem 20 cigarros).
*/

let readline = require("readline-sync");

//Entrada

let anos = parseInt(readline.question("Há quantos anos você fuma? : "));
let qtd_cigarro = parseInt(readline.question("Quantos cigarros você fuma por dia? : "));
let preco_cart = parseInt(readline.question("Quanto você paga em uma carteira de cigarro? : "));

//Processamento

const valor_unidade = (20 / preco_cart);
const valor_dia = (valor_unidade * qtd_cigarro);
const valor_mes = (valor_dia * 30);
const valor_ano = (valor_dia * 12);
const valor_total = (valor_ano * anos)

//Saída

console.log(`
************************************************************************************
    Tendo como referencia o valor da carteira de cigarros sendo R$ ${preco_cart}, sabemos que
    o valor da unidade do cigarro é R$ ${valor_unidade.toFixed(2)}. Isso significa dizer que 
    por dia é gasto um total de R$ ${valor_dia.toFixed(2)}, por mês é gasto o valor 
    de R$ ${valor_mes.toFixed(2)} e por ano o valor é de R$ ${valor_ano},
    totalizando R$ ${valor_total.toFixed(2)} desde que o fumante começou com os cigarros.
***********************************************************************************
`)