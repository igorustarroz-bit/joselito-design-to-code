import { useId } from 'react'
import './cards-accordion.css'
import { Icon } from '../../components/Icon/Icon'
import { Button } from '../../components/Button/Button'

const DEFAULT_ITEMS = [
  {
    collapsedTitle: 'Años de curación',
    linkLabel: 'Ver añadas',
    linkHref: undefined,
    label: 'AÑOS DE CURACIÓN',
    titleLines: [
      { text: 'Reserva', accent: true },
      { text: 'Millésime', accent: false },
      { text: 'Vintage', accent: true },
    ],
    body: 'Los jamones Gran Reserva expresan el sabor Joselito en su forma más armoniosa: jugosos, suaves y de aromas delicados.',
    tags: ['COMPLEJIDAD', 'EQUILIBRIO', 'DULZURA'],
    duration: '4 A 6 AÑOS DE CURACIÓN',
    buttonLabel: 'Descubrir',
    buttonHref: undefined,
  },
]

function AccordionCard({ item, open, onToggle, id }) {
  const autoId = useId()
  const baseId = id || autoId
  const headerId = `${baseId}-header`
  const contentId = `${baseId}-content`

  return (
    <div className="cards-accordion__card" data-open={open || undefined}>
      <div className="cards-accordion__header">
        <button
          type="button"
          id={headerId}
          className="cards-accordion__toggle"
          aria-expanded={open}
          aria-controls={contentId}
          onClick={onToggle}
        >
          <Icon name="CaretDown" size="m" className="cards-accordion__toggle-icon" />
          <span className="cards-accordion__toggle-title">{item.collapsedTitle}</span>
        </button>
        {item.linkLabel &&
          (item.linkHref ? (
            <a href={item.linkHref} className="cards-accordion__link">
              {item.linkLabel}
              <Icon name="CaretRight" size="s" />
            </a>
          ) : (
            <span className="cards-accordion__link">
              {item.linkLabel}
              <Icon name="CaretRight" size="s" />
            </span>
          ))}
      </div>

      {open && (
        <div className="cards-accordion__content" id={contentId} role="region" aria-labelledby={headerId}>
          <p className="cards-accordion__label">{item.label}</p>

          <div className="cards-accordion__title">
            {item.titleLines.map((line, index) => (
              <p
                key={index}
                className={
                  line.accent
                    ? 'cards-accordion__title-line cards-accordion__title-line--accent'
                    : 'cards-accordion__title-line'
                }
              >
                {line.text}
              </p>
            ))}
          </div>

          <div className="cards-accordion__body-wrap">
            <p className="cards-accordion__body">{item.body}</p>

            <div className="cards-accordion__meta">
              {item.tags?.length > 0 && (
                <p className="cards-accordion__tags">
                  {item.tags.map((tag, index) => (
                    <span key={tag} className="cards-accordion__tag">
                      {index > 0 && <span className="cards-accordion__tag-dot">·</span>}
                      {tag}
                    </span>
                  ))}
                </p>
              )}
              {item.duration && <p className="cards-accordion__duration">{item.duration}</p>}
            </div>

            {item.buttonLabel && <Button type="terciary" size="s" text={item.buttonLabel} href={item.buttonHref} />}
          </div>
        </div>
      )}
    </div>
  )
}

/**
 * Cards / Accordion — node 58182:24099 en Figma (COMPONENT_SET con 2
 * variantes, ambas con nombres rotos/genéricos: "Property 1=Cards, Property
 * 2=Accordion" (1440×900, sin propiedades reales, `componentPropertyDefinitions`
 * lanza error de "component set con errores existentes") y "Property
 * 1=Frame 2087332150" (390×731). Ver cards-accordion.css para el detalle
 * completo de la reconstrucción y las decisiones tomadas ante un master
 * incompleto.
 */
export function CardsAccordion({ items = DEFAULT_ITEMS, onToggle, className, ...rest }) {
  const classes = ['cards-accordion', className].filter(Boolean).join(' ')

  return (
    <section className={classes} data-theme="dark-black-neutral" {...rest}>
      <div className="cards-accordion__backdrop" aria-hidden="true">
        <div className="cards-accordion__backdrop-image cards-accordion__backdrop-image--1" />
        <div className="cards-accordion__backdrop-image cards-accordion__backdrop-image--2" />
        <div className="cards-accordion__backdrop-image cards-accordion__backdrop-image--3" />
        <div className="cards-accordion__backdrop-title">
          <p className="cards-accordion__backdrop-line cards-accordion__backdrop-line--accent">Reserva</p>
          <p className="cards-accordion__backdrop-line cards-accordion__backdrop-line--accent">Vintage</p>
          <p className="cards-accordion__backdrop-line">Millésime</p>
          <p className="cards-accordion__backdrop-line cards-accordion__backdrop-line--accent">Reserva</p>
          <p className="cards-accordion__backdrop-line cards-accordion__backdrop-line--accent">Vintage</p>
        </div>
      </div>

      <div className="cards-accordion__list">
        {items.map((item, index) => (
          <AccordionCard
            key={index}
            item={item}
            open={!!item.open}
            onToggle={onToggle ? () => onToggle(index) : undefined}
          />
        ))}
      </div>
    </section>
  )
}

export default CardsAccordion
