// Estoque baixo
const prompt = require("prompt-sync")();
const estoque = Number(prompt("Itens no estoque: "));
if (estoque < 5) {
    console.log("Solicitar reposição.");
} else {
    console.log("Estoque suficiente.");
}
console.log("Consulta finalizada.");