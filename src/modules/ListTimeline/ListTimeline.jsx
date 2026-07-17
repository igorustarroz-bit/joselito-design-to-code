import './list-timeline.css'
import { ContentTitle } from '../ContentTitle/ContentTitle'
import { AspectRatio } from '../../components/AspectRatio/AspectRatio'

/**
 * List / Timeline — node 58163:39708 en Figma (COMPONENT_SET:
 * Device=desktop/mobile). Cabecera (reutiliza `ContentTitle` con
 * `titleSize="title-1"`) + selector de años (vertical en desktop,
 * horizontal con scroll en mobile) + contenido (título/texto/imagen) del
 * año activo.
 *
 * Presentacional (igual criterio que Tabs/Listbox): la app controla qué
 * año está activo vía `activeIndex` + `onYearSelect`. Ver
 * list-timeline.css para el detalle de tokens/grid y del hallazgo del
 * color huérfano del título de contenido.
 */
export function ListTimeline({
  title = 'Lorem ipsum accumsan eleifend',
  years = ['1868', '1899', '1922', '1957', '1986'],
  activeIndex = 0,
  onYearSelect,
  heading = 'Lorem ipsum dolor sit amet consectetur.',
  text = 'Lorem ipsum dolor sit amet consectetur. Neque pretium a ipsum venenatis dignissim quam lectus ultrices volutpat. Massa placerat pretium risus sagittis habitant cras. A odio tristique cursus rutrum placerat odio sit morbi habitasse. Enim.',
  image,
  imageAlt = '',
  className,
  ...rest
}) {
  const classes = ['list-timeline', className].filter(Boolean).join(' ')

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
      <div className="list-timeline__body">
        <div className="list-timeline__years" role="tablist" aria-label="Años">
          {years.map((year, index) => (
            <button
              key={year}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              className="list-timeline__year"
              data-active={index === activeIndex}
              onClick={() => onYearSelect?.(index)}
            >
              {year}
            </button>
          ))}
        </div>
        <div className="list-timeline__row">
          <div className="list-timeline__content">
            <p className="list-timeline__heading">{heading}</p>
            <p className="list-timeline__text">{text}</p>
          </div>
          <AspectRatio ratio="2:3" image={image} imageAlt={imageAlt} className="list-timeline__image" />
        </div>
      </div>
    </div>
  )
}

export default ListTimeline
