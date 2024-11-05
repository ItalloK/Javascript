"use strict"

// const cursos = ["Html", "CSS", "Javascript", "PHP", "React"]
// cursos.map((el, i) =>{ // Elemento e Indice
//     console.log("Curso: " + el + " posição: "+ i)
// })

// // Map para trabalhar com a coleção completa.
// console.log("--------------------------------------------------------")

// let c = cursos.map((el, i) =>{ // Elemento e Indice
//     return "<div>"+el+"</div>"
//     //return el
// })

// console.log(c)

// console.log("--------------------------------------------------------")

// let el = document.getElementsByTagName("div")
// el = [...el]
// console.log(el)
// el.map((e,i)=>{
//     e.innerHTML = "Ohayo Pokko"
//     //console.log(e.innerHTML)
// })


// const el = document.getElementsByTagName("div")
// const val = Array.prototype.map.call(el, ({innerHTML})=>innerHTML)
// console.log(val)


const converterInt =(e)=>parseInt(e)
const dobrar = (e) => e*2
let num = ['1', '2', '3', '4', '5'].map(dobrar)
console.log(num)

