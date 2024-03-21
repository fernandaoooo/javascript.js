import dados from "readline-sync";

let x = dados.questionInt("Informe o primeiro valor: ");
let y = dados.questionInt("Informe o segundo valor: ");
let op = dados.question("Informe a operacao (+ - * /): ");

switch (op) {
    case "+":
        console.log(`Resultado: ${x + y}`);
        break;

    case "-":
        console.log(`Resultado: ${x - y}`);
        break;
    case "*":
        console.log(`Resultado: ${x * y}`);
        break;
    case "/":
        console.log(`Resultado: ${x / y}`);
        break;
    default:
        console.log("Operacao invalida!")
}