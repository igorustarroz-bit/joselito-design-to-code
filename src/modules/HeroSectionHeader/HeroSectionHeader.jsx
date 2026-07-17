import './hero-section-header.css'
import { NavigationBreadcrumb } from '../NavigationBreadcrumb/NavigationBreadcrumb'

/**
 * Hero / Section header — node 58163:39446 en Figma (COMPONENT_SET:
 * Device=desktop/mobile). Compone `NavigationBreadcrumb` (barra "volver") +
 * un bloque de label/título/descripción sobre fondo neutro.
 *
 * Construido con el grid de 12 columnas desde el principio (a diferencia de
 * los módulos anteriores a la auditoría del punto 15): en desktop, título y
 * descripción son `grid-column: span 6` cada uno — mismo patrón exacto ya
 * verificado en Content / Title (652px ≈ 6 columnas, gap de fila 24px =
 * `--grid-gutter` a 1440px).
 *
 * La propiedad "Device" es responsive real (media query en `768px`) — no
 * una prop. A diferencia de Content / Title, este módulo no tiene botón ni
 * enlace, solo label + título + descripción.
 */
export function HeroSectionHeader({
  breadcrumbText = 'Previous section',
  breadcrumbHref,
  onBreadcrumbClick,
  label = 'Section title',
  title = 'Lorem ipsum dolor sit amet consectetur.',
  description = 'Lorem ipsum dolor sit amet consectetur. Diam volutpat magna risus ut ullamcorper eget. Vestibulum adipiscing volutpat eget rhoncus. Egestas consectetur ut amet tempor pharetra nullam.',
  showDescription = true,
  className,
  ...rest
}) {
  const classes = ['hero-section-header', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...rest}>
      <NavigationBreadcrumb text={breadcrumbText} href={breadcrumbHref} onClick={onBreadcrumbClick} />
      <section className="hero-section-header__content">
        <p className="hero-section-header__label">{label}</p>
        <div className="hero-section-header__row">
          <p className="hero-section-header__title">{title}</p>
          {showDescription && <p className="hero-section-header__description">{description}</p>}
        </div>
      </section>
    </div>
  )
}

export default HeroSectionHeader
