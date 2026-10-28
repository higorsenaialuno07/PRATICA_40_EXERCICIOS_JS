// Situação escolar
const prompt = require("prompt-sync")();
const media = Number(prompt("Média: "));
if (media >= 9) {
    console.log("Destaque");
} else if (media >= 7) {
    console.log("Aprovado");
} else if (media >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}