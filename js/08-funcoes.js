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

