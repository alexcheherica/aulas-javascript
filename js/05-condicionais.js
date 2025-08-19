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
let media = ( NotaUm + NotaDois )/2;

console.log("Média: "+media);

if (media >= 7) {

    console.log("Aprovado😁");  
}else{
    console.log("Reprovado😭");
    
}

if (media < 7) {
    console.log("Reprovado😭");
} else {
    console.log("Aprovado😁");
}

console.log("\nExemplo 3");
//Condicional ENCADEADA/SUCESSIVA

/* Verificando o desempenho do aluno conforme a média:
-Média acima de 9? Ótimo
-Média acima de 7? Bom
-Média acima de 5? Ruim
-Média até 5? Péssimo
*/

if (media > 9) {
    console.log("ÓTIMO!");
    
    
} else if(media > 7){
    console.log("BOM!");
      
}else if(media > 5){
    console.log("RUIM!");
    
}else{
    console.log("PÉSSIMO!");
    
}
