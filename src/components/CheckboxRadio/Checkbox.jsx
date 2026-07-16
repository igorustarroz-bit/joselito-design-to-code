import './checkbox-radio.css'

/**
 * UI10-Checkboxes-Radios (Type=Checkboxes) — node 49722:19804 en Figma.
 * Envuelve un `<input type="checkbox">` nativo estilizado con
 * `appearance: none` — hereda foco/teclado/formularios nativos gratis.
 *
 * Nota sobre la prop "Theme" (Light/Dark) del master de Figma: no se
 * tradujo como prop — todos los colores del componente ya vienen de tokens
 * semánticos globales (`Strokes-Icons/*`, `Backgrounds/*`) que se adaptan
 * solos vía `data-theme`, así que esa variante de Figma es redundante con
 * el sistema de temas de este proyecto.
 */
export function Checkbox({ checked, disabled = false, size = 'medium', className, ...rest }) {
  const classes = ['checkbox-radio', 'checkbox-radio--checkbox', size === 'small' && 'checkbox-radio--small', className]
    .filter(Boolean)
    .join(' ')
  return (
    <input
      type="checkbox"
      className={classes}
      checked={checked}
      disabled={disabled}
      {...rest}
    />
  )
}

export default Checkbox
