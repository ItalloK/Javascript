"use strict"

const f = function (v1, v2){ // Função anonima
    return v1+v2
}
console.log(f(10, 5))

const g = function (...valores){ // Função anonima
    let res = 0
    for(let v of valores){
        res+=v
    }
    return res
}
console.log(g(10, 5,6,9))

const h = new Function("v1", "v2", "v3", "return v1+v2+v3") // funcao construtor, função anonima
console.log(h(10,25,6))