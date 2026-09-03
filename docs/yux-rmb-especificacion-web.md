# YUX // RMB Archive — Especificación para desarrollo web

Documento para entregar a un agente de desarrollo (Google Antigravity). Reemplaza la versión anterior (un solo HTML con imágenes en base64) por un sitio real, ligero y escalable — pensado para poder agregar piezas nuevas indefinidamente sin que el sitio crezca de forma descontrolada.

---

## 0. Constitución del proyecto (reglas no negociables)

Estas reglas gobiernan cualquier decisión de implementación. Si una elección técnica entra en conflicto con alguna de estas, gana la regla.

1. **Las imágenes nunca van embebidas en el HTML/JS.** Deben servirse como archivos optimizados, con lazy loading y tamaños responsivos (srcset). El sitio anterior falló en esto — es la razón de esta migración.
2. **Cada pieza es una entidad de datos, no HTML escrito a mano.** Agregar una pieza nueva = agregar una entrada de datos + una imagen. Nunca debe requerir tocar el layout o el CSS.
3. **Cada pieza tiene su propia URL** (página de detalle), no solo una tarjeta en una grilla — son piezas de archivo, deben poder compartirse individualmente.
4. **La paleta, tipografía y textura siguen el sistema RMB tal cual está definido abajo (sección 2) — no se improvisa ni se "moderniza" el estilo.**
5. **Accesibilidad no es opcional**: alt text obligatorio por imagen (usa el título de la pieza), contraste verificado, HTML semántico, navegable por teclado.
6. **Rendimiento**: Lighthouse performance ≥ 90 en la página de archivo con 20+ piezas cargadas. Si no se cumple, revisar estrategia de carga de imágenes antes de cualquier otra cosa.

---

## 1. Stack técnico recomendado

- **Framework**: generador de sitio estático con soporte de "content collections" (contenido estructurado vía frontmatter/JSON, no HTML manual) y optimización de imágenes integrada — por ejemplo Astro, o Next.js con exportación estática. Se recomienda Astro por su enfoque "content-first" y bajísimo JS por defecto, ideal para un sitio mayormente de contenido/imagen.
- **Estilos**: CSS con custom properties (variables) para los tokens de diseño de la sección 2 — Tailwind es aceptable si se configuran los tokens como theme extendido, no como clases arbitrarias sueltas.
- **Contenido**: cada pieza vive como una entrada de una colección de contenido (un archivo por pieza, frontmatter con los campos de la sección 3), no hardcodeada en componentes.
- **Imágenes**: procesadas por el pipeline de optimización de imágenes del framework (conversión a WebP/AVIF, tamaños responsivos, lazy loading nativo `loading="lazy"`).
- **Hosting**: Vercel o Netlify (deploy automático desde git, gratis en este nivel de tráfico). Dominio propio recomendado en vez de un subdominio del hosting.

---

## 2. Sistema de diseño (tokens exactos)

### Color
```css
--concreto: #B8B3AA;
--hueso: #F0EDE6;
--negro: #0A0A0A;
--rojo: #C41E1E;      /* acento cálido — el que usa el archivo actual */
--violeta: #8B5CF6;   /* acento frío alternativo, uso puntual */
--cian: #4DE8F4;
--magenta: #FF3EA5;
--navy: #0B0B1F;
```
Regla de uso: base neutra (concreto/hueso/negro) dominante siempre; un solo acento por página/pieza — nunca los dos acentos (frío y cálido) al mismo peso visual.

### Tipografía
- **Display/titular**: sans condensada ultra bold, mayúsculas (fallback web-safe: `'Arial Black', Impact, sans-serif`; si se usa una tipografía real, buscar algo tipo Druk/Anton/Neue Machina). Se usa rotada 90° en piezas individuales y horizontal en portadas de sección.
- **Técnica/datos**: monoespaciada (`'Courier New', monospace`) — para ficha técnica, coordenadas, código de catálogo.
- **Cuerpo/manifiesto**: serif legible (Georgia o similar) para los textos largos de cada pieza — contraste intencional contra la tipografía técnica y el display.

### Textura
- Grano fino (ruido SVG turbulence u overlay de textura) sobre el fondo, muy sutil (opacidad ~3-5%).
- Halftone opcional solo si se reprocesan las imágenes — las piezas actuales ya vienen con el halftone aplicado en la imagen misma, no se debe duplicar vía CSS/filtro sobre fotos que no lo llevan.

### Layout
- Grid del archivo: mínimo 300px por tarjeta, `auto-fill`, gap de 2px con fondo negro entre tarjetas (efecto "cuadrícula brutalista").
- Bordes duros, sin `border-radius` en ningún elemento — es parte de la honestidad estructural del sistema.

---

## 3. Modelo de datos de una pieza (schema)

Cada pieza = un objeto/entrada con estos campos exactos:

