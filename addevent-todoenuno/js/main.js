// Ejercicio 1: Botón que cambia texto
const btn2 = document.getElementById("btnActivar");
btn2.ariaDisabled = true;
btn2.style.opacity = "0.5";

function manejarClicBoton() {
    const mensaje = document.getElementById("mensajeTexto");
    mensaje.textContent = "¡Botón clicado!";
}

// Ejercicio 2: Caja que cambia de colro al mouseover/mouseout
function cambiarColorAlEntrar() {
    this.style.backgroundColor = "orange";
}

function restaurarColorAlSalir() {
    this.style.backgroundColor = "lightblue"
}

// Ejercicio 3: Mostrar tecla presionada ene input
function mostrarTecla(event) {
    const texto = document.getElementById("teclaMostrada");
    texto.textContent = "Tecla: " + event.key;
}

// Ejercicio 4: Contador con botones sumar y restar
let contador = 0;

function sumar() {
    contador++;
    document.getElementById("contador").textContent = contador;
}

function restar() {
    contador--;
    document.getElementById("contador").textContent = contador;
}


// Ejercicio 5: Doble clic que cambia el color de fondo de la sección

function cambiarColorDobleClick() {
    const colores = ["#FFC107", "#03A9F4", "#4CAF50", "#E91E63", "#9C27B0"];
    const randomColor = colores [Math.floor(Math.random() * colores.length)];
    this.style.backgroundColor = randomColor;
}

// Ejercicio 6: Validar si el texto es un email válido

function validarEmail() {
    const input = document.getElementById("emailInput");
    const mensaje = document.getElementById("mensajeEmail");
    const valor = input.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexEmail.test(valor)) {
        mensaje.textContent = "Email válido ";
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "Email inválido";
        mensaje.style.color = "red";
    }
}

// Ejercicio 7: Temporizador simple que inicia al hacer clic
let segundos = 0;
let intervalId = null;

function iniciarTemporizador() {
    if (intervalId !== null) return; // evitar multiples intervalos
    intervalId = setInterval(() => {
        segundos++;
        document.getElementById("temporizador").textContent =`${segundos} segundos`;
    }, 1000);
}

// Ejercicio 8: Botón que desactiva otro botón y activa otro
function desactivarBoton() {
    const btnDesactivado = document.getElementById("btnDesactivado");
    const btnDesactivar = document.getElementById("btnDesactivar");

    btnDesactivado.disabled = true;
    btnDesactivado.style.opacity = "0.5";

    btnDesactivar.disabled = true;
    btnDesactivar.style.opacity = "0.5";

    btn2.disabled = false;
    btn2.style.opacity = "1";
}

function activarBoton() {
    const btnDesactivado = document.getElementById("btnDesactivado");
    const btnDesactivar = document.getElementById("btnDesactivar");

    btnDesactivado.disabled = false;
    btnDesactivado.style.opacity = "1";

    btnDesactivar.disabled = false;
    btnDesactivar.style.opacity = "1";

    btn2.disabled = true;
    btn2.style.opacity = "0.5";
}

// Ejercicio 9: Toggle mostrar/ocultar caja
function toggleMostrarCaja() {
    const caja = document.getElementById("toggleCaja");
    if (caja.style.display === "none" || caja.style.display === "") {
        caja.style.display = "block";
    } else {
        caja.style.display = "none";
    }
}

// Ejercicio 10: Cambiar imagen al pasar mouse (hover)
function cambiarImagenMouseOver() {
    this.src = "./imagenes/futuro.png";
}

function restaurarImagenMouseOut() {
    this.src = "./imagenes/futurodos.png";
}

// Ejercicio 11: Mostrar mensaje al hacer scroll
let timeoutScroll;
function detectarScroll() {
    const mensaje = document.getElementById("mensajeScroll");
    mensaje.style.display = "block";
    clearTimeout(timeoutScroll);
    timeoutScroll = setTimeout(() => {
        mensaje.style.display = "none";
    }, 1000);
}

// Ejercicio 12: Focus y blur en input
function focusInput() {
    this.style.borderColor = "#3498db";
    this.style.backgroundColor = "#eaf6ff";
}

function blurInput() {
    this.style.borderColor = "#ccc";
    this.style.backgroundColor = "white";
}

// Ejercicio 13: Mostrar selección del select
function mostrarSeleccion() {
    const valor = this.value || "ninguno";
    document.getElementById("colorSeleccionado").textContent = `Color seleccionado: ${valor}`;
}

// Ejercicio 14: Mostrar tamaño de ventana al cambiar tamaño
function mostrarTamañoVentana() {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    document.getElementById("tamañoVentana").textContent = `Ancho x Alto: ${ancho} x ${alto}`;
}

// Ejercicio 15: Validar formulario simple
function validarFormulario(event) {
    event.preventDefault(); // evitar envío para prueba
    const inputNombre = document.getElementById("nombreForm");
    const mensaje = document.getElementById("mensajeform");
    if (inputNombre.value.trim() === "") {
        mensaje.textContent = "Por favor, ingresa tu nombre.";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "Formulario enviado con éxito";
        mensaje.style.color = "green";
    }
}

// Asignación de eventos al cargar la página

document.addEventListener("DOMContentLoaded", () => {
    // Ejercicio 1
    document.getElementById("botonTexto").addEventListener("click", manejarClicBoton);

    // Ejercicio 2
    const cajaColores = document.getElementById("cajaColores");
    cajaColores.addEventListener("mouseover", cambiarColorAlEntrar);
    cajaColores.addEventListener("mouseout", restaurarColorAlSalir);

    // Ejercicio 3
    document.getElementById("inputTecla").addEventListener("keydown", mostrarTecla);

    // Ejercicio 4
    document.getElementById("btnSumar").addEventListener("click", sumar);
    document.getElementById("btnRestar").addEventListener("click", restar);

    // Ejercicio 5
    document.getElementById("seccionDobleClick").addEventListener("dblclick", cambiarColorDobleClick);

    // Ejercicio 6
    document.getElementById("emailInput").addEventListener("input", validarEmail);

    // Ejercicio 7
    document.getElementById("iniciarTemporizador").addEventListener("click", iniciarTemporizador);

    // Ejercicio 8
    document.getElementById("btnDesactivar").addEventListener("click", desactivarBoton);
    document.getElementById("btnActivar").addEventListener("click", activarBoton);

    // Ejercicio 9
    document.getElementById("btnToggleCaja").addEventListener("click", toggleMostrarCaja);

    // Ejercicio 10
    const imagenHover = document.getElementById("imagenHover");
    imagenHover.addEventListener("mouseover", cambiarImagenMouseOver);
    imagenHover.addEventListener("mouseout", restaurarImagenMouseOut);

    // Ejercicio 11
    window.addEventListener("scroll", detectarScroll);

    // Ejercicio 12
    const inputFocusBlur = document.getElementById("inputFocusBlur");
    inputFocusBlur.addEventListener("focus", focusInput);
    inputFocusBlur.addEventListener("blur", blurInput);

    // Ejercicio 13
    document.getElementById("selectColores").addEventListener("change", mostrarSeleccion);

    // Ejercicio 14
    window.addEventListener("resize", mostrarTamañoVentana);
    mostrarTamañoVentana();

    // Ejercicio 15 
    document.getElementById("formularioSimple").addEventListener("submit", validarFormulario);

});