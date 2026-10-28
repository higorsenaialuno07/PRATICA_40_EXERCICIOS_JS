// Pagamento na loja
const prompt = require("prompt-sync")();
const forma = prompt("Pix, Cartão ou Dinheiro? ").toLowerCase();
if (forma === "pix") {
    console.log("Pagamento instantâneo");
} else if (forma === "cartão") {
    console.log("Usar maquininha");
} else if (forma === "dinheiro") {
    console.log("Receber no caixa"); 
} else {
    console.log("Forma inválida");
}