// for (let i=0; i<99; i++){  //este let del i funciona solo en la funcion, si se le quita, ya podria servir el console de abajo

//     console.log("iteracion for numero", i)

// }

/*console.log(i)*/


//actividad 3----------------------------------------For

// let numeros = [1,2,3,4,5,6,7,8,9]

// for(let i=0; i<9; i++){

//     console.log("Tabla de multiplicar del numero", numeros[i])

//     for(let k=0; k<9; k++){         //esta es otra forma de hacerlo, mucho mas corta
//         console.log(numeros[i] * numeros[k])
//     }

//     // console.log(numeros[i] * 1)  //esta es una forma de hacerlo, mas larga
//     // console.log(numeros[i] * 2)
//     // console.log(numeros[i] * 3)
//     // console.log(numeros[i] * 4)
//     // console.log(numeros[i] * 5)
//     // console.log(numeros[i] * 6)
//     // console.log(numeros[i] * 7)
//     // console.log(numeros[i] * 8)
//     // console.log(numeros[i] * 9)

// }


//actividad 4---------------------------------------For

let totalnota = 0

for (let i=1; i<=5; i++){

    let nota = parseInt(prompt("ingresa la nota " + i))
    totalnota += nota

}

let promedio = totalnota/5
console.log("su promedio es: " + promedio)