"use strict"

function ExibirMensagem(){
    return "Ohayo Pokko"
}
console.log(ExibirMensagem())

function Somar(){
    let n1 = 8
    let n2 = 14
    return n1+n2
}
console.log("Soma: " + Somar())
let resultado = Somar()
console.log(resultado)

function Verificar(){
    let n1 = 0
    let n2 = 10
    let res = n1+n2
    if(res %2 == 0){
        return "Par"
    }else{
        return "Impar"
    }
}

let ress = Verificar()
console.log(ress)

