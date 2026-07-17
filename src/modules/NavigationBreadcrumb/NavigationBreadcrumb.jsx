import './navigation-breadcrumb.css'
import { Icon } from '../../components/Icon/Icon'

/**
 * Navigation / Breadcrumb — node 58084:30166 en Figma (COMPONENT_SET:
 * Device=desktop/mobile). Barra de navegación "volver" a todo el ancho:
 * flecha izquierda + texto de la sección anterior.
 *
 * Construido antes de lo previsto en el orden del plan porque es una
 * dependencia real de Hero / Section header (lo compone directamente en
 * Figma) — mismo criterio del proyecto de "construir antes lo que es base
 * de otros, para no rehacer trabajo".
 *
 * La propiedad "Device" es responsive real (media query en `768px`). Se
 * detectó que el fondo SÍ cambia entre breakpoints (no solo el tamaño):
 * `--color-surface-neutral-1` en desktop, `--color-surface-base` en mobile
 * — respetado tal cual.
 */
export function NavigationBreadcrumb({ text = 'Previous section', href, onClick, className, ...rest }) {
  const classes = ['navigation-breadcrumb', className].filter(Boolean).join(' ')

  const content = (
    <>
      <Icon name="ArrowLeft" size="m" className="navigation-breadcrumb__icon" />
      <span className="navigation-breadcrumb__text">{text}</span>
    </>
  )

  return (
    <nav className={classes} aria-label="Volver a la sección anterior" {...rest}>
      {href ? (
        <a href={href} className="navigation-breadcrumb__link" onClick={onClick}>
          {content}
        </a>
      ) : (
        <button type="button" className="navigation-breadcrumb__link" onClick={onClick}>
          {content}
        </button>
      )}
    </nav>
  )
}

export default NavigationBreadcrumb
