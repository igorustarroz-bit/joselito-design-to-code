import { useId } from 'react'
import './accordion.css'
import { IconPlus, IconMinus } from './icons'

/**
 * z_fragment_accordion — node 57943:46054 en Figma (2 variantes:
 * Open=Yes/No). Es presentacional (mismo criterio que Tabs/ListboxItem):
 * la app controla `open` y recibe `onToggle`, no gestiona estado interno.
 *
 * El botón de cabecera es un `<button>` nativo real (no un `<div>` con
 * `onClick`) — foco y activación por teclado (Espacio/Enter) funcionan
 * sin JavaScript adicional. `aria-expanded` + `aria-controls` enlazan la
 * cabecera con la región de contenido (`role="region"`).
 */
export function AccordionItem({ text = 'item', open = false, onToggle, children, className, id, ...rest }) {
  const autoId = useId()
  const baseId = id || autoId
  const headerId = `${baseId}-header`
  const contentId = `${baseId}-content`
  const classes = ['accordion-item', className].filter(Boolean).join(' ')

  return (
    <div className={classes} data-open={open || undefined} {...rest}>
      <button
        type="button"
        id={headerId}
        className="accordion-item__header"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={onToggle}
      >
        <span className="accordion-item__label">{text}</span>
        {open ? <IconMinus className="accordion-item__icon" /> : <IconPlus className="accordion-item__icon" />}
      </button>
      {open && (
        <div className="accordion-item__content" id={contentId} role="region" aria-labelledby={headerId}>
          {children}
        </div>
      )}
    </div>
  )
}

export default AccordionItem
