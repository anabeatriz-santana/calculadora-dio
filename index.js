// Desafio: Calculadora de Partidas Rankeadas
// Conceitos utilizados: Variáveis, Operadores, Estruturas de Decisão, Funções

// Função que recebe vitórias e derrotas e calcula o nível do jogador
function calcularNivel(vitorias, derrotas) {
  // Calcula o saldo de partidas rankeadas
  const saldoVitorias = vitorias - derrotas;

  // Variável que vai guardar o nível calculado
  let nivel = "";

  // Estrutura de decisão baseada na quantidade de vitórias
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

  // Exibindo o resultado final
  console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Testando a função com alguns jogadores
calcularNivel(85, 20);
calcularNivel(15, 5);
calcularNivel(105, 30);
