// Faixa etária
const prompt = require("prompt-sync")();
const idade = Number(prompt("Idade: "));
if (idade < 12) {
    console.log("Criança");
} else if (idade < 18) {
    console.log("Adolescente");
} else {
    console.log("Adulto");
}