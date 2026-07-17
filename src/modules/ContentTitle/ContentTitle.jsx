import './content-title.css'
import { Button } from '../../components/Button/Button'
import { Icon } from '../../components/Icon/Icon'

/**
 * Content / Title — node 58163:40029 en Figma (COMPONENT_SET: Device=desktop/mobile).
 * Cabecera de sección a todo el ancho: label opcional + título grande a la
 * izquierda, y descripción/botón/enlace opcionales a la derecha (desktop) o
 * apilados debajo (mobile).
 *
 * La propiedad "Device" es responsive real (media query en `768px`, igual
 * criterio que el resto de módulos "Content"). El master mobile de Figma no
 * expone la propiedad "button" (solo label/description/link) — se respetó
 * tal cual: el botón, si se pasa, solo se muestra a partir de `768px`.
 */
export function ContentTitle({
  label = 'This is a label',
  showLabel = true,
  title = 'Lorem ipsum accumsan eleifend',
  description = 'Lorem ipsum dolor sit amet consectetur. Nibh lacus erat urna molestie.',
  showDescription = true,
  showButton = false,
  buttonText = 'Lorem ipsum',
  buttonHref,
  onButtonClick,
  showLink = true,
  linkText = 'Link text',
  linkHref,
  onLinkClick,
  className,
  ...rest
}) {
  const classes = ['content-title', className].filter(Boolean).join(' ')

  const linkContent = (
    <>
      <span className="content-title__link-text">{linkText}</span>
      <Icon name="CaretRight" size="m" className="content-title__link-icon" />
    </>
  )

  return (
    <section className={classes} {...rest}>
      {showLabel && <p className="content-title__label">{label}</p>}
      <div className="content-title__row">
        <p className="content-title__title">{title}</p>
        <div className="content-title__aside">
          {showDescription && <p className="content-title__description">{description}</p>}
          {showButton && (
            <Button
              className="content-title__button"
              type="secondary"
              size="m"
              text={buttonText}
              href={buttonHref}
              onClick={onButtonClick}
            />
          )}
          {showLink &&
            (linkHref ? (
              <a href={linkHref} className="content-title__link" onClick={onLinkClick}>
                {linkContent}
              </a>
            ) : (
              <button type="button" className="content-title__link" onClick={onLinkClick}>
                {linkContent}
              </button>
            ))}
        </div>
      </div>
    </section>
  )
}

export default ContentTitle
