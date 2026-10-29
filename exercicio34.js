// Calculadora de operações
const prompt = require("prompt-sync")();
const a = Number(prompt("Primeiro número: "));
const b = Number(prompt("Segundo número: "));
const op = prompt("Operação (+ - * /): ");
switch (op) {
    case "+": console.log(a + b); break;
    case "-": console.log(a - b); break;
    case "*": console.log(a * b); break;
    case "/":
        if (b !== 0) console.log(a / b);
        else console.log("Divisão por zero não permitida");
        break;
    default: console.log("Operação inválida");
}