import './list-numbers.css'
import { ContentTitle } from '../ContentTitle/ContentTitle'

/**
 * List / Numbers — node 58163:39683 en Figma (COMPONENT_SET:
 * Device=desktop/mobile). Cabecera (reutiliza `ContentTitle` con
 * `titleSize="title-1"`) + lista de "big numbers" (número grande + texto),
 * cada fila con borde superior. Ver list-numbers.css para detalle de
 * tokens/grid.
 *
 * La propiedad "Device" es responsive real (media query en `768px`).
 */
export function ListNumbers({
  title = 'This is a title',
  items = [
    { title: '24% Vitamina B', text: 'de la cantidad diaria recomendada.' },
    { title: '24% Vitamina B', text: 'de la cantidad diaria recomendada.' },
    { title: '24% Vitamina B', text: 'de la cantidad diaria recomendada.' },
  ],
  className,
  ...rest
}) {
  const classes = ['list-numbers', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...rest}>
      <ContentTitle
        title={title}
        titleSize="title-1"
        showLabel={false}
        showDescription={false}
        showButton={false}
        showLink={false}
      />
      <div className="list-numbers__rows">
        {items.map((item, index) => (
          <div className="list-numbers__item" key={index}>
            <p className="list-numbers__item-title">{item.title}</p>
            <p className="list-numbers__item-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListNumbers
