// Par ou ímpar
const prompt = require("prompt-sync")();
const numero = Number(prompt("Número inteiro: "));
if (numero % 2 === 0) {
    console.log("Par");
} else if (numero % 2 !== 0) {
    console.log("Ímpar");
} else {
    console.log("Entrada não reconhecida");
}
