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
    'images/imagen1.jpg',
    'images/imagen2.jpg',
    'images/imagen3.jpg',
    'images/imagen4.jpg',
    'images/imagen5.jpg',
    'images/imagen6.jpg',
    'images/imagen7.jpg',
    'images/imagen8.jpg'
  ];
  let indice = 0;
  let intervalo = null;
  let pausado = false;

  const img = document.getElementById('carrusel-img');
  const label = document.getElementById('carrusel-label');
  const btnPrev = document.getElementById('carrusel-prev');
  const btnNext = document.getElementById('carrusel-next');
  const btnPause = document.getElementById('carrusel-pause');

  function mostrarImagen(i) {
    indice = (i + imagenes.length) % imagenes.length;
    img.src = imagenes[indice];
    label.textContent = `Imagen ${indice + 1} de ${imagenes.length}`;
  }

  function siguiente() {
    mostrarImagen(indice + 1);
  }

  function anterior() {
    mostrarImagen(indice - 1);
  }

  function autoPlay() {
    if (intervalo) clearInterval(intervalo);
    intervalo = setInterval(() => {
      if (!pausado) siguiente();
    }, 3500);
  }

  btnPrev.addEventListener('click', () => {
    anterior();
    pausado = true;
    btnPause.textContent = '▶️';
  });

  btnNext.addEventListener('click', () => {
    siguiente();
    pausado = true;
    btnPause.textContent = '▶️';
  });

  btnPause.addEventListener('click', () => {
    pausado = !pausado;
    btnPause.textContent = pausado ? '▶️' : '⏸️';
    if (!pausado) autoPlay();
  });

  mostrarImagen(indice);
  autoPlay();
});