```yaml
code: "001"                  # correlativo, string con ceros a la izquierda, nunca se reutiliza
title: "NEPTUNO // DILUVIO"  # fórmula: SUJETO // PALABRA DE FALLO
subject: "Fuente de Neptuno, Madrid"
coords: "40°24'54.91\"N 3°41'38.97\"O"   # coordenadas reales, nunca decorativas
date_captured: "YYYY-MM-DD"  # fecha real de la foto base
error_message: "SYS_ERROR: WATER_PRESSURE_CRITICAL"
manifest_text: "El sistema documentaba presión, caudal, mantenimiento..."  # texto largo, voz del sistema
grid_version: "RMB-V1.2"     # versión del sistema de diseño al momento de crear la pieza
image: "001.jpg"             # referencia al archivo de imagen fuente
```

Este schema es el mismo índice maestro ya definido en la guía de diseño RMB (sección 20) — la migración web debe leerse como "el índice maestro, ahora en producción".

---

## 4. Arquitectura de páginas

- **`/` (Home)**: hero con wordmark YUX//RMB + glyph, manifiesto colapsable (texto completo en sección 5), preview de las piezas más recientes, contador `[ARCHIVE STATUS: ACTIVE] — N piezas catalogadas`.
- **`/archivo`**: grid completo de todas las piezas, cada tarjeta enlaza a su página de detalle. Filtros opcionales por tipo de sujeto (arquitectura / retrato / abstracto) si el catálogo crece.
- **`/archivo/[code]`**: página de detalle de una pieza — imagen a tamaño completo, título, ficha técnica completa (coordenadas, fecha, código, error), texto/manifiesto completo, navegación prev/siguiente por código de catálogo.
- **`/manifiesto`**: el manifiesto completo (sección 5) y la mitología/narrativa del sistema, como página propia — para quien llega directo por ese link.
- **`/contacto`** (opcional): datos de contacto de Josuhe como diseñador, separado del tono ficcional del archivo.

---

## 5. Contenido fijo del sitio

### Manifiesto (para Home y `/manifiesto`)
```
YUX // ARCHIVO RMB
LOG DE SISTEMA — PROTOCOLO 01

Esto no es un log de errores. Es lo único honesto que queda del sistema.

01. Todo monumento es una promesa que el tiempo corrompe. Documentamos la corrupción, no la promesa.
02. La estructura no miente: el concreto no fue diseñado para ocultar nada, y nosotros tampoco.
03. El exceso no es error — es la única respuesta honesta al ruido del mundo real.
04. El futuro ya llegó y no tuvo la decencia de avisar. Encontramos sus restos incrustados en lo que ya existía.
05. Cada pieza es un fragmento de un archivo mayor que nadie terminó de catalogar.
06. Un dato inventado es una mentira con formato de verdad. Toda coordenada en este archivo es real.
07. El error nunca es decoración — es el único lugar donde el sistema dice la verdad sobre sí mismo.
08. No restauramos monumentos. Los archivamos en el momento exacto en que empiezan a fallar.
09. YUX no firma piezas bonitas. Firma evidencia.

FIN DEL LOG — [ARCHIVE STATUS: INCOMPLETE]
```

### Mitología (para `/manifiesto`, texto de contexto)
```
El archivo YUX RMB parte de una premisa ficticia: en algún punto no especificado, un sistema
automatizado fue encargado de documentar el estado estructural de los monumentos y edificios
históricos de Madrid. El sistema empezó a fallar. No dejó de grabar: empezó a grabar mal. Las
ventanas de error que aparecen en cada pieza son el registro literal de esas fallas. Lo que ves
es lo que queda de ese sistema — fotografías reales, procesadas por un proceso que ya no funciona
del todo bien, con las coordenadas y fechas todavía intactas porque esa parte, por ahora, sigue
funcionando.
```

### Glyph (marca del proyecto)
El SVG del glyph ya está diseñado y se adjunta como archivo aparte (`yux-rmb-glyph.svg`) — úsalo tal cual como componente reutilizable (header, footer, favicon).

---

## 6. Contenido de las 8 piezas iniciales (migración de datos)

