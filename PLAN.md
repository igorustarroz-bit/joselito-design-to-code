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
| UI02 · Button | completado |
| UI03 · Button Icon | completado |
| UI04 · Button Action Link | completado |
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

Seguir con **UI05 · Tabs** (incl. z_fragment_tab_primary / secondary).

## Notas de implementación

- **Primitives**: `src/styles/tokens/primitives.css` (`@theme` de Tailwind v4, importado desde `src/index.css`), catálogo de nombres en `src/tokens/primitives.js`, documentado en Storybook en `src/stories/tokens/Primitives.mdx`. Se detectó una inconsistencia en Figma (`Font-Weight/Title-Black` y `Title-Bold` con el mismo valor no válido como peso CSS) — pendiente de aclarar con diseño, documentada en el propio Storybook.
- **Responsive**: `src/styles/tokens/responsive.css` — breakpoints redefinidos en `@theme` (`--breakpoint-xs/sm/m/lg/xl/xxl/xxxl`, sustituyendo la escala por defecto de Tailwind) + variables en `:root` sobrescritas mobile-first dentro de `@media (min-width: ...)` para grid de 12 columnas, escala tipográfica fluida, espaciado responsive y radios. Documentado en `src/stories/tokens/Responsive.mdx`. Alcance limitado a lo fundacional: los valores responsive específicos de Button/Forms/Input de esta misma colección Figma se traducirán al construir esos componentes. Los "Cols Size" en px de Figma no se tradujeron como tokens (se construye el grid con `grid-template-columns: repeat(12, 1fr)` + `gap`). Se detectó que `Corners/L` no varía de forma monótona entre breakpoints en el propio Figma (18px en XL, vuelve a 12px en XXL) — respetado tal cual.
- **Semantic-Color**: `src/styles/tokens/semantic.css` — 5 temas vía `[data-theme="..."]` (`light-white` por defecto en `:root`, `light-grey`, `dark-red-primary`, `dark-black-neutral`, `light-yellow`). Roles traducidos: `Backgrounds` → `--color-surface-*`, `Texts` → `--color-content-*`, `Strokes-Icons` → `--color-icon-*`. Documentado en `src/stories/tokens/Semantic.mdx`, con selector global "Tema" añadido a la toolbar de Storybook (`.storybook/preview.jsx`, aplica `data-theme` a `<html>`) — reutilizable para todos los componentes futuros. Alcance limitado a roles globales: `Button/*` y `Forms/*` de esta misma colección se traducirán al construir esos componentes.
- **UI01 · Nav Button**: `src/components/NavButton/`. Se añadieron los tokens `Button/Nav/*` (fill/stroke/text/icon × 5 estados × 5 temas) a `semantic.css` (`--color-nav-*`) y el layout fijo (`--nav-button-height/padding-x/min-width`, constante en los 7 breakpoints de Figma) en `nav-button.css` del propio componente. Hover/Focus son pseudo-clases CSS; Selected/Disabled son props (`selected` → `aria-current="page"`, `disabled`). Iconos (`IconGlobe`, `IconChevronDown`) recreados a mano como SVG con `currentColor` en vez de usar los assets rasterizados exportados por Figma (efímeros, expiran en 7 días). Documentación completa en `NavButton.mdx`.
- **UI02 · Button**: `src/components/Button/`. Componente único con prop `type` (`primary`/`secondary`/`terciary`) en vez de tres componentes separados, ya que Figma los modela como variantes de un mismo master (`UI02-Button`, node 49038:9189) y la propia descripción del componente en Figma confirma que es una simplificación intencional. Se añadieron los tokens `Button/{Primary,Secondary,Terciary}/*` (fill/stroke/text/icon × 5 estados × 5 temas, 300 variables) a `semantic.css` (`--color-btn-{tipo}-{estado}-*`). Patrón CSS nuevo respecto a Nav Button: cada `[data-type]` fija 4 variables locales (`--btn-fill/stroke/text/icon`) a los tokens "Default", y cada pseudo-clase/atributo de estado las sobreescribe — evita repetir la regla de color en cada combinación tipo×estado. Layout por tamaño (L/M/S/XS: altura, padding, ancho mínimo) constante en los 7 breakpoints de Figma (igual que Nav Button), hardcodeado en `button.css` porque las variables `Layout/Button/*` de Figma no varían entre modos. Tipografía: L/M usan `--text-cta-s` + `--text-cta-l--line-height` (estilo Figma "CTA/03", mezcla intencional de escalas SZ/LH); S usa `--text-cta-xs` + `--text-cta-m--line-height` ("CTA/02"); XS usa `--text-cta-xs` + `--text-cta-s--line-height` ("CTA/01") — verificado leyendo cada tamaño en Figma, no asumido. Iconos (`IconCalendarBlank`, `IconArrowRight`) recreados a mano como SVG con `currentColor`, escalados por tamaño vía CSS (24/20/20/16px). Documentación completa en `Button.mdx`.
- **UI03 · Button Icon**: `src/components/ButtonIcon/`. Botón cuadrado de solo icono; reutiliza exactamente los mismos tokens de color `--color-btn-{primary|secondary|terciary}-*` de UI02 · Button (confirmado en Figma: ambos componentes referencian las mismas variables `Button/{Tipo}/{Estado}/*`), por lo que no se añadió ningún token semántico nuevo. Prop `icon` acepta cualquier elemento SVG (por defecto una flecha de ejemplo reutilizada de `Button/icons.jsx`); requiere `aria-label` obligatorio al no tener texto visible. Tamaños XL/L/M/S/XS con caja cuadrada constante en los 7 breakpoints (igual que Button), pero el radio de esquina sí usa los tokens responsive de `Corners` (`--radius-m`, `--radius-xs`, `--radius-l`) en vez de un valor fijo, ya que estos sí varían por breakpoint en Figma. Se verificó en Figma una diferencia real (no un error): Secondary/Terciary usan icono de 24px en L/M mientras Primary usa 20px, igualándose los tres a 20px en S y 16px en XS. XL solo está definido para Primary en el archivo Figma (Secondary/Terciary no tienen esa variante), documentado como tal. Documentación completa en `ButtonIcon.mdx`.
- **UI04 · Button Action Link**: `src/components/ActionLink/`. Enlace de acción subrayado sin fondo — un único tipo visual ("Link Primary") en tamaños L/M/S. Se añadieron los tokens `Button/Link Primary/*` (fill/stroke/text/icon × 5 estados × 5 temas, 100 variables) a `semantic.css` (`--color-btn-link-primary-*`); "fill"/"stroke" de Figma se traducen como el color del `border-bottom` (subrayado), no hay caja de fondo real. Figma no define variante "Selected" para este componente, pero se implementó el prop `selected` (`aria-current`) igualmente por consistencia con el resto de botones, ya que el token sí existe en Semantic-Color. Tipografía y gap por tamaño verificados en Figma (L: CTA/03 + gap 8px + padding-bottom 8px; M: CTA/02 + gap 8px; S: CTA/01 + gap 4px). Documentación completa en `ActionLink.mdx`.
