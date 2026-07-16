import { useId } from 'react'
import './input.css'
import { IconCalendarBlank } from '../Button/icons'

/**
 * UI06-Input — campo de formulario con "floating label" (node 49118:2300 en
 * Figma, 28 variantes: Type Default/Dropdown × Size Big/Small × 7 estados).
 *
 * El estado visual "vacío" (label centrado, tamaño completo) vs "flotante"
 * (label pequeño arriba + valor debajo) se resuelve con CSS puro usando
 * `:placeholder-shown` — sin JS ni gestión de estado interna, mismo criterio
 * "presentacional" que el resto de componentes del sistema. Por eso el
 * `<input>` siempre recibe `placeholder=" "` (un espacio) si no se indica
 * placeholder propio: es el truco estándar para que `:placeholder-shown`
 * funcione también cuando el campo está vacío sin placeholder real.
 *
 * `type="dropdown"` no es un `<input>` de texto sino un `<button>` de solo
 * lectura (abre un listbox gestionado por quien lo use, ver UI07-Listbox);
 * al no soportar `:placeholder-shown`, el estado "flotante" se controla
 * mediante la prop `value` (si hay valor, se muestra flotante).
 *
 * `validationState` ('default' | 'error' | 'validated') traduce los estados
 * Error/Validated de Figma. Nota de diseño: Figma no define combinaciones de
 * Error/Validated con Hover/Focus — se decidió que el color de
 * error/validado prevalece sobre el hover mientras que Focus sí se aplica
 * (el usuario necesita ver que el campo activo sigue siendo el mismo aunque
 * tenga error), documentado también en Input.mdx.
 */
export function Input({
  type = 'default',
  size = 'big',
  label = 'Label',
  message,
  showMessage = true,
  icon,
  showIcon = true,
  validationState = 'default',
  disabled = false,
  value,
  placeholder,
  className,
  id,
  onClick,
  ...rest
}) {
  const autoId = useId()
  const inputId = id || autoId
  const classes = ['input-field', `input-field--${size}`, className].filter(Boolean).join(' ')
  const iconNode = icon ?? <IconCalendarBlank className="input-field__icon" />

  return (
    <div
      className={classes}
      data-type={type}
      data-validation={validationState}
      data-disabled={disabled || undefined}
    >
      <div className="input-field__box">
        {type === 'dropdown' ? (
          <div className="input-field__control-wrap">
            <button
              type="button"
              id={inputId}
              className="input-field__control input-field__control--button"
              disabled={disabled}
              onClick={onClick}
              data-has-value={(value && String(value).length > 0) || undefined}
              {...rest}
            >
              {value}
            </button>
            <label htmlFor={inputId} className="input-field__label">
              {label}
            </label>
          </div>
        ) : (
          <div className="input-field__control-wrap">
            <input
              id={inputId}
              className="input-field__control"
              disabled={disabled}
              value={value}
              placeholder={placeholder ?? ' '}
              {...rest}
            />
            <label htmlFor={inputId} className="input-field__label">
              {label}
            </label>
          </div>
        )}
        {showIcon && iconNode}
      </div>
      {showMessage && message && <p className="input-field__message">{message}</p>}
    </div>
  )
}

export default Input
