# CLAUDE.md — GUÍA MAESTRA PARA ASISTENTES // YUX RMB ARCHIVE

> Este archivo es leído por Claude y otros asistentes de código. Define las reglas inquebrantables de diseño, arquitectura y flujos de trabajo del proyecto **YUX // RMB**.

---

## 🏛️ 1. Estilo RMB (Retromaximalismo Bruto) — Reglas Críticas

1. **Cero Border Radius Universal:**  
   `*, *::before, *::after { border-radius: 0 !important; }` gobierna todo el DOM. Nunca introduzcas esquinas redondeadas, pills ni degradados suaves.
2. **Paleta de Color Canónica:**  
   * **Base Neutra (80%):** Concreto `#B8B3AA`, Hueso `#F0EDE6`, Negro `#0A0A0A`.  
   * **Acentos (solo 1 dominante por pieza/sección):** Rojo `#C41E1E`, Violeta `#8B5CF6`, Cian `#4DE8F4`, Magenta `#FF3EA5`, Verde `#39FF6A`, Naranja `#FF6B00`, Amarillo `#FFD100`.
3. **Tipografía:**  
   * Títulos: `font-display` (Arial Black / Impact condensada, tracking ajustado).  
   * Telemetría técnica: `font-mono-tech` (Courier / Consolas / monospace).  
   * Manifiesto: `font-serif-manifesto` / `font-body-manifesto` (Times New Roman con espaciado editorial).
4. **Grano y Fricción:**  
   El grano SVG permanente con `pointer-events: none` está activo en `Layout.astro`.

---

## 🧭 2. Arquitectura de Rutas y Módulos

* `/` → Portada con Manifiesto interactivo y catálogo reciente (3:4).
* `/archivo` → Galería general en cuadrícula brutalista (gap 2px sobre negro).
* `/archivo/[code]` → Ficha técnica forense (titular vertical a 90°, diálogo Win95, telemetría GPS).
* `/mapa` → Cartografía forense con Leaflet táctico y crosshairs RMB.
* `/terminal` → Emulador CRT con scanlines y audio sintético IBM Model M (Web Audio API).
* `/suministros` → Módulo textil con wireframe 2D y formulario conectado a Google Sheets.
* `/assets` → Descargas de presets XMP, galería 9:16 master HQ, selector modal Win95 y solicitud protegida de SVG.
* `/manifiesto` → 9 principios y mitología ficcional 2029.
* `/workbench` → Generador privado protegido por contraseña SHA-256 (`Adrijosu1213*.`) con despliegue directo a GitHub REST API en 1 clic.
* `/admin` → Decap CMS con Git Gateway y Netlify Identity.
* `/404` → Pantalla de caída de sistema Windows 95 roja con opciones de navegación de emergencia.

---

## 🛠️ 3. Comandos de Terminal

```bash
npm run dev      # Servidor local en localhost:4321
npm run build    # Compila las 17 rutas estáticas a ./dist/
npm run preview  # Previsualiza la carpeta ./dist/
```

* **Repositorio Remoto:** `https://github.com/josuheolivo/YUX-RMB` (rama `main`)
* **Documento Detallado de Contexto:** `docs/CONTEXTO_PROYECTO_YUX_RMB.md`
