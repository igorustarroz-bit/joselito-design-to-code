import './card-link.css'

/**
 * Card Link — node 58182:23781 en Figma. Tarjeta-enlace de imagen a
 * sangre con título + precio superpuestos, siempre en tema oscuro fijo
 * (ver nota en `card-link.css`) para garantizar contraste sobre la foto.
 *
 * Renderiza `<a href>` si se pasa `href`, o `<button>` si no — mismo
 * criterio que `Button`/`ActionLink`.
 */
export function CardLink({ image, imageAlt = '', title = 'Título', price = 'Desde 0€', href, onClick, className, ...rest }) {
  const classes = ['card-link', className].filter(Boolean).join(' ')

  const content = (
    <>
      <div className="card-link__image-wrap">
        {image && <img src={image} alt={imageAlt} className="card-link__image" />}
      </div>
      <div className="card-link__overlay" data-theme="dark-red-primary">
        <p className="card-link__title">{title}</p>
        <p className="card-link__price">{price}</p>
      </div>
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  )
}

export default CardLink
