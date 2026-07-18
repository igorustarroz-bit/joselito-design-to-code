import './form-section.css'
import { Form } from '../../components/Form/Form'
import { FormRow } from '../../components/Form/FormRow'
import { Input } from '../../components/Input/Input'
import { CheckboxList } from '../../components/CheckboxList/CheckboxList'
import { CheckboxLabel } from '../../components/CheckboxLabel/CheckboxLabel'
import { Button } from '../../components/Button/Button'

/**
 * Form (módulo) — node 58195:43756 en Figma (COMPONENT_SET: Layout=text-left,
 * Device=desktop/mobile). No confundir con el componente `Form` (UI11) ya
 * construido en `src/components/Form/` — este módulo lo instancia
 * directamente en su columna derecha, junto a una columna de texto
 * editorial a la izquierda (mismo patrón que Content / Text + Image). Ver
 * form-section.css para el detalle de tokens/grid.
 */
export function FormSection({
  label = 'This is a label',
  showLabel = true,
  title = 'Lorem ipsum dolor sit amet consectetur.',
  text = 'Lorem ipsum dolor sit amet consectetur. Leo proin nisi in neque hendrerit. Egestas nulla tortor pulvinar eget malesuada diam. Aenean auctor elementum gravida sit odio et eu. Sed sit diam nibh arcu facilisis nunc orci hac in. Dictum cras id erat sollicitudin pellentesque velit adipiscing diam. Purus tellus urna netus nulla duis.',
  showButton = false,
  buttonText = 'Lorem ipsum',
  buttonHref,
  onButtonClick,
  formTitle = 'Title Form',
  formDescription = 'Description',
  onCancel,
  onAccept,
  className,
  ...rest
}) {
  const classes = ['form-section', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...rest}>
      <div className="form-section__content">
        {showLabel && <p className="form-section__label">{label}</p>}
        <p className="form-section__title">{title}</p>
        <p className="form-section__text">{text}</p>
        {showButton && <Button type="terciary" size="s" text={buttonText} href={buttonHref} onClick={onButtonClick} />}
      </div>

      <Form
        className="form-section__form"
        title={formTitle}
        description={formDescription}
        checklist={
          <CheckboxList>
            <CheckboxLabel text="Label" />
          </CheckboxList>
        }
        onCancel={onCancel}
        onAccept={onAccept}
      >
        <FormRow>
          <Input size="big" label="Label" />
          <Input size="big" label="Label" />
        </FormRow>
        <Input size="big" label="Label" />
        <Input size="big" label="Label" />
      </Form>
    </div>
  )
}

export default FormSection
