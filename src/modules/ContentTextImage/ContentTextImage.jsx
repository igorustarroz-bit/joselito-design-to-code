import './content-text-image.css'
import { Button } from '../../components/Button/Button'

/**
 * Content / Text + Image — node 58163:39941 en Figma. Módulo marcado en
 * las instrucciones del proyecto como referencia de calidad. Fila imagen +
 * texto (título, párrafo, botón opcional) que se apila en columna en
 * mobile automáticamente (ver `content-text-image.css`).
 *
 * La propiedad "Device" de Figma es responsive real (no un prop); la
 * propiedad "Layout" (text-left/text-right) sí es una prop (`layout`) que
 * decide en qué lado aparece la imagen a partir de `768px` de ancho.
 */
export function ContentTextImage({
  layout = 'text-right',
  image,
  imageAlt = '',
  label = 'This is a label',
  showLabel = true,
  title = 'Lorem ipsum dolor sit amet consectetur.',
  text = 'Lorem ipsum dolor sit amet consectetur. Leo proin nisi in neque hendrerit. Egestas nulla tortor pulvinar eget malesuada diam. Aenean auctor elementum gravida sit odio et eu. Sed sit diam nibh arcu facilisis nunc orci hac in. Dictum cras id erat sollicitudin pellentesque velit adipiscing diam. Purus tellus urna netus nulla duis.',
  showButton = false,
  buttonText = 'Lorem ipsum',
  href,
  onClick,
  className,
  ...rest
}) {
  const classes = ['content-text-image', `content-text-image--${layout}`, className].filter(Boolean).join(' ')

  return (
    <section className={classes} {...rest}>
      <div className="content-text-image__media">
        {image && <img src={image} alt={imageAlt} className="content-text-image__image" />}
      </div>
      <div className="content-text-image__content">
        <div className="content-text-image__titles">
          {showLabel && <p className="content-text-image__label">{label}</p>}
          <p className="content-text-image__title">{title}</p>
        </div>
        <p className="content-text-image__text">{text}</p>
        {showButton && <Button type="secondary" size="m" text={buttonText} href={href} onClick={onClick} />}
      </div>
    </section>
  )
}

export default ContentTextImage
