"use strict"

// Arrow Function

//const soma = function(v1, v2){return v1+v2} // Arrow Function

const Soma = (v1, v2) => { // Arrow Function
    return v1+v2
} 
console.log(Soma(10, 5))

const Nome = n => {return n} // Arrow function com 1 parametro só
console.log(Nome("Italo"))

const Adicionar = n => n+10 // Arrow function com 1 parametro só ( sem precisar de Return )
console.log(Adicionar(10))

const Nome2 = n => n // Arrow function com 1 parametro só ( sem precisar de Return )
console.log(Nome2("Italo"))

