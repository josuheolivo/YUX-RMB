# YUX // RMB ARCHIVE (V2.0 MASTER ARCHITECTURE)

> **Retromaximalismobruto (RMB):** Estética de *tensión sin resolver* entre tres fuerzas:  
> la honestidad estructural del **Brutalismo**, el desborde emocional del **Maximalismo** y la ironía tecnológica del **Retrofuturismo**.

---

## 🏛️ 1. Los Tres Pilares del Estilo

| Corriente | Aporte al Sistema | Qué NO se toma |
| :--- | :--- | :--- |
| **Brutalismo** | Grid rígido, tipografía monumental condensada, juntas de corte de 2px, `border-radius: 0px !important`, sombras de corte duro, metadatos y coordenadas GPS reales. | El minimalismo cromático estéril. |
| **Maximalismo** | Grano SVG permanente de alta fricción, capas de información, choque cromático, aberración en hover y carga narrativa poética. | El desorden gratuito sin retícula de base. |
| **Retrofuturismo** | Ventanas de error y biseles estilo Windows 95/98, emulador TTY CRT con síntesis de audio IBM Model M, miras crosshair `[+]` y planos 2D wireframe. | El look "limpio" y corporativo de sci-fi genérico. |

---

## 🧭 2. Arquitectura de Rutas y Módulos

```text
/
├── /archivo                  <- Catálogo general en cuadrícula 3:4 brutalista (gap 2px)
│   └── /[code]               <- Ficha técnica con titular rotado a 90° y diálogo Win95
├── /mapa                     <- Cartografía forense de Madrid (Radar táctico Leaflet)
├── /terminal                 <- Consola CRT interactiva con Web Audio API
├── /workbench                <- Generador interno (SHA-256), captions IG y gestor de leads
├── /suministros              <- Módulo textil con plano técnico 2D wireframe y waitlist
├── /assets                   <- Descargas de LUTs y wallpapers + solicitud protegida de SVG
├── /manifiesto               <- Log fundacional de 9 principios y mitología ficcional 2029
└── /admin                    <- Panel Decap CMS conectado vía Git Gateway
```

---

## 🎨 3. Paleta de Color Oficial

* **Base Neutra (80% de la superficie):**
  * Concreto: `#B8B3AA`
  * Hueso / Off-white: `#F0EDE6`
  * Negro Tinta: `#0A0A0A`

* **Acentos Fríos (Holográficos):**
  * Violeta cromo: `#8B5CF6`
  * Cian eléctrico: `#4DE8F4`
  * Magenta láser: `#FF3EA5`
  * Navy profundo: `#0B0B1F`

* **Acentos Cálidos (Pigmento):**
  * Rojo señal: `#C41E1E`
  * Amarillo pigmento: `#FFD100`
  * Verde ácido: `#39FF6A`
  * Naranja spray: `#FF6B00`

> **Regla de oro cromática:** Base neutra siempre dominante + un solo acento por pieza/página. Nunca dos acentos compitiendo al 50/50.

---

## 🔒 4. Control de Marca y Protección del Isotipo

Para evitar copias y preservar la autenticidad de la identidad de Josuhe RMB:
* La descarga pública del isotipo vectorial `.SVG` en `/assets` está **bloqueada**.
* Los interesados completan una solicitud Win95 indicando su correo y **exposición de motivos**.
* Todas las solicitudes se almacenan localmente y se transmiten al Google Sheets conectado.
* Josuhe puede revisar el motivo de cada solicitante desde `/workbench` (Pestaña 04) y remitir el vector maestro personalmente con un solo clic vía `[ ENVIAR LOGO VÍA EMAIL ]`.

---

## 🚀 5. Comandos de Desarrollo y Producción

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo en localhost:4321
npm run dev

# Compilar proyecto a archivos estáticos (dist/)
npm run build

# Previsualizar la versión de producción
npm run preview
```

---

## 📝 6. Flujo para Agregar Nuevas Piezas

1. Abre `/workbench` en tu navegador (o usa el panel `/admin`).
2. Ingresa los parámetros forenses (código de 3 dígitos, título `"SUJETO // FALLO"`, coordenadas GPS reales, mensaje de error y color de acento).
3. Previsualiza la tarjeta en tiempo real a escala 3:4.
4. Haz clic en `[ COPIAR ARCHIVO .MD ]` o `[ DESCARGAR .MD ]` y coloca el archivo en `src/content/piezas/`.
5. Coloca la imagen correspondiente en `src/assets/` con el mismo código (ej. `009.jpg`).
6. El sitio compilará automáticamente la ficha técnica y la integrará en `/archivo`, `/mapa` y la navegación secuencial sin tocar código CSS o HTML.
