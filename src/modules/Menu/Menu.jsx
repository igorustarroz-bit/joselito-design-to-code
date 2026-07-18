import './menu.css'
import { Navigation } from '../Navigation/Navigation'
import { AspectRatio } from '../../components/AspectRatio/AspectRatio'
import { ActionLink } from '../../components/ActionLink/ActionLink'
import { Icon } from '../../components/Icon/Icon'

const DEFAULT_CATEGORY_ITEMS = [
  { label: 'Todos los productos', href: '#' },
  { label: 'Jamones Gran Reserva', href: '#' },
  { label: 'Paletas Gran Reserva', href: '#', active: true },
  { label: 'Embutidos y Elaborados', href: '#' },
  { label: 'Loncheados', href: '#' },
  { label: 'Carne Fresca Joselito Nude', href: '#' },
  { label: 'Regalos y Selecciones Especiales', href: '#' },
  { label: 'Añadas y Ediciones Limitadas', href: '#' },
  { label: 'Colecciones Premium', href: '#' },
  { label: 'Accesorios', href: '#' },
]

const DEFAULT_GALLERY_ITEMS = [
  { caption: 'Joselito Lab' },
  { caption: 'Colecciones Joselito Premium' },
  { caption: 'Tiendas y Restaurantes' },
  { caption: 'Experiencias y Eventos Privados' },
]

/**
 * Menu — node 58182:4350 en Figma (COMPONENT_SET, 2 variantes de nombre
 * roto/genérico, ambas de 1440px, sin captura mobile — mega-menú de
 * escritorio desplegado bajo `Navigation`). Ver menu.css para el detalle
 * de tokens/grid y el alcance (solo desktop).
 */
export function Menu({
  variant = 'categories',
  categoryItems = DEFAULT_CATEGORY_ITEMS,
  image,
  imageAlt = '',
  promoTitle = 'Regalos y Selecciones Especiales',
  promoDescription = 'Un regalo especial para disfrutar de la tradición, el sabor y la calidad de Joselito en cualquier ocasión',
  promoLinkLabel = 'Descubre más',
  promoLinkHref,
  galleryItems = DEFAULT_GALLERY_ITEMS,
  className,
  ...rest
}) {
  const classes = ['menu', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...rest}>
      <Navigation />

      {variant === 'categories' ? (
        <div className="menu__panel menu__panel--categories">
          <div className="menu__categories">
            <ul className="menu__category-list">
              {categoryItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="menu__category-link" data-active={item.active || undefined}>
                    {item.active && <Icon name="CaretRight" size="xs" className="menu__category-icon" />}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <AspectRatio ratio="3:4" image={image} imageAlt={imageAlt} className="menu__categories-image" />
          </div>

          <div className="menu__promo">
            <p className="menu__promo-title">{promoTitle}</p>
            <p className="menu__promo-description">{promoDescription}</p>
            <ActionLink size="s" text={promoLinkLabel} href={promoLinkHref} />
          </div>
        </div>
      ) : (
        <div className="menu__panel menu__panel--gallery">
          {galleryItems.map((item, index) => (
            <div className="menu__gallery-item" key={index}>
              <div className="menu__gallery-image">
                {item.image && <img src={item.image} alt={item.imageAlt ?? ''} />}
              </div>
              <p className="menu__gallery-caption">{item.caption}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Menu
