"use strict"

const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "JAVASCRIPT", "PHP", "REACT", "MYSQL", "REACTNATIVE"]


cursos.map((el, chave)=>{
    console.log(chave)
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c"+chave+1) // atributo e valor
    novoElemento.setAttribute("class", "curso c1") // atributo e valor
    novoElemento.innerHTML=el
    caixa1.appendChild(novoElemento)
})