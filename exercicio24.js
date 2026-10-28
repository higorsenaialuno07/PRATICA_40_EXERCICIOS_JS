// Temperatura do dia
const prompt = require("prompt-sync")();
const temp = Number(prompt("Temperatura: "));
if (temp < 18) {
    console.log("Frio");
} else if (temp <= 28) {
    console.log("Agradável");
} else {
    console.log("Quente");
}