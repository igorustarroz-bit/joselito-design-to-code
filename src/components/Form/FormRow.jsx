import './form.css'

/**
 * z_fragment_row_2_input / z_fragment_row_3_input (nodes 57953:9134 /
 * 57953:9192 en Figma) — fila horizontal de 2 o 3 `Input` de igual ancho,
 * usada dentro del slot de inputs de `Form`. Un solo componente sirve para
 * ambos casos: el layout no depende del número de hijos.
 */
export function FormRow({ children, className, ...rest }) {
  const classes = ['form-row', className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

export default FormRow
