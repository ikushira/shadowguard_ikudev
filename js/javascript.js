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
  alert("¡Gracias por descargar la app InterNeon VPN!");
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Solo números en teléfono
  const telefonoEl = document.getElementById('telefono');
  if (telefonoEl) {
    telefonoEl.addEventListener('input', function (e) {
      this.value = this.value.replace(/[^0-9]/g, '');
    });
  }

  // Validación y popup
  const contactoForm = document.getElementById('contacto-form');
  if (contactoForm) {
    contactoForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const nombreEl = document.getElementById('nombre');
      const correoEl = document.getElementById('correo');
      const telefonoEl2 = document.getElementById('telefono');
      const mensajeEl = document.getElementById('mensaje');
      const popup = document.getElementById('popup-mensaje');
      const popupTexto = document.getElementById('popup-texto');

      const nombre = nombreEl ? nombreEl.value.trim() : '';
      const correo = correoEl ? correoEl.value.trim() : '';
      const telefono = telefonoEl2 ? telefonoEl2.value.trim() : '';
      const mensaje = mensajeEl ? mensajeEl.value.trim() : '';

      if (popup && popupTexto) {
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
      }
    });
  }

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

  // Only initialize carousel if required elements exist
  const hasCarousel = img && label && btnPrev && btnNext && btnPause;

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

  if (hasCarousel) {
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
  }
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
    // adaptive number of points for performance
    pointsNumber: window.innerWidth < 800 ? 28 : 40,
    widthFactor: 0.3,
    mouseThreshold: 0.6,
    spring: 0.4,
    friction: 0.5,
    idleTimeout: 900 // ms to consider idle and reduce updates
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

  // throttle mousemove to 60fps max and update pointer
  let lastMouseTime = 0;
  function updateMousePosition(e) {
    const now = Date.now();
    if (now - lastMouseTime < 16) return; // ~60fps
    lastMouseTime = now;
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    mouseMoved = true;
    lastActive = now;
  }

  function setupCanvas() {
    const canvas = document.getElementById('cursor-canvas');
    if (!canvas) return;
    // handle devicePixelRatio for sharp rendering
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initPoints();
  }

  let lastActive = Date.now();
  function update() {
    const canvas = document.getElementById('cursor-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
  // clear using CSS pixel size (ctx is transformed to devicePixelRatio)
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

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

    // if idle, reduce CPU by skipping frames occasionally
    const now = Date.now();
    if (now - lastActive > params.idleTimeout) {
      // skip next frame to reduce work (but keep occasional updates)
      setTimeout(() => { requestAnimationFrame(update); }, 120);
    } else {
      requestAnimationFrame(update);
    }
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

