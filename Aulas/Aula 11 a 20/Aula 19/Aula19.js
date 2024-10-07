"use strict"

let n = 0
let max = 1000

/*while(n < max){
    console.log("Num: " + n)
    if(n > 10){
        break
    }
    n++
}*/

let pares = 0
/*for(let i = 0; i<max; i++){
    console.log("Num: " + i)
    if(i %2 == 0){
        pares++
    }
}*/
for(let i = 0; i<max; i++){
    console.log("Num: " + i)
    if(i %2 != 0){
        continue
    }
    pares++
}
console.log("Quantidade de Pares: " + pares)
console.log("Fim do Programa")