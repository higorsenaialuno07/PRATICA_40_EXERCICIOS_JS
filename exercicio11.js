// Aviso de calor
const prompt = require("prompt-sync")();
const temperatura = Number(prompt("Temperatura: "));
if (temperatura > 30) {
    console.log("Alerta de calor!");
} else {
    console.log("Temperatura dentro do limite.");
}
console.log("Verificação concluída.");