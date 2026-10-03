const prompt = require("prompt-sync")();

let time = [];
let continuar = true;

function mostrarMenu() {
    console.log("\n========================");
    console.log("------ SISTEMA DE GAMERS ------");
    console.log("1 - Cadastrar");
    console.log("2 - Deletar");
    console.log("3 - Mostrar Equipe");
    console.log("4 - Cáuculo da Média da Equipe");
    console.log("5 - Buscar Jogador");
    console.log("6 - Atualizar pontos");
    console.log("7 - Sair");
    console.log("========================\n");

}

function mostraEquipe() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
        return;
    }

    for (let i = 0; i < time.length; i++) {
        let jogador = time[i];
        console.log((i + 1) + ". " + jogador.nome + " | Função: " + jogador.funcao + " | Pontuação: " + jogador.pontuacao);
    }
}

function cadastraJogador() {
    let nomeJogador = prompt("Digite o nome do Jogador: ");
    let funcaoJogador = prompt("Digite a função do jogador : ");
    let pontuacaoJogador = Number(prompt("Digite a pontuação: "));

    if (isNaN(pontuacaoJogador)) {
        console.log("Pontuação inválida!");
        return; 
    } else {
        let recruta = {
            nome: nomeJogador, 
            funcao: funcaoJogador,
            pontuacao: pontuacaoJogador,
        };

        time.push(recruta);
        console.log("Jogador " + nomeJogador + " foi cadastrado com sucesso!");
    }   
}

function deletarJogador() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado");
        return;
    }

    let nomeDeletado = prompt("Digite o nome a ser deletado: ");
    let indexDeletaddo = -1;

    for (let i = 0; i < time.length; i++) {  
        if (time[i].nome === nomeDeletado) {
            indexDeletaddo = i;
            break;
        }
    }

    if (indexDeletaddo === -1) {
        console.log("Jogador não encontrado.");
        return;
    }

    time.splice(indexDeletaddo, 1);
    console.log("Jogador deletado com sucesso.");
}

function calculoDaMeddia() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado");
        return;
    }

    let totalPontos = 0;

    for (let i = 0; i < time.length; i++) {
        totalPontos = totalPontos + time[i].pontuacao;
    }

    let mediaPontos = totalPontos / time.length;

    console.log("O time posssui uma pontuação média de: ", mediaPontos);
}

function buscarJogador() { 
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado");
        return;
    }

    let nomeDesejado = prompt("Digite o nome do jogador a ser buscado: ");
    console.log("Buscando por: " + nomeDesejado + "..."); 
    let encontrou = false; 

    for (let i = 0; i < time.length; i++) { 
        let jogadorAtual = time[i]; 

        if (jogadorAtual.nome === nomeDesejado) { 
            console.log("JOGADOR ENCONTRADO!");
            console.log("Nome: " + jogadorAtual.nome + " | Pontos: " + jogadorAtual.pontuacao); 
            encontrou = true; 
            break; 
        } 
    } 
    
    if (encontrou === false) { 
        console.log("O jogador " + nomeDesejado + " não faz parte da nossa equipe."); 
    } 
} 

function atualizarPontuacao() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado");
        return;
    }
    let nomeBuscado = prompt("Qual o nome do jogador que você quer atualizar? ");
    console.log("Buscando por: " + nomeBuscado + "..."); 
    let encontrou = false;

    for (let i = 0; i < time.length; i++) { 
        let jogadorAtual = time[i];

        if (jogadorAtual.nome === nomeBuscado) {
            let pontosNovos = Number(prompt("Quantos pontos ele ganhou? "));

            if (isNaN(pontosNovos)) {
                console.log("Pontuação inválida!");
                return;
            }

            jogadorAtual.pontuacao += pontosNovos;

            console.log("A pontuação atual do jogador " + jogadorAtual.nome + " é: " + jogadorAtual.pontuacao);
            encontrou = true;
            break; 
        }
    } 

    if (encontrou === false) { 
        console.log("O jogador " + nomeBuscado + " não faz parte da nossa equipe."); 
    }    
}

while (continuar === true) {
    mostrarMenu();
    let opcao = prompt("Digite sua opção: ");

    if (opcao === "1") {
        cadastraJogador();
    } else if (opcao === "2") {
        deletarJogador();
    } else if (opcao === "3") {
        mostraEquipe();
    } else if (opcao === "4") {
        calculoDaMeddia();
    } else if (opcao === "5") {
        buscarJogador();
    } else if (opcao === "6") {
        atualizarPontuacao();
    } else if(opcao === "7"){
        continuar = false;
    } else {
        console.log("Opção invalida, digite outra opção...");
    }
}

