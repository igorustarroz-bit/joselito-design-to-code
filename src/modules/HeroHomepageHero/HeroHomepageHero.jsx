import './hero-homepage-hero.css'
import { Button } from '../../components/Button/Button'
import { Navigation } from '../Navigation/Navigation'
import { Toast } from '../Toast/Toast'

/**
 * Hero / Homepage hero — node 58182:4353 en Figma (COMPONENT_SET:
 * Property1=desktop/mobile). Imagen de fondo a sangre completa + nav +
 * bloque de contenido centrado (label/título/botón) + tarjeta "Toast"
 * flotante. Reutiliza los módulos reales `Navigation` (`variant="transparent"`)
 * y `Toast` — ambos eran stand-ins internos simplificados, sustituidos
 * ahora que los dos módulos están construidos (ver hero-homepage-hero.css).
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

      <Navigation className="hero-homepage-hero__nav" variant="transparent" items={navLinks} />

      <div className="hero-homepage-hero__content">
        <p className="hero-homepage-hero__label">{label}</p>
        <p className="hero-homepage-hero__title">{title}</p>
        <Button type="primary" size="s" text={buttonText} href={buttonHref} onClick={onButtonClick} />
      </div>

      {showToast && (
        <Toast
          className="hero-homepage-hero__toast"
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
