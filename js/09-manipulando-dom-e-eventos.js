'use strict'

//Exemplo 01

//Procurando(querySelector) por um elemento chamado exemplo1
const exemplo01 = document.querySelector("#exemplo01");
const mensagem01 = document.querySelector("#mensagem01");
const pagina = document.querySelector("body");

console.log(exemplo01);
console.log(mensagem01);
console.log(pagina);

/*Para selecionar vários elementos, use querySelectorAll.
O resultado é uma espécie de array de elementos(NodeList).
*/

const paragrafo = document.querySelectorAll("p");
console.log(paragrafo);


