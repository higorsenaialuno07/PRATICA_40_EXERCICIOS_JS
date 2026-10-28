// Área do terreno
const prompt = require("prompt-sync")();
const largura = Number(prompt("Largura (m): "));
const comprimento = Number(prompt("Comprimento (m): "));
const area = largura * comprimento;

console.log("Área: " + area + " m²");