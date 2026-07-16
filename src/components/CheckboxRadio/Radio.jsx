import './checkbox-radio.css'

/**
 * UI10-Checkboxes-Radios (Type=Radio) — node 49722:19804 en Figma.
 * Envuelve un `<input type="radio">` nativo estilizado con
 * `appearance: none`. Ver Checkbox.jsx para la nota sobre "Theme".
 */
export function Radio({ checked, disabled = false, size = 'medium', className, ...rest }) {
  const classes = ['checkbox-radio', 'checkbox-radio--radio', size === 'small' && 'checkbox-radio--small', className]
    .filter(Boolean)
    .join(' ')
  return (
    <input
      type="radio"
      className={classes}
      checked={checked}
      disabled={disabled}
      {...rest}
    />
  )
}

export default Radio
