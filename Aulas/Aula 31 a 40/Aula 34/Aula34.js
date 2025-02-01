"use strict"

/*const msg = ()=>{ // pode ser usado arrow function tbm
    alert("teste")
}*/

/////////////////////////////////////

const c1 = document.getElementById("c1")
//const c1 = document.querySelector("#c1") // pode ser assim tbm

function msg(){
    alert("Ohayo")
}

//c1.addEventListener("click", msg) // pode ser usado assim
/*c1.addEventListener("click", ()=>{
    //alert("Ohayo Pokko")
    //msg("Oi")
    msg()
})*/

/*c1.addEventListener("click", (evt)=>{
    //console.log(evt.target) // pega qm disparou o evento
    const el = evt.target
    el.classList.add("destaque") // adiciona a classe destaque
})*/

////////////////////////////////////////////

const cursos = [...document.querySelectorAll(".curso")]
cursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const el = evt.target
        el.classList.add("destaque")
        console.log(el.id + " foi clicado")
        console.log(el.innerHTML + " Foi clicado.")
    })
})