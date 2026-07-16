import './button.css'
import { IconCalendarBlank, IconArrowRight } from './icons'

/**
 * UI02-Button — botón de acción principal (node 49038:9189 en Figma).
 * Existen tres tipos (Primary/Secondary/Terciary) y cuatro tamaños (L/M/S/XS).
 *
 * Estados Hover y Focus son automáticos (:hover / :focus-visible). Selected y
 * Disabled se controlan mediante props porque son estados de aplicación, no
 * de interacción del puntero (mismo criterio que UI01-Nav-Button).
 */
export function Button({
  type = 'primary',
  size = 'l',
  text = 'Button',
  showIconLeft = false,
  showIconRight = false,
  selected = false,
  disabled = false,
  href,
  className,
  onClick,
  ...rest
}) {
  const content = (
    <>
      {showIconLeft && <IconCalendarBlank className="btn__icon" />}
      <span className="btn__label">{text}</span>
      {showIconRight && <IconArrowRight className="btn__icon" />}
    </>
  )

  const classes = ['btn', `btn--${size}`, className].filter(Boolean).join(' ')

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        className={classes}
        data-type={type}
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
      aria-current={selected ? 'page' : undefined}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {content}
    </button>
  )
}

export default Button
