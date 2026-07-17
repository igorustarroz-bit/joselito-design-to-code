import { useState } from 'react'
import { Form } from './Form'
import { FormRow } from './FormRow'
import { Input } from '../Input/Input'
import { CheckboxList } from '../CheckboxList/CheckboxList'
import { CheckboxLabel } from '../CheckboxLabel/CheckboxLabel'
import { VariantGrid, VariantSwatch } from '../../stories/VariantSwatch'

export default {
  title: 'Components/Form',
}

export const Default = {
  render: () => (
    <Form
      checklist={
        <CheckboxList>
          <CheckboxLabel text="Acepto los términos y condiciones" />
        </CheckboxList>
      }
    >
      <Input label="Nombre" />
      <Input label="Correo electrónico" />
    </Form>
  ),
}

export const TwoInputRow = {
  render: () => (
    <Form title="Datos de contacto" description="Rellena tus datos para continuar">
      <FormRow>
        <Input label="Nombre" />
        <Input label="Apellidos" />
      </FormRow>
      <Input label="Correo electrónico" />
    </Form>
  ),
}

export const ThreeInputRow = {
  render: () => (
    <Form title="Dirección" description="¿Dónde quieres recibir tu pedido?">
      <FormRow>
        <Input label="Calle" />
        <Input label="Número" />
        <Input label="Código postal" />
      </FormRow>
    </Form>
  ),
}

export const NoHeader = {
  render: () => (
    <Form showHeader={false}>
      <Input label="Correo electrónico" />
    </Form>
  ),
}

export const NoDescription = {
  render: () => (
    <Form title="Newsletter" showDescription={false}>
      <Input label="Correo electrónico" />
    </Form>
  ),
}

export const OnlyAcceptButton = {
  render: () => (
    <Form showCancelButton={false} acceptText="ENVIAR">
      <Input label="Correo electrónico" />
    </Form>
  ),
}

export const NoButtonRow = {
  render: () => (
    <Form showButtonRow={false}>
      <Input label="Correo electrónico" />
    </Form>
  ),
}

function DemoWithChecklist() {
  const [terms, setTerms] = useState(false)
  const [news, setNews] = useState(true)
  return (
    <Form
      title="Crear cuenta"
      description="Completa el formulario para registrarte"
      checklist={
        <CheckboxList>
          <CheckboxLabel text="Acepto los términos y condiciones" checked={terms} onChange={(e) => setTerms(e.target.checked)} />
          <CheckboxLabel text="Quiero recibir novedades por email" checked={news} onChange={(e) => setNews(e.target.checked)} />
        </CheckboxList>
      }
    >
      <Input label="Nombre" />
      <Input label="Correo electrónico" />
    </Form>
  )
}

export const WithChecklist = {
  render: () => <DemoWithChecklist />,
}

export const AllRowVariants = {
  render: () => (
    <VariantGrid>
      <VariantSwatch label="FormRow (2 inputs)">
        <div style={{ width: 360 }}>
          <FormRow>
            <Input label="Nombre" />
            <Input label="Apellidos" />
          </FormRow>
        </div>
      </VariantSwatch>
      <VariantSwatch label="FormRow (3 inputs)">
        <div style={{ width: 480 }}>
          <FormRow>
            <Input label="Calle" />
            <Input label="Número" />
            <Input label="Código postal" />
          </FormRow>
        </div>
      </VariantSwatch>
    </VariantGrid>
  ),
}
