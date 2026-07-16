import { useId } from 'react'
import { Checkbox } from '../CheckboxRadio/Checkbox'
import './checkbox-label.css'

/**
 * UI09-Checkbox-Label — node 43246:12097 en Figma (12 variantes: Size
 * Medium/Small × Estado Default/Hover/Selected/Disabled/Disabled Selected/Undefined).
 *
 * Combina UI10-Checkboxes-Radios (Type=Checkboxes) con una etiqueta de
 * texto, envueltos en un <label> nativo real — clicar el texto también
 * marca/desmarca el control, sin JavaScript adicional.
 *
 * La variante Figma "Estado=Undefined" (node 43246:12108) es visualmente
 * idéntica a "Selected" (mismo icono de check, mismo color de relleno, mismo
 * color de texto) — se trata como un duplicado/placeholder de Figma, no
 * como un estado real, y no se traduce como valor de prop.
 *
 * "Hover" no necesita lógica propia: es el `:hover` nativo de Checkbox
 * (heredado de UI10) — el color del texto no cambia en ese estado.
 */
export function CheckboxLabel({
  size = 'medium',
  text = 'Label',
  checked,
  disabled = false,
  id,
  className,
  onChange,
  ...rest
}) {
  const autoId = useId()
  const inputId = id || autoId
  const classes = ['checkbox-label', size === 'small' && 'checkbox-label--small', disabled && 'checkbox-label--disabled', className]
    .filter(Boolean)
    .join(' ')

  return (
    <label className={classes} htmlFor={inputId}>
      <Checkbox id={inputId} size={size} checked={checked} disabled={disabled} onChange={onChange} {...rest} />
      <span className="checkbox-label__text">{text}</span>
    </label>
  )
}

export default CheckboxLabel
