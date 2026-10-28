// Desconto em reais
const prompt = require("prompt-sync")();
const preco = Number(prompt("Preço: "));
const desconto = 10;
const final = preco - desconto;

console.log("Valor final: R$ " + final);