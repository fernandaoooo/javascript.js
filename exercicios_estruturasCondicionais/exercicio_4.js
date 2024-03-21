import dados from "readline-sync";

let q = dados.question("Informe sua categoria: ");
let s = dados.questionInt("Informe seu salario atual: ")
let x = 0

switch (q) {
    case "A":
        x = s*0.05
        console.log(`Seu novo salario: R$${s+x}`);
        break;
    case "B":
        x = s*0.10
        console.log(`Seu novo salario: R$${s+x}`);
        break;
    case "C":
        x = s*0.15
        console.log(`Seu novo salario: R$${s+x}`);
        break;
    case "D":
        x = s*0.20
        console.log(`Seu novo salario: R$${s+x}`);
        break;
}