"use strict"

function Somar(){
    let n1 = 4
    let n2 = 18
    let soma = n1+n2
    console.log(soma)
}
Somar()

function MudarTexto(){
    const d1 = document.getElementById("d1")
    const d2 = document.getElementById("d2")
    const d3 = document.getElementById("d3")

    d1.innerHTML = "Cristiano Ronaldo"
    d2.innerHTML = "Kaka"
    d3.innerHTML = "Arrascaeta"
}
MudarTexto()
