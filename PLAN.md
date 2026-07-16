# PLAN — Joselito Design to Code

Generado automáticamente analizando los masters del archivo Figma (páginas `📐 Foundations`, `📦 Components` y `- Modules`), ya que todos los componentes y módulos están creados como master en Figma.

Estados posibles: `pendiente` · `en progreso` · `completado`

## 1. Tokens

Orden: primitivas primero, luego semánticos/responsive.

| Token | Estado |
|---|---|
| Primitives (color, espaciado, tipografía) | completado |
| Responsive (breakpoints: XS-375, SM-480, M-768, LG-1024, XL-1440, XXL-1620, XXXL-1920) | completado |
| Semantic-Color (temas: Light-White, Light-Grey, Dark-Red-Primary, Dark-Black-Neutral, Light-Yellow) | completado |

## 2. Componentes

Orden: primero los que son base de otros (botones, tabs/listbox dependen de sus fragmentos internos `z_fragment_*`).

| Componente | Estado |
|---|---|
| UI01 · Nav Button | completado |
| UI02 · Button | pendiente |
| UI03 · Button Icon | pendiente |
| UI04 · Button Action Link | pendiente |
| UI05 · Tabs (incl. z_fragment_tab_primary / secondary) | pendiente |
| UI06 · Input | pendiente |
| UI07 · Listbox (incl. z_fragment_listbox_Item_Dropdown) | pendiente |
| UI08 · Checkbox List | pendiente |
| UI09 · Checkbox + Label | pendiente |
| UI10 · Checkboxes & Radios | pendiente |
| UI11 · Form | pendiente |
| UI12 · Tag | pendiente |
| UI13 · Accordion | pendiente |
| UI14 · Placeholder Text | pendiente |
| Title | pendiente |
| Card Product | pendiente |
| Card Link | pendiente |
| Card Carrusel | pendiente |

## 3. Módulos

Contenedores 100% ancho de viewport.

| Módulo | Estado |
|---|---|
| Content / Text + Image ⭐ (referencia de calidad, usar como base) | pendiente |
| Content / Text only | pendiente |
| Content / Image only | pendiente |
| Content / Title | pendiente |
| Content / Intro text | pendiente |
| Hero / Section hero | pendiente |
| Hero / Section header | pendiente |
| Hero / Homepage hero | pendiente |
| List / Characteristics | pendiente |
| List / Numbers | pendiente |
| List / Timeline | pendiente |
| List / Archive table (incl. z_fragment-Table List Item) | pendiente |
| Cards / Links | pendiente |
| Cards / Gallery | pendiente |
| Cards / Product carousel | pendiente |
| Cards / Showcase | pendiente |
| Cards / Categories | pendiente |
| Cards / Accordion | pendiente |
| Navigation / Secondary menu | pendiente |
| Navigation / PreviousNext | pendiente |
| Navigation / Breadcrumb | pendiente |
| Navigation / Footer | pendiente |
| Navigation (header principal) | pendiente |
| Menu | pendiente |
| Form (módulo) | pendiente |
| Banners / Section banner | pendiente |
| Toast | pendiente |

## Siguiente paso

Seguir con **UI02 · Button** y **UI03 · Button Icon**.

## Notas de implementación

- **Primitives**: `src/styles/tokens/primitives.css` (`@theme` de Tailwind v4, importado desde `src/index.css`), catálogo de nombres en `src/tokens/primitives.js`, documentado en Storybook en `src/stories/tokens/Primitives.mdx`. Se detectó una inconsistencia en Figma (`Font-Weight/Title-Black` y `Title-Bold` con el mismo valor no válido como peso CSS) — pendiente de aclarar con diseño, documentada en el propio Storybook.
- **Responsive**: `src/styles/tokens/responsive.css` — breakpoints redefinidos en `@theme` (`--breakpoint-xs/sm/m/lg/xl/xxl/xxxl`, sustituyendo la escala por defecto de Tailwind) + variables en `:root` sobrescritas mobile-first dentro de `@media (min-width: ...)` para grid de 12 columnas, escala tipográfica fluida, espaciado responsive y radios. Documentado en `src/stories/tokens/Responsive.mdx`. Alcance limitado a lo fundacional: los valores responsive específicos de Button/Forms/Input de esta misma colección Figma se traducirán al construir esos componentes. Los "Cols Size" en px de Figma no se tradujeron como tokens (se construye el grid con `grid-template-columns: repeat(12, 1fr)` + `gap`). Se detectó que `Corners/L` no varía de forma monótona entre breakpoints en el propio Figma (18px en XL, vuelve a 12px en XXL) — respetado tal cual.
- **Semantic-Color**: `src/styles/tokens/semantic.css` — 5 temas vía `[data-theme="..."]` (`light-white` por defecto en `:root`, `light-grey`, `dark-red-primary`, `dark-black-neutral`, `light-yellow`). Roles traducidos: `Backgrounds` → `--color-surface-*`, `Texts` → `--color-content-*`, `Strokes-Icons` → `--color-icon-*`. Documentado en `src/stories/tokens/Semantic.mdx`, con selector global "Tema" añadido a la toolbar de Storybook (`.storybook/preview.jsx`, aplica `data-theme` a `<html>`) — reutilizable para todos los componentes futuros. Alcance limitado a roles globales: `Button/*` y `Forms/*` de esta misma colección se traducirán al construir esos componentes.
- **UI01 · Nav Button**: `src/components/NavButton/`. Se añadieron los tokens `Button/Nav/*` (fill/stroke/text/icon × 5 estados × 5 temas) a `semantic.css` (`--color-nav-*`) y el layout fijo (`--nav-button-height/padding-x/min-width`, constante en los 7 breakpoints de Figma) en `nav-button.css` del propio componente. Hover/Focus son pseudo-clases CSS; Selected/Disabled son props (`selected` → `aria-current="page"`, `disabled`). Iconos (`IconGlobe`, `IconChevronDown`) recreados a mano como SVG con `currentColor` en vez de usar los assets rasterizados exportados por Figma (efímeros, expiran en 7 días). Documentación completa en `NavButton.mdx`.
