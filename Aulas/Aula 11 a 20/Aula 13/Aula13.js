"use strict"

let num = 5

if(num > 10){
    console.log("Numeral maior que 10")
}else if(num > 5){
    console.log("Numeral esta entre 6 e 10")
}else{
    console.log("Numeral menor ou igual a 5")
}

let num2 = 51
if(num2 > 10){
    console.log("Numeral maior que 10")
    if(num2 > 50){
        console.log("Numeral maior que 50")
    }
}

console.log("--------------------------------------------------------------")

let clima = "chuva"
let energia = 100

if(energia > 70 && clima == "sol"){
    console.log("Vou a praia")
}else{
    console.log("Vou ao cinema")
}

console.log("Fim do Programa")