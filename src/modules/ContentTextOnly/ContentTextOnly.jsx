import './content-text-only.css'
import { Button } from '../../components/Button/Button'

/**
 * Content / Text only — node 58163:39972 en Figma. Módulo de solo texto
 * en 3 layouts de escritorio (`variant`): `split` (título + cuerpo en
 * fila, con botón opcional), `2-column` y `1-column` (label+título
 * arriba, columnas de párrafos debajo). En mobile (por debajo de 768px)
 * todas las variantes colapsan al mismo layout apilado de una columna.
 *
 * `columns` es un array de columnas, cada una un array de párrafos —
 * permite 1 columna (`1-column`/`split`) o 2 (`2-column`) sin necesitar
 * props distintas por variante.
 */
export function ContentTextOnly({
  variant = 'split',
  label = 'This is a label',
  showLabel = true,
  title = 'Lorem ipsum dolor sit amet consectetur.',
  columns = [['Lorem ipsum dolor sit amet consectetur.']],
  showButton = false,
  buttonText = 'Lorem ipsum',
  href,
  onClick,
  className,
  ...rest
}) {
  const classes = ['content-text-only', `content-text-only--${variant}`, className].filter(Boolean).join(' ')

  const columnsBlock = (
    <div className="content-text-only__columns">
      {columns.map((paragraphs, i) => (
        <div className="content-text-only__column" key={i}>
          {paragraphs.map((paragraph, j) => (
            <p className="content-text-only__paragraph" key={j}>
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </div>
  )

  if (variant === 'split') {
    return (
      <section className={classes} {...rest}>
        {showLabel && <p className="content-text-only__label">{label}</p>}
        <div className="content-text-only__row">
          <p className="content-text-only__title">{title}</p>
          <div className="content-text-only__body">
            {columns[0]?.map((paragraph, i) => (
              <p className="content-text-only__paragraph" key={i}>
                {paragraph}
              </p>
            ))}
            {showButton && <Button type="secondary" text={buttonText} href={href} onClick={onClick} />}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={classes} {...rest}>
      <div className="content-text-only__header">
        {showLabel && <p className="content-text-only__label">{label}</p>}
        <p className="content-text-only__title">{title}</p>
      </div>
      {columnsBlock}
    </section>
  )
}

export default ContentTextOnly
