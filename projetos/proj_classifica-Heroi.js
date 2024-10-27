/* # 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**" */

let heroName = "Manoel"
let heroLvl = 6007
let level = ""

if (heroLvl < 1000){
    level = "Ferro"
} else if (heroLvl >= 1001 && heroLvl <= 2000){
    level = "Bronze"
} else if (heroLvl >= 2000 && heroLvl <= 5000){
    level = "Prata";
} else if (heroLvl >= 5001 && heroLvl <= 7000){
    level = "Ouro";
} else if (heroLvl >= 7001 && heroLvl <= 8000){
    level = "Platina";
} else if (heroLvl >= 8001 && heroLvl <= 9000){
    level = "Ascendente";
} else if (heroLvl >= 9001 && heroLvl <= 10000){
    level = "Imortal";
} else if (heroLvl >= 10001){
    level = "Radiante";
}

console.log("O Herói de nome " + heroName + " está classificado no nível " + level + ".")