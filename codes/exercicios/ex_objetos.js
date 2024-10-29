// introdução a objetos - codando em JSON
// estrutura chave-valor

let purchaseOrder = {
    customer: "Clientola",
    purchaseNumber: 1023,
        products: {
            0: ["Power bank", 118.57],
            1: ["Webcam", 149.90],
            2: ["Dualsense pearl white", 299.00]
        }
}

//JS padrão testando a invocação de objetos em JSON
let purchaseTotal = 0.00

for (let index in purchaseOrder.products){
    purchaseTotal = purchaseTotal + purchaseOrder.products[index][1]
}

let total = purchaseOrder.products[0][1]+purchaseOrder.products[1][1]+purchaseOrder.products[2][1]

console.log(`O cliente ${purchaseOrder.customer} efetuou o pedido de nº ${purchaseOrder.purchaseNumber}
e levou
`)
    for (let index in purchaseOrder.products){
        console.log(`Item: ${purchaseOrder.products[index][0]} | Custo: ${purchaseOrder.products[index][1]}`)
    }
console.log(` 
    totalizando R$ ${purchaseTotal}.`)