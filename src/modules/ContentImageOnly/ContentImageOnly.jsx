import './content-image-only.css'
import { AspectRatio } from '../../components/AspectRatio/AspectRatio'

/**
 * Content / Image only — node 58163:40001 en Figma (COMPONENT_SET:
 * Images=1/2 × Device=desktop/mobile). Módulo de solo imagen(es), sin texto.
 *
 * La propiedad "Device" de Figma es responsive real (media query en
 * `768px`, igual criterio que Content / Text + Image y Content / Text
 * only) — no un prop. La propiedad "Images" (1/2) sí decide una disposición
 * real y se traduce como la longitud del array `images` (1 o 2 elementos).
 *
 * Con 1 imagen: ratio 16:9 a todo el ancho. Con 2 imágenes: ambas ratio 3:4,
 * en fila, separadas con `justify-content: space-between` en desktop
 * (verificado en Figma: `primaryAxisAlignItems: SPACE_BETWEEN`, anchos fijos
 * 424px/648px) y con gap fijo de 12px alineadas a la izquierda en mobile
 * (anchos fijos 142px/196px) — comportamiento distinto entre breakpoints,
 * no solo un reescalado proporcional.
 */
export function ContentImageOnly({ images = [], className, ...rest }) {
  const count = images.length >= 2 ? 2 : 1
  const shown = images.length ? images.slice(0, count) : [{}]
  const ratio = count === 2 ? '3:4' : '16:9'

  const classes = ['content-image-only', `content-image-only--${count}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={classes} {...rest}>
      {shown.map((img, i) => (
        <AspectRatio
          key={i}
          className={`content-image-only__image content-image-only__image--${i}`}
          ratio={ratio}
          image={img.src}
          imageAlt={img.alt || ''}
        />
      ))}
    </section>
  )
}

export default ContentImageOnly
