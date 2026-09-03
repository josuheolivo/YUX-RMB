# [SYS_PATCH] YUX // RMB ARCHIVE — AUDITORÍA Y ORDEN DE CORRECCIÓN TÉCNICA

**DESTINATARIO:** Agente de Desarrollo Frontend (Google Antigravity)  
**OBJETIVO:** Corregir y elevar el sitio web generado a partir de `yux-rmb-especificacion-web.md`.  
**ESTADO:** Se detecta pérdida de tensión estilística en la interacción, falta de soporte para acentos cromáticos individuales, ausencia de componentes de interfaz retrofuturista (Win95/Glitch) y riesgo de acabados modernos/suaves.

---

## REGLA DE ORO INICIAL (NO NEGOCIABLE)
1. **CERO bordes redondeados:** Todo elemento debe tener `border-radius: 0px !important;` (en Tailwind: `rounded-none`).
2. **CERO sombras difusas:** Prohibido `box-shadow` con blur. Si hay sombra, debe ser sólida y dura: `box-shadow: 4px 4px 0px 0px #0A0A0A;`.
3. **CERO transiciones lentas/orgánicas:** Prohibido `ease-in-out` de 300ms o más. Las animaciones deben ser mecánicas, secas (`duration-75`, `duration-100` o transiciones en saltos `steps()`).
4. **Respeto a la tensión RMB:** Brutalismo en la estructura (grid duro, datos técnicos), Maximalismo en la escala y choque de color, Retrofuturismo en el cromo y las ventanas de error del sistema operativo.

---

## 1. DÓNDE: `tailwind.config.js` y `styles/globals.css` (o archivo CSS global)

### QUÉ CORREGIR:
- Garantizar que los tokens RMB estén integrados en el tema y no como clases arbitrarias.
- Añadir la textura de grano/ruido SVG global fija sin interferir con los clics.
- Eliminar cualquier configuración por defecto de bordes redondeados.

### CÓDIGO A APLICAR / REEMPLAZAR:

