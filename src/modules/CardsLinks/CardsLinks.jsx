import './cards-links.css'
import { ContentTitle } from '../ContentTitle/ContentTitle'
import { CardLink } from '../../components/CardLink/CardLink'

/**
 * Cards / Links — node 58163:40143 en Figma (COMPONENT_SET:
 * Device=desktop/mobile, State=default). Cabecera (`ContentTitle`, tamaño
 * de título por defecto) + fila de tarjetas `CardLink` (2 por fila en
 * ambos breakpoints). Ver cards-links.css para el detalle de tokens/grid.
 */
export function CardsLinks({
  title = 'Lorem ipsum accumsan eleifend',
  cards = [
    { title: 'Jamón Gran Reserva', price: 'Desde 380€' },
    { title: 'Jamón Gran Reserva', price: 'Desde 380€' },
  ],
  className,
  ...rest
}) {
  const classes = ['cards-links', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...rest}>
      <ContentTitle title={title} showLabel={false} showDescription={false} showButton={false} showLink={false} />
      <div className="cards-links__row">
        {cards.map((card, index) => (
          <CardLink
            key={index}
            image={card.image}
            imageAlt={card.imageAlt}
            title={card.title}
            price={card.price}
            href={card.href}
            onClick={card.onClick}
          />
        ))}
      </div>
    </div>
  )
}

export default CardsLinks
