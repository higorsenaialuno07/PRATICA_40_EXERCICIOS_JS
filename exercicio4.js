// Divisão da conta
const prompt = require("prompt-sync")();
const conta = Number(prompt("Valor da conta: "));
const pessoas = Number(prompt("Número de pessoas: "));
const porPessoa = conta / pessoas; // Divisão.

console.log("Cada pessoa paga: R$ " + porPessoa);