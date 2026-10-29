// Menu de lanches
const prompt = require("prompt-sync")();
const opcao = Number(prompt("1-Sanduíche 2-Pizza 3-Salada: "));
switch (opcao) {
    case 1: console.log("Sanduíche"); break;
    case 2: console.log("Pizza"); break;
    case 3: console.log("Salada"); break;
    default: console.log("Opção inválida");
} 