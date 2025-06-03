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

// Redirigir a contacto al hacer click en cualquier botón de elegir plan
document.querySelectorAll('.choose-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    window.location.href = "contacto.html";
  });
});

// Efecto interactivo de cursor con canvas (global para todas las páginas)
(function() {
  let mouseMoved = false;
  const pointer = {
    x: 0.5 * window.innerWidth,
    y: 0.5 * window.innerHeight,
  };
  const params = {
    pointsNumber: 40,
    widthFactor: 0.3,
    mouseThreshold: 0.6,
    spring: 0.4,
    friction: 0.5,
  };
  let points = [];

  function initPoints() {
    points = [];
    for (let i = 0; i < params.pointsNumber; i++) {
      points.push({
        x: pointer.x,
        y: pointer.y,
        vx: 0,
        vy: 0,
      });
    }
  }

  function updateMousePosition(e) {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    mouseMoved = true;
  }

  function setupCanvas() {
    const canvas = document.getElementById('cursor-canvas');
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initPoints();
  }

  function update() {
    const canvas = document.getElementById('cursor-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Primer punto sigue al mouse
    points[0].vx += (pointer.x - points[0].x) * params.spring;
    points[0].vy += (pointer.y - points[0].y) * params.spring;
    points[0].vx *= params.friction;
    points[0].vy *= params.friction;
    points[0].x += points[0].vx;
    points[0].y += points[0].vy;

    // Los demás puntos siguen al anterior
    for (let i = 1; i < points.length; i++) {
      points[i].vx += (points[i - 1].x - points[i].x) * params.spring;
      points[i].vy += (points[i - 1].y - points[i].y) * params.spring;
      points[i].vx *= params.friction;
      points[i].vy *= params.friction;
      points[i].x += points[i].vx;
      points[i].y += points[i].vy;
    }

    // Dibujar líneas de colores
    for (let i = 1; i < points.length; i++) {
      ctx.strokeStyle = `hsl(${(i * 360 / points.length)}, 100%, 60%)`;
      ctx.lineWidth = 2 + Math.sin(i + Date.now() * 0.002) * 1.5;
      ctx.beginPath();
      ctx.moveTo(points[i - 1].x, points[i - 1].y);
      ctx.lineTo(points[i].x, points[i].y);
      ctx.stroke();
    }

    requestAnimationFrame(update);
  }

  window.addEventListener('mousemove', updateMousePosition);
  window.addEventListener('resize', setupCanvas);

  document.addEventListener('DOMContentLoaded', () => {
    setupCanvas();
    update();
  });
})();

// Overlay de publicidad
document.addEventListener("DOMContentLoaded", function() {
  const cerrarBtn = document.getElementById("cerrarBtnPublicidad");
  const overlay = document.getElementById("overlay-publicidad");
  if (overlay && cerrarBtn) {
    // Bloquea el scroll mientras el overlay está visible
    document.body.style.overflow = "hidden";
    cerrarBtn.addEventListener("click", function() {
      overlay.style.display = "none";
      document.body.style.overflow = "auto";
    });
    setTimeout(function() {
      overlay.style.display = "none";
      document.body.style.overflow = "auto";
    }, 5000);
  }
});

