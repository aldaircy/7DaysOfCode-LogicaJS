let numeroAdivinar = Math.floor(Math.random() * 11)
let intentos = 3

for (let i = 0; i < intentos; i++) {
    let intentoUsuario = parseInt(prompt("Ingresa un número entre 0 y 10"))

    if (intentoUsuario === numeroAdivinar) {
        alert("¡Felicidades! Adivinaste el número.")
        break
    } else {
        if (i === (intentos - 1)){
            alert(`No adivinaste. El número era ${numeroAdivinar}`)
        } else {
            alert(`Incorrecto. Te quedan ${intentos - (i + 1)} intentos.`)
        }
    }
}

