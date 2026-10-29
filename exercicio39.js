// Controle de entregas
const prompt = require("prompt-sync")();
const compra = Number(prompt("Valor da compra: "));
const entrega = prompt("Entrega? (S/N): ").toUpperCase();
let frete = 0;
if (entrega === "S") {
    if(compra >= 150) frete = 0; //Frete Grátis.
    else frete = 12;
} else if (entrega === "N") {
    frete = 0; //Retirada na loja.
} else {
    console.log("Opção inválida");
}
if (entrega === "S" || entrega === "N") {
    console.log("Total: R$ " + (compra + frete).toFixed(2));
}