/*

let nombre = "A"

while(nombre != "Aaaaaaaaaaa"){  //esto se usa para se cree un contador el cual llegaria maximo hasta el numero anterior al 10 (en este caso)

    console.log("iteracion numero", nombre)
    nombre += "a"

}

*/



let numero = 0

while(numero < 100){ //el while funciona que activa una funcion tantas veces indique mientras la condicion sea true

    console.log("iteracion while numero", numero)
    numero += 1

}



//Do while

let numeros = 0

do { 

    console.log("iteracion do while numero", numeros)
    numeros += 1

} while(numeros < 100)