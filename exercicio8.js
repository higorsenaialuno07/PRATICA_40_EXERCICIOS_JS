// Preço com taxa
const prompt = require("prompt-sync")();
const preco = Number(prompt("Preço do serviço: "));
const taxa = preco * 0.05; // 5% = 0.05.
const total = preco + taxa;
 
console.log("Total: R$ " + total.toFixed(2));