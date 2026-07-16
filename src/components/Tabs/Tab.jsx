import { IconCalendarBlank } from '../Button/icons'
import { IconChevronDown } from '../NavButton/icons'

/**
 * z_fragment_tab_primary / z_fragment_tab_secondary — item individual de
 * UI05-Tabs (node 57943:37527 / 57943:45626 en Figma). Los tokens de color
 * son idénticos entre "primary" y "secondary" en Figma; lo que cambia es el
 * tamaño (`variant`): primary = 40px de alto / 16px de padding horizontal,
 * secondary = 24px / 8px. Se mantienen namespaces de token separados
 * (`--color-tab-primary-*` / `--color-tab-secondary-*`) por si Figma los
 * diferencia en el futuro.
 *
 * No gestiona estado internamente: `selected` se pasa desde el `Tabs`
 * contenedor (o desde la app), igual que el resto de botones del sistema.
 */
export function Tab({
  variant = 'primary',
  text = 'item',
  showIconLeft = true,
  showIconRight = true,
  selected = false,
  disabled = false,
  onClick,
  className,
  ...rest
}) {
  const classes = ['tab', `tab--${variant}`, className].filter(Boolean).join(' ')

  return (
    <button
      type="button"
      role="tab"
      className={classes}
      aria-selected={selected}
      tabIndex={selected ? 0 : -1}
      disabled={disabled}
      onClick={onClick}
      data-selected={selected || undefined}
      {...rest}
    >
      {showIconLeft && <IconCalendarBlank className="tab__icon" />}
      <span className="tab__label">{text}</span>
      {showIconRight && <IconChevronDown className="tab__icon" />}
    </button>
  )
}

export default Tab
