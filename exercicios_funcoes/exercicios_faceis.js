function caixaAlta(palavra) {
    return palavra.toUpperCase()
};
console.log(caixaAlta("prova"));

function parOuImpar(numero) {
    if (numero % 2 == 0) return "Par"; 
    else return "Impar";
}
console.log(parOuImpar(2));

function soma(num1, num2) {
    return (num1 + num2);
}
console.log(soma(2,5));

function porcentagem(valor, porcentagem){
    var port = porcentagem / 100;
    return (valor*port + valor);
}
console.log(porcentagem(100, 50));

function desconto(valor, porcentagem) {
    var port = porcentagem / 100;
    return (valor - port*valor);
}
console.log(desconto(100,10));


