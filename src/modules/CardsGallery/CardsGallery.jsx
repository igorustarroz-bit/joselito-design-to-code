import './cards-gallery.css'
import { ContentTitle } from '../ContentTitle/ContentTitle'
import { CardProduct } from '../../components/CardProduct/CardProduct'
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon'
import { Icon } from '../../components/Icon/Icon'

/**
 * Cards / Gallery — node 58163:40311 en Figma (COMPONENT_SET:
 * Device=desktop/mobile × State=default/expanded). Cabecera (`ContentTitle`
 * con `titleSize="title-1"`) + fila/slider de tarjetas `CardProduct` +
 * visor lightbox opcional (`lightboxOpen`). Ver cards-gallery.css para el
 * detalle de tokens/grid.
 *
 * El lightbox es presentacional (igual criterio que List / Timeline): la
 * app controla `lightboxOpen`/`lightboxIndex` y pasa `onPrev`/`onNext`/
 * `onClose`; el módulo no gestiona su propio estado.
 */
export function CardsGallery({
  title = 'Ullamcorper tellus',
  cards = [
    { title: 'Jamón Gran Reserva', price: 'Desde 380€', address: 'Calle Velázquez, 30', tag: false },
    { title: 'Jamón Gran Reserva', price: 'Desde 380€', address: 'Calle Velázquez, 30', tag: false },
    { title: 'Jamón Gran Reserva', price: 'Desde 380€', address: 'Calle Velázquez, 30', tag: false },
    { title: 'Jamón Gran Reserva', price: 'Desde 380€', address: 'Calle Velázquez, 30', tag: false },
  ],
  lightboxOpen = false,
  lightboxImage,
  lightboxImageAlt = '',
  lightboxCaption = 'Arcu sagittis senectus sed libero urna eu viverra. Dui venenatis praesent sed',
  lightboxIndex = 1,
  lightboxTotal = 3,
  onLightboxPrev,
  onLightboxNext,
  onLightboxClose,
  className,
  ...rest
}) {
  const classes = ['cards-gallery', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...rest}>
      <ContentTitle
        title={title}
        titleSize="title-1"
        showLabel={false}
        showDescription={false}
        showButton={false}
        showLink={false}
      />
      <div className="cards-gallery__row">
        {cards.map((card, index) => (
          <CardProduct
            key={index}
            image={card.image}
            imageAlt={card.imageAlt}
            tag={card.tag}
            tagText={card.tagText}
            title={card.title}
            price={card.price}
            address={card.address}
            showTagsStars={false}
            linkText={card.linkText ?? 'Descubrir'}
            href={card.href}
            onClick={card.onClick}
          />
        ))}
      </div>

      {lightboxOpen && (
        <div className="cards-gallery__lightbox" role="dialog" aria-modal="true" aria-label="Galería de imágenes">
          <figure className="cards-gallery__lightbox-figure">
            <img src={lightboxImage} alt={lightboxImageAlt} className="cards-gallery__lightbox-image" />
            <figcaption className="cards-gallery__lightbox-caption">
              <span className="cards-gallery__lightbox-count">
                {lightboxIndex}/{lightboxTotal}
              </span>
              {lightboxCaption}
            </figcaption>
          </figure>

          <div className="cards-gallery__lightbox-nav">
            <ButtonIcon
              type="secondary"
              size="l"
              aria-label="Imagen anterior"
              icon={<Icon name="ArrowLeft" size="s" />}
              onClick={onLightboxPrev}
            />
            <ButtonIcon
              type="secondary"
              size="l"
              selected
              aria-label="Siguiente imagen"
              icon={<Icon name="ArrowRight" size="s" />}
              onClick={onLightboxNext}
            />
          </div>

          <button
            type="button"
            className="cards-gallery__lightbox-close"
            aria-label="Cerrar galería"
            onClick={onLightboxClose}
          >
            <Icon name="X" size="m" />
          </button>
        </div>
      )}
    </div>
  )
}

export default CardsGallery