```yaml
- code: "001"
  title: "NEPTUNO // DILUVIO"
  subject: "Fuente de Neptuno, Madrid"
  coords: "40°24'54.91\"N 3°41'38.97\"O"
  error_message: "SYS_ERROR: WATER_PRESSURE_CRITICAL"
  manifest_text: "El sistema documentaba presión, caudal, mantenimiento. Nunca contempló que el agua decidiera desobedecer. El dios de las aguas ya no responde a los parámetros del monitoreo. Lo que ves no es una fuente: es el registro de un desborde que el protocolo no supo nombrar."
  image: "001.jpg"

- code: "002"
  title: "CXRRUPT LAWS"
  subject: "Congreso de los Diputados, Madrid"
  coords: "Plaza de las Cortes 1, 28014 Madrid"
  error_message: "CRITICAL_EXCEPTION: CONSTITUTION_CORRUPTED"
  manifest_text: "«Aquí yace la democracia» no estaba en los planos originales. El sistema catalogaba columnas, frontones, orden corintio — arquitectura, no contenido. Cuando el archivo empezó a fallar, dejó de distinguir entre el edificio y lo que sucede dentro de él."
  image: "002.jpg"

- code: "003"
  title: "ESTRUCTURA // VACÍO"
  subject: "Calle sin identificar, Madrid"
  coords: "pendiente de confirmar"
  error_message: "ERROR_0704: PATH_NOT_FOUND"
  manifest_text: "Una calle vacía no debería generar ningún error. El sistema esperaba encontrar algo al final del recorrido — un destino, una función, un propósito registrado. A veces lo único honesto que puede documentar el archivo es que no hay nada que documentar."
  image: "003.jpg"

- code: "004"
  title: "BRUTALISM OVERRIDE"
  subject: "Edificio ornamentado sin identificar, Madrid"
  coords: "pendiente de confirmar"
  error_message: "WARNING: RENDER_BUFFER_OVERFLOW"
  manifest_text: "El edificio fue diseñado para no ocultar nada — cada viga, cada tensión, a la vista. El sistema intentó documentar esa honestidad y colapsó bajo su propio peso. No hay memoria suficiente para archivar algo que ya lo estaba diciendo todo."
  image: "004.jpg"

- code: "005"
  title: "YUX – RMB"
  subject: "Retrato, banco de parque"
  coords: "N/A — retrato, no arquitectura"
  error_message: "SSY STTEM FAILURE"
  manifest_text: "«Más es más» no es una consigna, es un registro de fallo. El sistema intentó reducir a una persona a un dato — modo, señas, coordenadas — y el dato se resistió. Ni la interfaz supo cómo escribir bien la palabra que describía lo que estaba pasando."
  image: "005.jpg"

- code: "006"
  title: "ESTRUCTURA // QUIEBRE"
  subject: "Edificio sin identificar, Madrid"
  coords: "pendiente de confirmar"
  error_message: "ERROR_0404: ARCHITECTURE_OVERFLOW"
  manifest_text: "El sistema fue diseñado para catalogar un edificio a la vez. Nadie previó que la arquitectura de una ciudad entera no cabe en un solo archivo. Esto es lo que queda cuando el protocolo se queda sin espacio para seguir contando."
  image: "006.jpg"

- code: "007"
  title: "FALLO EN LA MATRIZ"
  subject: "Pieza abstracta — cadena / cromo sobre grid"
  coords: "sin ubicación real asociada"
  error_message: "ERROR 404: STYLE NOT FOUND"
  manifest_text: "Esta pieza no documenta un lugar: documenta al sistema documentándose a sí mismo. La cadena y el cromo ya no sostienen un monumento — sostienen la idea de que todavía hay un estilo detrás de todo esto."
  image: "007.jpg"

- code: "008"
  title: "MONUMENTO / FALLO"
  subject: "Centro Canalejas, Madrid"
  coords: "Manzana Alcalá / Sevilla / Carrera de San Jerónimo"
  error_message: "ERROR_0722: TIME_CYCLE_CORRUPTED"
  manifest_text: "El reloj seguía marcando la hora mucho después de que el sistema dejara de confiar en el tiempo que marcaba. Centro Canalejas, catalogado, capturado, y ligeramente fuera de sincronía con el resto del archivo."
  image: "008.jpg"
```

Las 8 imágenes fuente (ya redimensionadas y comprimidas para web) vienen adjuntas en `yux-rmb-assets.zip`, nombradas `001.jpg` a `008.jpg` — correspondencia directa con el campo `image` de cada entrada.

---

## 7. Flujo para agregar una pieza nueva (post-lanzamiento)

1. Optimizar la imagen (máx. ~1300px en el lado largo, JPEG calidad ~78-80, o WebP).
2. Crear la entrada de datos con el siguiente código correlativo, siguiendo el schema de la sección 3.
3. El sitio debe generar automáticamente: la tarjeta en `/archivo`, la página de detalle `/archivo/[code]`, y la navegación prev/siguiente — sin tocar código.
4. No se sobrescriben ni reutilizan códigos ni coordenadas de piezas anteriores.

---

## 8. Notas para el agente de desarrollo

- Prioriza legibilidad del código sobre micro-optimización — este proyecto va a crecer con entradas de contenido, no con lógica compleja.
- Genera primero la arquitectura de datos y una sola página de detalle funcionando con una pieza, antes de construir el grid completo — permite validar el schema temprano.
- Verifica contraste de color (rojo sobre hueso, texto sobre negro) contra WCAG AA antes de dar por cerrado el sistema de diseño.
- Adjunto en este paquete: `yux-rmb-glyph.svg` (marca), `yux-rmb-assets.zip` (las 8 imágenes fuente), y `retromaximalismobruto-guia.md` (el sistema de diseño completo, para contexto adicional si hace falta resolver un caso no cubierto aquí).
