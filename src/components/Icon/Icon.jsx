import './icon.css'

/**
 * Icon — traduce los 132 iconos + "Icon Sizer" (5 tamaños) de la página
 * "🏷️ Brand Assets" de Figma (fuera de "📦 Components", igual criterio que
 * Aspect Ratio y Brand Logo: componente fundacional).
 *
 * Primer uso real del pipeline SVGR ya declarado en `docs/assets-workflow.md`
 * (`vite-plugin-svgr`, `?react` query): cada `.svg` de `src/assets/icons/`
 * se importa como componente React vía `import.meta.glob`, construyendo un
 * mapa `name -> Component` en tiempo de build. Los iconos anteriores
 * (NavButton, Button, Accordion, Title, CardProduct...) se recrearon a mano
 * porque cada componente solo necesitaba 1-2 iconos; con 132 iconos aquí sí
 * compensa usar el pipeline de assets declarado desde el principio del
 * proyecto.
 *
 * Color: cada SVG fuente usa `stroke="currentColor"` / `fill="currentColor"`
 * (transformado desde el `stroke="black"`/`fill="black"` que exporta Figma
 * por defecto) — el color lo controla la propiedad CSS `color` heredada del
 * contenedor, nunca se hardcodea aquí.
 *
 * Tamaño: prop `size` mapea a los 5 tamaños de "Icon Sizer" (XXS/XS/S/M/L),
 * vía clases `.icon--{size}` en `icon.css`. Los valores (12/16/20/24/32px)
 * coinciden numéricamente con los tokens `--spacing-fx-3/4/5/6/8` ya
 * existentes en `primitives.css` — se reutilizan esos, no se crean tokens
 * nuevos de tamaño.
 */
const iconModules = import.meta.glob('../../assets/icons/*.svg', {
  eager: true,
  query: '?react',
  import: 'default',
})

const ICONS = Object.fromEntries(
  Object.entries(iconModules).map(([path, Component]) => {
    const name = path.match(/([^/]+)\.svg$/)[1]
    return [name, Component]
  })
)

const SIZES = ['xxs', 'xs', 's', 'm', 'l']

export function Icon({ name, size = 'm', className, title, ...rest }) {
  const SvgIcon = ICONS[name]

  if (!SvgIcon) {
    if (import.meta.env?.DEV) {
      console.warn(`Icon: no existe ningún icono registrado con name="${name}"`)
    }
    return null
  }

  const modifier = SIZES.includes(size) ? size : 'm'
  const classes = ['icon', `icon--${modifier}`, className].filter(Boolean).join(' ')

  const a11yProps = title
    ? { role: 'img', 'aria-label': title }
    : { 'aria-hidden': 'true', focusable: 'false' }

  return <SvgIcon className={classes} {...a11yProps} {...rest} />
}

export default Icon
