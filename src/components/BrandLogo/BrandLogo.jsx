import HorizontalLogo from '../../assets/logos/BrandLogoHorizontal.svg?react'
import SquareLogo from '../../assets/logos/BrandLogoSquare.svg?react'
import './brand-logo.css'

/**
 * BrandLogo — traduce el componente "Brand Logo" de Figma (node 58073:6883,
 * página "🏷️ Brand Assets", fuera de "📦 Components" — mismo criterio que
 * Aspect Ratio e Icons: componente fundacional). Variantes Figma
 * `Horizontal=Yes` (logotipo completo, node 51027:4369) y `Horizontal=No`
 * (marca circular, node 51027:4368), traducidas aquí como la prop `variant`
 * (`'horizontal'` | `'square'`).
 *
 * ADVERTENCIA para el equipo: en esta misma página existe otro frame llamado
 * "Logo Grid" (node 51027:8208, variantes `Type=Horizontal`/`Type=Square`)
 * que, pese al nombre casi idéntico, NO contiene el logo real — son solo
 * guías de retícula/clearspace (líneas azules de construcción) sin ningún
 * trazo de marca. El master real usado aquí vive en el frame "Brand Logo"
 * dentro de "Icons" > "Logo" (node 58073:6883). Si en el futuro Figma
 * reorganiza estas páginas, verificar con `exportAsync` que el nodo elegido
 * realmente contiene trazos (`fill`/`d` no vacíos) antes de reusar un ID.
 *
 * Color: igual convención que Icon — el SVG fuente usa `fill="currentColor"`
 * (transformado desde el `fill="black"` que exporta Figma), por lo que el
 * color lo controla la propiedad CSS `color` del contenedor. Figma no define
 * ninguna variable de Semantic-Color enlazada a este componente (fills sin
 * `boundVariables`, verificado con `use_figma`) — es una marca monocroma fija
 * pensada para fondos claros; no hay variantes de color en el archivo.
 *
 * Tamaño: sin tamaños fijos en Figma (un único frame de 300×200 / 200×200
 * por variante). Se deja que el logo escale por `width`/`height` en CSS o
 * props, igual criterio que otros vectores del sistema (Icon, iconos de
 * Button/NavButton).
 */
export function BrandLogo({ variant = 'horizontal', className, title = 'Joselito', ...rest }) {
  const Logo = variant === 'square' ? SquareLogo : HorizontalLogo
  const classes = ['brand-logo', `brand-logo--${variant === 'square' ? 'square' : 'horizontal'}`, className]
    .filter(Boolean)
    .join(' ')

  const a11yProps = title
    ? { role: 'img', 'aria-label': title }
    : { 'aria-hidden': 'true', focusable: 'false' }

  return <Logo className={classes} {...a11yProps} {...rest} />
}

export default BrandLogo
