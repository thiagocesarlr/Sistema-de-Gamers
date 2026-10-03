// Simulando a escolha do usuário no painel do GamerTeam 

let opcaoEscolhida = "3"; 

switch (opcaoEscolhida) { 
case "1": 

console.log("Abrindo o painel de NOVO CADASTRO..."); 

break; // O break impede que o código continue descendo 
case "2": 

console.log("Carregando a LISTA DE JOGADORES..."); 

break; 
case "3": 

console.log("Calculando a MÉDIA DA EQUIPE..."); 

break; 
default: 

// O default pega tudo que não for 1, 2 ou 3 

console.log("Opção inválida. Por favor, escolha um número do menu."); 

break; 
}