```css
/* styles/globals.css */

:root {
  --concreto: #B8B3AA;
  --hueso: #F0EDE6;
  --negro: #0A0A0A;
  --rojo: #C41E1E;
  --violeta: #8B5CF6;
  --cian: #4DE8F4;
  --magenta: #FF3EA5;
  --navy: #0B0B1F;
}

/* Reset brutalista estricto */
*, *::before, *::after {
  border-radius: 0 !important;
}

body {
  background-color: var(--hueso);
  color: var(--negro);
  font-family: 'Inter', Helvetica, Arial, sans-serif;
  letter-spacing: -0.02em;
  position: relative;
  min-height: 100vh;
}

/* Grano sutil SVG overlay permanente */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.035;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
}

/* Clases de tipografía RMB */
.font-display {
  font-family: 'Arial Black', Impact, 'Neue Machina', sans-serif;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 0.9;
}

.font-mono-tech {
  font-family: 'Courier New', Courier, monospace;
  letter-spacing: 0.04em;
}

.font-body-manifesto {
  font-family: Georgia, 'Times New Roman', serif;
  line-height: 1.6;
}

/* Bisel de ventana estilo Windows 95/98 */
.win95-box {
  background: #C0C0C0;
  border: 2px solid #FFFFFF;
  border-right-color: #0A0A0A;
  border-bottom-color: #0A0A0A;
  box-shadow: inset 1px 1px #DFDFDF, inset -1px -1px #808080;
}

.win95-titlebar {
  background: #000080;
  color: #FFFFFF;
  font-family: 'Courier New', monospace;
  font-weight: bold;
  padding: 3px 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.win95-btn {
  background: #C0C0C0;
  border: 2px solid #FFFFFF;
  border-right-color: #0A0A0A;
  border-bottom-color: #0A0A0A;
  font-family: 'Courier New', monospace;
  font-size: 0.75rem;
  padding: 4px 12px;
  cursor: pointer;
  text-transform: uppercase;
}

.win95-btn:active {
  border: 2px solid #0A0A0A;
  border-right-color: #FFFFFF;
  border-bottom-color: #FFFFFF;
}
2. DÓNDE: Esquema de Colección de Contenido (src/content/config.ts o equivalente)
QUÉ CORREGIR:
El schema actual no permite inyectar dinámicamente un acento cromático propio por pieza ni soporta bucles de video para renders 3D/cromo líquido.

Se debe actualizar la definición de datos para que cada pieza controle su color y su formato de medio.

CÓDIGO A APLICAR / REEMPLAZAR:
TypeScript
import { defineCollection, z } from 'astro:content'; // O adaptador equivalente

const archiveCollection = defineCollection({
  type: 'content',
  schema: z.object({
    code: z.string(), // "001", "002"
    title: z.string(), // "NEPTUNO // DILUVIO"
    subject: z.string(), // "Fuente de Neptuno, Madrid"
    coords: z.string(), // Coordenadas GPS reales
    date_captured: z.string().optional(),
    error_message: z.string(), // "SYS_ERROR: WATER_PRESSURE_CRITICAL"
    manifest_text: z.string(),
    grid_version: z.string().default("RMB-V1.2"),
    image: z.string(), // "001.jpg"
    media_type: z.enum(['image', 'video']).default('image'),
    accent_color: z.string().default('#C41E1E'), // Acento HEX dominante
  }),
});

export const collections = {
  'archive': archiveCollection,
};
3. DÓNDE: Componente de Tarjeta del Archivo (Card.astro o Card.tsx)
QUÉ CORREGIR:
Color de acento estático: Actualmente el código de error y elementos destacados asumen rojo #C41E1E fijo. Debe consumir piece.data.accent_color inyectado mediante variable CSS en línea (--accent).

Falta de tensión en Hover (Maximalismo): El hover actual es plano. Debe activar una aberración cromática rápida (desplazamiento RGB) y un zoom seco/glitch.

Soporte de Video: Renderizar <video> con autoplay loop muted playsinline si media_type === 'video'.

CÓDIGO A APLICAR / REEMPLAZAR:
HTML
<!-- Estructura de Card compatible con Astro/React -->
<article 
  class="card-rmb group flex flex-col bg-[var(--hueso)] border-none relative overflow-hidden" 
  style={`--card-accent: ${piece.accent_color};`}
>
  <!-- Contenedor Media (Ratio 3:4) -->
  <div class="card-media relative aspect-[3/4] bg-[var(--concreto)] overflow-hidden border-b-2 border-[var(--negro)]">
    
    <!-- Código alfanumérico superior -->
    <span class="absolute top-2 left-2 z-10 bg-[var(--negro)] text-[var(--hueso)] font-mono-tech text-xs px-2 py-0.5">
      #{piece.code}
    </span>

    <!-- Renderizado condicional de Image / Video con Glitch Hover -->
    {piece.media_type === 'video' ? (
      <video 
        src={`/assets/${piece.image}`} 
        autoplay loop muted playsinline 
        class="w-full h-full object-cover filter contrast-105 group-hover:contrast-125 group-hover:scale-105 transition-transform duration-75"
      />
    ) : (
      <img 
        src={`/assets/${piece.image}`} 
        alt={piece.title} 
        loading="lazy" 
        class="w-full h-full object-cover filter contrast-105 group-hover:contrast-125 group-hover:scale-105 transition-transform duration-75 group-hover:translate-x-0.5"
      />
    )}

    <!-- Overlay de Glitch cromático en Hover -->
    <div class="absolute inset-0 opacity-0 group-hover:opacity-30 pointer-events-none mix-blend-color-dodge transition-opacity duration-75" style="background-color: var(--card-accent);"></div>
  </div>

  <!-- Cuerpo de Ficha Técnica -->
  <div class="p-4 flex-1 flex flex-col justify-between bg-[var(--hueso)]">
    <div>
      <p class="font-mono-tech text-xs uppercase mb-1 tracking-wider" style="color: var(--card-accent);">
        {piece.error_message}
      </p>
      <h3 class="font-display text-2xl tracking-tighter leading-none mb-1 text-[var(--negro)] group-hover:text-[var(--card-accent)] transition-colors duration-75">
        {piece.title}
      </h3>
      <p class="text-xs italic text-[#444] mb-2">{piece.subject}</p>
      <p class="font-mono-tech text-[10px] text-[#555] mb-3">{piece.coords}</p>
      <p class="text-xs font-body-manifesto leading-relaxed text-[#111] line-clamp-3 mb-4">
        {piece.manifest_text}
      </p>
    </div>

    <div class="font-mono-tech text-[9px] text-[#888] border-t border-[#CCC] pt-2 flex justify-between">
      <span>GRID: {piece.grid_version}</span>
      <a href={`/archivo/${piece.code}`} class="underline hover:text-[var(--negro)] font-bold uppercase">
        [VER EVIDENCIA]
      </a>
    </div>
  </div>
</article>
4. DÓNDE: Página de Detalle de Pieza (/archivo/[code].astro o /archivo/[code].tsx)
QUÉ CORREGIR:
Actualmente las páginas de detalle se generan como un post de blog ordinario.

Debe corregirse para:

Mostrar el titular con la tipografía display rotada 90° en vertical a lo largo del margen lateral (marca registrada de YUX).

Presentar el error contextual dentro de una ventana de diálogo rígida estilo Windows 95/98 (.win95-box), con botones biselados mecánicos [ OK ] y [ CANCELAR PROTOCOLO ].

Desplegar la ficha técnica brutalista completa (coordenadas reales, fecha, versión de grid y miras/crosshair).

CÓDIGO A APLICAR / REEMPLAZAR EN EL LAYOUT DE DETALLE:
HTML
<div class="detail-container max-w-6xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start" style={`--detail-accent: ${piece.accent_color};`}>
  
  <!-- Columna 1: Titular Monumental Rotado 90° (Brutalismo) -->
  <div class="hidden lg:flex lg:col-span-2 justify-center items-start border-r-2 border-[var(--negro)] pr-4 min-h-[600px]">
    <h1 
      class="font-display text-7xl tracking-tighter uppercase select-none"
      style="writing-mode: vertical-rl; transform: rotate(180deg); color: var(--detail-accent);"
    >
      {piece.title}
    </h1>
  </div>

  <!-- Columna 2: Media principal a tamaño completo -->
  <div class="lg:col-span-6 border-2 border-[var(--negro)] bg-[var(--concreto)] relative">
    <div class="absolute top-2 left-2 z-10 bg-[var(--negro)] text-[var(--hueso)] font-mono-tech text-xs px-2 py-1">
      CATÁLOGO: YUX-RMB / #{piece.code}
    </div>
    <img 
      src={`/assets/${piece.image}`} 
      alt={piece.title} 
      class="w-full h-auto object-cover contrast-110 block"
    />
  </div>

  <!-- Columna 3: Ventana de Error Win95 + Ficha Técnica Completa (Retrofuturismo) -->
  <div class="lg:col-span-4 flex flex-col gap-6">
    
    <!-- Ventana flotante/biselada Win95 -->
    <div class="win95-box p-1">
      <div class="win95-titlebar mb-3">
        <span class="text-xs font-mono-tech">SYS_DIALOG // {piece.code}.EXE</span>
        <button class="bg-[#C0C0C0] text-[var(--negro)] px-1.5 py-0 text-xs font-bold leading-none border border-white border-r-black border-bottom-black">×</button>
      </div>
      <div class="p-3 bg-[#C0C0C0]">
        <p class="font-mono-tech text-xs font-bold text-[#C41E1E] uppercase mb-2">
          {piece.error_message}
        </p>
        <p class="text-xs font-body-manifesto text-[var(--negro)] mb-4">
          {piece.manifest_text}
        </p>
        <div class="flex justify-end gap-2">
          <button class="win95-btn">REINTENTAR</button>
          <a href="/archivo" class="win95-btn text-center inline-block">ABORTAR</a>
        </div>
      </div>
    </div>

    <!-- Bloque de Ficha Técnica Pura -->
    <div class="border-2 border-[var(--negro)] p-4 bg-[var(--hueso)] font-mono-tech text-xs">
      <div class="border-b border-[var(--negro)] pb-2 mb-2 flex justify-between font-bold">
        <span>FICHA TÉCNICA</span>
        <span>{piece.grid_version}</span>
      </div>
      <p class="mb-1"><span class="text-[#666]">SUJETO:</span> {piece.subject}</p>
      <p class="mb-1"><span class="text-[#666]">GPS:</span> {piece.coords}</p>
      {piece.date_captured && <p class="mb-1"><span class="text-[#666]">REGISTRO:</span> {piece.date_captured}</p>}
      <p class="mb-3"><span class="text-[#666]">ACENTO:</span> <span class="inline-block w-3 h-3 align-middle border border-black" style={`background-color: ${piece.accent_color};`}></span> {piece.accent_color}</p>
      
      <!-- Navegación entre piezas correlativas -->
      <div class="border-t-2 border-[var(--negro)] pt-3 mt-4 flex justify-between uppercase font-bold">
        <a href="#" id="prev-link" class="hover:underline">← ANTERIOR</a>
        <a href="#" id="next-link" class="hover:underline">SIGUIENTE →</a>
      </div>
    </div>

  </div>
</div>
5. DÓNDE: Base de Datos Inicial (src/content/archive/*.md o JSON de datos)
QUÉ CORREGIR:
Actualizar las entradas iniciales para incorporar accent_color específico (para no tener todo en rojo plano) y asegurar que las coordenadas no tengan valores duplicados o decorativos.

MAPPING DE ACENTOS RECOMENDADO PARA LAS 8 PIEZAS:
#001 (Neptuno // Diluvio): accent_color: "#C41E1E" (Rojo cálido señal)

#002 (CXRRUPT LAWS): accent_color: "#FF3EA5" (Magenta láser)

#003 (Estructura // Vacío): accent_color: "#4DE8F4" (Cian eléctrico)

#004 (Brutalism Override): accent_color: "#39FF6A" (Verde ácido)

#005 (YUX – RMB): accent_color: "#C41E1E" (Rojo señal)

#006 (Estructura // Quiebre): accent_color: "#FF6B00" (Naranja spray)

#007 (Fallo en la Matriz): accent_color: "#8B5CF6" (Violeta cromo)

#008 (Monumento / Fallo): accent_color: "#FFD100" (Amarillo pigmento)

6. CHECKLIST DE COMPILACIÓN (VERIFICACIÓN ANTIGRAVITY)
Antes de dar la tarea por finalizada, verifica:

[ ] ¿Todas las clases rounded-* han sido eliminadas o reemplazadas por rounded-none?

[ ] ¿El grid principal de /archivo tiene gap: 2px sobre fondo bg-[var(--negro)]?

[ ] ¿El overlay SVG de grano estático está activo con pointer-events: none en todo el sitio?

[ ] ¿La página de detalle individual rota el titular verticalmente a 90° (writing-mode: vertical-rl)?

[ ] ¿La ventana de error de detalle implementa los biseles y la barra azul marino de Windows 95?