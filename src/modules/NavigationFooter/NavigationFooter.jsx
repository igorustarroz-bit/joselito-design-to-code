import { useState } from 'react'
import './navigation-footer.css'
import { AspectRatio } from '../../components/AspectRatio/AspectRatio'
import { Input } from '../../components/Input/Input'
import { Icon } from '../../components/Icon/Icon'

const DEFAULT_TOP_COLUMNS = [
  [
    {
      title: 'PRODUCTOS',
      links: [
        'Jamones de Gran Reserva',
        'Paletas de Gran Reserva',
        'Carne Fresca Joselito Nude',
        'Embutidos y Elaborados',
        'Loncheados',
        'Regalos y Selecciones Especiales',
        'Añadas & Ediciones limitadas',
        'Accesorios',
      ].map((label) => ({ label, href: '#' })),
    },
  ],
  [
    {
      title: 'SOBRE JOSELITO',
      links: [
        'Nuestra historia',
        'La Dehesa',
        'Curación',
        'Añadas',
        'Manual de corte',
        'Sostenibilidad y Medio Ambiente',
        'Los Animales',
        'La Salud',
        'Joselito Lab',
        'Colecciones Premium Joselito',
      ].map((label) => ({ label, href: '#' })),
    },
  ],
  [
    {
      title: 'RESTAURANTES Y TIENDAS',
      links: ["Joselito's Velázquez", "Joselito's Las Rozas", 'Kiosko Joselito Las Rozas Village', "Joselito's Bernabeu"].map(
        (label) => ({ label, href: '#' })
      ),
    },
    {
      title: 'RESTAURANTES Y TIENDAS',
      links: ['Eventos Privados y Bodas', 'Catas y maridajes exclusivos', 'Colaboraciones gastronómicas', "Joselito's Bernabeu"].map(
        (label) => ({ label, href: '#' })
      ),
    },
  ],
  [
    {
      title: 'ATENCIÓN AL CLIENTE',
      links: [
        'Envíos y Devoluciones',
        'Seguimiento del Pedido',
        'Preguntas frecuentes',
        'Preguntas frecuentes',
        'Contacto y Soporte',
        'Privacidad y Protección de datos',
        'Aviso legal',
        'La Salud',
        'Política de cookies',
      ].map((label) => ({ label, href: '#' })),
    },
  ],
]

const DEFAULT_COMPANY_GROUP = {
  title: 'EMPRESA',
  links: ['Prensa y noticias', 'Equipo y empleo', 'Investigación y patentes'].map((label) => ({ label, href: '#' })),
}

const DEFAULT_CONTACT = { phone: '(+ 34) 923 580 375', email: 'store@joselito.com' }

const DEFAULT_SOCIAL_LINKS = [
  { name: 'XLogo', label: 'X (Twitter)', href: '#' },
  { name: 'FacebookLogo', label: 'Facebook', href: '#' },
  { name: 'InstagramLogo', label: 'Instagram', href: '#' },
]

const DEFAULT_LEGAL_LINKS = ['Condiciones de compra', 'Uso del sitio', 'Calidad', 'Canal ético'].map((label) => ({
  label,
  href: '#',
}))

function FooterGroup({ group, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="navigation-footer__group" data-open={open || undefined}>
      <button
        type="button"
        className="navigation-footer__group-toggle"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="navigation-footer__group-title">{group.title}</span>
        <Icon name="CaretDown" size="s" className="navigation-footer__group-icon" />
      </button>
      <ul className="navigation-footer__group-links">
        {group.links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * Navigation / Footer — node 58163:33397 en Figma (COMPONENT_SET, 2
 * variantes de nombre roto/genérico: Property1="Frame 2087331936" (desktop,
 * 1440×1230) / "Frame 2087331981" (mobile, 390×1495). Ver
 * navigation-footer.css para el detalle completo de tokens/grid y la
 * asimetría real verificada entre breakpoints (el grupo "Empresa" se
 * comporta de forma distinta en cada uno).
 */
export function NavigationFooter({
  topColumns = DEFAULT_TOP_COLUMNS,
  companyGroup = DEFAULT_COMPANY_GROUP,
  contact = DEFAULT_CONTACT,
  socialLinks = DEFAULT_SOCIAL_LINKS,
  heroImage,
  heroImageAlt = '',
  heading = ['Historias, novedades ', 'y experiencias para disfrutar del universo Joselito.'],
  newsletterLabel = 'Sing up for our newsletter',
  emailLabel = 'Email adress',
  onNewsletterSubmit,
  copyright = '© 1868 - 2026 Cárnicas Joselito S.A.',
  language = 'English',
  onLanguageClick,
  legalLinks = DEFAULT_LEGAL_LINKS,
  className,
  ...rest
}) {
  const classes = ['navigation-footer', className].filter(Boolean).join(' ')

  return (
    <footer className={classes} {...rest}>
      <div className="navigation-footer__top">
        {topColumns.map((column, index) => (
          <div className="navigation-footer__column" key={index}>
            {column.map((group, groupIndex) => (
              <FooterGroup key={groupIndex} group={group} />
            ))}
          </div>
        ))}
        <div className="navigation-footer__column navigation-footer__column--company-mobile">
          <FooterGroup group={companyGroup} />
        </div>
      </div>

      <div className="navigation-footer__social">
        {socialLinks.map((link) => (
          <a key={link.name} href={link.href} className="navigation-footer__social-link" aria-label={link.label}>
            <Icon name={link.name} size="l" title={link.label} />
          </a>
        ))}
      </div>

      <div className="navigation-footer__media">
        <div className="navigation-footer__media-text">
          <p className="navigation-footer__heading">
            {heading.map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </p>

          <div className="navigation-footer__newsletter">
            <p className="navigation-footer__newsletter-label">{newsletterLabel}</p>
            <form
              onSubmit={(event) => {
                event.preventDefault()
                onNewsletterSubmit?.(event)
              }}
            >
              <Input
                size="small"
                label={emailLabel}
                showMessage={false}
                icon={<Icon name="ArrowRight" size="s" />}
              />
            </form>
          </div>
        </div>

        <AspectRatio ratio="3:4" image={heroImage} imageAlt={heroImageAlt} className="navigation-footer__media-image" />

        <div className="navigation-footer__media-aside">
          <div className="navigation-footer__aside-group navigation-footer__aside-group--company-desktop">
            <p className="navigation-footer__group-title">{companyGroup.title}</p>
            <ul className="navigation-footer__group-links">
              {companyGroup.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="navigation-footer__aside-group">
            <p className="navigation-footer__group-title">CONTACTO</p>
            <ul className="navigation-footer__group-links navigation-footer__contact">
              <li>
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="navigation-footer__bottom">
        <p className="navigation-footer__copyright">{copyright}</p>

        <ul className="navigation-footer__legal">
          {legalLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <button type="button" className="navigation-footer__language" onClick={onLanguageClick}>
          <span>{language}</span>
          <Icon name="CaretDown" size="xs" />
        </button>
      </div>
    </footer>
  )
}

export default NavigationFooter
