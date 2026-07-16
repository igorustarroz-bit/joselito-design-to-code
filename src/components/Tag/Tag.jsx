import './tag.css'

/**
 * UI12-Tag — node 49723:4763 en Figma. Etiqueta estática de una sola línea,
 * sin estados de interacción. Tres tipos de color (`transaction`/`new`/
 * `aseptic`) en dos tamaños (`l`/`xs`).
 *
 * En Figma la variante Type=New trae el texto "NUEVO" fijo en vez del
 * placeholder genérico "Label" que usan Transaction/Aseptic — se respeta
 * como valor por defecto de `text` para ese tipo, pero sigue siendo
 * sobrescribible como el resto de props de texto en este proyecto.
 */
const DEFAULT_TEXT = {
  transaction: 'Label',
  new: 'Nuevo',
  aseptic: 'Label',
}

export function Tag({ type = 'transaction', size = 'l', text, className, ...rest }) {
  const classes = ['tag', `tag--${size}`, className].filter(Boolean).join(' ')

  return (
    <span className={classes} data-type={type} {...rest}>
      {text ?? DEFAULT_TEXT[type]}
    </span>
  )
}

export default Tag
