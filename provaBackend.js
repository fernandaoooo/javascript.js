//João Gabriel Soares Inglez e Maria Fernanda Menezes//
import input from "readline-sync";

let perguntar = 'S';

do {
let menu = input.questionInt('Calculadora de área:\
\n1- Calcular area de um retangulo;\
\n2- Calcular area de um triangulo;\
\n3- Calcular area de um circulo;\
\n4- Sair do programa.\
\nEscolha uma opção(apenas número)\
\n--> ');

switch (menu) {
    case 1:
        while (1 === 1) {
            let valorRetanguloBase = input.questionFloat('Digite a base do retangulo: ');
            let valorRetanguloAltura = input.questionFloat('Digite a altura do retangulo: ');

            if (valorRetanguloBase < 0 || valorRetanguloAltura < 0) {
                console.log('Erro! Numero menor que zero, digite um numero maior!');
                continue
            }
            else {
                let calcAreaRetangulo = calculoAreaRetangulo(valorRetanguloBase, valorRetanguloAltura);
                console.log(`A Area do Retangulo com base ${valorRetanguloBase} e altura ${valorRetanguloAltura} é igual: ${calcAreaRetangulo.toFixed(2)}`);

                perguntar = input.question('Deseja continuar? (S/N)\
                \n-->');
                break
            }
        }
        break

        case 2:
            while (2 === 2) {
                let valorTrianguloBase = input.questionFloat('Digite a base do triangulo: ');
                let valorTrianguloAltura = input.questionFloat('Digite a altura do triangulo: ');

                if (valorTrianguloBase < 0 || valorTrianguloAltura < 0) {
                    console.log('Erro! Numero menor que zero, digite um numero maior!');
                    continue
                }
                else {
                    let calcAreaTriangulo = calculoAreaTriangulo(valorTrianguloBase, valorTrianguloAltura);
                    console.log(`A Area do Triangulo com base ${valorTrianguloBase} e altura ${valorTrianguloAltura} é igual: ${calcAreaTriangulo.toFixed(2)}`);

                    perguntar = input.question('Deseja continuar? (S/N)\
                    \n-->');
                    break
                }
            }
            break

        case 3:
            while (3) {
                let valorRaioCirculo = input.questionFloat('Digite o raio do circulo: ');

                if (valorRaioCirculo < 0) {
                    console.log('Erro! Numero menor que zero, digite um numero maior!');
                    continue
                }
                else {
                    let calcAreaCirculo = calculoAreaCirculo(valorRaioCirculo);
                    console.log(`A Area do Circulo com raio ${valorRaioCirculo} é igual: ${calcAreaCirculo.toFixed(2)}`);

                    perguntar = input.question('Deseja continuar? (S/N)\
                    \n-->');
                    break
                }
            }
            break

        case 4:
            console.log('Fim do Programa!');
            perguntar = 'N'
            break

        default:
            console.log("Erro! Digite um numero dentro das opções!");
    }

} while(perguntar === 'S')


function calculoAreaRetangulo(valorRetanguloBase, valorRetanguloAltura) {
    return valorRetanguloBase*valorRetanguloAltura;
}

function calculoAreaTriangulo(valorTrianguloBase, valorTrianguloAltura) {
    return (valorTrianguloAltura*valorTrianguloBase)/2;
    
}

function calculoAreaCirculo(valorRaioCirculo) {
    return 3.1415 * valorRaioCirculo**2
}


        
   
        
