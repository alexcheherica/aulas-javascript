'use strict'

/*Loops ou estruturas de repetição
São comandos que, baseados em alguma condição lógica, são programados para executar ações repetidas vezes.

Comandos mais tradicionais:while(ENQUANTO) e for (PARA)

Normalmente, os loops são controlados através de uma variálel (let) ia.Esta variável é comumente chamada de "i", "j", "k" ou qualquer outra letra se necessário.
*/

console.log("Exemplo 1: WHILE (enquanto)");

let i = 1;
while (i <= 5) {
    console.log("Valor do i:"+i);
    i++; //incremento
    // i = i + 1;
       
}

console.log("\nExemplo 2: FOR (para)");

// for (inicialização da variável; condição; atualização)
for (let j = 1; j <= 10; j++ ){
    console.log("J vale" + j);   
}

console.log("\nExemplo 3: loop regressivo");
for (let k = 10; k >= 1; k--) {
    console.log("k vale"+k);       
}

console.log("\nExemplo 4: loop e array");

const bandas = ["Slayer","Metallica","Iron Maiden","Nightwish","Judas Priest"];

//console.log(bandas[0]);

for(let i = 0; i <bandas.length;i++){
    console.log(bandas[i]);    
}
/*const bandas = ["Slayer", "Metallica", "Iron Maiden", "Nightwish", "Judas Priest"];

for( let i = 0; i < bandas.length; i++ ){
    console.log( bandas[i] );    
}

1ª execução: i = 0
console.log( bandas[0] ); 

2ª execução: i = 1
console.log( bandas[1] ); 

3ª execução: i = 2
console.log( bandas[2] ); 

4ª execução: i = 3
console.log( bandas[3] ); 

5ª execução: i = 4
console.log( bandas[4] ); 
*/

console.log("\n-----------\n");

//Usando loop for/of (exclusivo do JS)
/*Usamos uma var/const (no caso, banda) para acessar cada elemento do array (no caso, bandas)*/
for( const banda of bandas){
    console.log(banda);
    
}

console.log("\nExemplo 5: loop e objeto");
const pessoa ={
    nome:" Fulano da Silva",
    idade: 40,
    cidade: "São Paulo",
    estado: "SP"
};

// Usando o loop for/in para objetos (exclusivo do JS)
//Prop pode ser chamado de qualquer outra palavra
for(const prop in pessoa){
    console.log(pessoa[prop]);
    
}

/*Exercicio

1. Faça um array chamado "clientes" contendo 3 objetos.
 
Cada objeto deverá ter uma propriedade "identificador" (com valores 1, 2 e 3) e uma propriedade "nome" (com os nomes dos clientes: "Dio", "Ozzy" e "Ian").
 
2. Faça um loop (qualquer um dos que vimos) e mostre no console os dados de cada cliente conforme a seguir:
 
- Cliente: Dio, id: 1
- Cliente: Ozzy, id: 2
- Cliente: Ian, id: 3

*/
console.log("\nExercicio");

const clientes= [
    {
        nome: "Maria",
        id:1
    },

    {
        nome: "Sergio",
        id:2
    },
    {
        nome: "Jhulya",
        id:3
    },
];


for(const cliente of clientes){
    console.log("- Cliente: "+cliente.nome+", "+"id: "+cliente.id);

}

for(const cliente of clientes){
    console.log(`- Cliente: ${cliente.nome}, id: ${cliente.id}`);
    
}

for (let i = 0; i < clientes.length; i++) {
    console.log(`- Cliente: ${clientes[i].nome}, id: ${clientes[i].id}`);
    
    
}



