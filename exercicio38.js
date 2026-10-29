// Categoria do desconto
const prompt = require("prompt-sync")();
const preco = Number(prompt("Preço: "));
const categoria = prompt("Categoria A, B ou C: ").toUpperCase();
let desconto;
switch (categoria) {
    case "A": desconto = 0.10; break;
    case "B": desconto = 0.20; break;
    case "C": desconto = 0; break;
    default: desconto = null;
}
if (desconto === null) {
    console.log("Categoria inválida");
} else {
    console.log("Total: R$ " + (preco * (1 - desconto)).toFixed(2));
}