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
 *
 * Prop `titleSize` (`'title-4'` por defecto): se detectó que otros módulos
 * que reutilizan este mismo master de Figma ("Content / Title") instancian
 * a veces el título con el estilo `Title/01` (24px/28px desktop, 20px/24px
 * mobile, familia `--font-body`) en vez del `Title/04` por defecto de este
 * componente (verificado consistente en ambos breakpoints de esas
 * instancias, no es un glitch puntual) — ver `List / Numbers`. Se añadió
 * como prop en vez de duplicar todo el layout de cabecera en cada módulo
 * que lo necesite.
 */
export function ContentTitle({
  label = 'This is a label',
  showLabel = true,
  title = 'Lorem ipsum accumsan eleifend',
  titleSize = 'title-4',
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
  const titleClasses = ['content-title__title', titleSize === 'title-1' && 'content-title__title--title-1']
    .filter(Boolean)
    .join(' ')

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
        <p className={titleClasses}>{title}</p>
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
