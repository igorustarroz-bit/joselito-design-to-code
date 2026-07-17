import './list-archive-table.css'
import { ContentTitle } from '../ContentTitle/ContentTitle'
import { AspectRatio } from '../../components/AspectRatio/AspectRatio'

/**
 * List / Archive table — node 58163:39738 en Figma (COMPONENT_SET:
 * Device=desktop/mobile). Cabecera (reutiliza `ContentTitle` con
 * `titleSize="title-1"`) + listado de filas fecha/texto con una miniatura
 * flotante que aparece al pasar el ratón (`:hover`/`:focus-within`), oculta
 * por defecto en Figma pero presente en la estructura del nodo. Ver
 * list-archive-table.css para el detalle de tokens/grid.
 *
 * La propiedad "Device" es responsive real (media query en `768px`): la
 * miniatura hover solo se muestra en desktop (no hay "hover" real en
 * touch/mobile).
 */
export function ListArchiveTable({
  title = 'Últimas noticias',
  items = [
    {
      date: 'Diciembre 2025',
      text: 'Lorem ipsum dolor sit amet consectetur. Purus neque sagittis donec est auctor diam ac morbi semper. Leo et et pharetra.',
      image: undefined,
      imageAlt: '',
    },
    {
      date: 'Diciembre 2025',
      text: 'Lorem ipsum dolor sit amet consectetur. Purus neque sagittis donec est auctor diam ac morbi semper. Leo et et pharetra.',
      image: undefined,
      imageAlt: '',
    },
    {
      date: 'Diciembre 2025',
      text: 'Lorem ipsum dolor sit amet consectetur. Purus neque sagittis donec est auctor diam ac morbi semper. Leo et et pharetra.',
      image: undefined,
      imageAlt: '',
    },
  ],
  className,
  ...rest
}) {
  const classes = ['list-archive-table', className].filter(Boolean).join(' ')

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
      <div className="list-archive-table__rows">
        {items.map((item, index) => (
          <div className="list-archive-table__item" key={index} tabIndex={0}>
            <p className="list-archive-table__item-date">{item.date}</p>
            <p className="list-archive-table__item-text">{item.text}</p>
            <AspectRatio
              ratio="2:3"
              image={item.image}
              imageAlt={item.imageAlt}
              className="list-archive-table__item-image"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListArchiveTable
