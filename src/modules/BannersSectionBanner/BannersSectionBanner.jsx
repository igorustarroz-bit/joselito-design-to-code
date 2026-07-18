import './banners-section-banner.css'
import { Title } from '../../components/Title/Title'
import { AspectRatio } from '../../components/AspectRatio/AspectRatio'
import { Button } from '../../components/Button/Button'

/**
 * Banners / Section banner — node 58182:4380 en Figma (COMPONENT_SET:
 * Property1=desktop/mobile, ambos con nombre roto pero contenido
 * claramente identificable). Cabecera de sección (reutiliza `Title` tal
 * cual) + banner de imagen con tarjeta de texto. Ver
 * banners-section-banner.css para el detalle de la diferencia estructural
 * real entre breakpoints (no solo visual) y de tokens/grid.
 */
export function BannersSectionBanner({
  title = 'Experiencias y eventos',
  linkText = 'Ver todos',
  linkHref,
  onLinkClick,
  image,
  imageAlt = '',
  cardTitle = "Eventos Privados\ny Bodas",
  cardText = "Joselito's te ofrece la esencia y todo el sabor del Jamón Joselito de la mano de un auténtico maestro cortador para convertir tu celebración en una experiencia inolvidable.",
  buttonText = 'Saber más',
  buttonHref,
  onButtonClick,
  className,
  ...rest
}) {
  const classes = ['banners-section-banner', className].filter(Boolean).join(' ')

  return (
    <section className={classes} {...rest}>
      <Title title={title} linkText={linkText} href={linkHref} onClick={onLinkClick} className="banners-section-banner__header" />

      <div className="banners-section-banner__mobile">
        <AspectRatio ratio="4:3" image={image} imageAlt={imageAlt} className="banners-section-banner__mobile-image" />
        <div className="banners-section-banner__mobile-content">
          <p className="banners-section-banner__card-title">{cardTitle}</p>
          <p className="banners-section-banner__card-text">{cardText}</p>
          <Button type="terciary" size="s" text={buttonText} href={buttonHref} onClick={onButtonClick} />
        </div>
      </div>

      <div className="banners-section-banner__desktop">
        <AspectRatio ratio="16:9" image={image} imageAlt={imageAlt} className="banners-section-banner__desktop-image" />
        <div className="banners-section-banner__card">
          <div className="banners-section-banner__card-text-wrap">
            <p className="banners-section-banner__card-title">{cardTitle}</p>
            <p className="banners-section-banner__card-text">{cardText}</p>
          </div>
          <Button type="terciary" size="m" text={buttonText} href={buttonHref} onClick={onButtonClick} />
        </div>
      </div>
    </section>
  )
}

export default BannersSectionBanner
