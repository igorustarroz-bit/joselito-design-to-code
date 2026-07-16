import './form.css'
import { Button } from '../Button/Button'

/**
 * UI11-Form — node 57947:46433 en Figma. Contenedor de formulario:
 * header (título + descripción) opcional, slot de inputs (`children`,
 * normalmente `Input` o `FormRow` de `UI06`), lista de checkboxes opcional
 * (`checklist`, normalmente `CheckboxList` de `UI08`) y fila de botones
 * opcional (Cancelar/Aceptar, reutilizando `Button` de `UI02`).
 *
 * Es puramente estructural — no gestiona validación ni estado del
 * formulario, mismo criterio presentacional que el resto del sistema: la
 * app controla cada `Input`/`CheckboxLabel` hijo y pasa `onCancel`/`onAccept`.
 */
export function Form({
  title = 'Title Form',
  description = 'Description',
  showHeader = true,
  showDescription = true,
  children,
  checklist,
  showButtonRow = true,
  showCancelButton = true,
  cancelText = 'CANCEL',
  acceptText = 'ACCEPT',
  onCancel,
  onAccept,
  className,
  ...rest
}) {
  const classes = ['form', className].filter(Boolean).join(' ')

  return (
    <form className={classes} {...rest}>
      {showHeader && (
        <div className="form__header">
          <p className="form__title">{title}</p>
          {showDescription && <p className="form__description">{description}</p>}
        </div>
      )}
      <div className="form__inputs">{children}</div>
      {checklist && <div className="form__checklist">{checklist}</div>}
      {showButtonRow && (
        <div className="form__button-row">
          {showCancelButton && <Button type="terciary" size="s" text={cancelText} onClick={onCancel} />}
          <Button type="primary" size="s" text={acceptText} onClick={onAccept} />
        </div>
      )}
    </form>
  )
}

export default Form
