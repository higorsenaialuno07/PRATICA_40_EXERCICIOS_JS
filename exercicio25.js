// Desconto por faixa
const prompt = require("prompt-sync")();
const compra = Number(prompt("Valor da compra: "));
let taxa = 0; 
if (compra >= 200) {
    taxa = 0.20;
} else if (compra >= 100) {
    taxa = 0.10;
} else {
    taxa = 0;
}
const final = compra - compra * taxa;
console.log("Total: R$ " + final.toFixed(2));