// Entrada infantil
const prompt = require("prompt-sync")();
const idade = Number(prompt("Idade: "));
if (idade < 12 || idade >= 60) {
    console.log("Entrada gratuita");
} else if (idade < 18) {
    console.log("Meia entrada");
} else {
    console.log("Ingresso pago");
}