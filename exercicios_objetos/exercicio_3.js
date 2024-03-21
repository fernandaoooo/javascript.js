class Imovel {
    constructor(quartos, tipo, endereco) {
        this.quartos = quartos;
        this.tipo = tipo;
        this.endereco = endereco;
    }
    exibirInformacoes () {
        return `${this.quartos} quartos, tipo ${this.tipo}, endereco: ${this.endereco}`;
    }
}
const casa = new Imovel(4,"Casa","Rua da Amizade, 789 - Bairro Alegre.");
const apartamento = new Imovel("");
console.log(casa.exibirInformacoes());