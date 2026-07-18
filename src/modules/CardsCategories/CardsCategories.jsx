import './cards-categories.css'
import { Icon } from '../../components/Icon/Icon'

const DEFAULT_SOCIAL_LINKS = [
  { name: 'XLogo', label: 'X (Twitter)', href: '#' },
  { name: 'FacebookLogo', label: 'Facebook', href: '#' },
  { name: 'InstagramLogo', label: 'Instagram', href: '#' },
  { name: 'LinkedinLogo', label: 'LinkedIn', href: '#' },
  { name: 'TiktokLogo', label: 'TikTok', href: '#' },
]

const DEFAULT_ITEMS = [
  { caption: '@neonflight' },
  { caption: '@autecuisine' },
  { caption: '@jamonjoselito' },
  { caption: '@elbulli' },
  { caption: '@jamonjoselito' },
]

/**
 * Cards / Categories — node 58182:4401 en Figma (COMPONENT_SET, 4
 * variantes). Pese al nombre del master, el contenido real es un feed de
 * miniaturas de redes sociales. Dos variantes de composición:
 * `variant="header"` (título + iconos + miniaturas con leyenda) y
 * `variant="footer"` (miniaturas centradas + leyenda final "SÍGUENOS").
 * Ver cards-categories.css para el detalle de tokens/grid y las
 * simplificaciones aplicadas.
 */
export function CardsCategories({
  variant = 'header',
  title = 'Síguenos en redes sociales',
  socialLinks = DEFAULT_SOCIAL_LINKS,
  items = DEFAULT_ITEMS,
  footerLabel = 'SÍGUENOS',
  footerHandle = '@JAMONJOSELITO',
  footerHref,
  className,
  ...rest
}) {
  const classes = ['cards-categories', className].filter(Boolean).join(' ')

  return (
    <div className={classes} data-variant={variant} {...rest}>
      {variant === 'header' && (
        <div className="cards-categories__header">
          <p className="cards-categories__title">{title}</p>
          <div className="cards-categories__social">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="cards-categories__social-link"
                aria-label={link.label}
              >
                <Icon name={link.name} size="l" title={link.label} />
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="cards-categories__row">
        {items.map((item, index) => (
          <div className="cards-categories__thumb" key={index}>
            <img src={item.image} alt={item.imageAlt ?? ''} className="cards-categories__thumb-image" />
            {item.caption && <p className="cards-categories__thumb-caption">{item.caption}</p>}
          </div>
        ))}
      </div>

      {variant === 'footer' && (
        <div className="cards-categories__footer">
          <p className="cards-categories__footer-label">{footerLabel}</p>
          {footerHref ? (
            <a href={footerHref} className="cards-categories__footer-handle">
              {footerHandle}
            </a>
          ) : (
            <p className="cards-categories__footer-handle">{footerHandle}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default CardsCategories
