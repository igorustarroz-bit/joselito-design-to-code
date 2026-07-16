import './button-icon.css'
import { IconArrowRight } from '../Button/icons'

/**
 * UI03-Button-Icon — botón cuadrado de solo icono (node 49038:9364 en Figma).
 * Mismos tipos y tokens de color que UI02-Button (Primary/Secondary/Terciary),
 * pero sin texto: el icono es el único contenido, por lo que requiere
 * `aria-label` (o `aria-labelledby`) obligatorio para ser accesible.
 *
 * Tamaños: L/M/S/XS (los tres tipos) y XL (solo definido para Primary en
 * Figma, pero disponible aquí por si se necesita para los otros tipos).
 *
 * Estados Hover y Focus son automáticos (:hover / :focus-visible). Selected y
 * Disabled se controlan mediante props (mismo criterio que Nav Button/Button).
 */
export function ButtonIcon({
  type = 'primary',
  size = 'l',
  icon,
  selected = false,
  disabled = false,
  href,
  className,
  onClick,
  'aria-label': ariaLabel,
  ...rest
}) {
  const content = <span className="btn-icon__icon-wrap">{icon ?? <IconArrowRight className="btn-icon__icon" />}</span>

  const classes = ['btn-icon', `btn-icon--${size}`, className].filter(Boolean).join(' ')

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        className={classes}
        data-type={type}
        aria-label={ariaLabel}
        aria-current={selected ? 'page' : undefined}
        aria-disabled={disabled || undefined}
        onClick={disabled ? undefined : onClick}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={classes}
      data-type={type}
      aria-label={ariaLabel}
      aria-current={selected ? 'page' : undefined}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {content}
    </button>
  )
}

export default ButtonIcon
