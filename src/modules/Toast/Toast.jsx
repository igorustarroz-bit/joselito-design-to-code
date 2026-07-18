import './toast.css'
import { AspectRatio } from '../../components/AspectRatio/AspectRatio'

/**
 * Toast — node 58182:23548 en Figma (COMPONENT único, sin variantes ni
 * Device desktop/mobile — se usa al mismo tamaño fijo en cualquier
 * contexto, y es quien lo posiciona/envuelve quien decide su ubicación,
 * mismo criterio que Card Product/Card Link). Tarjeta flotante de imagen +
 * título + descripción, pensada para anclarse sobre un hero u otro fondo.
 * Ver toast.css para el detalle de tokens.
 */
export function Toast({ image, imageAlt = '', title = 'Título', description = 'Descripción', className, ...rest }) {
  const classes = ['toast', className].filter(Boolean).join(' ')

  return (
    <div className={classes} data-theme="light-white" {...rest}>
      <AspectRatio ratio="1:1" image={image} imageAlt={imageAlt} className="toast__image" />
      <div className="toast__text">
        <p className="toast__title">{title}</p>
        <p className="toast__description">{description}</p>
      </div>
    </div>
  )
}

export default Toast
