"use strict"

function Somar(...valores){ // Recebe N parametros
    let tam = valores.length
    let res = 0;
    for(let v of valores){
        res+=v
    }
    return res
}
console.log(Somar(10,15,20))

