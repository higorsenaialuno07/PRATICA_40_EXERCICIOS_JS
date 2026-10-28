// Comparar dois números
const prompt = require("prompt-sync")();
const a = Number(prompt("Número A: "));
const b = Number(prompt("Número B: "));
if (a > b) {
    console.log("A é maior");
} else if (b > a) {
    console.log("B é maior");
} else {
    console.log("Empate");
}