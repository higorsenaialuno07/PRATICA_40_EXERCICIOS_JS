// Aprovado ou recuperação
const prompt = require("prompt-sync")();
const nota = Number(prompt("Nota: "));
if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}