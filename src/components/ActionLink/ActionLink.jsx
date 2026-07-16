import './action-link.css'
import { IconArrowRight } from '../Button/icons'

/**
 * UI04-Button-Action-Link — enlace de acción subrayado, sin fondo (node
 * 49038:9486 en Figma). Un único tipo visual ("Link Primary") en tres
 * tamaños (L/M/S). A diferencia de Button/ButtonIcon, el "fondo" y el
 * "borde" son en realidad la línea de subrayado (border-bottom).
 *
 * Estados Hover y Focus son automáticos (:hover / :focus-visible). Selected y
 * Disabled se controlan mediante props (mismo criterio que el resto de
 * botones). Figma no define una variante "Selected" para este componente,
 * pero el token existe en Semantic-Color y se aplica por consistencia con
 * NavButton/Button/ButtonIcon.
 */
export function ActionLink({
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
      {showIconLeft && <IconArrowRight className="action-link__icon" />}
      <span className="action-link__label">{text}</span>
      {showIconRight && <IconArrowRight className="action-link__icon" />}
    </>
  )

  const classes = ['action-link', `action-link--${size}`, className].filter(Boolean).join(' ')

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

export default ActionLink
