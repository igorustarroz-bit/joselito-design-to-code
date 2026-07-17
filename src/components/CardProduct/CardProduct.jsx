import './card-product.css'
import { IconStar } from './icons'
import { Button } from '../Button/Button'
import { ActionLink } from '../ActionLink/ActionLink'
import { AspectRatio } from '../AspectRatio/AspectRatio'

/**
 * Card Product — node 58163:83839 en Figma. Tarjeta de producto: imagen
 * con badge opcional ("Top ventas"), título + precio, dirección opcional,
 * fila de tags de ubicación (reutiliza `Button` tipo secondary/xs) +
 * valoración por estrellas, y un enlace de acción (reutiliza `ActionLink`
 * tamaño L).
 *
 * Es puramente presentacional: no gestiona favoritos ni estado propio,
 * mismo criterio que el resto del sistema.
 */
export function CardProduct({
  image,
  imageAlt = '',
  tag = true,
  tagText = 'Top ventas',
  title = 'Título del producto',
  price = 'Desde 0€',
  address,
  showTagsStars = true,
  locationTags = [],
  rating = 0,
  linkText = 'Descubrir',
  href,
  onClick,
  className,
  ...rest
}) {
  const classes = ['card-product', className].filter(Boolean).join(' ')
  const hasMeta = showTagsStars && (locationTags.length > 0 || rating > 0)

  return (
    <div className={classes} {...rest}>
      <div className="card-product__media">
        <AspectRatio ratio="3:4" image={image} imageAlt={imageAlt} />
        {tag && <span className="card-product__tag">{tagText}</span>}
      </div>
      <div className="card-product__content">
        <div className="card-product__info">
          <div className="card-product__title-group">
            <p className="card-product__title">{title}</p>
            <p className="card-product__price">{price}</p>
          </div>
          {address && <p className="card-product__address">{address}</p>}
          {hasMeta && (
            <div className="card-product__meta">
              {locationTags.length > 0 && (
                <div className="card-product__tags">
                  {locationTags.map((tagLabel, i) => (
                    <Button key={i} type="secondary" size="xs" text={tagLabel} />
                  ))}
                </div>
              )}
              {rating > 0 && (
                <div className="card-product__stars" aria-label={`Valoración: ${rating} de 5`}>
                  {Array.from({ length: rating }).map((_, i) => (
                    <IconStar key={i} className="card-product__star" />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        <ActionLink size="l" text={linkText} href={href} onClick={onClick} />
      </div>
    </div>
  )
}

export default CardProduct
