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

// Exemplo 3:array de objetos
console.log("\nExemplo 3\n");
const livros = [
    {
        titulo: "O Assassinato no Expresso do Oriente",
        autor: "Agatha Christie"
    },
    {
        titulo: "Crepúsculo",
        autor: "Stephanie Myers"
    },
    {
        titulo: "Um Livro Qualquer",
        autor: "Fulano de Tal"
    }
];

console.log(livros);
console.log(livros[2].titulo);

// Exercícios

const aluno = {
    NomeCompleto: "Elizabeth Silva",
    DataDeNascimento: "31/12/1998",
    ListaDeTelefone: [
        "11 93836-8393",
        "11 9393-2424"
    ],
    endereco: {
        rua: "avenida manoel",
        numero: 15,
        bairro:"vila clara"
    
    }
};

console.log(aluno);
console.log(`Meu nome é ${aluno.NomeCompleto}, meu telefone é ${aluno.ListaDeTelefone[0]} e moro no bairro ${aluno.endereco.bairro}`);







