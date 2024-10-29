// exercitando codificação de classes
class teslaProductionLine{
    constructor(carModel,carType){
        this.carModel = carModel
        this.carType = carType
    }

// inserindo método, no caso, função dentro da classe
    headline(){
        console.log(`A Tesla lançará no próximo mês o ${this.carModel}, enquadrando-se na categoria autodenominada: ${this.carType}.`)
    }
}

let teslaCyberTruck = new teslaProductionLine("Tesla CyberTruck", "Shielded SUV")

teslaCyberTruck.headline()