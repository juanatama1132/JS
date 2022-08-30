let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")

alert(`Bienvenido ${nombre} ${apellido} te estabamos esperando!`)

let numero = prompt("Ingresa un numero que quieras calcular su tabla de multiplicar")
    let fin = prompt("Ingresa hasta que numero queres calcular") 

for (let i = 0; i <= fin ; i++){
    let multiplicacion = numero * i
    alert(`${numero} x ${i} = ${multiplicacion}`)
}

Alert(`${numero} ${fin}`)