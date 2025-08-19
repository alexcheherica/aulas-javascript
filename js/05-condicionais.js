'use strict'

console.log("Teste");

/* Comandos Condicionais mais comuns:
if -> SE
else -> SENÃO
*/

console.log("Exemplo 1");
//variavel
let numero = 50;

//SE numero for maior ou igual a 10
if (numero >= 10) {
    console.log("Se você está vendo essa mensagem é porque a condição é VERDADEIRA");
       
}

console.log("\nExemplo 2")

let aluno = "Ozzy";
let idade = 30;

/*Lógica: verificar se o aluno é maior ou menor de idade. */

if (idade < 18){
    console.log("Você é menor de idade!");     
} 
else{
    console.log("Você é maior de idade!");
}

//Exercicio
/*1. Crie duas variáveis conforme a seguir:
 
- Nota 1 (contendo um valor de 0 a 10)
- Nota 2 (contendo outro valor de 0 a 10)
 
2. Crie uma variável chamada "Média" que receberá o valor CALCULADO da média das duas notas informadas. 
DICA: você deve SOMAR as duas notas e DEPOIS dividir por 2.
 
3. Programe uma condicional que verifique o valor da média calculada. Se a média for maior/igual a 7, mostre "aprovado". 
Caso contrário, mostre "reprovado". */


console.log("\nExercicio");

let NotaUm = 7;
let NotaDois = 9;
let Media = ( NotaUm + NotaDois )/2;

if (Media >= 7) {

    console.log("Aprovado");  
}
else{
    console.log("Reprovado");
    
}

