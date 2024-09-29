"use strict"

/* Operadores: 
    + -> Soma
    - -> Subtracao
    * -> Multiplicacao
    / -> Divisao
    % -> Resto
    ++ -> Incremento
    -- -> Decremento
*/

let num1 = 0, num2 = 0, res = 0

num1 = 10, num2 = 5

res = num1+num2
console.log("Soma Resultado: "+res) // pode fazer a soma dentro do console tambem

res = num1*num2
console.log("Multiplicacao Resultado: "+res)

res = (num1+num2)*2
console.log("Resultado: "+res)

num1 = 15
num2 = 2
res = num1/num2
console.log("Resultado div: "+res)
res = num1%num2 // pega o resto da divisão ( nesse caso 1 )
console.log("Resultado resto: "+res)

num1 = 10
num1++
console.log("Incremento: "+num1)

num1 = 10
num1--
console.log("Decremento: "+num1)

num1 = 10
num1+=10
console.log("+= 10: "+num1)

num1 = 10
num1-=10
console.log("-= 10: "+num1)

num1 = 10
num1*=2
console.log("*= 10: "+num1)

num1 = 10
num1/=2
console.log("/= 10: "+num1)

