// Caixa completo
const prompt = require("prompt-sync")();
const qtd = Number(prompt("Quantidade: "));
const preco = Number(prompt("Preço unitário: "));
const forma = prompt("Pagamento (P-Pix/C-Cartão/D-Dinheiro): ").toUpperCase();
const subtotal = qtd * preco;
let desconto = 0;
switch (forma) {
    case "P": desconto = 0.10; break;   //Pix 10%.
    case "C": desconto = 0.05; break;   //Cartão 5%.
    case "D": desconto = 0; break;
    default: desconto = null;
}
if (desconto === null) {
    console.log("Pagamento inválido");
} else {
    const total = subtotal - subtotal * desconto;
    console.log("Total: R$ " + total.toFixed(2));
}