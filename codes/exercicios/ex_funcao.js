function definir(pokemon){
     console.log("O pokémon favorito " + pokemon) 
}

definir("é o Charizard.")

// setando defaults p/ parâmetros

function fazendoCompras(item, valor, cliente = "cliente"){
    console.log(`Foi comprado ${item}.`)
    console.log(`Por:${cliente}.`)
    console.log(`O valor total é: ${valor}`)
}

fazendoCompras('arroz e feijão', 100.50, 'Jack')

// função com return

let retornO = sumUp(1,1)

function sumUp(numA, numB){
    let result = numA + numB
    return result 
}

console.log(retornO)

// uso de função com recurso de split de caractere

function getFirstName(name, splitChar = " "){ 
    let fullName = name.split(splitChar)
    return fullName[fullName.length-1]
}

let userName = getFirstName('Luiz Henrique da Silva Ross',' ')

console.log(`Bem-vindo, Sr. ${userName}.`)