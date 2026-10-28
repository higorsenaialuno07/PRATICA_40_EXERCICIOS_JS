// Verificação de senha
const prompt = require("prompt-sync")();
const correta = "1234"; 
const digitada = prompt ("Digite a senha: ");
if (digitada === correta) {
    console.log("Acesso autorizado");
} else if (digitada === "") {
    console.log("Digite uma senha");
} else {
    console.log("Senha incorreta");
}