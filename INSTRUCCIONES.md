# 📋 GUÍA COMPLETA DE INSTRUCCIONES - INTERNEON VPN

**Versión:** 1.0  
**Fecha:** 19 de febrero de 2026  
**Autor:** Ikushira Dev

---

## 📑 TABLA DE CONTENIDOS

1. [Introducción](#introducción)
2. [⭐ GUÍA RÁPIDA: Cambiar Verde Neón a Cyan Neón](#-guía-rápida-cambiar-verde-neón-a-cyan-neón)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Cambios Visuales (Colores, Textos, Nombres)](#cambios-visuales)
5. [Modificación de Imágenes](#modificación-de-imágenes)
6. [Actualización del APK](#actualización-del-apk)
7. [Cambios en Archivos HTML](#cambios-en-archivos-html)
8. [Cambios en Archivos JavaScript](#cambios-en-archivos-javascript)
9. [Actualización de Archivos SEO (robots.txt y sitemap.xml)](#actualización-de-archivos-seo)
10. [Optimización en Google](#optimización-en-google)
11. [Publicación en Hosting](#publicación-en-hosting)

---

## ⭐ GUÍA RÁPIDA: Cambiar Verde Neón a Cyan Neón

### ¿Qué vas a cambiar?
Cambiarás el color verde neón **#39ff14** (verde brillante) por **#00ffe7** (cyan/turquesa brillante) en todo el proyecto. El fondo sigue siendo negro y el efecto neón (brillo) se mantiene igual.

### Colores a cambiar:
- **Color antiguo:** #39ff14 (Verde Neón)
- **Color nuevo:** #00ffe7 (Cyan Neón)
- **Variantes del antiguo:** #39ff1444, #39ff1460, #39ff1455 (mismos colores con transparencia)
- **Variantes del nuevo:** #00ffe744, #00ffe760, #00ffe755 (mismo cyan con transparencia)

### Diferencia Visual:
| Antes | Después |
|-------|---------|
| Verde brillante (limón) | Cyan/Turquesa brillante (agua) |
| Color RGB(57, 255, 20) | Color RGB(0, 255, 231) |
| Más "verdoso" | Más "azulado" |

### PASOS RÁPIDOS (5 minutos):

**1. Abre el archivo:** `interneonvpn/style.css`

**2. Usa "Buscar y Reemplazar" (Ctrl+H):**
   - **Buscar:** `#39ff14`
   - **Reemplazar:** `#00ffe7`
   - **Haz click en "Reemplazar Todo"**

**3. Luego reemplaza las variantes con transparencia:**
   - **Buscar:** `#39ff1444`
   - **Reemplazar:** `#00ffe744`
   - **Click "Reemplazar Todo"**

**4. Variante siguiente:**
   - **Buscar:** `#39ff1460`
   - **Reemplazar:** `#00ffe760`
   - **Click "Reemplazar Todo"**

**5. Última variante:**
   - **Buscar:** `#39ff1455`
   - **Reemplazar:** `#00ffe755`
   - **Click "Reemplazar Todo"**

**6. Guarda el archivo (Ctrl+S)**

¡Listo! El cambio se aplica automáticamente a toda la página.

### ¿Qué cambió exactamente?

| Elemento | Ubicación en el código | Cambio |
|----------|--------|--------|
| Menú de navegación | `.nav-links a` | Color del texto |
| Efecto al pasar el mouse | `.nav-links a:hover` | Brillo/Sombra |
| Bordes brillantes | `.nav-links a.active::before` | Borde y sombra |
| Formulario (etiquetas) | `.formulario-container label` | Color de texto |
| Formulario (campos) | `.formulario-container input` | Borde y texto |
| Botón "Enviar" | `.btn-enviar` | Color y efecto |
| Popup de mensajes | `.popup-mensaje` | Brillo |
| Tarjetas (Android, Contacto) | `.card-front, .card-back` | Color de texto |
| Botón "Neon" | `.btn-neon` | Color |

### Si algo no cambia:

Si después de hacer esto algunos elementos siguen verdes, es porque hay más colores verde para cambiar que no sean #39ff14. Busca:
- `#0f0` (abreviado, significa #00ff00)
- `#0ff` (abreviado, significa #00ffff) ← Este YA es cyan, déjalo

---

## 📖 INTRODUCCIÓN

Esta guía está diseñada para que **cualquier persona con poco conocimiento de programación** pueda realizar cambios en el sitio web de InterNeon VPN. Cada instrucción incluye:

- **Nombre del archivo** a modificar
- **Número de línea exacto** donde hacer el cambio
- **Texto anterior** (lo que hay ahora)
- **Texto nuevo** (lo que debes reemplazar)
- **Explicación clara** de qué cambias y por qué

### ℹ️ Notas Importantes:
- Siempre haz una copia de seguridad antes de editar archivos
- Los números de línea pueden variar ligeramente si has hecho cambios previos
- Abre los archivos con un editor de texto como **Notepad++**, **VS Code** o similar
- Busca (Ctrl+F) el texto que necesites cambiar si no encuentras el número de línea exacto

---

## 📁 ESTRUCTURA DEL PROYECTO

```
📦 shadowguard_ikudev/
├── 📄 index.html (Página principal)
├── 📄 robots.txt (Para buscadores)
├── 📄 sitemap.xml (Mapa del sitio)
├── 📁 interneonvpn/
│   ├── 📄 android.html
│   ├── 📄 contacto.html
│   ├── 📄 planes.html
│   ├── 📄 privacidad.html
│   ├── 📄 seguridad.html
│   ├── 📄 soporte.html
│   ├── 📄 testimonios.html
│   ├── 📄 style.css (Estilos visuales)
│   ├── 📁 images/ (Fotos y logos)
│   │   ├── logo.png
│   │   ├── publicidad.png
│   │   ├── imagen1.jpg hasta imagen8.jpg (Carrusel)
│   └── 📁 js/ (JavaScript)
│       ├── javascript.js
│       ├── cookie.js
│       └── testimonios.js
└── 📁 downloads/apk/
    └── interneon-vpn.apk (Archivo de descarga)
```

---

# 🎨 CAMBIOS VISUALES

## 🌟 CAMBIO ESPECIAL: Cambiar tema Verde Neón (#39ff14) a Cyan Neón (#00ffe7)

Esta es una guía detallada para cambiar TODO el tema de colores verde neón a cyan neón. 

### ¿Por qué este cambio?
El color **#00ffe7** (Cyan) mantiene:
- ✅ El mismo efecto neón (brillo)
- ✅ El mismo fondo negro
- ✅ La misma estructura del código
- ✅ Solo cambia el TONO de color

### Cambios que ocurrirán:
- Menú de navegación: Verde → Cyan
- Texto en formularios: Verde → Cyan
- Bordes brillantes: Verde → Cyan
- Efectos de sombra (glow): Verde → Cyan
- Tarjetas de contenido: Verde → Cyan

### ARCHIVO PRINCIPAL A EDITAR: `interneonvpn/style.css`

**Total de cambios:** Aproximadamente 40-50 líneas en style.css

### Cambios específicos línea por línea:

#### Línea 11 - Enlaces de navegación:
```css
// ANTES:
a, .nav-links a {
  color: #39ff14 !important;
  text-decoration: none;
}

// DESPUÉS:
a, .nav-links a {
  color: #00ffe7 !important;
  text-decoration: none;
}
```

#### Línea 63-64 - Color del link en navbar:
```css
// ANTES:
.nav-links a {
  color: #39ff14;
  text-shadow: 0 0 8px #39ff14, 0 0 2px #222;

// DESPUÉS:
.nav-links a {
  color: #00ffe7;
  text-shadow: 0 0 8px #00ffe7, 0 0 2px #222;
```

#### Línea 83-84 - Efecto hover del menú:
```css
// ANTES:
.nav-links a.active,
.nav-links a:hover {
  color: #fff !important;
  background: #000;
  box-shadow: 0 0 18px 6px #39ff14, 0 0 2px 1px #39ff14 inset;
  text-shadow: 0 0 2px #39ff14, 0 0 8px #39ff14, 0 0 16px #39ff14;

// DESPUÉS:
.nav-links a.active,
.nav-links a:hover {
  color: #fff !important;
  background: #000;
  box-shadow: 0 0 18px 6px #00ffe7, 0 0 2px 1px #00ffe7 inset;
  text-shadow: 0 0 2px #00ffe7, 0 0 8px #00ffe7, 0 0 16px #00ffe7;
```

#### Línea 93-94 - Borde brillante del menú:
```css
// ANTES:
.nav-links a.active::before,
.nav-links a:hover::before {
  border: 2px solid #39ff14;
  box-shadow: 0 0 8px #39ff14, 0 0 18px #39ff14, 0 0 32px #39ff1444;

// DESPUÉS:
.nav-links a.active::before,
.nav-links a:hover::before {
  border: 2px solid #00ffe7;
  box-shadow: 0 0 8px #00ffe7, 0 0 18px #00ffe7, 0 0 32px #00ffe744;
```

#### Línea 102 - Color del navbar link:
```css
// ANTES:
.navbar .nav-links li a {
  color: #39ff14;

// DESPUÉS:
.navbar .nav-links li a {
  color: #00ffe7;
```

#### Línea 120-121 - Gradiente del navbar:
```css
// ANTES:
background: radial-gradient(circle, #39ff14 60%, transparent 100%);
box-shadow: 0 0 16px 6px #39ff14, 0 0 32px 12px #39ff1455;

// DESPUÉS:
background: radial-gradient(circle, #00ffe7 60%, transparent 100%);
box-shadow: 0 0 16px 6px #00ffe7, 0 0 32px 12px #00ffe755;
```

#### Línea 134-135 - Animación neon-glow:
```css
// ANTES:
@keyframes neon-glow {
  0% { box-shadow: 0 0 16px 6px #39ff14, 0 0 32px 12px #39ff1455; }
  100% { box-shadow: 0 0 32px 12px #39ff14, 0 0 48px 24px #39ff1444; }
}

// DESPUÉS:
@keyframes neon-glow {
  0% { box-shadow: 0 0 16px 6px #00ffe7, 0 0 32px 12px #00ffe755; }
  100% { box-shadow: 0 0 32px 12px #00ffe7, 0 0 48px 24px #00ffe744; }
}
```

#### Línea 163 - Color del título neon:
```css
// ANTES:
.titulo-neon {
  color: #39ff14 !important;

// DESPUÉS:
.titulo-neon {
  color: #00ffe7 !important;
```

#### Línea 176-177 - Botón enviar (color y sombra):
```css
// ANTES:
.btn-enviar {
  background: #000;
  color: #39ff14;
  border: 1px solid #39ff14;
  text-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14;
}
.btn-enviar:hover {
  background: #39ff14;

// DESPUÉS:
.btn-enviar {
  background: #000;
  color: #00ffe7;
  border: 1px solid #00ffe7;
  text-shadow: 0 0 5px #00ffe7, 0 0 10px #00ffe7;
}
.btn-enviar:hover {
  background: #00ffe7;
```

#### Línea 315 - Card front/back color:
```css
// ANTES:
.card-front, .card-back {
  background: #0f1113 !important;
  color: #39ff14 !important;
  text-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 40px #0f0;

// DESPUÉS:
.card-front, .card-back {
  background: #0f1113 !important;
  color: #00ffe7 !important;
  text-shadow: 0 0 5px #00ffe7, 0 0 10px #00ffe7, 0 0 20px #00ffe7, 0 0 40px #00ffff;
```

#### Línea 325 - Card h3 color:
```css
// ANTES:
.card-front h3, .card-front strong {
  color: #39ff14 !important;
  text-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 40px #0f0;

// DESPUÉS:
.card-front h3, .card-front strong {
  color: #00ffe7 !important;
  text-shadow: 0 0 5px #00ffe7, 0 0 10px #00ffe7, 0 0 20px #00ffe7, 0 0 40px #00ffff;
```

#### Línea 372 - Formulario label color:
```css
// ANTES:
.formulario-container label {
  color: #39ff14;
  text-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14;

// DESPUÉS:
.formulario-container label {
  color: #00ffe7;
  text-shadow: 0 0 5px #00ffe7, 0 0 10px #00ffe7;
```

#### Línea 377-382 - Formulario input:
```css
// ANTES:
.formulario-container input,
.formulario-container textarea {
  border: 1px solid #39ff14;
  background: #000;
  color: #39ff14;
  text-shadow: 0 0 5px #39ff14;
}
.formulario-container input:focus,
.formulario-container textarea:focus {
  border-color: #39ff14;
  box-shadow: 0 0 8px #39ff14;

// DESPUÉS:
.formulario-container input,
.formulario-container textarea {
  border: 1px solid #00ffe7;
  background: #000;
  color: #00ffe7;
  text-shadow: 0 0 5px #00ffe7;
}
.formulario-container input:focus,
.formulario-container textarea:focus {
  border-color: #00ffe7;
  box-shadow: 0 0 8px #00ffe7;
```

#### Línea 395 - Formulario titulo:
```css
// ANTES:
.formulario-titulo {
  color: #39ff14;
  text-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 40px #0f0;

// DESPUÉS:
.formulario-titulo {
  color: #00ffe7;
  text-shadow: 0 0 5px #00ffe7, 0 0 10px #00ffe7, 0 0 20px #00ffe7, 0 0 40px #00ffff;
```

#### Línea 418-419 - Input neon:
```css
// ANTES:
.input-neon {
  border: 2px solid #39ff14;
  color: #39ff14;
  box-shadow: 0 0 6px #39ff14 inset;

// DESPUÉS:
.input-neon {
  border: 2px solid #00ffe7;
  color: #00ffe7;
  box-shadow: 0 0 6px #00ffe7 inset;
```

#### Línea 427 - Botón neon:
```css
// ANTES:
.btn-neon {
  color: #39ff14;
  border: 2px solid #39ff14;
  box-shadow: 0 0 8px #39ff14, 0 0 2px #000;
  text-shadow: 0 0 8px #39ff14;
}
.btn-neon:hover {
  background: #39ff14;

// DESPUÉS:
.btn-neon {
  color: #00ffe7;
  border: 2px solid #00ffe7;
  box-shadow: 0 0 8px #00ffe7, 0 0 2px #000;
  text-shadow: 0 0 8px #00ffe7;
}
.btn-neon:hover {
  background: #00ffe7;
```

#### Línea 432-438 - Popup mensaje:
```css
// ANTES:
.popup-mensaje {
  background: #000;
  color: #39ff14;
  text-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 40px #0f0;
  border: 2px solid #39ff14;
}
.popup-success { border-color: #39ff14; }

// DESPUÉS:
.popup-mensaje {
  background: #000;
  color: #00ffe7;
  text-shadow: 0 0 5px #00ffe7, 0 0 10px #00ffe7, 0 0 20px #00ffe7, 0 0 40px #00ffff;
  border: 2px solid #00ffe7;
}
.popup-success { border-color: #00ffe7; }
```

#### Línea 458 - Carrusel label:
```css
// ANTES:
.carrusel-label {
  color: #39ff14;

// DESPUÉS:
.carrusel-label {
  color: #00ffe7;
```

#### Línea 475 - Plan basic:
```css
// ANTES:
.plan-basic h2, .plan-basic .plan-precio, .plan-basic .plan-lista {
  color: #39ff14;
  text-shadow: 0 0 8px #39ff14;
}
.plan-basic .choose-btn { color: #39ff14; border-color: #39ff14;}

// DESPUÉS:
.plan-basic h2, .plan-basic .plan-precio, .plan-basic .plan-lista {
  color: #00ffe7;
  text-shadow: 0 0 8px #00ffe7;
}
.plan-basic .choose-btn { color: #00ffe7; border-color: #00ffe7;}
```

#### Línea 529-530 - Estilos globales:
```css
// ANTES:
body, h1, h2, h3, h4, h5, h6, p, a, li, span, label, input, button, .titulo-neon, .subtitulo, .card-front, .card-back, .tarjeta-testimonio, .tarjeta-contacto, .seccion-destacada {
  color: #39ff14 !important;
  text-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 40px #0f0;
}
input, textarea, select, button, .btn-descargar, .btn-wsp {
  background: #000 !important;
  border: 1px solid #39ff14;
  color: #39ff14 !important;
  text-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14;
}

// DESPUÉS:
body, h1, h2, h3, h4, h5, h6, p, a, li, span, label, input, button, .titulo-neon, .subtitulo, .card-front, .card-back, .tarjeta-testimonio, .tarjeta-contacto, .seccion-destacada {
  color: #00ffe7 !important;
  text-shadow: 0 0 5px #00ffe7, 0 0 10px #00ffe7, 0 0 20px #00ffe7, 0 0 40px #00ffff;
}
input, textarea, select, button, .btn-descargar, .btn-wsp {
  background: #000 !important;
  border: 1px solid #00ffe7;
  color: #00ffe7 !important;
  text-shadow: 0 0 5px #00ffe7, 0 0 10px #00ffe7;
}
```

### ⚠️ COLORES ESPECIALES A NO CAMBIAR:
- `#0ff` o `#00ffff` = Cyan (esto es lo que queremos, DÉJALO)
- `#0f0` o `#00ff00` = Verde puro (ESTO SÍ NECESITA CAMBIAR a `#00ffff`)

---

## 1. CAMBIAR EL COLOR DE FONDO DE TODA LA PÁGINA

**Archivo:** `interneonvpn/style.css`  
**Línea:** 3

### Cambio Actual:
```css
body {
  background: #000 !important;
  color: #e0e0e0;
  font-family: 'Orbitron', Arial, sans-serif;
}
```

### Para cambiar el color de fondo:
1. Busca `background: #000` en la línea 3
2. Reemplaza `#000` con el color que desees:
   - `#ffffff` = Blanco
   - `#1a1a2e` = Gris oscuro azulado
   - `#0a0e27` = Azul muy oscuro
   - `#1b1b2f` = Gris oscuro
   - Puedes usar cualquier código hexadecimal [en este sitio](https://htmlcolorcodes.com)

### Ejemplo:
```css
body {
  background: #1a1a2e !important;
  color: #e0e0e0;
  font-family: 'Orbitron', Arial, sans-serif;
}
```

---

## 2. CAMBIAR COLOR DE LOS TEXTOS PRINCIPALES

**Archivo:** `interneonvpn/style.css`  
**Línea:** 7

### Cambio Actual:
```css
h1, h2, h3, h4, h5, h6 {
  color: #00ffe7;
}
```

### Para cambiar (Color de títulos y encabezados):
1. Busca `color: #00ffe7` en la línea 7
2. Reemplaza con tu color preferido:
   - `#ff6b6b` = Rojo vibrante
   - `#4ecdc4` = Verde agua
   - `#ffd93d` = Amarillo brillante
   - `#9b59b6` = Púrpura

### Ejemplo:
```css
h1, h2, h3, h4, h5, h6 {
  color: #ff6b6b;
}
```

---

## 3. CAMBIAR COLOR DE LOS ENLACES (MENÚ DE NAVEGACIÓN)

**Archivo:** `interneonvpn/style.css`  
**Línea:** 10

### Cambio Actual:
```css
a, .nav-links a {
  color: #39ff14 !important;
  text-decoration: none;
}
```

### Para cambiar:
1. Busca `color: #39ff14` en la línea 10
2. Reemplaza con tu color:
   - `#ff3366` = Rojo fucsia
   - `#00d4ff` = Azul neón
   - `#ffaa00` = Naranja dorado

### Ejemplo:
```css
a, .nav-links a {
  color: #00d4ff !important;
  text-decoration: none;
}
```

---

## 4. CAMBIAR EL COLOR DEL TEXTO NORMAL (PÁRRAFOS)

**Archivo:** `interneonvpn/style.css`  
**Línea:** 3 (dentro de body)

### Cambio Actual:
```css
body {
  background: #000 !important;
  color: #e0e0e0;
  font-family: 'Orbitron', Arial, sans-serif;
}
```

### Para cambiar:
1. Busca `color: #e0e0e0` en la línea 4
2. Reemplaza con:
   - `#ffffff` = Blanco puro
   - `#cccccc` = Gris claro
   - `#90ee90` = Verde claro

### Ejemplo:
```css
body {
  background: #000 !important;
  color: #ffffff;
  font-family: 'Orbitron', Arial, sans-serif;
}
```

---

## 5. CAMBIAR EL NOMBRE DEL SITIO EN LA PÁGINA PRINCIPAL

**Archivo:** `index.html`  
**Línea:** 8

### Cambio Actual:
```html
<title>Interneon VPN — Navega seguro y obtén acceso facilitado a Internet en Latinoamérica</title>
```

### Para cambiar:
1. Busca el contenido entre `<title>` y `</title>`
2. Reemplaza con el nuevo nombre
3. **Importante:** También actualiza en estas líneas:
   - Línea 9: `meta name="description"`
   - Línea 19: `og:title`
   - Línea 33: `twitter:title`

### Ejemplo si quieres cambiar a "MiVPN":
```html
<title>MiVPN — Tu conexión segura y rápida</title>
```

---

## 6. CAMBIAR EL NOMBRE EN LA DESCRIPCIÓN (META TAGS)

**Archivo:** `index.html`  
**Línea:** 9

### Cambio Actual:
```html
<meta name="description" content="Protege tu privacidad y navega seguro con Interneon VPN. Acceso facilitado a Internet...">
```

### Para cambiar:
1. Busca el contenido dentro de `content="..."`
2. Reemplaza con tu descripción (máximo 160 caracteres)

### Ejemplo:
```html
<meta name="description" content="VPN segura y rápida para proteger tu privacidad en línea. Descarga gratis ahora.">
```

---

## 7. CAMBIAR EL TÍTULO PRINCIPAL DEL SITIO (H1)

**Archivo:** `index.html`  
**Línea:** 152

### Cambio Actual:
```html
<h1 class="titulo-neon">Interneon VPN — Navega Seguro en Latinoamérica</h1>
```

### Para cambiar:
1. Busca esta línea
2. Reemplaza el texto entre `<h1>` y `</h1>`

### Ejemplo:
```html
<h1 class="titulo-neon">MiVPN — Tu VPN Segura y Rápida</h1>
```

---

## 8. CAMBIAR SUBTÍTULOS Y SECCIONES

**Archivo:** `index.html`

### Ejemplo - Cambiar "¿Qué es Interneon VPN?" (Línea 162):
```html
<section class="seccion-destacada">
  <h2>¿Qué es Interneon VPN?</h2>
  <p>Interneon VPN es una aplicación para Android que protege tu conexión a Internet...</p>
</section>
```

### Para cambiar:
1. Busca la sección que quieras cambiar
2. Modifica el texto entre `<h2>` y `</h2>` para el título
3. Modifica el texto entre `<p>` y `</p>` para la descripción

### Ejemplo:
```html
<section class="seccion-destacada">
  <h2>¿Qué es MiVPN?</h2>
  <p>MiVPN es una aplicación para Android que protege tu conexión y te permite navegar libremente...</p>
</section>
```

---

## 9. CAMBIAR COLOR DEL BOTÓN "DESCARGAR APP"

**Archivo:** `interneonvpn/style.css`  
**Línea:** 254

### Cambio Actual:
```css
.btn-descargar, .btn-wsp {
  background: #cf1111;
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 10px 24px;
  font-weight: bold;
  transition: background 0.2s;
}
```

### Para cambiar:
1. Busca `background: #cf1111`
2. Reemplaza con otro color:
   - `#00ff88` = Verde neón
   - `#0066ff` = Azul
   - `#ff9900` = Naranja
   - `#cc00ff` = Púrpura

### Ejemplo:
```css
.btn-descargar, .btn-wsp {
  background: #00ff88;
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 10px 24px;
  font-weight: bold;
  transition: background 0.2s;
}
```

---

## 10. CAMBIAR TEXTO DE LA SECCIÓN DE BENEFICIOS

**Archivo:** `index.html`  
**Línea:** 171-178

### Cambio Actual:
```html
<section class="seccion-destacada">
  <h2>Beneficios de usar Interneon VPN</h2>
  <ul>
    <li>🔒 <strong>Seguridad total:</strong> Cifrado avanzado...</li>
    <li>🚀 <strong>Conexión rápida:</strong> Servidores optimizados...</li>
    <!-- más items -->
  </ul>
</section>
```

### Para cambiar:
1. Busca la sección de beneficios
2. Modifica cada línea `<li>` individualmente
3. Puedes cambiar el emoji, el título y la descripción

### Ejemplo:
```html
<li>⚡ <strong>Ultra Rápido:</strong> Velocidades de conexión sin límites</li>
```

---

# 🖼️ MODIFICACIÓN DE IMÁGENES

## 1. CAMBIAR EL LOGO DEL SITIO

**Ubicación:** `interneonvpn/images/logo.png`

### ¿Dónde aparece?
- En el menú (esquina superior izquierda)
- En la página principal (sección hero)
- En el meta tag og:image para redes sociales

### Pasos para cambiar:
1. Crea una nueva imagen en PNG (recomendado: 200x200 píxeles)
2. Nombra el archivo `logo.png`
3. Reemplaza el archivo en `interneonvpn/images/logo.png`
4. Si necesitas cambiar el nombre del archivo, actualiza estas líneas:

**Archivo:** `index.html`  
**Línea 78 (menú):**
```html
<img src="interneonvpn/images/logo.png" alt="Interneon VPN - Logo" class="logo" width="48" height="48">
```

**Línea 151 (hero):**
```html
<img src="interneonvpn/images/logo.png" alt="Interneon VPN - Aplicación Android VPN gratuita" class="logo-hero" loading="eager" width="200" height="200" />
```

### Cambiar el nombre o ruta:
Reemplaza `interneonvpn/images/logo.png` con la nueva ruta.

---

## 2. CAMBIAR IMAGEN DE PUBLICIDAD

**Ubicación:** `interneonvpn/images/publicidad.png`  
**Archivo HTML:** `index.html`, Línea 92

### Cambio Actual:
```html
<img src="interneonvpn/images/publicidad.png" alt="Publicidad" id="publicidadImg">
```

### Pasos:
1. Crea una nueva imagen PNG o JPG
2. Reemplaza el archivo `interneonvpn/images/publicidad.png`
3. O cambia la ruta en el código anterior

---

## 3. CAMBIAR IMÁGENES DEL CARRUSEL

**Ubicación:** `interneonvpn/images/imagen1.jpg` a `imagen8.jpg`  
**Archivo:** `index.html`, Línea 250

### Cambio Actual:
```javascript
const imagenes = [
  'interneonvpn/images/imagen1.jpg',
  'interneonvpn/images/imagen2.jpg',
  'interneonvpn/images/imagen3.jpg',
  'interneonvpn/images/imagen4.jpg',
  'interneonvpn/images/imagen5.jpg',
  'interneonvpn/images/imagen6.jpg',
  'interneonvpn/images/imagen7.jpg',
  'interneonvpn/images/imagen8.jpg',
];
```

### Pasos para agregar nuevas imágenes:
1. Guarda tus imágenes en `interneonvpn/images/`
2. Nómbra las como `imagen1.jpg`, `imagen2.jpg`, etc. (o con otro nombre)
3. Actualiza la lista anterior reemplazando los nombres

### Para agregar MÁS imágenes:
```javascript
const imagenes = [
  'interneonvpn/images/imagen1.jpg',
  'interneonvpn/images/imagen2.jpg',
  'interneonvpn/images/imagen3.jpg',
  'interneonvpn/images/imagen9.jpg',  // Nueva imagen
  'interneonvpn/images/imagen10.jpg', // Nueva imagen
];
```

### Para QUITAR imágenes:
Solo elimina la línea correspondiente de la lista.

---

## 4. CAMBIAR RESOLUCIÓN/TAMAÑO DEL CARRUSEL

**Archivo:** `interneonvpn/style.css`  
**Línea:** (búsca ".carrusel")

### Cambio Actual (aproximado):
```css
.carrusel {
  max-width: 800px;
  margin: 40px auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px #39ff1460;
}
```

### Para cambiar el tamaño:
1. Busca `max-width: 800px`
2. Reemplaza con el nuevo tamaño:
   - `max-width: 600px` = Más pequeño
   - `max-width: 1000px` = Más grande
   - `max-width: 100%` = Ancho completo

---

# 📦 ACTUALIZACIÓN DEL APK

## 1. REEMPLAZAR EL ARCHIVO APK DE DESCARGA

**Ubicación actual:** `downloads/apk/interneon-vpn.apk`

### Pasos:
1. Obtén el nuevo archivo APK de tu aplicación Android
2. Copia el archivo a la carpeta `downloads/apk/`
3. Reemplaza el archivo existente `interneon-vpn.apk`

**IMPORTANTE:** El nombre debe ser exactamente `interneon-vpn.apk` para que los enlaces funcionen.

### Si quieres cambiar el nombre del archivo:
Debes actualizar todos estos enlaces:

**Archivo:** `index.html`

**Línea 154:**
```html
<a href="downloads/apk/interneon-vpn.apk" class="btn-descargar sparkle-btn" download="interneon-vpn.apk">
```

**Línea 266:**
```html
<a class="btn-descargar" href="downloads/apk/interneon-vpn.apk" download="interneon-vpn.apk">
```

### Ejemplo si quieres cambiar a `miapp.apk`:
```html
<a href="downloads/apk/miapp.apk" class="btn-descargar sparkle-btn" download="miapp.apk">
```

---

## 2. CAMBIAR EL MENSAJE AL DESCARGAR

**Archivo:** `interneonvpn/js/javascript.js`  
**Línea:** 27

### Cambio Actual:
```javascript
document.querySelectorAll(".btn-descargar").forEach(btn => {
  btn.addEventListener("click", function(e) {
    alert("¡Gracias por descargar la app InterNeon VPN!");
  });
});
```

### Para cambiar el mensaje:
Reemplaza el texto dentro de `alert("...")` con tu mensaje personalizado.

### Ejemplo:
```javascript
alert("¡Gracias! Tu descarga comenzará en segundos. Abre el archivo e instala la app.");
```

---

# 📝 CAMBIOS EN ARCHIVOS HTML

## 1. ESTRUCTURA DE LAS PÁGINAS HTML

Todas las páginas HTML (`android.html`, `contacto.html`, `planes.html`, etc.) tienen la misma estructura:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <!-- Meta tags y estilos -->
  <title>Nombre de la Página</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Menú de navegación -->
  <header class="header">
    <nav class="navbar">
      <!-- Menú aquí -->
    </nav>
  </header>

  <!-- Contenido principal -->
  <main>
    <h1>Título</h1>
    <p>Contenido...</p>
  </main>

  <!-- Pie de página -->
  <footer class="footer">
    <!-- Footer aquí -->
  </footer>
</body>
</html>
```

---

## 2. CAMBIAR EL TÍTULO DE UNA PÁGINA (TAB DEL NAVEGADOR)

Cada página HTML tiene un `<title>` en la sección `<head>`. Por ejemplo:

**Archivo:** `interneonvpn/android.html`  
**Línea:** 6

### Cambio Actual:
```html
<title>Android - InterNeon VPN</title>
```

### Para cambiar:
1. Busca la línea `<title>` en la página que quieras cambiar
2. Reemplaza el texto entre `<title>` y `</title>`

### Ejemplo:
```html
<title>Descargar App Android - MiVPN</title>
```

---

## 3. CAMBIAR CONTENIDO DE SECCIONES

Cada página tiene secciones de contenido. Por ejemplo:

**Archivo:** `interneonvpn/android.html`  
**Línea:** 28

### Cambio Actual:
```html
<main>
  <h1>Android</h1>
  <p>Disfruta de la mejor protección VPN en tu dispositivo Android con InterNeon VPN.</p>
```

### Para cambiar:
1. Busca la sección que quieras editar
2. Modifica el texto entre las etiquetas

### Ejemplo:
```html
<main>
  <h1>App para Android</h1>
  <p>Descarga nuestra aplicación VPN segura y comienza a proteger tu privacidad hoy mismo.</p>
```

---

## 4. AGREGAR NUEVAS SECCIONES

Para agregar una nueva sección, copia esta plantilla y colócala donde desees:

```html
<section class="seccion-destacada">
  <h2>Nombre de la Sección</h2>
  <p>Contenido de la sección aquí. Puedes escribir todo lo que necesites.</p>
</section>
```

### Ejemplo:
```html
<section class="seccion-destacada">
  <h2>¿Por Qué Elegirnos?</h2>
  <p>Somos la mejor opción porque ofrecemos seguridad, velocidad y un soporte excepcional en español.</p>
</section>
```

---

## 5. CAMBIAR LINKS DE NAVEGACIÓN

El menú de navegación aparece en todas las páginas.

**Archivo:** `index.html`  
**Línea:** 79-85

### Cambio Actual:
```html
<ul class="nav-links" role="menubar">
  <li role="none"><a href="index.html" role="menuitem">Inicio</a></li>
  <li role="none"><a href="interneonvpn/seguridad.html" role="menuitem">Seguridad</a></li>
  <li role="none"><a href="interneonvpn/android.html" role="menuitem">Android</a></li>
  <!-- más links -->
</ul>
```

### Para cambiar:
1. Busca el menú en cada página
2. Modifica el texto entre `<a>` y `</a>`
3. O la ruta en `href="..."`

### Para agregar un nuevo menú:
Copia una línea y adáptala:
```html
<li role="none"><a href="interneonvpn/nuevapagina.html" role="menuitem">Nueva Página</a></li>
```

---

## 6. CAMBIAR PIE DE PÁGINA (FOOTER)

**Archivo:** `index.html`  
**Línea:** 288-290

### Cambio Actual:
```html
<footer class="footer">
  <p>&copy; 2026 Interneon VPN - Desarrollado por <a href="#">Ikushira Dev</a>. Todos los derechos reservados.</p>
  <p class="footer-secondary">VPN gratuita para Android en Latinoamérica. Protege tu privacidad en línea.</p>
</footer>
```

### Para cambiar:
1. Busca el `<footer>`
2. Modifica el texto en las etiquetas `<p>`
3. Actualiza el año si es necesario

### Ejemplo:
```html
<footer class="footer">
  <p>&copy; 2026 MiVPN - Desarrollado por Mi Empresa. Todos los derechos reservados.</p>
  <p class="footer-secondary">VPN segura y rápida. Tu privacidad es nuestra prioridad.</p>
</footer>
```

---

## 7. CAMBIAR TEXTO DEL BOTÓN WhatsApp

**Archivo:** `index.html`  
**Línea:** 268

### Cambio Actual:
```html
<a href="https://wa.me/573246331485" class="btn-whatsapp sparkle-btn" target="_blank" rel="noopener noreferrer" aria-label="Contactar soporte por WhatsApp">
  Soporte por WhatsApp
```

### Para cambiar:
1. Reemplaza el número `573246331485` con tu número (sin + ni espacios)
2. Cambia el texto "Soporte por WhatsApp" si quieres

### Ejemplo:
```html
<a href="https://wa.me/5491234567890" class="btn-whatsapp sparkle-btn" target="_blank" rel="noopener noreferrer">
  Contacto WhatsApp
```

---

# 🔧 CAMBIOS EN ARCHIVOS JAVASCRIPT

## 1. AGREGAR TESTIMONIOS

**Archivo:** `interneonvpn/js/javascript.js`  
**Línea:** 2-5

### Cambio Actual:
```javascript
let testimonios = [
  { nombre: "Ana", mensaje: "Excelente servicio y seguridad." },
  { nombre: "Luis", mensaje: "La app es fácil de usar y rápida." }
];
```

### Para agregar testimonios:
Añade nuevas líneas en el formato:
```javascript
{ nombre: "NombreDelUsuario", mensaje: "Su comentario aquí" }
```

### Ejemplo:
```javascript
let testimonios = [
  { nombre: "Ana", mensaje: "Excelente servicio y seguridad." },
  { nombre: "Luis", mensaje: "La app es fácil de usar y rápida." },
  { nombre: "María", mensaje: "Muy recomendada, protege perfectamente mi privacidad." },
  { nombre: "Juan", mensaje: "El mejor VPN que he usado." }
];
```

---

## 2. CAMBIAR VELOCIDAD DEL CARRUSEL

**Archivo:** `index.html`  
**Línea:** 262

### Cambio Actual:
```javascript
intervalo = setInterval(() => {
  if (!pausado) siguiente();
}, 3500);  // 3500 milisegundos = 3.5 segundos
```

### Para cambiar:
Modifica el número `3500`:
- `2000` = Más rápido (2 segundos)
- `5000` = Más lento (5 segundos)
- `1000` = Muy rápido (1 segundo)

### Ejemplo:
```javascript
}, 4500);  // Cambia cada 4.5 segundos
```

---

## 3. CAMBIAR MENSAJE DE VALIDACIÓN DE FORMULARIO

**Archivo:** `interneonvpn/js/javascript.js`  
**Línea:** 57-67

### Cambio Actual:
```javascript
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
```

### Para cambiar los mensajes:
1. Reemplaza "Mensaje Enviado" con tu mensaje personalizado
2. Reemplaza "Datos Incompletos!" con otro mensaje

### Ejemplo:
```javascript
popupTexto.textContent = "¡Gracias! Te contactaremos pronto.";
// y
popupTexto.textContent = "Por favor, completa todos los campos.";
```

---

## 4. CAMBIAR MENSAJE DE COOKIE (SALUDO PERSONALIZADO)

**Archivo:** `interneonvpn/js/cookie.js`  
**Línea:** 38-42

### Cambio Actual:
```javascript
saludo.innerHTML = `
  <h1 class="saludo-title">&#60;Bienvenido, <span class="saludo-name">${nombre}</span>!&#62;</h1>
  <p class="saludo-text">Sistema InterNeon VPN activado para ti, <b>${nombre}</b>. ¡Prepárate para una experiencia cibernética!</p>
`;
```

### Para cambiar:
Modifica el texto entre los backticks (`` ` ``). Puedes:
- Cambiar "Bienvenido"
- Cambiar "Sistema InterNeon VPN"
- Cambiar "Prepárate para una experiencia cibernética"

### Ejemplo:
```javascript
saludo.innerHTML = `
  <h1 class="saludo-title">¡Hola, <span class="saludo-name">${nombre}</span>!</h1>
  <p class="saludo-text">Bienvenido a MiVPN, ${nombre}. Tu conexión segura te espera.</p>
`;
```

---

# 🔍 ACTUALIZACIÓN DE ARCHIVOS SEO

## 1. ACTUALIZAR robots.txt

**Ubicación:** `robots.txt`

### Propósito:
Le dice a Google y otros buscadores cómo indexar tu sitio.

### Cambio Actual:
```plaintext
User-agent: *
Allow: /

Sitemap: https://www.interneonvpn.com/sitemap.xml

User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Bingbot
Allow: /

Crawl-delay: 1
```

### Para cambiar:
1. Reemplaza `https://www.interneonvpn.com` con tu dominio
2. Mantén `Sitemap:` apuntando a tu `sitemap.xml`

### Ejemplo:
```plaintext
User-agent: *
Allow: /

Sitemap: https://www.midominio.com/sitemap.xml

User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Bingbot
Allow: /

Crawl-delay: 1
```

---

## 2. ACTUALIZAR sitemap.xml

**Ubicación:** `sitemap.xml`

### Propósito:
Es un mapa de todas las páginas de tu sitio para que Google las encuentre fácilmente.

### Cambio Actual:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <url>
    <loc>https://www.interneonvpn.com/</loc>
    <lastmod>2026-01-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <url>
    <loc>https://www.interneonvpn.com/interneonvpn/seguridad.html</loc>
    <lastmod>2026-01-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- más URLs -->
</urlset>
```

### Para cambiar:
1. Reemplaza `https://www.interneonvpn.com` con tu dominio
2. Actualiza `<lastmod>` con la fecha actual en formato YYYY-MM-DD
3. Mantén todas las páginas de tu sitio

### Ejemplo después de cambios:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <url>
    <loc>https://www.midominio.com/</loc>
    <lastmod>2026-02-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <url>
    <loc>https://www.midominio.com/interneonvpn/seguridad.html</loc>
    <lastmod>2026-02-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- más URLs -->
</urlset>
```

### IMPORTANTE: Cada vez que añadas una nueva página:
Agrega una nueva sección `<url>`:
```xml
<url>
  <loc>https://www.midominio.com/mi-nueva-pagina.html</loc>
  <lastmod>2026-02-19</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

---

## 3. ACTUALIZAR META TAGS EN index.html

**Archivo:** `index.html`

### Meta Tags Importantes:

**Línea 8 - Título:**
```html
<title>Interneon VPN — Navega seguro y obtén acceso facilitado a Internet en Latinoamérica</title>
```

**Línea 9 - Descripción:**
```html
<meta name="description" content="Protege tu privacidad y navega seguro con Interneon VPN...">
```

**Línea 10 - Autor:**
```html
<meta name="author" content="Ikushira Dev">
```

**Línea 11 - Robots (indexación):**
```html
<meta name="robots" content="index, follow">
```

**Línea 12 - URL Canónica:**
```html
<link rel="canonical" href="https://www.interneonvpn.com/">
```

### Para cambiar cada uno:
1. **Título:** Cambia el texto del `<title>`
2. **Descripción:** Cambia el `content` del meta description (máx 160 caracteres)
3. **Autor:** Reemplaza "Ikushira Dev"
4. **URL Canónica:** Reemplaza con tu dominio

### Ejemplo:
```html
<title>MiVPN — Protección y Privacidad en Línea</title>
<meta name="description" content="VPN segura y rápida para Android. Protege tu privacidad online de forma fácil.">
<meta name="author" content="Mi Empresa">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://www.midominio.com/">
```

---

## 4. ACTUALIZAR OPEN GRAPH (REDES SOCIALES)

**Archivo:** `index.html`  
**Líneas:** 15-25

### Propósito:
Controla cómo tu sitio aparece al compartir en Facebook, WhatsApp, etc.

### Cambio Actual:
```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.interneonvpn.com/">
<meta property="og:title" content="Interneon VPN — Navega seguro en Latinoamérica">
<meta property="og:description" content="Protege tu privacidad...">
<meta property="og:image" content="https://www.interneonvpn.com/interneonvpn/images/logo.png">
```

### Para cambiar:
1. Reemplaza `og:url` con tu dominio
2. Reemplaza `og:title` con el título
3. Reemplaza `og:description` con la descripción
4. Reemplaza `og:image` con la URL completa de tu imagen

### Ejemplo:
```html
<meta property="og:url" content="https://www.midominio.com/">
<meta property="og:title" content="MiVPN — Tu Mejor Opción en Privacidad">
<meta property="og:description" content="Descarga MiVPN y protege tu privacidad. Fácil, rápido y seguro.">
<meta property="og:image" content="https://www.midominio.com/interneonvpn/images/logo.png">
```

---

# 🌐 OPTIMIZACIÓN EN GOOGLE

## 1. REGISTRO EN GOOGLE SEARCH CONSOLE

### Pasos:
1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Haz click en "Agregar propiedad"
3. Elige "Dominio" y escribe tu dominio completo
4. Google te dirá cómo verificar que eres el dueño (generalmente agregando un registro DNS)
5. Una vez verificado, Google empezará a indexar tu sitio

---

## 2. ENVIAR SITEMAP A GOOGLE

### Después de registrar tu sitio:
1. Ve a "Sitemaps" en la barra lateral
2. Haz click en "Agregar nuevo sitemap"
3. Escribe la ruta completa: `https://www.midominio.com/sitemap.xml`
4. Google lo procesará automáticamente

---

## 3. REVISAR COBERTURA DEL SITIO

En Google Search Console:
1. Ve a "Cobertura"
2. Google te mostrará qué páginas indexó
3. Si hay errores, verás un resumen
4. **Objetivo:** Todas tus páginas deben estar en "Válidas"

---

## 4. REVISAR RENDIMIENTO

En Google Search Console:
1. Ve a "Rendimiento"
2. Verás:
   - **Clics:** Cuántas veces alguien hizo click en tu sitio
   - **Impresiones:** Cuántas veces apareció tu sitio en búsquedas
   - **CTR:** Porcentaje de clics respecto a impresiones
   - **Posición:** Posición promedio en búsquedas

---

## 5. OPTIMIZAR PARA BÚSQUEDAS

### Usar Palabras Clave Naturales:
- En títulos (`<title>`)
- En descripciones (`<meta name="description">`)
- En los primeros párrafos del contenido
- En encabezados (`<h1>`, `<h2>`, etc.)

### Ejemplo bueno:
```html
<title>VPN para Android - Seguridad y Privacidad Online</title>
<meta name="description" content="Descarga VPN gratis para Android. Protege tu privacidad, navega seguro, acceso global.">
```

### Evita:
- Palabras clave repetidas (keyword stuffing)
- Contenido copiado de otros sitios
- Títulos engañosos

---

## 6. MEJORAR VELOCIDAD DEL SITIO

### Verificar velocidad en:
[Google PageSpeed Insights](https://pagespeed.web.dev/)

### Para mejorar:
1. **Optimizar imágenes:** Usa herramientas como TinyPNG para reducir tamaño
2. **Comprimir archivos:** Usa Gzip compression en tu servidor
3. **Lazy Loading:** Las imágenes del carrusel ya lo usan (`loading="lazy"`)
4. **Cachéing:** Configura en tu hosting para guardar versiones estáticas

---

## 7. VERIFICAR INDEXACIÓN MANUAL

En Google, busca: `site:midominio.com`

Esto te mostrará todas las páginas indexadas de tu sitio.

---

# 🚀 PUBLICACIÓN EN HOSTING

## PASO 1: ELEGIR HOSTING

### Opciones recomendadas:
- **Hostinger** (económico, fácil)
- **Bluehost** (compatible con WordPress)
- **DreamHost** (buena documentación)
- **AWS, Google Cloud, Azure** (profesional)

---

## PASO 2: SUBIR ARCHIVOS

### Método 1: FTP (Recomendado para principiantes)

1. **Obtén credenciales FTP de tu hosting:**
   - Usuario FTP
   - Contraseña
   - Servidor FTP

2. **Descarga WinSCP o Filezilla** (gratuito)

3. **Conecta:**
   - Usuario: tu usuario FTP
   - Contraseña: tu contraseña
   - Servidor: el servidor FTP de tu hosting

4. **Sube archivos:**
   - Arrastra todo desde tu carpeta local a la carpeta `public_html` del servidor

---

### Método 2: Panel de Control (Si tu hosting lo ofrece)

1. Entra al panel de control de tu hosting
2. Ve a "Gestor de archivos"
3. Copia y pega los archivos

---

### Método 3: Git (Para programadores)

1. Crea un repositorio en GitHub
2. Configura el hosting para leer directamente desde GitHub
3. Cada vez que hagas push, se actualiza automáticamente

---

## PASO 3: VERIFICAR DOMINIO

1. Compra un dominio (Google Domains, GoDaddy, etc.)
2. En el panel de control de tu dominio, apunta los nameservers al hosting
3. Espera 24-48 horas a que se propague

---

## PASO 4: CONFIGURAR SSL (HTTPS)

**IMPORTANTE:** Todos los sitios modernos deben usar HTTPS

### Si tu hosting usa cPanel:
1. Ve a "AutoSSL" o "Let's Encrypt"
2. Selecciona tu dominio
3. Haz click en "Install"
4. Espera 5-10 minutos

### Si es otro panel:
Busca "SSL" en tu panel de control

---

## PASO 5: ACTUALIZAR URLs EN CÓDIGO

**Archivo:** `index.html`

Asegúrate de que estas líneas tengan tu dominio:

**Línea 12:**
```html
<link rel="canonical" href="https://www.tudominio.com/">
```

**Línea 13:**
```html
<link rel="sitemap" type="application/xml" href="/sitemap.xml">
```

---

## PASO 6: CONFIGURAR REDIRECTS

Si migras desde otro dominio, redirige el antiguo:

En `.htaccess` (crear en raíz):
```apache
RewriteEngine On
RewriteRule ^(.*)$ https://www.nuevodominio.com/$1 [R=301,L]
```

---

## PASO 7: VERIFICAR FUNCIONAMIENTO

1. Abre `https://www.tudominio.com` en tu navegador
2. Verifica que todo cargue correctamente
3. Prueba los botones y formularios
4. Comprueba que no haya errores en consola (F12)

---

## PASO 8: ACTUALIZAR ROBOTS.TXT Y SITEMAP.XML

**robots.txt:**
```plaintext
Sitemap: https://www.tudominio.com/sitemap.xml
```

**sitemap.xml:**
Todos los `<loc>` deben ser: `https://www.tudominio.com/...`

---

## PASO 9: REGISTRAR EN BUSCADORES

### Google:
1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Agrega tu propiedad
3. Verifica que eres el dueño
4. Sube el sitemap

### Bing:
1. Ve a [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Agrega tu sitio
3. Sube el sitemap

---

## PASO 10: MONITORIZAR

Cada semana:
1. Revisa Google Search Console
2. Comprueba que no hay errores
3. Verifica las búsquedas más populares
4. Mejora el contenido según los datos

---

# 📋 CHECKLIST DE CAMBIOS FINALES

Antes de publicar, verifica:

- [ ] El dominio está correcto en todos los `<meta>` tags
- [ ] El sitemap.xml está actualizado con todas las páginas
- [ ] El robots.txt apunta al sitemap.xml correcto
- [ ] Las imágenes están en las carpetas correctas
- [ ] El APK está en `downloads/apk/interneon-vpn.apk`
- [ ] Los enlaces internos funcionan (menú de navegación)
- [ ] El botón WhatsApp tiene el número correcto
- [ ] El sitio se ve bien en móviles (F12 → Responsive)
- [ ] No hay errores en la consola (F12 → Console)
- [ ] El SSL (HTTPS) está configurado
- [ ] Google Search Console está registrado
- [ ] El sitemap está enviado a Google

---

# 🆘 TROUBLESHOOTING (SOLUCIÓN DE PROBLEMAS)

## Problema: Las imágenes no cargan

**Solución:**
1. Verifica que el archivo existe en la carpeta `interneonvpn/images/`
2. Comprueba la ruta en el código (Ctrl+F en el archivo HTML)
3. Asegúrate de que el nombre del archivo es exacto (mayúsculas/minúsculas)

## Problema: El menú no funciona

**Solución:**
1. Verifica los `href` en los links
2. Usa rutas relativas: `seguridad.html` si estás en la misma carpeta
3. Usa `../index.html` si subes un nivel

## Problema: Google no indexa mi sitio

**Solución:**
1. Verifica que `robots.txt` tiene `Allow: /`
2. Envía el sitemap desde Google Search Console
3. Espera 1-2 semanas (puede tardar)
4. Usa "Solicitar indexación" en Google Search Console

## Problema: El botón de descargar no funciona

**Solución:**
1. Verifica que el APK está en `downloads/apk/interneon-vpn.apk`
2. Comprueba la ruta en el código
3. Asegúrate de que el archivo no está comprimido o dañado

## Problema: El formulario no envía

**Solución:**
1. Este sitio necesita un backend para procesar formularios
2. Por ahora solo valida los campos
3. Para enviar emails, necesitas un servicio como:
   - Formspree
   - Basin
   - SendGrid

---

# 📞 SOPORTE

Si tienes problemas:
1. Revisa este documento (usa Ctrl+F para buscar)
2. Verifica números de línea exactos
3. Busca mensajes de error en Google (F12 → Console)
4. Contacta al desarrollador original

---

# 📊 CHECKLIST: CAMBIO DE COLORES VERDE NEÓN A CYAN NEÓN

Si realizaste el cambio de colores de #39ff14 (Verde Neón) a #00ffe7 (Cyan Neón), usa esta lista para verificar:

## Verificación Visual en el Navegador:

- [ ] El menú de navegación es **cyan/turquesa** y no verde
- [ ] Al pasar el mouse sobre los menús, el brillo es **cyan** y no verde
- [ ] Los títulos principales tienen un tono más **azulado** que antes
- [ ] Los formularios tienen etiquetas en **cyan**
- [ ] Los campos de input tienen borde en **cyan**
- [ ] Los botones de envío tienen color **cyan** al hacer hover
- [ ] Las tarjetas de contenido tienen color **cyan** en el texto
- [ ] El efecto "glow" (brillo) es **cyan** y no verde
- [ ] El popup de mensajes tiene borde **cyan**
- [ ] Los planes mostrados tienen colores correctos

## Cambios Completados en style.css:

- [ ] Línea 11: `a, .nav-links a` → color: #00ffe7
- [ ] Línea 63: `.nav-links a` → color: #00ffe7
- [ ] Línea 64: `.nav-links a` → text-shadow con #00ffe7
- [ ] Línea 83: `.nav-links a:hover` → box-shadow con #00ffe7
- [ ] Línea 84: `.nav-links a:hover` → text-shadow con #00ffe7
- [ ] Línea 93: `.nav-links a::before` → border: 2px solid #00ffe7
- [ ] Línea 94: `.nav-links a::before` → box-shadow con #00ffe7
- [ ] Línea 102: `.navbar .nav-links li a` → color: #00ffe7
- [ ] Línea 120: radial-gradient → #00ffe7
- [ ] Línea 121: box-shadow → #00ffe7 y #00ffe755
- [ ] Línea 134-135: @keyframes neon-glow → #00ffe7
- [ ] Línea 163: `.titulo-neon` → color: #00ffe7
- [ ] Línea 176: `.btn-enviar` → color: #00ffe7
- [ ] Línea 177: `.btn-enviar` → border y text-shadow con #00ffe7
- [ ] Línea 315: `.card-front, .card-back` → color y text-shadow con #00ffe7
- [ ] Línea 325: `.card-front h3` → color y text-shadow con #00ffe7
- [ ] Línea 372: `.formulario-container label` → color: #00ffe7
- [ ] Línea 377: `.formulario-container input` → border y color con #00ffe7
- [ ] Línea 395: `.formulario-titulo` → color: #00ffe7
- [ ] Línea 418: `.input-neon` → border, color y box-shadow con #00ffe7
- [ ] Línea 427: `.btn-neon` → color, border y text-shadow con #00ffe7
- [ ] Línea 432: `.popup-mensaje` → color, border y text-shadow con #00ffe7
- [ ] Línea 438: `.popup-success` → border-color: #00ffe7
- [ ] Línea 458: `.carrusel-label` → color: #00ffe7
- [ ] Línea 475: `.plan-basic` → color: #00ffe7
- [ ] Línea 529: Estilos globales → color: #00ffe7
- [ ] Línea 534: Inputs globales → border y color con #00ffe7

## Nota sobre colores hexadecimales cortos:

Si viste estos códigos, también cambiaron:
- `#0f0` → `#00ffff` (Verde puro a Cyan) ✓
- `#0ff` → `#00ffff` (Cyan, NO cambiar) ✓
- `#39ff1444` → `#00ffe744` (Verde con transparencia a Cyan) ✓
- `#39ff1460` → `#00ffe760` (Verde con transparencia a Cyan) ✓
- `#39ff1455` → `#00ffe755` (Verde con transparencia a Cyan) ✓

---

**Última actualización:** 19 de febrero de 2026

**Versión:** 1.1 (Incluye guía de cambio de colores Verde Neón a Cyan Neón)

**Creado por:** Ikushira Dev
