// variáveis de stats pokémon
let id = 'Sparrow'
let level = 20 
let hp = 40
let hpmax = 45 
let gender = 'fêmea' 
let availability = true
let requiredPokemon = "Charmander"

// verificando o artigo a ser usado para o Pokémon cadastrado
if(gender == "male"){
    let proNoun = "ele"
}else{
    let proNoun = "ela"
}

// verificando disponibilidade do Pokémon
let statusA = ""

if(availability === true){
statusA = "disponível"
}else{
statusA = "derrotado :("
}

console.log('Você tem um ' + id +" "+ gender
    + ", level " + level + " com "
    + hp + "/" + hpmax + " de HP, que está " + statusA + ".")
console.log()

// testando operadores lógicos
let verifyPokemon = (id == requiredPokemon)

//testando sintaxe e funcionalidades switch-case
switch (id){
    case "Charmander":
        console.log("Que belo "+id+", hein!")
        break

    case "Pidgey":
    case "Sparrow":
        console.log("Que bela "+"galinha"+", hein!")
        break

    default:
        console.log("Que belo Pokébicho, hein!")
}