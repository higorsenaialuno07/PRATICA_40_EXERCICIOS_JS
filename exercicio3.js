//Total de camisetas
const prompt = require("prompt-sync")();
const preco = Number(prompt("Preço unitário: "));
const qtd = Number(prompt("Quantidade: "));
const total = preco * qtd;  // Multiplicação.
console.log("Total: R$ " + total);