'use strict'

/* Sobre Funções
Funções são blocos de código responsáveis por executar determinadas tarefas.
Para usar estes blocos/funções, é necessário "chamar/invocar" a função desejada através do seu nome.

Vantagens ao usar funções:
-Reutlização de código
-Organização de código-fonte, permitindo a separação de diferentes lógicas e responsabilidades
-Performance melhor
-Maior facilidade para manutenções

No JavaScript, existem várias maneiras de se criar uma função: função anônima, função nomeada/declarada e arrow function*/

console.log("Exemplo 1: função anônima");

const exemplo1 = function() {
    // corpo da função: ação que a função vai fazer

    console.log("Olá Função Anônima!");  
};
//Chamando/invocando a função
exemplo1();

console.log("\nExemplo 2: Função Nomeada/Declarada");
function exemplo2() {
    console.log("Esta é uma função nomeada!");
    
}

exemplo2();

console.log("\nExemplo 3: Arrow Function (Função Flecha/Seta)");

// Sintaxe potencialmente mais simples para função no JavaScript
const exemplo3 = () => {
    console.log("Sintaxe Arrow Function");
    
};
exemplo3();

/*Obs: Funções (em qualquer sintaxe) também podem trabalhar com parâmetros/argumentos.

Quando uma função precisa de v alores/dados para algum tipo de processamento, ela recebe valores/dados através de parâmentros/argumentos entre os parânteses.

Geralmente, ao terminar o processamento dos dados, a função "retorna" para fora uma resultado.
*/


