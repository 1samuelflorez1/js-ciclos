let numero = parseInt(prompt("ingresa el numero: "))
let fibonacci = [0,1]
for (let i=2; i<numero; i++){

    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]

}

console.log("los primeros "+numero+" numeros de fibonacci son: "+ fibonacci.slice(0,numero))