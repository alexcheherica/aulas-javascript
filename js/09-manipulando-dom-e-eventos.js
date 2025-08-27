'use strict'

//Exemplo 01

//Procurando(querySelector) por um elemento chamado exemplo1
const exemplo01 = document.querySelector("#exemplo01");
const mensagem01 = document.querySelector("#mensagem01");
const pagina = document.querySelector("body");

/*Para selecionar vários elementos, use querySelectorAll.
O resultado é uma espécie de array de elementos(NodeList).*/

const paragrafo = document.querySelectorAll("p");
console.log(paragrafo);

/* Sobre Eventos
Um evento é um acontecimento ou fenômeno que, quando acontece, dispara ações em nosso programa/site/aplicação.

O JavaScript suporta centenas  de tipos de evento. Exemplos: Clique do mouse, pressionar teclas, tocar na tela, rolagem da página, carregamento da página e etc.*/

//Exemplo detectando eventos

//Ao clicar 1x, adicionar um texto ao paragrafo de mensagem
exemplo01.addEventListener("click",function(){
    mensagem01.textContent = "Opa, evento funcionou!";
    //Adiciona a classe destaque (não coloque ponto neste caso)
    mensagem01.classList.add("destaque");
    
});

// Ao clicar 2x, retira o texto do paragrafo de mensagem
mensagem01.addEventListener("dblclick", function(){
    mensagem01.textContent = "";
    //Remove a classe destaque
    mensagem01.classList.remove("destaque");
})

/*Exercícios
 
1) Crie uma constante nova e selecione o h1 da sua página
2) Crie um evento em que, ao passar o mouse em cima do h1, o texto mude para "Praticando Eventos!" e também fique centralizado.
3) Faça também um evento de clique para que, quando clicar na palavra "Referências", o texto do h1 volte para a palavra "Eventos" e o alinhamento volte a ficar à esquerda (padrão). 

*/
const h1 = document.querySelector("h1");
h1.addEventListener("mouseover",function(){
    h1.textContent = "Praticando Eventos!"
    h1.classList.add("alteracao");
})

const referencias = document.querySelector("#referencias");
referencias.addEventListener("click",function(){
    h1.textContent ="Eventos";
    h1.classList.remove("alteracao")
    
})
