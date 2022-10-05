Swal.fire('¡TODO SE APRENDE!')
let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")

alert(`Bienvenido ${nombre} ${apellido} vamos con una adivinanza`)

let condicion = true
let contador = 0

 do{
     let adivinanza = prompt("Tengo 4 mundiales ganados, pero no soy Alemania, soy de Europa, pero no soy Inglaterra ¿sabes quién soy?")
     if(adivinanza.toLowerCase() == "Italia" || adivinanza.toLowerCase() == "italia"){
         alert(`¡Felicitaciones ${nombre}, su respuesta es correcta!`)
         condicion = false
     }else{
         contador=contador + 1
         alert("Su respues no es correcta, vuelva a intentar. Intento n° " + contador)
     }
 }while((condicion) && (contador < 5))
