import './navigation-secondary-menu.css'

const DEFAULT_ITEMS = [
  { label: 'Todos', href: '#' },
  { label: 'Jamones', href: '#' },
  { label: 'Paletas', href: '#' },
  { label: 'Carne fresca', href: '#' },
  { label: 'Embutidos', href: '#' },
  { label: 'Loncheados', href: '#' },
  { label: 'Regalos', href: '#' },
  { label: 'Añadas', href: '#' },
  { label: 'Accesorios', href: '#' },
]

/**
 * Navigation / Secondary menu — node 58084:30030 en Figma (COMPONENT_SET:
 * Device=Desktop/Mobile). Fila de enlaces de categoría a todo el ancho, con
 * subrayado bajo el elemento activo. Igual criterio "Device" responsive real
 * (no prop) que el resto de módulos del plan. Ver
 * navigation-secondary-menu.css para el detalle de tokens/grid.
 */
export function NavigationSecondaryMenu({ items = DEFAULT_ITEMS, activeIndex = 2, onSelect, className, ...rest }) {
  const classes = ['navigation-secondary-menu', className].filter(Boolean).join(' ')

  return (
    <nav className={classes} aria-label="Categorías" {...rest}>
      <ul className="navigation-secondary-menu__list">
        {items.map((item, index) => {
          const isActive = index === activeIndex
          return (
            <li key={item.label} className="navigation-secondary-menu__item">
              <a
                href={item.href}
                className="navigation-secondary-menu__link"
                aria-current={isActive ? 'page' : undefined}
                onClick={onSelect ? (event) => onSelect(index, event) : undefined}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavigationSecondaryMenu
