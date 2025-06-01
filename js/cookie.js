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
        saludo.innerHTML = `
            <h1 style="color:#00ffe7; text-shadow:0 0 10px #00ffe7, 0 0 20px #0ff;">
                &#60;Bienvenido, <span style="color:#ff00c8;">${nombre}</span>!&#62;
            </h1>
            <p style="font-size:1.2rem; color:#0ff;">
                Sistema ShadowGuard activado para ti, <b>${nombre}</b>. ¡Prepárate para una experiencia cibernética!
            </p>
        `;
        saludo.style.display = 'block';
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
    listado.innerHTML = '';
    datos.forEach(function(nombre, idx) {
        const div = document.createElement('div');
        div.className = 'datos';
        div.textContent = `${idx + 1}. ${nombre}`;
        listado.appendChild(div);
    });
}

// Manejar el envío del formulario principal
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    if (nombre === '') return;
    datos.push(nombre);
    guardarCookie('datos', JSON.stringify(datos));
    mostrarDatos();
    mostrarSaludo();
    document.getElementById('formulario').reset();
});

// Manejar el envío desde la caja de testimonios
document.getElementById('enviar-testimonio').addEventListener('click', function() {
    const nombreTestimonio = document.getElementById('nombre-testimonio').value.trim();
    const mensajeTestimonio = document.getElementById('mensaje-testimonio').value.trim();
    if (nombreTestimonio === '' || mensajeTestimonio === '') return;
    datos.push(nombreTestimonio);
    guardarCookie('datos', JSON.stringify(datos));
    mostrarDatos();
    mostrarSaludo();
    // Aquí puedes agregar lógica para mostrar el testimonio si lo deseas
    document.getElementById('nombre-testimonio').value = '';
    document.getElementById('mensaje-testimonio').value = '';
});