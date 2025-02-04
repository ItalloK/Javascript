"use strict"

const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]

console.log(document.getRootNode()) // nó raiz

console.log(caixa1.firstElementChild) // primeiro elemento
console.log(caixa1.lastElementChild) // ultimo elemento
console.log(caixa1.children) // pega todos elementos