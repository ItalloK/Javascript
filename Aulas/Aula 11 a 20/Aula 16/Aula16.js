"use strict"

let num = [10,20,30,40,50]

/*for(let i = 0; i<num.length; i++){
    console.log(num[i])
}*/

/*for(let n in num){ // for in
    console.log(num[n])
}*/

/*for(let n of num){ // for of
    console.log(n)
}*/

const obj = document.getElementsByTagName("div")

for(let i = 0; i<num.length; i++){
    console.log(num[i])
}

for(let o of obj){
    console.log(o.innerHTML="Oiiie") // ou console.log(o)
}

for(let o in obj){
    console.log(obj[o].innerHTML) // ou console.log(o)
}