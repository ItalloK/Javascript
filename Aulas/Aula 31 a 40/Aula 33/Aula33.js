"use strict"

const divTodas = [...document.getElementsByTagName("div")]
const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")] 
const cursosC2 = [...document.getElementsByClassName("c2")] 
const cursoEspecial=document.getElementById("c1")


const queryDiv=document.querySelector("div") // retorna o primeiro elemento da chave 'div' ( primeira 'div' )
const query_DivTodas=[...document.querySelectorAll("div")] // retorna coleção com todas as ' divs ' 
const query_cursosTodos = [...document.querySelectorAll(".curso")] // o ' . ' em curso, define que pega a classe 'curso'

const query_cursosC1 = [...document.querySelectorAll(".c1")] 
const query_cursosC2 = [...document.querySelectorAll(".c2")] 

//const query_cursoEspecial=document.querySelector("#c1") // o ' # ' em C1, define que pega o ID c1
const query_cursoEspecial=document.querySelectorAll("#c1")[0] // o de cima ou assim, 0 por C1 ser id 0
const query_DivTodas2=[...document.querySelectorAll("div, p")] // ele pega todos os 'div' e ' p '
const query_cursosC11 = [...document.querySelectorAll(".c1, p")] 
const query_DivTodas3=[...document.querySelectorAll("div[class]")] // pega todos div q tem class


const query_DivTodas4=[...document.querySelectorAll("div > p")] // pega todos div que tem elemento P dentro

console.log(query_DivTodas4)
//console.log(query_cursosC1)
//console.log(query_cursosC2)


/*console.log(divTodas)
console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoEspecial)*/

/*cursosC2.map((el)=>{
    el.classList.add("destaque")
})*/