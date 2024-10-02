"use strict"

/*let n1 = [10,20,30]
let n2 = [11,22,33,44,55]
//let n3 = [...n1] // Spread
//let n3 = [n1, n2] //( concatenação de vetores )
let n3 = [...n1, ...n2] // Spread Concatenação
console.log("n1: "+n1)
console.log("n2: "+n2)
console.log("n3: "+n3)
console.log("----------------------------------------------------------")


const Jogador1 = {nome:"Italo", energia:100, vidas:3, magia:150} // Objeto
const Jogador2 = {nome:"Nogueira", energia:100, vidas:5, velocidade:80} // Objeto
const Jogador3 = {...Jogador1, ...Jogador2}
console.log(Jogador3)
console.log("----------------------------------------------------------")

const soma = (v1,v2,v3) =>{
    return v1+v2+v3
}
let valores = [1,5,4]
console.log(soma(valores)) // assim não funfa
console.log(soma(...valores)) // assim funfa usando Spread.
console.log("----------------------------------------------------------")*/


const objs = document.getElementsByTagName("div")
console.log(objs)

/*objs.forEach(element => { // error
    console.log(element)    
});*/

const obj2 = [...document.getElementsByTagName("div")]
console.log(obj2)

obj2.forEach(element => {
    //console.log(element)
    element.innerHTML = "Oii"    // altera o valor da DIV
});
