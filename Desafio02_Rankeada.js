// Função para calcular o saldo e determinar o nível do jogador
function calcularSaldoRankeadas(vitorias, derrotas) {
    // Cálculo do saldo de vitórias
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    // Estrutura de decisão para determinar o nível baseado nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Retorna o saldo e o nível como um objeto
    return { saldoVitorias, nivel };
}

// Função principal que executa o cálculo e exibe a mensagem final
function exibirResultado(nome, vitorias, derrotas) {
    // Chama a função de cálculo
    const resultado = calcularSaldoRankeadas(vitorias, derrotas);

    // Exibe o resultado final
    console.log(
        `O Herói ${nome} tem de saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`
    );
}

// Exemplo de uso com um herói fictício
const nomeHeroi = "Lux"; // Nome do herói
const vitorias = 55; // Vitórias do herói
const derrotas = 20; // Derrotas do herói

// Executa a função com os valores fornecidos
exibirResultado(nomeHeroi, vitorias, derrotas);
