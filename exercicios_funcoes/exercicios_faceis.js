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

function circulo(raio) {
    var area = (3.14 * (raio*raio));
    return (area);
}
console.log(circulo(4));

function graus(c) {
    var f = c*1.8 + 32;
    return (f);
}
console.log(graus(2));

function imc(altura, peso){
    var imc = (peso /(altura*altura));
    return (imc.toFixed(1));
}
console.log(imc(1.60, 55));

