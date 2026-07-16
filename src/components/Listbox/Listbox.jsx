import './listbox.css'
import { Button } from '../Button/Button'
import { IconChevronDown } from '../NavButton/icons'

/**
 * UI07-Listbox — panel desplegable de opciones (node 49650:12398 en Figma).
 * Dos variantes de layout ("Breakpoint" en Figma, aquí `variant`):
 *
 * - `desktop`: panel flotante compacto (pensado para anclarse bajo un
 *   `Input type="dropdown"`, ver UI06).
 * - `mobile`: hoja inferior de ancho completo con cabecera (título + icono),
 *   lista de opciones con scroll propio y pie con botón "Aplicar" (reutiliza
 *   `Button` de UI02).
 *
 * No gestiona qué opción está seleccionada ni el scroll/posicionamiento
 * respecto al trigger — mismo criterio presentacional que el resto de
 * componentes: la app pasa los `<ListboxItem>` como children y controla
 * selección mediante sus props `selected`/`onClick`.
 */
export function Listbox({
  variant = 'desktop',
  title = 'Title',
  applyLabel = 'Apply',
  onApply,
  onHeaderClick,
  children,
  className,
  ...rest
}) {
  if (variant === 'mobile') {
    return (
      <div className={['listbox', 'listbox--mobile', className].filter(Boolean).join(' ')} role="listbox" {...rest}>
        <button type="button" className="listbox__mobile-header" onClick={onHeaderClick}>
          <span className="listbox__mobile-title">{title}</span>
          <IconChevronDown className="listbox__mobile-caret" />
        </button>
        <div className="listbox__mobile-items">{children}</div>
        <div className="listbox__mobile-footer">
          <Button type="primary" size="s" text={applyLabel} onClick={onApply} className="listbox__mobile-apply" />
        </div>
      </div>
    )
  }

  return (
    <div className={['listbox', 'listbox--desktop', className].filter(Boolean).join(' ')} role="listbox" {...rest}>
      {children}
    </div>
  )
}

export default Listbox
