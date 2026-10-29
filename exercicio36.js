// Semáforo
const prompt = require("prompt-sync")();
const cor = prompt("Cor do semáforo: ").toLowerCase();
switch (cor) {
    case "vermelho": console.log("Pare"); break;
    case "amarelo": console.log("Atenção"); break;
    case "verde": console.log("Siga"); break;
    default: console.log("Cor inválida");
}