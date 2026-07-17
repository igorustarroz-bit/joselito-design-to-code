import './list-characteristics.css'
import { ContentTitle } from '../ContentTitle/ContentTitle'

/**
 * List / Characteristics — node 58163:39646 en Figma (COMPONENT_SET:
 * Device=desktop/mobile). Cabecera (reutiliza el módulo `ContentTitle`, sin
 * label/descripción/botón/enlace) + fila de N características
 * (num/título/texto), en columnas (desktop) o apiladas (mobile).
 *
 * La propiedad "Device" es responsive real (media query en `768px`), igual
 * criterio que el resto de módulos. Ver list-characteristics.css para el
 * detalle de tokens/grid.
 */
export function ListCharacteristics({
  title = 'This is a title',
  items = [
    {
      num: '01',
      title: 'Lorem ipsum dolor sit amet',
      text: 'Lorem ipsum dolor sit amet consectetur. Dolor at pellentesque velit eleifend quis. Cras.',
    },
    {
      num: '02',
      title: 'Lorem ipsum dolor sit amet',
      text: 'Lorem ipsum dolor sit amet consectetur. Dolor at pellentesque velit eleifend quis. Cras.',
    },
    {
      num: '03',
      title: 'Lorem ipsum dolor sit amet',
      text: 'Lorem ipsum dolor sit amet consectetur. Dolor at pellentesque velit eleifend quis. Cras.',
    },
  ],
  className,
  ...rest
}) {
  const classes = ['list-characteristics', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...rest}>
      <ContentTitle
        title={title}
        showLabel={false}
        showDescription={false}
        showButton={false}
        showLink={false}
      />
      <div className="list-characteristics__row">
        {items.map((item, index) => (
          <div className="list-characteristics__item" key={item.num ?? index}>
            <div className="list-characteristics__item-head">
              <p className="list-characteristics__num">{item.num}</p>
              <p className="list-characteristics__item-title">{item.title}</p>
            </div>
            <p className="list-characteristics__text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListCharacteristics
