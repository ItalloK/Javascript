"use strict"

function Somar(n1, n2){
    console.log(n1+n2)
}
Somar(1,2)

function Somar2(n1=0, n2=0){ // Assume que o valor padrao é 0
    console.log(n1+n2)
}
Somar2(10)


function Somar3(n1=0, n2=0){ // Assume que o valor padrao é 0
    let res = 0
    res = n1+n2
    return res
}
let sum = Somar3(10,20) 
console.log(sum)

let valor = 0
console.log("Valor: "+valor)
function Summm(v){
    return valor+v
}
valor = Summm(10)
console.log("Valor atualizado: " + valor)
