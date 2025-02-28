const area = prompt("Para seguir al área que desea escriba el nombre: 'Front-End' o 'Back-End'")
let lenguaje = ""

if (area === 'Front-End') {
    alert('Ingresó al área de Front-End')
    lenguaje = prompt("¿Quieres aprender 'Vue' o 'React'?")
    if (lenguaje === 'Vue'){
        alert('Está aprendiendo Vue')
    } else if (lenguaje === 'React') {
        alert('Está aprendiendo React')
    } else {
        alert ('No está aprendiendo ningún framework válido')
    }
} else if (area === 'Back-End') {
    alert('Ingresó al área de Back-End')
    lenguaje = prompt("¿Quieres aprender 'C#' o 'Java'?")
    if (lenguaje === 'C#'){
        alert('Está aprendiendo C#')
    } else if (lenguaje === 'Java') {
        alert('Está aprendiendo Java')
    } else {
        alert ('No está aprendiendo ningún lenguaje válido')
    }
} else {
    alert ('Ingrese una área válida')
}

const especialidad = prompt('Para especializarte en el área escogida escriba 0, o si quieres convertirte en Fullstack escriba 1')

if (especialidad == 0) {
    alert(`Sigue especializandote en ${lenguaje} para que domines el área del ${area}`)
} else if (especialidad == 1) {
    alert(`Debes aprender otros lenguajes y/o frameworks ademas de ${lenguaje} para convertirte en Fullstack`)
} else {
    alert ('Ingrese una opción válida')
}

let mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.")

while (mensaje === "ok") {
    let nuevaTecnología = prompt("¿Cuál?")
    alert(`¡${nuevaTecnología} es realmente una tecnología muy interesante!`)
    mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.")
}