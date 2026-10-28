// Saldo da carteira
const prompt = require("prompt-sync")();
const saldo = Number(prompt("Saldo: "));
const preco = Number(prompt("Preço: "));
if (saldo >= preco) {
    console.log("Compra aprovada");
} else if (saldo >= preco / 2) {
    console.log("Saldo insuficiente, mas cobre metade");
} else {
    console.log("Saldo insuficiente");
}