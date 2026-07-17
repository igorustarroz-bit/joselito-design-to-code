# CONTEXT — Joselito Design to Code

## Proyecto

Traducción a código de la librería de diseño de Joselito (Figma) para un proyecto **web**. Documentación e instrucciones de trabajo en español.

- Figma: [Joselito Library](https://www.figma.com/design/xtL6cbqN94yw7pAlr8k1NK/Joselito-Library?node-id=57952-20009) (fileKey `xtL6cbqN94yw7pAlr8k1NK`)
- GitHub: https://github.com/igorustarroz-bit/joselito-design-to-code
- La librería de Figma **no está publicada** (se lee con `use_figma`, no con `search_design_system`).
- Módulo de referencia mejor construido en Figma: **Content / Text + Image** (`58163:39941`) — usar como base de comparación de calidad para el resto de módulos.

## Stack

- **Framework**: React 19 + Vite 8
- **Estilos**: Tailwind CSS v4 (plugin `@tailwindcss/vite`, sin `tailwind.config.js` clásico — configuración vía `@import "tailwindcss"` en `src/index.css`). La estética la define Figma, Tailwind es solo la capa de utilidades.
- **Animaciones**: GSAP
- **Documentación / visualización**: Storybook 10 (`@storybook/react-vite`, addon `@storybook/addon-docs`)
- **Assets**: `src/assets/{icons,logos,images}` — SVGR (`vite-plugin-svgr`) para iconos/logos (`currentColor`, color heredado por token), WebP para fotografías. Ver `docs/assets-workflow.md`.
- **Lint**: oxlint

## Estructura del proyecto

```
src/
├── assets/           # icons, logos, images (ver docs/assets-workflow.md)
├── App.jsx
├── main.jsx
└── index.css         # @import "tailwindcss"
.storybook/
├── main.js
└── preview.jsx
docs/
└── assets-workflow.md
CONTEXT.md
PLAN.md
```

A medida que se construyan componentes y módulos, se organizarán en `src/components/` (componentes base) y `src/modules/` (contenedores 100% ancho de viewport), cada uno con su `Componente.jsx`, `Componente.stories.jsx` y `Componente.mdx` (documentación).

## Tokens (Figma Variables)

Tres colecciones de variables en el archivo Figma, a traducir como tokens de diseño:

| Colección | Nº variables | Modos |
|---|---|---|
| **Primitives** | 133 | Joselito (único modo — valores base: color, espaciado, tipografía) |
| **Responsive** | 130 | XS-375, SM-480, M-768, LG-1024, XL-1440, XXL-1620, XXXL-1920 (breakpoints) |
| **Semantic-Color** | 276 | Light-White, Light-Grey, Dark-Red-Primary, Dark-Black-Neutral, Light-Yellow (temas) |

- Los modos de **Semantic-Color** se implementan como `data-theme` en el contenedor raíz de cada componente/módulo; un hijo puede sobreescribir el tema heredado (p. ej. footer oscuro + bloque social en light-white).
- Los modos de **Responsive** son breakpoints CSS sobre un grid de 12 columnas. En Storybook se exponen como selectores globales (modo / marca / breakpoint).
- Orden de trabajo de tokens: primero **Primitives**, después **Responsive**, después **Semantic-Color** (semánticos dependen de los primitivos).

## Convenciones de código

- Ningún valor de color/espaciado/tipografía se hardcodea: todo viene de tokens/variables.
- Contenedores con hijos estructuralmente relacionados usan flexbox/grid según auto-layout de Figma.
- Cada componente/módulo se documenta en Storybook con secciones: Intro, Demo, Anatomía (solo módulos), Subtemas por tema semántico, Comportamiento, Variantes y tamaños, Tokens, Propiedades, Accesibilidad, Componentes relacionados.
- Las cajas de demo en Storybook no tienen tamaño fijo — dependen del contenido.
- **Sección "Variantes y tamaños"**: todas las variantes se muestran juntas, en una sola caja de demo (`<Canvas>`, igual que la sección Demo), en fila con `flex-wrap`, cada una con su título encima — nunca como tabla markdown sola ni como varios `<Story>` sueltos apilados. Se usa el helper `VariantGrid`/`VariantSwatch` de `src/stories/VariantSwatch.jsx` desde el `.stories.jsx` de cada componente (export `AllVariants`/`AllTypes`/`AllSizes`, según convenga), referenciado en el `.mdx` con un único `<Canvas of={Stories.AllX} />`. Los `<Story>` individuales se reservan para casos concretos (un estado, un ejemplo con icono, etc.), no para recorrer variantes.
- **Componentes fundacionales fuera de "📦 Components"**: Figma incluye piezas que se tratan como componentes base aunque vivan en otras páginas — **Aspect Ratio** (página "📐 Foundations"), **Icons** e **Brand Logo** (página "🏷️ Brand Assets"). Van los primeros en el orden de construcción de componentes (antes que UI01), ya que otros componentes/módulos dependen de ellos (Aspect Ratio, en particular, lo usan casi todos los módulos y tarjetas con imagen).
- **Grid de 12 columnas (obligatorio en todos los módulos)**: todo módulo (`src/modules/`) se construye sobre la retícula compartida de `src/styles/grid.css`, nunca con anchos de columna hardcodeados en píxeles. Dos técnicas según el caso:
  - **Grid real** (`display:grid` + `.grid-12` + `.col-span-N`/`.col-start-N`): cuando el layout necesita columnas explícitas, incluyendo columnas vacías intencionadas (p. ej. una imagen que ocupa 4 columnas y deja 2 columnas de aire antes de la siguiente). Verificar siempre con `use_figma` el ancho real en px y compararlo con el ancho de columna calculado (`(ancho_contenido - 11×gutter) / 12`) antes de elegir el span — varios "huecos raros" que parecían artefactos de Figma (136px, 248px) resultaron ser exactamente 1 o 2 columnas vacías con su gutter.
  - **Anchos equivalentes por `calc()`**: para filas simples de 2 elementos (p. ej. imagen + bloque de texto) donde no hace falta la maquinaria completa de grid, se define `--col-unit: calc((100% - 11 * var(--grid-gutter)) / 12)` en el contenedor y cada hijo usa `width: calc(N * var(--col-unit) + (N-1) * var(--grid-gutter))` para N columnas — evita reescribir el layout a flex→grid cuando no aporta nada.
  - El margen lateral de todo módulo es siempre `padding-inline: var(--grid-margin-default)` (nunca un valor literal) y el gap entre columnas es siempre `var(--grid-gutter)`, salvo un gap deliberadamente distinto del gutter estándar (editorial, no de rejilla), que se documenta explícitamente como excepción.
  - **Corrección importante (auditoría del punto 15 de las instrucciones)**: `--grid-margin-default` se corrigió de 32px/16px (valor de la variable Figma `Wrapper-Default`) a 60px/20px, porque TODAS las instancias de módulo ya construidas usan ese valor de forma consistente y el usuario confirmó que el visual real tiene prioridad sobre el nombre de la variable — ver comentario extenso en `responsive.css`.

## Notas de entorno

- `vite-plugin-svgr` está declarado en `package.json` y configurado en `vite.config.js`, pero no pudo instalarse (`npm install`) durante el scaffolding inicial por una limitación puntual del entorno sandbox usado para crearlo. Se resuelve solo con `npm install` en local.
- Storybook se configuró manualmente (`.storybook/main.js` y `preview.jsx`) en vez de vía `npx storybook init`, porque el asistente que hizo el scaffolding inicial no tenía acceso de red a los CDNs que usa el instalador interactivo. La configuración es funcional y equivalente.
