import './cards-product-carousel.css'
import { Title } from '../../components/Title/Title'
import { CardProduct } from '../../components/CardProduct/CardProduct'

/**
 * Cards / Product carousel — node 58163:83548 en Figma (COMPONENT_SET:
 * Property1=Desktop/Mobile/Mobile 2). Cabecera (`Title`) + fila de
 * tarjetas `CardProduct` (con tag, tags de ubicación y valoración activos).
 * Ver cards-product-carousel.css para el detalle de tokens/grid y la
 * prop `mobileLayout` (carrusel vs lista vertical en mobile).
 */
export function CardsProductCarousel({
  title = 'Nuestra selección',
  linkText = 'Ver todos',
  href,
  onClick,
  mobileLayout = 'carousel',
  cards = [
    {
      title: 'Jamón Gran Reserva',
      price: 'Desde 380€',
      address: 'Calle Velázquez, 30',
      locationTags: ['BARCELONA', 'ESPAÑA'],
      rating: 3,
    },
    {
      title: 'Jamón Gran Reserva',
      price: 'Desde 380€',
      address: 'Calle Velázquez, 30',
      locationTags: ['BARCELONA', 'ESPAÑA'],
      rating: 3,
    },
    {
      title: 'Jamón Gran Reserva',
      price: 'Desde 380€',
      address: 'Calle Velázquez, 30',
      locationTags: ['BARCELONA', 'ESPAÑA'],
      rating: 3,
    },
  ],
  className,
  ...rest
}) {
  const classes = [
    'cards-product-carousel',
    mobileLayout === 'stack' && 'cards-product-carousel--stack',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...rest}>
      <Title title={title} linkText={linkText} href={href} onClick={onClick} />
      <div className="cards-product-carousel__row">
        {cards.map((card, index) => (
          <CardProduct
            key={index}
            image={card.image}
            imageAlt={card.imageAlt}
            tag={card.tag ?? true}
            tagText={card.tagText ?? 'Top ventas'}
            title={card.title}
            price={card.price}
            address={card.address}
            locationTags={card.locationTags}
            rating={card.rating}
            linkText={card.linkText ?? 'Descubrir'}
            href={card.href}
            onClick={card.onClick}
          />
        ))}
      </div>
    </div>
  )
}

export default CardsProductCarousel
