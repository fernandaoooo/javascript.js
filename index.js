import entradaDados from "readline-sync";

// let nome = entradaDados.question("Digite seu nome: ");
// console.log(`Olá, ${nome}.`);

// let x = entradaDados.questionInt("X: ");
// let y = entradaDados.questionInt("Y: ");
// console.log(`Total: ${x+y}`);

let ddd = entradaDados.questionInt("Informe o DDD:");

switch (ddd) {
    case 69:
        console.log("Rondônia");
        break;
    case 21:
        console.log("Rio de Janeiro");
    default:
        console.log("DDD não encontrado")
        break;
}