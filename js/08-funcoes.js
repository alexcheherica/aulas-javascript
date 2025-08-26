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

const exemplo1 = function () {
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

Geralmente, ao terminar o processamento dos dados, a função "retorna" para fora uma resultado.*/

console.log("\nExemplo 4: Função com parâmetro opcional");

function saudacao(nome = "Visitante") {
    console.log("Olá," + nome);
}

saudacao("Alexchê");
saudacao("Elizabeth");
saudacao();//nesse caso, é usado "Visitante" como valor

console.log("\nExemplo 5: Função com parâmetros e retorno");

/*Sempre que tivermos a necessidade de trabalhar com o resultado do processamento de uma função, então essa função deve ter o return.*/
function multiplicar(valor1, valor2) {
    return valor1 * valor2;

}
// Chamamos a função e recebemos o retorno/resultado dela
let resultado1 = multiplicar(10, 5);
let resultado2 = multiplicar(200, 10);

//Exibimos o resultado
console.log("Resultado 1: " + resultado1);
console.log("Resultado 2: " + resultado2);


console.log("\nExemplo 6: Simplificando com Arrow Function");

//Versão 1: Sintaxe declarada/nomeada
function subtrair(valor1, valor2) {
    return valor1 - valor2;
};
console.log(subtrair(150, 500));

//Versão 2: Sintaxe Arrow Function
const somar = (valor1, valor2) => valor1 + valor2;

console.log(somar(150, 500));

console.log("\nExemplo 7: formatando valor monetário");

let preco = 5000;
let desconto = preco * 0.10; // 10%
let precoFinal = preco - desconto;

function formatarMoeda(valor) {
    return new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(valor)

}

console.log("Preço original:" + formatarMoeda(preco));
console.log("Desconto: " + formatarMoeda(desconto));
console.log("Preço final: " + formatarMoeda(precoFinal));

// Exemplo: usando recursos da clase Intl (Internacionalização)
const exemplo = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL"
}).format(preco);
console.log(exemplo);











