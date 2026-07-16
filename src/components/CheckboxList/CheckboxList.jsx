import './checkbox-list.css'

/**
 * UI08-Checkbox-List — node 57947:46573 en Figma (2 variantes: Vertical=Yes/No).
 * Contenedor "slot" que agrupa varias instancias de `CheckboxLabel` (UI09).
 * No gestiona selección ni estado propio — mismo criterio presentacional
 * que el resto de componentes: la app controla cada `CheckboxLabel` hijo.
 *
 * `vertical` traduce la propiedad Figma "Vertical" (Yes/No): apilado en
 * columna con gap 8px, o en fila con gap 16px.
 */
export function CheckboxList({ vertical = true, children, className, ...rest }) {
  const classes = ['checkbox-list', vertical ? 'checkbox-list--vertical' : 'checkbox-list--horizontal', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} role="group" {...rest}>
      {children}
    </div>
  )
}

export default CheckboxList
