'use strict';
console.log("Teste!");
/*Operadores Lógicos
&& -> E (AND)
|| -> OU (OR)
! -> NÃO/NEGAÇÃO -> NOT
*/

//&& -> retorna TRUE se TODAS as condições forem VERDADEIRAS

console.log("EXEMPLO &&");
let idade = 20;
let temCarta = true;
//if(idade >= 18 && === TRUE)
if (idade >=18 && temCarta === true) {//comparando implicidade
    console.log("Pode dirigir");
    
}else{
    console.log("Não pode dirigir");
    
}

/*Sobre duplo e triplo sinal de igual
- Ao usar == a compração é somente do VALOR, ou seja, NÃO IMPORTA o tipo de dados (string, number, etc)
- Ao usar === a compração é do VALOR E DO TIPO DE DADO, ou seja, IMPORTA TUDO.
*/


let a = 10;// 10 como número inteiro
let b = '10';//10 como string
//== : comparaçao de valor
//===: comparação de valor e tipo
// let resultadoComparacao = a === b; TRUE
let resultadoComparacao = a === b;// FALSE
console.log(resultadoComparacao);

// || -> retorna VERDADEIRO se pelo menos uma das condiçoes for VERDADEIRA
let feriado = false;
let fimDeSemana = false;

if (feriado === true || fimDeSemana === true) {
    console.log("Não tem aula!");
       
} else {
    console.log("Tem aula!");
      
}

//! -> Inverte a lógica. O que é TRUE, vira FALSE. O que é FALSE, vira TRUE

// Não esta vigorando(false)
let blackFriday = false;

if(!blackFriday){
    console.log("Preços normais...");
}else{
    console.log("Preços com descontos...");
    
}

