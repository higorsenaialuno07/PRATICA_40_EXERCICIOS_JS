// Meta de vendas
const prompt = require("prompt-sync")();
const vendas = Number(prompt("Vendas realizadas: "));
if (vendas >= 20) {
    console.log("Excelente");
} else if (vendas >= 10) {
    console.log("Muito bom");
} else if (vendas >= 5) {
    console.log("Bom");
} else {
    console.log("Abaixo da meta");
}