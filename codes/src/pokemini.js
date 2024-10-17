// variáveis de stats pokémon
let id = 'Pikachu'
let level = 20 
let hp = 40
let hpmax = 45 
let gender = 'macho' 
let availability = true
let requiredPokemon = "Charmander"

// verificando disponibilidade do Pokémon
let statusA = ""

if(availability === true){
statusA = "disponível"
}else{
statusA = "fainted"
}

console.log('tu tem um(a): ' + id
    + " level: " + level + " com "
    + hp + "/" + hpmax + " de HP, "    
    + gender + ", que está " + statusA + ".")
console.log()

// testando operadores lógicos
let verifyPokemon = (id == requiredPokemon)

console.log(verifyPokemon)
console.log()
console.log(statusA)
console.log(!statusA)