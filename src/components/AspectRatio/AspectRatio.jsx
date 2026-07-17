import './aspect-ratio.css'

const RATIOS = ['9:16', '2:3', '3:4', '1:1', '4:3', '3:2', '16:9']

/**
 * Aspect Ratio — node 50942:37236 en Figma (página "📐 Foundations", 7
 * variantes). Contenedor de imagen con relación de aspecto fija y
 * `object-fit: cover`; sin imagen muestra un fondo neutro de placeholder.
 *
 * Componente base reutilizado por Card Product, Card Link, Card Carrusel
 * y Content / Text + Image (y por cualquier módulo futuro con imagen).
 */
export function AspectRatio({ ratio = '1:1', image, imageAlt = '', className, children, ...rest }) {
  const modifier = RATIOS.includes(ratio) ? ratio.replace(':', '-') : '1-1'
  const classes = ['aspect-ratio', `aspect-ratio--${modifier}`, className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...rest}>
      {image && <img src={image} alt={imageAlt} className="aspect-ratio__image" />}
      {children}
    </div>
  )
}

export default AspectRatio
