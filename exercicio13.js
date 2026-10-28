// Bônus de vendas
const prompt = require("prompt-sync")();
const compra = Number(prompt("Valor da compra: "));
if (compra >= 100) {
    console.log("Bônus liberado!"); 
} else {
    console.log("Compra sem bônus.");
}
console.log("Obrigado pela compra.");