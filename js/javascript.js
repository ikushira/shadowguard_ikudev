// ...código existente...

// 1. Variables y funciones
let testimonios = [
  { nombre: "Ana", mensaje: "Excelente servicio y seguridad." },
  { nombre: "Luis", mensaje: "La app es fácil de usar y rápida." }
];

function mostrarTestimonios() {
  const contenedor = document.getElementById("lista-testimonios");
  if (!contenedor) return;
  contenedor.innerHTML = "";
  for (let t of testimonios) {
    let div = document.createElement("div");
    div.className = "tarjeta-contacto";
    div.innerHTML = `<strong>${t.nombre}:</strong> <span>${t.mensaje}</span>`;
    contenedor.appendChild(div);
  }
}

// 2. Estructuras de control y bucles ya usados arriba

// 3. Manipulación del DOM
document.addEventListener("DOMContentLoaded", function() {
  mostrarTestimonios();
});

// 4. Manejo de eventos
document.querySelectorAll(".btn-descargar").forEach(btn => {
  btn.addEventListener("click", function(e) {
    alert("¡Gracias por descargar la app ShadowGuard!");
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Solo números en teléfono
  document.getElementById('telefono').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, '');
  });

  // Validación y popup
  document.getElementById('contacto-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const popup = document.getElementById('popup-mensaje');
    const popupTexto = document.getElementById('popup-texto');

    if (nombre && correo && telefono && mensaje) {
      popupTexto.textContent = "Mensaje Enviado";
      popup.classList.remove('popup-error');
      popup.classList.add('popup-success');
      this.reset();
    } else {
      popupTexto.textContent = "Datos Incompletos!";
      popup.classList.remove('popup-success');
      popup.classList.add('popup-error');
    }
    popup.style.display = "flex";
    setTimeout(() => { popup.style.display = "none"; }, 2200);
  });

  // Carrusel de imágenes
  const imagenes = [
    { src: "images/imagen1.jpg", label: "imagen1" },
    { src: "images/imagen2.jpg", label: "imagen2" },
    { src: "images/imagen3.jpg", label: "imagen3" },
    { src: "images/imagen4.jpg", label: "imagen4" },
    { src: "images/imagen5.jpg", label: "imagen5" },
    { src: "images/imagen6.jpg", label: "imagen6" },
    { src: "images/imagen7.jpg", label: "imagen7" },
    { src: "images/imagen8.jpg", label: "imagen8" },
  ];
  let indice = 0;
  let intervalo = null;
  let pausado = false;

  function mostrarImagen(i) {
    const img = document.getElementById("carrusel-img");
    const label = document.getElementById("carrusel-label");
    img.src = imagenes[i].src;
    label.textContent = imagenes[i].label;
  }

  function siguienteImagen() {
    indice = (indice + 1) % imagenes.length;
    mostrarImagen(indice);
  }

  function anteriorImagen() {
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(indice);
  }

  function pausarCarrusel() {
    pausado = !pausado;
    if (pausado) {
      clearInterval(intervalo);
    } else {
      iniciarCarrusel();
    }
  }

  function iniciarCarrusel() {
    intervalo = setInterval(() => {
      if (!pausado) siguienteImagen();
    }, 4000);
  }

  document.getElementById("carrusel-prev").onclick = anteriorImagen;
  document.getElementById("carrusel-next").onclick = siguienteImagen;
  document.getElementById("carrusel-pause").onclick = pausarCarrusel;

  mostrarImagen(indice);
  iniciarCarrusel();
});
