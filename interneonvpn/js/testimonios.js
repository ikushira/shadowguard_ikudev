// Lista inicial de testimonios (por defecto)
const testimoniosDefault = [
  { nombre: "Ana", usuario: "ana", mensaje: "Excelente servicio, ahora navego segura en cualquier red.", fecha: "2024-01-01" },
  { nombre: "Luis", usuario: "luis", mensaje: "La app es fácil de usar y la conexión es muy rápida.", fecha: "2024-01-02" },
  { nombre: "María", usuario: "maria", mensaje: "Me ayudaron por WhatsApp en minutos, ¡gran soporte!", fecha: "2024-01-03" },
  { nombre: "Carlos", usuario: "carlos", mensaje: "Puedo acceder a contenido global sin problemas.", fecha: "2024-01-04" },
  { nombre: "Valeria", usuario: "valeria", mensaje: "La mejor VPN que he probado, la recomiendo totalmente.", fecha: "2024-01-05" },
  { nombre: "Jorge", usuario: "jorge", mensaje: "Ideal para proteger mi información en el trabajo remoto.", fecha: "2024-01-06" }
];

// Palabras prohibidas para filtrar testimonios groseros o negativos
const palabrasMalas = [
  'malo', 'horrible', 'basura', 'odio', 'asqueroso', 'mierda', 'puta', 'estafa', 'robo', 'imbecil', 'idiota', 'timo', 'fraude', 'malísimo', 'pésimo', 'grosero', 'insulto', 'caca', 'malisimo', 'pésima', 'asquerosa', 'puto', 'hdp', 'maldito', 'maldita', 'mierd@', 'mierd#'
];

// Utilidades para cookies
function setCookie(nombre, valor, dias) {
  const d = new Date();
  d.setTime(d.getTime() + (dias*24*60*60*1000));
  document.cookie = `${nombre}=${encodeURIComponent(valor)};expires=${d.toUTCString()};path=/`;
}
function getCookie(nombre) {
  const valor = `; ${document.cookie}`;
  const partes = valor.split(`; ${nombre}=`);
  if (partes.length === 2) return partes.pop().split(';').shift();
  return null;
}

// Cargar testimonios de localStorage o usar los de defecto
function cargarTestimonios() {
  let guardados = [];
  try {
    guardados = JSON.parse(localStorage.getItem('testimonios')) || [];
  } catch { guardados = []; }
  // Unir los de defecto solo si no están duplicados por usuario
  const usuarios = new Set(guardados.map(t => t.usuario));
  const combinados = [...guardados];
  testimoniosDefault.forEach(t => {
    if (!usuarios.has(t.usuario)) combinados.push(t);
  });
  return combinados;
}

// Guardar testimonios en localStorage
function guardarTestimonios(arr) {
  localStorage.setItem('testimonios', JSON.stringify(arr));
}

// Mostrar testimonios (el más reciente arriba)
function mostrarTestimonios() {
  const testimonios = cargarTestimonios();
  const contenedor = document.getElementById("lista-testimonios");
  contenedor.innerHTML = "";
  testimonios.slice().reverse().forEach(t => {
    let cardContainer = document.createElement("div");
    cardContainer.className = "card-container";
    let card = document.createElement("div");
    card.className = "card";
    let cardFront = document.createElement("div");
    cardFront.className = "card-front";
  cardFront.innerHTML = `<strong>${t.nombre}</strong><br><span class="card-date">${t.fecha || ""}</span>`;
    let cardBack = document.createElement("div");
    cardBack.className = "card-back";
    cardBack.innerHTML = `<span>${t.mensaje}</span>`;
    card.appendChild(cardFront);
    card.appendChild(cardBack);
    cardContainer.appendChild(card);
    contenedor.appendChild(cardContainer);
  });
}

// Filtrar testimonios groseros o negativos
function contienePalabraMala(texto) {
  const t = texto.toLowerCase();
  return palabrasMalas.some(palabra => t.includes(palabra));
}

