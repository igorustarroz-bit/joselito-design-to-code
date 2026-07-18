import './navigation.css'
import { BrandLogo } from '../../components/BrandLogo/BrandLogo'
import { Icon } from '../../components/Icon/Icon'

const DEFAULT_ITEMS = ['Tienda', 'Origen', 'Excelencia', 'Compromisos', 'Experiencia'].map((label) => ({
  label,
  href: '#',
}))

/**
 * Navigation (header principal) — node 58182:4143 en Figma (COMPONENT_SET
 * con 4 variantes: Device=desktop/mobile × Property1 con nombre roto
 * ("Frame 2087330922"/"Frame 2087332153" desktop, "Frame 2087330617"/
 * "Frame 2087332151" mobile) que en realidad codifican una prop real
 * `variant`: `'default'` (fondo blanco, texto/iconos oscuros) vs
 * `'transparent'` (sin fondo, texto/iconos blancos — pensada para ir
 * superpuesta sobre una imagen oscura, como en Hero / Homepage hero). Ver
 * navigation.css para el detalle de tokens/grid.
 */
export function Navigation({
  variant = 'default',
  items = DEFAULT_ITEMS,
  brandHref = '#',
  cartCount = 3,
  onMenuClick,
  onSearchClick,
  onAccountClick,
  onCartClick,
  className,
  ...rest
}) {
  const classes = ['navigation', className].filter(Boolean).join(' ')

  return (
    <header
      className={classes}
      data-variant={variant}
      data-theme={variant === 'transparent' ? 'dark-black-neutral' : undefined}
      {...rest}
    >
      <div className="navigation__row">
        <button type="button" className="navigation__menu-button" aria-label="Abrir menú" onClick={onMenuClick}>
          <Icon name="List" size="m" />
        </button>

        <nav className="navigation__links" aria-label="Principal">
          {items.map((item) => (
            <a key={item.label} href={item.href} className="navigation__link">
              {item.label}
            </a>
          ))}
        </nav>

        <a href={brandHref} className="navigation__brand" aria-label="Joselito">
          <BrandLogo variant="horizontal" className="navigation__brand-logo" />
        </a>

        <div className="navigation__actions">
          <button type="button" className="navigation__action navigation__action--search" onClick={onSearchClick}>
            <Icon name="MagnifyingGlass" size="m" />
            <span className="navigation__action-label">Buscar</span>
          </button>
          <button type="button" className="navigation__action navigation__action--account" onClick={onAccountClick}>
            <span className="navigation__action-label">Cuenta</span>
          </button>
          <button type="button" className="navigation__action navigation__action--cart" onClick={onCartClick}>
            <span className="navigation__cart-label">Cesta</span>
            <span>({cartCount})</span>
          </button>
          <button type="button" className="navigation__action navigation__action--bag" aria-label="Cesta" onClick={onCartClick}>
            <Icon name="Bag" size="m" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navigation
