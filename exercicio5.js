//Média de duas provas
const prompt = require("prompt-sync")();
const n1 = Number(prompt("Primeira nota: "));
const n2 = Number(prompt("Segunda nota: "));
const media = (n1 + n2) / 2; // Parênteses primeiro.

console.log("Média " + media);