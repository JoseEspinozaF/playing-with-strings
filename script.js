const resultado = document.getElementById("result")
function opciones() {
    const mensaje = document.querySelector("#mensaje");
    const options = document.getElementById("message");
    if (options.value != 0 && mensaje.value == "") {
        Swal.fire({
            imageUrl: 'https://cdn-icons-png.flaticon.com/128/2892/2892041.png',
            title: 'Advertencia!',
            text: 'Debes Ingresar tu mensaje',
            imageAlt: 'A tall image'
        })
        setTimeout(showMessajeRecordtorio, 4000);

    } else {
        resultado.style.display = "block";
        if (options.value == 1) {
            mensaje.value = convertirMensajeMayuscula(mensaje.value)
            resultado.innerText = "El Mensaje se ha convertido a mayuscula";
        } else if (options.value == 2) {
            mensaje.value = convertirMensajeMinuscula(mensaje.value)
            resultado.textContent = "El Mensaje se ha convertido a Minuscula";
        } else if (options.value == 3) {
            resultado.textContent = "Cantidad de caracteres ingresados: " + calcularCantidadCaracteres(mensaje.value);
        } else if (options.value == 4) {
            mensaje.value = capitalizarMensaje(mensaje.value)
            resultado.innerText = "El Mensaje se ha capitalizado";
        }else if(options.value == 5){
            mensaje.value=convertirString(mensaje.value)
            resultado.innerText = "Mensaje convertido a String";

        }else{
            
        }
    }

}
function convertirMensajeMayuscula(mensaje) {
    return mensaje.toUpperCase()
}

function convertirMensajeMinuscula(mensaje) {
    return mensaje.toLowerCase()
}

function calcularCantidadCaracteres(mensaje) {
    return mensaje.length
}

function capitalizarMensaje(mensaje) {
    return mensaje[0].toUpperCase()+mensaje.substr(1).toLowerCase()
}

function convertirString(mensaje) {
    return mensaje.toString()
}

function showMessajeRecordtorio() {
    resultado.style.display = "block";
    resultado.textContent = "Recuerda ingresar tu mensaje";
}