// Pagamento do pedido
const prompt = require("prompt-sync")();
const opcao = Number(prompt("1-Pix 2-Cartão 3-Dinheiro: "));
switch (opcao) {
    case 1: console.log("Pagar com Pix"); break;
    case 2: console.log("Pagar com cartão"); break;
    case 3: console.log("Pagar em dinheiro"); break;
    default: console.log("Forma inválida");
}