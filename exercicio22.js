// Classificação da nota
const prompt = require("prompt-sync")();
const nota = Number(prompt("Nota: "));
if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 7) {
    console.log("Bom");
} else {
    console.log("Precisa melhorar");
}