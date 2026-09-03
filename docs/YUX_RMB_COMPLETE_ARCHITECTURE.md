Markdown
# [SYS_EXEC] YUX // RMB ARCHIVE — MASTER EXPANSION & ARCHITECTURE SPECIFICATION

**DESTINATARIO:** Agente de Desarrollo / Ingeniero Frontend (Google Antigravity)  
**SISTEMA:** YUX // Retromaximalismobruto (RMB)  
**VERSIÓN:** V2.0 Full-System Deployment  
**OBJETIVO:** Implementar el portafolio digital, la cartografía forense, la terminal interactiva, el workbench de producción y los módulos de distribución física y de assets, respetando sin desviaciones la filosofía y reglas del estilo RMB.

---

## 0. CONSTITUCIÓN TÉCNICA Y REGLAS ANTI-ALUCINACIÓN (ESTRICTAS)

1. **PROHIBIDO BORDER-RADIUS:** Todo elemento sin excepción debe tener bordes afilados (`rounded-none` en Tailwind / `border-radius: 0px !important;`).
2. **PROHIBIDAS SOMBRAS DIFUSAS:** Prohibido el uso de blur o sombras suaves (`shadow-lg`, etc.). Sombras permitidas únicamente de corte duro: `box-shadow: 4px 4px 0px 0px #0A0A0A;`.
3. **PROHIBIDAS TRANSICIONES LENTAS:** Prohibido `ease-in-out` de 300ms+. Todo cambio de estado debe ser mecánico, instantáneo o por pasos (`duration-75` o `steps()`).
4. **UN SOLO ACENTO POR PIEZA:** En tarjetas y páginas de detalle, domina la base neutra (`--concreto`, `--hueso`, `--negro`) y un **único** color de acento (`accent_color`), nunca dos acentos compitiendo al 50/50.
5. **VERACIDAD FORENSE:** Todo dato técnico (coordenadas GPS, fecha, código alfanumérico) debe estructurarse desde datos reales, nunca números aleatorios decorativos.
6. **NO BASE64:** Los archivos multimedia deben servirse como recursos optimizados (`/assets/`) con `loading="lazy"`.

---

## 1. TOKENS DE DISEÑO Y CSS GLOBAL (`styles/globals.css`)

