import './hero-homepage-hero.css'
import { Icon } from '../../components/Icon/Icon'
import { BrandLogo } from '../../components/BrandLogo/BrandLogo'
import { Button } from '../../components/Button/Button'
import { AspectRatio } from '../../components/AspectRatio/AspectRatio'

/**
 * Barra de navegación — stand-in interno y simplificado del futuro módulo
 * "Navigation (header principal)" (ver comentario en hero-homepage-hero.css).
 * No se exporta: vive solo dentro de HeroHomepageHero.
 */
function HomepageHeroNav({ navLinks }) {
  return (
    <nav className="hero-homepage-hero__nav" aria-label="Navegación principal">
      <div className="hero-homepage-hero__nav-menu">
        <Icon name="List" size="m" title="Abrir menú" />
      </div>

      <ul className="hero-homepage-hero__nav-links">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <BrandLogo className="hero-homepage-hero__nav-logo" />

      <div className="hero-homepage-hero__nav-actions hero-homepage-hero__nav-actions--mobile">
        <Icon name="MagnifyingGlass" size="m" title="Buscar" />
        <Icon name="Bag" size="m" title="Cesta" />
      </div>

      <div className="hero-homepage-hero__nav-actions hero-homepage-hero__nav-actions--desktop">
        <span className="hero-homepage-hero__nav-search">
          <Icon name="MagnifyingGlass" size="s" />
          <span className="hero-homepage-hero__nav-search-label">Buscar</span>
        </span>
        <span className="hero-homepage-hero__nav-account">Cuenta</span>
        <span className="hero-homepage-hero__nav-cart-group">
          <span className="hero-homepage-hero__nav-cart">Cesta</span>
          <span className="hero-homepage-hero__nav-cart">(3)</span>
        </span>
      </div>
    </nav>
  )
}

/**
 * Tarjeta "Toast" — stand-in interno y simplificado del futuro módulo
 * "Toast" (ver comentario en hero-homepage-hero.css). No se exporta.
 */
function HomepageHeroToast({ image, imageAlt, title, description }) {
  return (
    <div className="hero-homepage-hero__toast" data-theme="light-white">
      <AspectRatio ratio="1:1" image={image} imageAlt={imageAlt} className="hero-homepage-hero__toast-image" />
      <div className="hero-homepage-hero__toast-text">
        <p className="hero-homepage-hero__toast-title">{title}</p>
        <p className="hero-homepage-hero__toast-description">{description}</p>
      </div>
    </div>
  )
}

/**
 * Hero / Homepage hero — node 58182:4353 en Figma (COMPONENT_SET:
 * Property1=desktop/mobile). Imagen de fondo a sangre completa + nav +
 * bloque de contenido centrado (label/título/botón) + tarjeta "Toast"
 * flotante. Ver hero-homepage-hero.css para el detalle de alcance
 * (Navigation y Toast son stand-ins temporales) y de tokens/grid.
 */
export function HeroHomepageHero({
  backgroundImage,
  backgroundImageAlt = '',
  navLinks = [
    { label: 'Tienda', href: '#' },
    { label: 'Origen', href: '#' },
    { label: 'Excelencia', href: '#' },
    { label: 'Compromisos', href: '#' },
    { label: 'Experiencia', href: '#' },
  ],
  label = 'DICTUM CRAS ERAT',
  title = 'Lorem ipsum dolor sit amet consectetur',
  buttonText = 'LOREM IPSUM',
  buttonHref,
  onButtonClick,
  showToast = true,
  toastImage,
  toastImageAlt = '',
  toastTitle = 'Jaime Hayon x Joselito',
  toastDescription = 'Descubre la nueva colección Joselito Premium',
  className,
  ...rest
}) {
  const classes = ['hero-homepage-hero', className].filter(Boolean).join(' ')

  return (
    <div className={classes} data-theme="dark-black-neutral" {...rest}>
      {backgroundImage && (
        <img src={backgroundImage} alt={backgroundImageAlt} className="hero-homepage-hero__bg" />
      )}
      <div className="hero-homepage-hero__scrim" />

      <HomepageHeroNav navLinks={navLinks} />

      <div className="hero-homepage-hero__content">
        <p className="hero-homepage-hero__label">{label}</p>
        <p className="hero-homepage-hero__title">{title}</p>
        <Button type="primary" size="s" text={buttonText} href={buttonHref} onClick={onButtonClick} />
      </div>

      {showToast && (
        <HomepageHeroToast
          image={toastImage}
          imageAlt={toastImageAlt}
          title={toastTitle}
          description={toastDescription}
        />
      )}
    </div>
  )
}

export default HeroHomepageHero
