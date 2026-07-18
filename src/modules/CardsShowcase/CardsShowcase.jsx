import './cards-showcase.css'
import { Title } from '../../components/Title/Title'
import { CardCarrusel } from '../../components/CardCarrusel/CardCarrusel'

/**
 * Cards / Showcase — node 58182:4396 en Figma (COMPONENT_SET: 3 variantes
 * — 2 tarjetas con borde/desktop, 1 tarjeta sin borde/desktop, 2 tarjetas
 * con borde/mobile). Cabecera (`Title`) + 1 o 2 tarjetas `CardCarrusel`
 * ('horizontal' en desktop, 'vertical' en mobile, renderizadas ambas y
 * alternadas por CSS). Ver cards-showcase.css para el detalle de tokens/
 * grid y del borde.
 */
export function CardsShowcase({
  title = 'Tiendas y restaurantes',
  linkText = 'Ver todos',
  showLink = true,
  href,
  onClick,
  bordered = true,
  cards = [
    { title: 'Joselitos Velázquez', tags: ['MADRID', 'RESTAURANTE'] },
    { title: 'Kiosko', tags: ['MADRID', 'RESTAURANTE'] },
  ],
  className,
  ...rest
}) {
  const classes = ['cards-showcase', className].filter(Boolean).join(' ')

  const renderCard = (card, index, layout) => (
    <CardCarrusel
      key={index}
      layout={layout}
      image={card.image}
      imageAlt={card.imageAlt}
      title={card.title}
      tags={card.tags}
      linkText={card.linkText ?? 'Descubrir'}
      href={card.href}
      onClick={card.onClick}
    />
  )

  return (
    <div className={classes} data-bordered={bordered} {...rest}>
      <Title title={title} linkText={linkText} showLink={showLink} href={href} onClick={onClick} />
      <div className="cards-showcase__row cards-showcase__row--desktop">
        {cards.map((card, index) => renderCard(card, index, 'horizontal'))}
      </div>
      <div className="cards-showcase__row cards-showcase__row--mobile">
        {cards.map((card, index) => renderCard(card, index, 'vertical'))}
      </div>
    </div>
  )
}

export default CardsShowcase