```css
:root {
  /* Base Neutra Brutalista */
  --concreto: #B8B3AA;
  --hueso: #F0EDE6;
  --negro: #0A0A0A;

  /* Acentos Cálidos (Pigmento) */
  --rojo: #C41E1E;
  --amarillo: #FFD100;
  --verde-acido: #39FF6A;
  --naranja: #FF6B00;

  /* Acentos Fríos (Holográficos) */
  --violeta: #8B5CF6;
  --cian: #4DE8F4;
  --magenta: #FF3EA5;
  --navy: #0B0B1F;
}

/* Reset estructural */
*, *::before, *::after {
  border-radius: 0 !important;
  box-sizing: border-box;
}

body {
  background-color: var(--hueso);
  color: var(--negro);
  font-family: 'Inter', Helvetica, Arial, sans-serif;
  letter-spacing: -0.02em;
  margin: 0;
  padding: 0;
}

/* Grano SVG permanente de alta fricción */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.038;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
}

/* Tipografías Oficiales */
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

.font-serif-manifesto {
  font-family: Georgia, 'Times New Roman', serif;
  line-height: 1.6;
}

/* UI Retrofuturista Windows 95/98 */
.win95-container {
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
  box-shadow: inset 1px 1px #DFDFDF, inset -1px -1px #808080;
  font-family: 'Courier New', monospace;
  font-size: 0.75rem;
  padding: 4px 12px;
  cursor: pointer;
  text-transform: uppercase;
  color: #0A0A0A;
}

.win95-btn:active {
  border: 2px solid #0A0A0A;
  border-right-color: #FFFFFF;
  border-bottom-color: #FFFFFF;
  box-shadow: none;
}
2. ESQUEMA DE DATOS EXPANDIDO (src/content/config.ts)
TypeScript
import { defineCollection, z } from 'astro:content';

const archiveCollection = defineCollection({
  type: 'content',
  schema: z.object({
    code: z.string(), // "001", "002"
    title: z.string(), // Fórmula obligatoria: "SUJETO // FALLO"
    subject: z.string(),
    coords: z.string(), // Coordenadas GPS en formato DMS o decimal real
    lat: z.number().optional(), // Para el mapa
    lng: z.number().optional(), // Para el mapa
    date_captured: z.string().optional(),
    error_message: z.string(), // Contextual: "SYS_ERROR: WATER_PRESSURE_CRITICAL"
    manifest_text: z.string(),
    grid_version: z.string().default("RMB-V1.2"),
    image: z.string(),
    media_type: z.enum(['image', 'video']).default('image'),
    accent_color: z.string().default('#C41E1E'),
    status: z.enum(['CORRUPTED', 'ARCHIVED', 'SYSTEM_FAIL']).default('CORRUPTED'),
  }),
});

export const collections = {
  'archive': archiveCollection,
};
3. ARQUITECTURA DE PÁGINAS Y RUTAS
/
├── /archivo
│   └── /[code]               <- Ficha técnica brutalista + titular rotado a 90°
├── /mapa                     <- Cartografía forense de Madrid (Radar táctico)
├── /terminal                 <- Consola interactiva UNIX/DOS
├── /workbench                <- Generador interno de fichas y captions
├── /suministros              <- Catálogo físico / Pre-ordenes de drops y zines
├── /assets                   <- Descarga de Wallpapers 9:16, Glyph SVG y LUTs
└── /manifiesto               <- Declaración oficial y mitología 2029
4. MÓDULO 1: CARTOGRAFÍA DEL FALLO (/mapa)
Mapa de Madrid renderizado como monitor táctico militar.

Stack recomendado: leaflet y react-leaflet con capa de tiles personalizada en escala de grises oscuros (CartoDB DarkMatter o invertida vía CSS).

Requisitos del componente:
Lienzo: Fondo #0A0A0A, líneas de retícula brutalista superpuestas (grid de 40px con opacidad del 5%).

Marcadores: No usar pines convencionales. Renderizar una mira técnica (crosshair) SVG centrada en cada coordenada GPS real.

Interacción: Al hacer clic en un crosshair, se abre una ventana emergente rígida estilo Windows 95 con el código de la pieza, el mensaje de error parpadeando y un botón [ INSPECCIONAR ARCHIVO ] que enlaza a /archivo/[code].

JavaScript
// src/components/TacticalMap.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const CrosshairIcon = (accent) => L.divIcon({
  className: 'custom-crosshair',
  html: `<div style="color: ${accent}; font-family: monospace; font-size: 14px; font-weight: bold; transform: translate(-50%, -50%);">
          [+]
         </div>`,
  iconSize: [20, 20],
});

export default function TacticalMap({ pieces }) {
  return (
    <div className="w-full h-[85vh] border-2 border-[var(--negro)] relative bg-[#0A0A0A]">
      <div className="absolute top-4 left-4 z-[1000] bg-[#0A0A0A] border border-[var(--concreto)] p-3 text-[var(--hueso)] font-mono-tech text-xs">
        <p className="text-[var(--rojo)] font-bold">RADAR // MONITOREO DE MADRID</p>
        <p>STATUS: DISRUPCIÓN ESTRUCTURAL DETECTADA</p>
      </div>

      <MapContainer -3.7038]} center="{[40.4168," className="w-full h-full filter grayscale invert contrast-125" zoom="{14}">
        <TileLayer url="https://{s}[.basemaps.cartocdn.com/dark_all/](https://.basemaps.cartocdn.com/dark_all/){z}/{x}/{y}{r}.png"/>
        {pieces.map((p) => p.data.lat && (
          <Marker icon="{CrosshairIcon(p.data.accent_color)}" key="{p.data.code}" p.data.lng]} position="{[p.data.lat,">
            <Popup className="win95-leaflet-popup">
              <div className="win95-container p-2 text-[var(--negro)]">
                <div className="win95-titlebar text-[10px] mb-2">SYS_ALERT // #{p.data.code}</div>
                <p className="font-mono-tech text-xs font-bold text-[#C41E1E]">{p.data.error_message}</p>
                <p className="font-display text-sm mt-1">{p.data.title}</p>
                <a href={`/archivo/${p.data.code}`} className="win95-btn inline-block mt-2 text-[10px]">
                  VER EVIDENCIA
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
5. MÓDULO 2: LA TERMINAL DE SISTEMA (/terminal)
Emulador interactivo de terminal CRT monocromática para explorar la mitología de la pérdida de control del sistema en 2029.

Requisitos técnicos:
Audio Sintetizado con Web Audio API: Sonido de pulsación de tecla mecánica tipo IBM Model M (click seco de 5ms a 800Hz) y tono de error cuando el comando no existe.

Buffer de Comandos:

HELP: Lista de directivas disponibles.

STATUS: Muestra la integridad del sistema (ej. INTEGRIDAD: 12.4% // EN DESCOMPOSICIÓN).

QUERY [CODE]: Muestra el log forense y datos de una pieza (ej. QUERY 001).

MANIFESTO: Imprime los 9 principios línea por línea con delay de 50ms.

CLEAR: Limpia el buffer de pantalla.

EXIT: Redirige al /archivo.

JavaScript
// src/components/SystemTerminal.jsx
import React, { useState, useEffect, useRef } from 'react';

export default function SystemTerminal({ pieces }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    'YUX PROTOCOL V2.0 - ARCHIVE DIAGNOSTICS [MADRID]',
    'ESCRIBA "HELP" PARA LISTA DE COMANDOS DISPONIBLES.',
    '--------------------------------------------------'
  ]);
  const bottomRef = useRef(null);

  const playMechanicalClick = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.03);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.03);
    } catch (e) {}
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      playMechanicalClick();
      const cmd = input.trim().toUpperCase();
      const args = cmd.split(' ');
      let response = [];

      switch (args[0]) {
        case 'HELP':
          response = [
            'COMANDOS DEL PROTOCOLO:',
            '  STATUS         - Estado del núcleo de documentación',
            '  MANIFESTO      - Imprime el log fundacional',
            '  QUERY <CODIGO> - Recupera expediente forense (ej. QUERY 001)',
            '  CLEAR          - Purga la consola',
            '  EXIT           - Retorna al grid brutalista'
          ];
          break;
        case 'STATUS':
          response = [
            '>> ALERTA: INTEGRIDAD DE ARCHIVO COMPROMETIDA',
            '>> SUJETOS CATALOGADOS: ' + pieces.length,
            '>> SENSOR REDUNDANCY: OFFLINE',
            '>> MONUMENT SURVEILLANCE: DESOBEDIENCIA EN CURSO'
          ];
          break;
        case 'MANIFESTO':
          response = [
            '01. Todo monumento es una promesa que el tiempo corrompe.',
            '02. La estructura no miente.',
            '03. El exceso no es error.',
            '04. El futuro ya llegó sin avisar.',
            '05. Cada pieza es un fragmento de un archivo inconcluso.',
            '06. Un dato inventado es una mentira. Coordenadas reales siempre.',
            '07. El error nunca es decoración.',
            '08. Archivamos el momento del fallo.',
            '09. YUX no firma piezas bonitas. Firma evidencia.'
          ];
          break;
        case 'QUERY':
          const piece = pieces.find(p => p.data.code === args[1]);
          if (piece) {
            response = [
              `>> EXPEDIENTE ENCONTRADO: ${piece.data.title}`,
              `>> UBICACIÓN: ${piece.data.subject}`,
              `>> GPS: ${piece.data.coords}`,
              `>> FALLO REGISTRADO: ${piece.data.error_message}`,
              `>> REGISTRO: ${piece.data.manifest_text}`
            ];
          } else {
            response = [`>> ERROR 404: CÓDIGO [${args[1] || 'NULL'}] NO LOCALIZADO`];
          }
          break;
        case 'CLEAR':
          setHistory([]);
          setInput('');
          return;
        case 'EXIT':
          window.location.href = '/archivo';
          return;
        default:
          response = [`COMANDO INVÁLIDO: "${cmd}". ESCRIBA "HELP".`];
      }

      setHistory(prev => [...prev, `SYS_USER:/> ${input}`, ...response, '']);
      setInput('');
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="w-full h-[85vh] bg-[#0A0A0A] border-4 border-[var(--concreto)] p-6 font-mono-tech text-[var(--verde-acido)] overflow-y-auto">
      {history.map((line, i) => (
        <div key={i} className="leading-relaxed">{line}</div>
      ))}
      <div className="flex items-center mt-2">
        <span className="mr-2 text-[var(--rojo)] font-bold">SYS_USER:/></span>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          className="bg-transparent border-none outline-none text-[var(--verde-acido)] font-mono-tech w-full"
          autoFocus 
        />
      </div>
      <div ref={bottomRef} />
    </div>
  );
}
6. MÓDULO 3: WORKBENCH / GENERADOR INTERNO (/workbench)
Panel privado para agilizar la producción de nuevas piezas y mantener la consistencia entre la web y el canal de Instagram de YUX.

Funcionalidades:
Generador de Entradas Markdown: Formularios con validación en tiempo real de los campos del Schema.

Generador de Captions Instagram Híbrido: Aplica la plantilla oficial de Instagram:

YUX

[MANIFEST_TEXT]

[ERROR_MESSAGE]
YUX-RMB / #[CODE] / [COORDS] / GRID: [GRID_VERSION]

#retromaximalismobruto #diseñográfico #brutalism #retrofuturismo #maximalism #collageart #glitchart #madrid
Previsualizador de Tarjeta: Renderizado en vivo con la escala 3:4 y el color de acento inyectado.

Exportador: Botón [ COPIAR ARCHIVO .MD ] y botón [ COPIAR CAPTION ].

7. MÓDULO 4: SUMINISTROS FÍSICOS (/suministros)
Módulo de e-commerce brutalista/editorial para zines y piezas textiles.

Reglas de Presentación de Ropa:
Separación de los 3 pilares según la guía:

Brutalismo: Ficha técnica impresa en etiqueta externa o manga.

Maximalismo: Gráfico frontal o trasero de gran formato.

Retrofuturismo: Parche reflectante/cromado en bolsillo o cuello.

Estados de Stock: Mostrar indicadores duros tipo terminal:

[BATCH: 01 // SOLD OUT]

[PROTOTIPO // EXPEDIENTE FÍSICO DISPONIBLE]

8. MÓDULO 5: TRANSFERENCIA DE ASSETS (/assets)
Centro de descarga pública para activar la circulación de la identidad fuera de la web:

PRESET_RMB_LIGHTROOM.xmp: Ajustes de color con sombras frías navy (#0B0B1F), medios tonos concreto (#B8B3AA) y luces hueso (#F0EDE6).

YUX_GLYPH_VECTOR.svg: Archivo vectorial escalable del isotipo.

WALLPAPERS_9_16.zip: Compilado de las 8 piezas originales en resolución vertical para smartphones.

Todos los enlaces deben servirse en botones rígidos .win95-btn dentro de contenedores .win95-box.

9. CHECKLIST DE CONSTRUCCIÓN Y VERIFICACIÓN ANTIGRAVITY
Ejecutar la implementación y validar los siguientes puntos antes de la entrega final:

[ ] ¿El layout global incluye el overlay de ruido SVG con pointer-events: none?

[ ] ¿Se eliminaron todos los border-radius y sombras con blur del proyecto?

[ ] ¿El grid principal de /archivo utiliza un contenedor con fondo #0A0A0A y gap: 2px para formar las juntas de corte brutalistas?

[ ] ¿El titular en la página de detalle /archivo/[code] está rotado verticalmente a 90 grados mediante writing-mode: vertical-rl?

[ ] ¿Cada pieza inyecta su propio accent_color de forma aislada en sus elementos destacados?

[ ] ¿Se implementó la ruta /mapa con el mapa táctico en escala de grises oscuros y miras de intercepción?

[ ] ¿La ruta /terminal ejecuta los comandos requeridos y reproduce clicks mecánicos con la Web Audio API?

[ ] ¿La ruta /workbench genera el YAML y el caption de Instagram sin errores de formato?