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


