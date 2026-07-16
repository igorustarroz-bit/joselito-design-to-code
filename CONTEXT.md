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

## Notas de entorno

- `vite-plugin-svgr` está declarado en `package.json` y configurado en `vite.config.js`, pero no pudo instalarse (`npm install`) durante el scaffolding inicial por una limitación puntual del entorno sandbox usado para crearlo. Se resuelve solo con `npm install` en local.
- Storybook se configuró manualmente (`.storybook/main.js` y `preview.jsx`) en vez de vía `npx storybook init`, porque el asistente que hizo el scaffolding inicial no tenía acceso de red a los CDNs que usa el instalador interactivo. La configuración es funcional y equivalente.