// Mostrar testimonios al cargar
window.addEventListener("DOMContentLoaded", mostrarTestimonios);

// Mostrar/ocultar formulario flotante al hacer clic en "Agregar comentario"
document.getElementById('btn-agregar-comentario').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('form-container').style.display = 'block';
  document.getElementById('form-registro').style.display = 'block';
  document.getElementById('form-testimonio').style.display = 'none';
});

// Guardar datos de registro y mostrar testimonio si todo es válido
document.getElementById('form-registro').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const usuario = document.getElementById('usuario').value.trim().toLowerCase();
  const password = document.getElementById('password').value.trim();
  if (!nombre || !correo || !usuario || !password) {
    alert('Todos los campos son obligatorios.');
    return;
  }
  // Guardar usuario en cookie (para identificar en el formulario principal)
  setCookie('usuario', usuario, 30);
  setCookie('nombre', nombre, 30);
  document.getElementById('form-registro').style.display = 'none';
  document.getElementById('form-testimonio').style.display = 'block';
});

// Enviar testimonio desde el formulario flotante
document.getElementById('form-testimonio').addEventListener('submit', function(e) {
  e.preventDefault();
  const mensaje = document.getElementById('mensaje-testimonio').value.trim();
  const usuario = getCookie('usuario');
  const nombre = getCookie('nombre');
  if (!mensaje || !usuario || !nombre) {
    alert('Por favor, completa el registro y el testimonio.');
    return;
  }
  // Verificar si ya existe testimonio de este usuario
  const testimonios = cargarTestimonios();
  if (testimonios.some(t => t.usuario === usuario)) {
    alert('Solo puedes agregar un testimonio por usuario.');
    return;
  }
  if (contienePalabraMala(mensaje)) {
    alert('El testimonio contiene palabras groseras o negativas y no será publicado.');
    return;
  }
  testimonios.push({
    nombre: nombre,
    usuario: usuario,
    mensaje: mensaje,
    fecha: new Date().toLocaleDateString()
  });
  guardarTestimonios(testimonios);
  mostrarTestimonios();
  document.getElementById('mensaje-testimonio').value = '';
  document.getElementById('form-container').style.display = 'none';
  document.getElementById('form-registro').reset();
  document.getElementById('form-testimonio').reset();
  document.getElementById('form-registro').style.display = 'block';
  document.getElementById('form-testimonio').style.display = 'none';
  alert("¡Gracias por tu testimonio!");
});

// Mostrar el formulario principal solo si el usuario está logueado (cookie 'usuario' existe)
window.addEventListener('DOMContentLoaded', function() {
  const usuario = getCookie('usuario');
  const nombre = getCookie('nombre');
  const formTestimonioMain = document.getElementById('form-testimonio-main');
  if (usuario && nombre) {
    formTestimonioMain.style.display = 'block';
  } else {
    formTestimonioMain.style.display = 'none';
  }
  // Manejar el envío del testimonio principal
  formTestimonioMain.addEventListener('submit', function(e) {
    e.preventDefault();
    const mensaje = document.getElementById('mensaje-testimonio-main').value.trim();
    if (!mensaje) return;
    const testimonios = cargarTestimonios();
    if (testimonios.some(t => t.usuario === usuario)) {
      alert('Solo puedes agregar un testimonio por usuario.');
      return;
    }
    if (contienePalabraMala(mensaje)) {
      alert('El testimonio contiene palabras groseras o negativas y no será publicado.');
      return;
    }
    testimonios.push({
      nombre: nombre,
      usuario: usuario,
      mensaje: mensaje,
      fecha: new Date().toLocaleDateString()
    });
    guardarTestimonios(testimonios);
    document.getElementById('mensaje-testimonio-main').value = '';
    mostrarTestimonios();
    alert("¡Gracias por tu testimonio!");
  });
});