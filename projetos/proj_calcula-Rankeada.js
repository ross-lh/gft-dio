/* # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**" */
 
// declarando variáveis para o código
let heroWins = 2
let heroLosses = 4
let heroRatio = heroWins - heroLosses

let heroLevel = ""

// estrutura de repetição que garante uma relação de pelo menos 0(zero) para classificar o herói
while (heroRatio < 0) {
    console.log(`Vença pelo menos ${heroRatio*-1} partida(s) para obter seu rank.`)
    console.log('...')
    console.log(`Boa! Falta(m) ${heroRatio*-1-1} vitória(s) para obter seu rank.`)
    heroRatio++;
}

// função que simplifica a comparação de valores na estrutura de decisão de nível
function betweenValues(min, max) {
    return heroRatio >= min && heroRatio <= max;
    }

// estrutura de decisão para formar o rank do herói
if (heroRatio <= 10){
    heroLevel = "Ferro"
    } else if (betweenValues(11,20)){
        heroLevel = "Bronze"
    } else if (betweenValues(21,50)){
        heroLevel = "Prata"
    } else if (betweenValues(51,80)){
        heroLevel = "Ouro"
    } else if (betweenValues(81,90)){
        heroLevel = "Diamante"
    } else if (betweenValues(91,100)){
        heroLevel = "Lendário"
    } else if (heroRatio >= 101){
        heroLevel = "Imortal"
}

// saída final do saldo de vitórias e nível do Herói    
console.log(`O Herói tem saldo de ${heroRatio} vitórias e está classificado no nível: ${heroLevel}.`)