// Turno da turma
const prompt = require("prompt-sync")();
const turno = prompt("Turno (M/T/N): ").toUpperCase();
switch (turno) {
    case "M": console.log("Manhã"); break;
    case "T": console.log("Tarde"); break;
    case "N": console.log("Noite"); break;
    default: console.log("Turno inválido");
}