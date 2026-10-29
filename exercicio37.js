// Ingresso do cinema
const prompt = require("prompt-sync")();
const tipo = Number(prompt("1-Inteira 2-Meia 3-Gratuita: "));
switch (tipo) {
    case 1: console.log("R$ 30"); break;
    case 2: console.log("R$ 15"); break;
    case 3: console.log("R$ 0"); break;
    default: console.log("Ingresso inválido");
}