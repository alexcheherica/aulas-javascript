'use strict';

// Exemplo 1: objeto com dados de uma pessoa
console.log("Exemplo 1\n");

const pessoa = {
    // propriedade: valor
    nome:"Chaves",
    idade: 8,
    cidade: "São Paulo",
    estado: "SP"

};
console.log(pessoa);
// Acessando as popriedades usando nomedDoObjeto.nomeDaPropriedade
console.log(`O ${pessoa.nome} tem ${pessoa.idade} anos.`);

// Exemplo 2:objeto com array
console.log("\nExemplo 2\n");

const livro= {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R Tolkien",
    volumes: [
        "A Sociedade do Anel",
        "As Duas Torres",
        "O Retorno do Rei"
    ]
};

console.log(livro);
console.log(livro.titulo);

/*Para acessar algum dos volumes, primeiro passamos pela propriedade (volumes) usando 'ponto' e, chegando nela, usamos os 'colchetes' com o índice pois se trata de uma array */
console.log(`Meu livro preferido é ${livro.volumes[1]}`);



