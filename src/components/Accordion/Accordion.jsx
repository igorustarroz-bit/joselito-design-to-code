import './accordion.css'

/**
 * UI13-Accordion — node 57943:46123 en Figma. Contenedor "slot" que agrupa
 * varias instancias de `AccordionItem`, mismo patrón que `CheckboxList`
 * (UI08) y `Tabs` (UI05): no gestiona qué panel está abierto — la app
 * controla cada `AccordionItem` hijo con su propio `open`/`onToggle`.
 */
export function Accordion({ children, className, ...rest }) {
  const classes = ['accordion', className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

export default Accordion
