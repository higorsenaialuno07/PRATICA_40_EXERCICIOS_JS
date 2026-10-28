// Dia da semana
const prompt = require("prompt-sync")();
const dia = Number(prompt("Dia (1, 2 ou 3): "));
switch (dia) {
    case 1: console.log("Segunda"); break;
    case 2: console.log("Terça"); break;
    case 3: console.log("Quarta"); break;
    default: console.log("Opção inválida");
}