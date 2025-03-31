/*

let nombre = "A"

while(nombre != "Aaaaaaaaaaa"){  //esto se usa para se cree un contador el cual llegaria maximo hasta el numero anterior al 10 (en este caso)

    console.log("iteracion numero", nombre)
    nombre += "a"

}

*/



// let numero = 0

// while(numero < 100){ //el while funciona que activa una funcion tantas veces indique mientras la condicion sea true

//     console.log("iteracion while numero", numero)
//     numero += 1

// }



// //Do while

// let numeros = 0

// do { 

//     console.log("iteracion do while numero", numeros)
//     numeros += 1

// } while(numeros < 100)


//el BREACK nos sirve que cuando un valor o un elemento se detecta o llegamos hasta ahi, se detiene en ese momento
//(ROMPER EL BUCLE)


//El continue nos sirve para saltar a la siguiente iteracion

// let estudiantes = [20, 19, 21, 39, 12]

// let mayor = 0

// for (let i=0; i<estudiantes.length; i++){

//     if (estudiantes[i] == 19){
//         mayor = estudiantes[i]
//         break //en este caso el break lo que hace es, evaluar los numeros hasta encontrar el 19, en este caso, evaluo solo 2 numeros
//     }
//     console.log("Es estudiantes mayor era ", mayor)

// }

// console.log("El estudiante mayor al final es", mayor)


let estudiantes = [20, 19, 21, 39, 12]

let mayor = 0

for (let i=0; i<estudiantes.length; i++){

    if (estudiantes[i] < 18 ){   //con esto vemos quien es el mayor

        continue

    }

    if (estudiantes[i] > 18 && estudiantes[i] > mayor){
        mayor = estudiantes[i]


    }
    console.log("Es estudiantes mayor era ", mayor)

}

console.log("El estudiante mayor al final es", mayor)