"use strict"

const Soma = (...valores) => { // arrow function
    const Somar = val => {
        let res = 0
        for(let v of val){
            res += v
        }
        return res
    }
    return Somar(valores)
}   
console.log(Soma(10,20,30))
