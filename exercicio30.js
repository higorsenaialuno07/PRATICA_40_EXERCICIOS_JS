// Acesso a uma oficina
const prompt = require("prompt-sync")();
const idade = Number(prompt("Idade: "));
const inscrito = prompt("Inscrito? (S/N): ").toUpperCase();
const convidado = prompt("Convidado? (S/N): ").toUpperCase();
if ((idade >= 16 && inscrito === "S") || convidado === "S") {
    console.log("Entrada liberada");
} else {
    console.log("Entrada negada");
}