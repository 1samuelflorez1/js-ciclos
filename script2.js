//actividad 1

/*
    let numero = 1

    while(numero <= 100){

        console.log("iteracion while numero", numero)
        numero += 1

    }
*/


//------------------------------do while
/*

let numero = 1

do {

    console.log("iteracion while numero", numero)

}while(numero<=100)

*/

//actividad 2

/*

let contador = 10
console.log(contador)


while(contador != 1){ //en cambio en el while, primero pregunta y luego acciona 

    contador-=1
    console.log(contador)

    if (contador == 1) {

        console.log("Tiempo Fuera")

    }
} 

*/

//------------------------------do while

// let contador = 10

// do {  //en el do while siempre va a accionar y luego pregunta si lo vale

//     contador -= 1
//     console.log(contador)
//     if (contador == 1){
//         console.log("termine")
//     }

// }while(contador != 1)


//Actividad 8 ----------------------- while 

// let sumaEdades = 0
// let cantidadEdades = 0

// let pusoNegativo = false

// while (pusoNegativo != true){

//     edadUsuario = parseInt(prompt("Ingrese la edad de uno de sus amigos, ponga un negativo en cvaso de que quiera terminar"))

//     if (edadUsuario < 0) {

//         pusoNegativo= true

//     }

//     sumaEdades += edadUsuario
//     cantidadEdades += 1


// }
// let promedio = sumaEdades/cantidadEdades

// console.log(promedio)

//actividad 9-----------------------------------------------------------------------------------------------------------------

// let digitos = prompt ("ingrese un numero que desee contar los digitos")

// let listaDigitos = digitos.split("")

// console.log(listaDigitos)

// let contador = 0

// while (contador != listaDigitos.length){

//     contador += 1

// }

// console.log("Digitos", contador)

//actividad 10 -----------------------------------------------------------------------------------------------Do while

let deseaSalir

do{

    let monto = prompt("ingrese el monto de la moneda ")

    console.log("El monto de la modena es: ", monto)

    deseaSalir = prompt("Desea salir? ingrese 'si' o 'no'")

}while(deseaSalir == 'no')