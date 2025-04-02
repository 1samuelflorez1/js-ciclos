let numeros = [1,2,3,4,5,6,7,8,9]

for(let i=0; i<9; i++){

    console.log("Tabla de multiplicar del numero", numeros[i])

    for(let k=0; k<9; k++){         //esta es otra forma de hacerlo, mucho mas corta
        console.log(numeros[i] * numeros[k])
    }

    // console.log(numeros[i] * 1)  //esta es una forma de hacerlo, mas larga
    // console.log(numeros[i] * 2)
    // console.log(numeros[i] * 3)
    // console.log(numeros[i] * 4)
    // console.log(numeros[i] * 5)
    // console.log(numeros[i] * 6)
    // console.log(numeros[i] * 7)
    // console.log(numeros[i] * 8)
    // console.log(numeros[i] * 9)

}