// Supondo que esta lista (Array de Objetos) já está cheia de jogadores 

let equipe = [ 
{ nome: "Fallen", funcao: "Atirador", pontuacao: 2500 }, 
{ nome: "Taco", funcao: "Suporte", pontuacao: 1800 }, 
{ nome: "Fer", funcao: "Iniciador", pontuacao: 2100 } 
]; 

// O Desafio Final: Função de Busca 

function buscarJogador(nomeDesejado) { 
    console.log("Buscando por: " + nomeDesejado + "..."); 
    let encontrou = false; // Começamos assumindo que não encontramos ninguém 

// O loop passa por todas as gavetas (posições) do nosso Array 

for (let i = 0; i < equipe.length; i++) { 
    let jogadorAtual = equipe[i]; // Pegamos a ficha atual para ler 

// Comparamos o nome da ficha com o nome procurado 

if (jogadorAtual.nome === nomeDesejado) { 
    console.log("JOGADOR ENCONTRADO!");
    console.log("Nome: " + jogadorAtual.nome + " | Pontos: " + jogadorAtual.pontuacao); 
    encontrou = true; // Mudamos o status! 
    break; // Já achamos quem queríamos, podemos parar o loop 
    } 
} 

// Se o loop terminar e a variável 'encontrou' continuar falsa... 

if (encontrou === false) { 
    console.log("O jogador " + nomeDesejado + " não faz parte da nossa equipe."); 
    } 
} 

// Testando a nossa nova funcionalidade: 

buscarJogador("Fer"); 

// Saída:  JOGADOR ENCONTRADO! Nome: Fer | Pontos: 2100