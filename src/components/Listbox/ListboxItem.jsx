/**
 * z_fragment_listbox_Item_Dropdown — fila seleccionable de UI07-Listbox
 * (node 49650:11827 en Figma). Tamaños Large/Medium, con checkbox opcional.
 *
 * Nota: en Figma, la variante Checkbox=Yes instancia el componente
 * UI10-Checkboxes-Radios (aún no construido en este proyecto). Se usa aquí
 * un `<input type="checkbox">` nativo como implementación provisional —
 * sustituir por el componente Checkbox real cuando se construya UI10.
 */
export function ListboxItem({
  size = 'large',
  text = 'Label',
  checkbox = false,
  checked = false,
  selected = false,
  onChange,
  onClick,
  className,
  ...rest
}) {
  const classes = ['listbox-item', `listbox-item--${size}`, className].filter(Boolean).join(' ')

  return (
    <div
      role="option"
      aria-selected={selected}
      tabIndex={0}
      className={classes}
      onClick={onClick}
      {...rest}
    >
      {checkbox ? (
        <label className="listbox-item__text listbox-item__checkbox-row">
          <input
            type="checkbox"
            className="listbox-item__checkbox"
            checked={checked}
            onChange={onChange}
          />
          <span>{text}</span>
        </label>
      ) : (
        <span className="listbox-item__text">{text}</span>
      )}
      {selected && !checkbox && (
        <svg
          className="listbox-item__check"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M5 13L10 18L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  )
}

export default ListboxItem
