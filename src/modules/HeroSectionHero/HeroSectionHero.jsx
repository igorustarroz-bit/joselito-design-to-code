import './hero-section-hero.css'

/**
 * Hero / Section hero — node 58163:39435 en Figma (COMPONENT_SET:
 * Device=desktop/mobile). Hero de sección sin imagen: fondo de color sólido
 * con label + título centrados.
 *
 * El fondo rojo y el texto blanco no son colores hardcodeados: la instancia
 * de Figma fuerza el modo "Dark - Red - Primary" de Semantic-Color
 * (verificado: `Backgrounds/Base` = `#e23f36` y `Texts/Base` = blanco
 * coinciden exactamente con los valores de ese tema en `semantic.css`) —
 * mismo patrón "un hijo puede sobreescribir el tema" ya usado en Card Link.
 * Se implementa con `data-theme="dark-red-primary"` en la raíz.
 */
export function HeroSectionHero({
  label = 'Section title',
  title = 'Lorem ipsum dolor sit amet consectetur.',
  className,
  ...rest
}) {
  const classes = ['hero-section-hero', className].filter(Boolean).join(' ')

  return (
    <section className={classes} data-theme="dark-red-primary" {...rest}>
      <div className="hero-section-hero__content">
        <p className="hero-section-hero__label">{label}</p>
        <p className="hero-section-hero__title">{title}</p>
      </div>
    </section>
  )
}

export default HeroSectionHero
