"use strict"

function* Cores(){ // o * diz que é uma funcao geradora
    yield "Vermelho"
    yield "Verde"
    yield "Azul"
}

const itc = Cores()
console.log(itc.next().value) // executa o vermelho
console.log(itc.next().value) // executa o verde
console.log(itc.next().value) // executa o azul


//*-----------------------------------------------------------------------------------------------*//

function* Perguntas(){
    const nome = yield "Qual seu nome?"
    const esporte = yield "Qual seu esporte favorito?"
    return "Seu nome é: " + nome + ", seu esporte favorito é: "+esporte
}

const itp = Perguntas()
console.log(itp.next().value)
console.log(itp.next('Italo').value)
console.log(itp.next('Volei').value)

//*-----------------------------------------------------------------------------------------------*//


function* Contador(){
    let i = 0
    while(true){
        yield i++
        if(i>5) break; // Limita o contador em 5
    }
}

const itcc = Contador()
/*for(let i = 0; i<10; i++){
    console.log(itcc.next().value)
}*/
for(let c of itcc){
    console.log(c)
}