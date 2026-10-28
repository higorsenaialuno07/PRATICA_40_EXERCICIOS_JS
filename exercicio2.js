//Troco da padaria
const prompt = require("prompt-sync")();
const valor = Number(prompt("Valor da compra: "));
const pago = Number(prompt("Valor recebido: "));
const troco = pago - valor; // Subtração.
console.log("Troco: R$ " + troco);

