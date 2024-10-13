// Classe que representa um herói
class Heroi {
    // Construtor da classe para definir as propriedades iniciais
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para determinar o tipo de ataque com base no tipo do herói
    atacar() {
        let ataque;

        // Estrutura de decisão para definir o tipo de ataque
        if (this.tipo === 'mago') {
            ataque = 'usou magia';
        } else if (this.tipo === 'guerreiro') {
            ataque = 'usou espada';
        } else if (this.tipo === 'monge') {
            ataque = 'usou artes marciais';
        } else if (this.tipo === 'ninja') {
            ataque = 'usou shuriken';
        } else {
            ataque = 'executou um ataque desconhecido';
        }

        // Exibe a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de criação de objetos e uso da classe Heroi

// Criando um herói do tipo mago
const heroi1 = new Heroi('Lux', 150, 'mago');
heroi1.atacar(); // Saída: O mago atacou usando magia

// Criando um herói do tipo guerreiro
const heroi2 = new Heroi('Sett', 35, 'guerreiro');
heroi2.atacar(); // Saída: O guerreiro atacou usando espada

// Criando um herói do tipo monge
const heroi3 = new Heroi('Shen', 40, 'monge');
heroi3.atacar(); // Saída: O monge atacou usando artes marciais

// Criando um herói do tipo ninja
const heroi4 = new Heroi('Yassuo', 17, 'ninja');
heroi4.atacar(); // Saída: O ninja atacou usando shuriken
