"use strict"

const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]


console.log(caixa1.hasChildNodes()) // retorna true se o elemento tiver filhos ou nao
console.log(btn_c[0].hasChildNodes()) // retorna true se o elemento tiver filhos ou nao

console.log(btn_c[0].childNodes)
console.log(btn_c[0].children)

console.log(caixa1.children.length > 0 ? "Possui filhos" : "Não possui filhos") // assim ou abaixo
/*if(btn_c[0].children.length > 0){ // ou ser feito assim
    console.log("Possui filhos")
}else{
    console.log("Não possui filhos")
}*/
//console.log(btn_c[0].children.length > 0 ? "Possui filhos" : "Não possui filhos")


//console.log(caixa1.firstElementChild.innerHTML="Teste") // mudou do primeiro elemento
//console.log(caixa1.children[1].innerHTML="Teste 2") // mudou o valor do 2º elemento

const c1_2 = document.querySelector("#c1_2")
console.log(c1_2.parentElement) // pega o pai dela ( div anterior )
console.log(c1_2.parentNode) // mesma coisa, pega o pai dela ( div anterior )

console.log(c1_2.parentNode.parentNode) // mesma coisa, pega o avô dela ( div anterior ao pai )
console.log(c1_2.parentNode.parentNode.children[4]) // pega o index 4 do geral
