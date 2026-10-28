// Bateria do celular
const prompt = require("prompt-sync")();
const bateria = Number(prompt("Bateria (%): "));
if (bateria < 20) {
    console.log("Crítica");
} else if (bateria < 50) {
    console.log("Baixa");
} else if (bateria < 80) {
    console.log("Média");
} else {
    console.log("Alta");
}