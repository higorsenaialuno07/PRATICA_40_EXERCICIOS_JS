//Soma de duas compras
const prompt = require("prompt-sync")();
// Number converte a entrada para número.
const a = Number(prompt("Preço do primeiro item: "));
const b = Number(prompt("Preço do segundo item: "));
const total = a + b;      //Soma dos preços.
console.log("Total: R$ " + total);