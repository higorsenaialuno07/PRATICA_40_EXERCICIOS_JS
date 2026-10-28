// Comparar senhas
const prompt = require("prompt-sync")();
const senha1 = prompt ("Primeira senha: ");
const senha2 = prompt ("Segunda senha: ");

console.log("São diferentes? " + (senha1 !== senha2));