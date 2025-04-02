let totalnota = 0

for (let i=1; i<=5; i++){

    let nota = parseInt(prompt("ingresa la nota " + i))
    totalnota += nota

}

let promedio = totalnota/5
console.log("su promedio es: " + promedio)