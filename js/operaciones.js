let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")

alert(`Bienvenido ${nombre} ${apellido} a nuestro test de matematicas`)

alert("el test consiste en 3 preguntas y tendras 2 chances por cada una")

let condicion = true
let contador = 0
let puntaje = 0

do{
     let pregunta1 = prompt("cuanto es el valor del siguiente calculo: 2 + 2 = __")
     if(pregunta1 == 4){
         alert("Su respuesta es correcta, vamos con la siguiente")
         puntaje = puntaje + 1
         condicion = false
     }else{
         contador = contador + 1
         alert("Su respues no es correcta, vuelva a intentar. Intento n° " + contador)
        
     }
 }while((condicion) && (contador < 2))

 
 let condicion1 = true
 let contador1 = 0
 
 
  do{
     let pregunta1 = prompt("cuanto es el valor del siguiente calculo: 2 + 7 = __")
     if(pregunta1 == 9){
         alert("Su respuesta es correcta, vamos con la siguiente")
         puntaje = puntaje + 1
         condicion1 = false
     }else{
         contador1 = contador1 + 1
         alert("Su respues no es correcta, vuelva a intentar. Intento n° " + contador)
        
     }
 }while((condicion1) && (contador1 < 2))
 
let condicion2 = true
let contador2 = 0


 do{
    let pregunta2 = prompt("cuanto es el valor del siguiente calculo: 2 + 3 = __")
    if(pregunta2 == 5){
        alert("Su respuesta es correcta, vamos con la siguiente")
        puntaje = puntaje + 1
        condicion2 = false
    }else{
        contador2 = contador2 + 1
        alert("Su respues no es correcta, vuelva a intentar. Intento n° " + contador)
       
    }
}while((condicion2) && (contador2 < 2))

switch(puntaje){
    case 3:
    alert(`¡Felicitaciones ${nombre}! tu test fue perfecto respondiste ${puntaje} / 3`)
    break
    case 2:
    alert(`¡Felicitaciones ${nombre}! respondiste ${puntaje} / 3 `)
    break
    case "1": 
    alert(`¡que bien ${nombre}! respondiste ${puntaje} / 3, no te vendria mal repasar algo de matematicas `)
    break
    default:
        alert(`Lo lamento mucho ${nombre} te recomendaria volver a la primaria`)
    break
}