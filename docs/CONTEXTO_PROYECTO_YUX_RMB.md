# MEMORIA FORENSE Y CONTEXTO MAESTRO // YUX RMB (V2.0 MASTER ARCHITECTURE)

> **Documento de Contexto y Registro Maestro de Decisiones de Arquitectura, Diseño y Operaciones.**  
> Este documento preserva el estado completo del sistema para que cualquier desarrollador o agente de IA pueda continuar el trabajo sin pérdida de contexto.

---

## 🏛️ 1. IDENTIDAD Y FILOSOFÍA DE DISEÑO (RMB)

* **Marca:** `YUX` (siempre mayúsculas).
* **Movimiento:** `RMB` (**Retromaximalismo Bruto**). Creado por **Josuhe**.
* **Manifiesto:** *"Un futuro construido sobre concreto crudo, invadido por objetos holográficos, y decorado con el caos emocional de quien vivió para verlo llegar."*
* **Tensión sin resolver entre tres fuerzas:**
  1. **Brutalismo:** Esqueleto visto, retícula implacable, juntas de 2px, sombras duras (`4px 4px 0px #0A0A0A`), tipografía monumental y regla universal inquebrantable: `*, *::before, *::after { border-radius: 0 !important; }`.
  2. **Maximalismo:** Grano SVG de alta fricción permanente (`pointer-events: none`), saturación puntual, capas de telemetría forense, glitch de color y carga narrativa poética.
  3. **Retrofuturismo:** Ventanas de diálogo Windows 95/98 (`.win95-container`, `.win95-titlebar`, `.win95-btn`), consola CRT con síntesis de audio IBM Model M en Web Audio API, miras crosshair `[+]` y estética wireframe 2D.
* **Paleta Canónica:** Base neutra al 80% (Concreto `#B8B3AA`, Hueso `#F0EDE6`, Negro `#0A0A0A`) + **un solo acento dominante por pieza** (Rojo `#C41E1E`, Violeta `#8B5CF6`, Cian `#4DE8F4`, Magenta `#FF3EA5`, Verde `#39FF6A`, Naranja `#FF6B00`, Amarillo `#FFD100`).

---

## 🧭 2. RUTAS DEL SISTEMA Y FUNCIONALIDAD

| Ruta | Componente / Propósito | Particularidades Técnicas |
| :--- | :--- | :--- |
| `/` | Portada Principal | Manifiesto colapsable nativo, glyph oficial, preview 3:4 de las últimas 4 piezas con glitch hover. |
| `/archivo` | Catálogo General | Cuadrícula brutalista con `gap: 2px` sobre fondo negro. Muestra todas las piezas catalogadas. |
| `/archivo/[code]` | Ficha Técnica Forense | Titular monumental rotado a 90° (`writing-mode: vertical-rl`), ventana Win95 de error, telemetría GPS DMS, navegación secuencial prev/next. |
| `/mapa` | Cartografía Táctica | Leaflet con filtro monocromo oscuro, markers personalizados con crosshairs RMB y popup táctico. |
| `/terminal` | Consola TTY CRT | Simulación de fósforo verde con scanlines y síntesis nativa de audio analógico (pulsos de clic mecánico y tono de error). Comandos interactivos (`help`, `cat`, `manifesto`, `clear`, `ls`, etc.). |
| `/suministros` | Módulo Textil & Waitlist | Plano técnico wireframe 2D de prenda, selector de tallas y modal Win95 de lista prioritaria conectada con Webhook a Google Sheets. |
| `/assets` | Descargas & Protección de Marca | Descarga de Preset XMP, galería de wallpapers individuales en 768x1376 master HQ + zip completo, modal selector Win95 y **solicitud protegida de isotipo vectorial SVG con exposición de motivos**. |
| `/manifiesto` | Manifiesto & Mitología 2029 | 9 principios fundacionales y relato cronológico ficcional del colapso y archivo de Madrid. |
| `/workbench` | Generador & Publicador Directo | Panel protegido por SHA-256 (`Adrijosu1213*.`). Editor en vivo, generador de .md, generador de captions para Instagram, gestor de solicitudes de logo y **publicación directa a GitHub API (1 clic) sin /admin**. |
| `/admin` | Decap CMS | CMS visual conectado vía Git Gateway con Netlify Identity (usuario activo `josuhe.olivo@gmail.com`). |
| `/404` | Error de Sistema Forense | Ventana Windows 95 roja `SYS_CRASH // 0x404_FILE_NOT_FOUND.EXE` con recuperación a `/`, `/archivo` o `/terminal`. |

---

## 🔒 3. SEGURIDAD, ACCESOS Y CREDENCIALES

* **Contraseña del Workbench:** `Adrijosu1213*.`
  * Validada mediante hash SHA-256 (`08321f3ec31545ae9af10c4f8deb49edd6cd5870927ab7740139015a814a179f`).
  * Persistida en sesión local del navegador bajo la clave `yux_workbench_authenticated_session`.
* **Publicación Directa desde el Workbench:**
  * Utiliza la API REST de GitHub (`PUT /repos/josuheolivo/YUX-RMB/contents/...`).
  * El token GitHub Personal Access Token (PAT con permiso `repo`) se guarda en `localStorage` bajo la clave `yux_workbench_github_token`.
  * Sube la imagen a `src/assets/{code}.jpg` y el markdown a `src/content/piezas/{code}.md`.
  * Netlify detecta automáticamente el commit en `main` y compila la versión pública en ~25s.
* **Control de Marca del Isotipo SVG:**
  * La descarga directa de `YUX_GLYPH_VECTOR.svg` está eliminada de las rutas públicas para evitar scraping.
  * Los solicitantes envían su correo y motivo detallado en `/assets`.
  * Los leads se guardan en `localStorage` (`yux_rmb_logo_requests`) y se transmiten al Webhook de Google Sheets si existe.
  * Josuhe visualiza todas las solicitudes, lee los motivos y responde con un clic vía `mailto:` desde la Pestaña 04 del Workbench.
* **Netlify Identity & Decap CMS:**
  * Usuario registrado y confirmado: `josuhe.olivo@gmail.com`.
  * Git Gateway activo con permisos de commit hacia `josuheolivo/YUX-RMB`.

---

## 📱 4. CALIDAD DE ASSETS Y WALLPAPERS

* **Imágenes Maestras:** Todas las 8 piezas utilizan los archivos uncompressed originales de **768 x 1376 px** (proporción 9:16, peso ~1 MB cada una).
* **Ubicación en Código:**
  * Masters para descarga individual: `public/assets/wallpapers/{001..008}.jpg`.
  * Pack completo en zip: `public/assets/downloads/WALLPAPERS_9_16.zip` (7.46 MB).
  * Masters para el pipeline de optimización WebP de Astro: `src/assets/{001..008}.jpg`.

---

## 🚀 5. COMANDOS DE DESARROLLO Y PRODUCCIÓN

```bash
# Directorio del proyecto Astro
cd "yux-archive"

# Iniciar servidor de desarrollo local (localhost:4321)
npm run dev

# Compilar proyecto a estático (genera carpeta dist/ con 17 páginas)
npm run build

# Previsualizar build de producción localmente
npm run preview
```

* **Repositorio GitHub:** [https://github.com/josuheolivo/YUX-RMB](https://github.com/josuheolivo/YUX-RMB)
* **Rama Principal:** `main`
* **Despliegue en Vivo:** [https://yux-rmb.netlify.app](https://yux-rmb.netlify.app)
