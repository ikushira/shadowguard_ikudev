// Función para guardar una cookie con duración de 30 días
function guardarCookie(nombre, valor) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 días
    const expires = "expires=" + fecha.toUTCString();
    document.cookie = `${nombre}=${valor}; ${expires}; path=/`;
}

// Función para obtener el valor de una cookie por nombre
function obtenerCookie(nombre) {
    const nombreEQ = nombre + "=";
    const ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nombreEQ) == 0) return c.substring(nombreEQ.length,c.length);
    }
    return null;
}

// Array para almacenar los nombres
let datos = [];

// Mostrar saludo cibernético si hay nombre guardado
function mostrarSaludo() {
    const datosCookie = obtenerCookie('datos');
    let nombre = null;
    if (datosCookie) {
        try {
            const arr = JSON.parse(datosCookie);
            if (arr.length > 0) nombre = arr[arr.length - 1];
        } catch (e) {}
    }
    if (nombre) {
        const saludo = document.getElementById('saludo-cibernetico');
        if (saludo) {
            saludo.innerHTML = `
                <h1 class="saludo-title">&#60;Bienvenido, <span class="saludo-name">${nombre}</span>!&#62;</h1>
                <p class="saludo-text">Sistema InterNeon VPN activado para ti, <b>${nombre}</b>. ¡Prepárate para una experiencia cibernética!</p>
            `;
            saludo.style.display = 'block';
        }
    }
}

// Cargar datos guardados en cookie (si existen)
window.onload = function() {
    const datosCookie = obtenerCookie('datos');
    if (datosCookie) {
        try {
            datos = JSON.parse(datosCookie);
        } catch (e) {
            datos = [];
        }
    }
    mostrarDatos();
    mostrarSaludo();
}

// Función para mostrar los datos guardados
function mostrarDatos() {
    const listado = document.getElementById('listadatos');
    if (!listado) return;
    listado.innerHTML = '';
    datos.forEach(function(nombre, idx) {
        const div = document.createElement('div');
        div.className = 'datos';
        div.textContent = `${idx + 1}. ${nombre}`;
        listado.appendChild(div);
    });
}
// Manejar el envío del formulario principal (si existe)
const formEl = document.getElementById('formulario');
if (formEl) {
    formEl.addEventListener('submit', function(event) {
        event.preventDefault();
        const nombreEl = document.getElementById('nombre');
        const nombre = nombreEl ? nombreEl.value.trim() : '';
        if (nombre === '') return;
        datos.push(nombre);
        guardarCookie('datos', JSON.stringify(datos));
        mostrarDatos();
        mostrarSaludo();
        formEl.reset();
    });
}

// Manejar el envío desde la caja de testimonios (si existe)
const enviarBtn = document.getElementById('enviar-testimonio');
if (enviarBtn) {
    enviarBtn.addEventListener('click', function() {
        const nombreTestimonioEl = document.getElementById('nombre-testimonio');
        const mensajeTestimonioEl = document.getElementById('mensaje-testimonio');
        const nombreTestimonio = nombreTestimonioEl ? nombreTestimonioEl.value.trim() : '';
        const mensajeTestimonio = mensajeTestimonioEl ? mensajeTestimonioEl.value.trim() : '';
        if (nombreTestimonio === '' || mensajeTestimonio === '') return;
        datos.push(nombreTestimonio);
        guardarCookie('datos', JSON.stringify(datos));
        mostrarDatos();
        mostrarSaludo();
        if (nombreTestimonioEl) nombreTestimonioEl.value = '';
        if (mensajeTestimonioEl) mensajeTestimonioEl.value = '';
    });
}