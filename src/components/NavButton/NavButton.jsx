import './nav-button.css'
import { IconGlobe, IconChevronDown } from './icons'

/**
 * UI01-Nav-Button — botón de navegación terciario (ej. selector de idioma,
 * item de menú superior). Ver Figma: node 57943:37204.
 *
 * Estados Hover y Focus son automáticos (:hover / :focus-visible). Selected y
 * Disabled se controlan mediante props porque son estados de aplicación, no
 * de interacción del puntero.
 */
export function NavButton({
  text = 'Nav',
  showIconLeft = false,
  showIconRight = true,
  selected = false,
  disabled = false,
  href,
  className,
  onClick,
  ...rest
}) {
  const content = (
    <>
      {showIconLeft && <IconGlobe className="nav-button__icon" />}
      <span className="nav-button__label">{text}</span>
      {showIconRight && <IconChevronDown className="nav-button__icon" />}
    </>
  )

  const classes = ['nav-button', className].filter(Boolean).join(' ')

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        className={classes}
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
      aria-current={selected ? 'page' : undefined}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {content}
    </button>
  )
}

export default NavButton
