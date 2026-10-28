//Comparar idades
const prompt = require("prompt-sync")();
const idadeA = Number(prompt("Idade A: "));
const idadeB = Number(prompt("Idade B: "));
console.log("A é maior? " + (idadeA > idadeB));
console.log("São iguais? " + (idadeA === idadeB));
