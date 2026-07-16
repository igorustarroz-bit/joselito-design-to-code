import './title.css'
import { IconChevronRight } from './icons'

/**
 * Title — node 58196:4804 en Figma. Cabecera de sección: título (`<h2>`
 * semántico) a la izquierda y enlace "Ver todos" con chevron opcional a
 * la derecha. Se usa como cabecera de módulos de listado (Cards, Lists).
 *
 * Renderiza `<a href>` si se pasa `href`, o `<button>` si no (mismo
 * criterio que `Button`/`ActionLink`).
 */
export function Title({ title = 'Title', linkText = 'Ver todos', showLink = true, href, onClick, className, ...rest }) {
  const classes = ['title-row', className].filter(Boolean).join(' ')

  const linkContent = (
    <>
      <span className="title-row__link-text">{linkText}</span>
      <IconChevronRight className="title-row__link-icon" />
    </>
  )

  return (
    <div className={classes} {...rest}>
      <h2 className="title-row__title">{title}</h2>
      {showLink &&
        (href ? (
          <a href={href} className="title-row__link" onClick={onClick}>
            {linkContent}
          </a>
        ) : (
          <button type="button" className="title-row__link" onClick={onClick}>
            {linkContent}
          </button>
        ))}
    </div>
  )
}

export default Title
