import './card-carrusel.css'
import { Button } from '../Button/Button'
import { ActionLink } from '../ActionLink/ActionLink'

/**
 * Card Carrusel — node 58182:24262 en Figma. Tarjeta con imagen, título,
 * tags tipo hashtag (reutiliza `Button` secondary/xs) y enlace de acción
 * (reutiliza `ActionLink` l). La propiedad `Property 1` de Figma ("Carrousel"
 * / "Card Carrusel") es en realidad la misma tarjeta en dos orientaciones,
 * traducida aquí como la prop `layout` ('vertical'/'horizontal'):
 *   - `vertical` (por defecto): imagen arriba, texto abajo — item estrecho
 *     de un carrusel horizontal de varias tarjetas.
 *   - `horizontal`: imagen a la izquierda (flex), texto a la derecha con
 *     el enlace anclado abajo — pieza destacada única.
 */
export function CardCarrusel({
  layout = 'vertical',
  image,
  imageAlt = '',
  title = 'Título',
  tags = [],
  linkText = 'Descubrir',
  href,
  onClick,
  className,
  ...rest
}) {
  const classes = ['card-carrusel', `card-carrusel--${layout}`, className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...rest}>
      <div className="card-carrusel__image-wrap">
        {image && <img src={image} alt={imageAlt} className="card-carrusel__image" />}
      </div>
      <div className="card-carrusel__content">
        <div className="card-carrusel__title-group">
          <p className="card-carrusel__title">{title}</p>
          {tags.length > 0 && (
            <div className="card-carrusel__tags">
              {tags.map((tagLabel, i) => (
                <Button key={i} type="secondary" size="xs" text={`# ${tagLabel}`} />
              ))}
            </div>
          )}
        </div>
        <ActionLink size="l" text={linkText} href={href} onClick={onClick} />
      </div>
    </div>
  )
}

export default CardCarrusel
