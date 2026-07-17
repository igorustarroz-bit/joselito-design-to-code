import { useState } from 'react'
import { CheckboxList } from './CheckboxList'
import { CheckboxLabel } from '../CheckboxLabel/CheckboxLabel'
import { VariantGrid, VariantSwatch } from '../../stories/VariantSwatch'

export default {
  title: 'Components/Checkbox List',
}

function DemoList({ vertical = true }) {
  const [values, setValues] = useState({ a: false, b: true, c: false })
  const toggle = (key) => setValues((prev) => ({ ...prev, [key]: !prev[key] }))
  return (
    <CheckboxList vertical={vertical} aria-label="Lista de ejemplo">
      <CheckboxLabel text="Opción uno" checked={values.a} onChange={() => toggle('a')} />
      <CheckboxLabel text="Opción dos" checked={values.b} onChange={() => toggle('b')} />
      <CheckboxLabel text="Opción tres" checked={values.c} onChange={() => toggle('c')} />
    </CheckboxList>
  )
}

export const Vertical = {
  render: () => <DemoList vertical />,
}

export const Horizontal = {
  render: () => <DemoList vertical={false} />,
}

export const WithDisabled = {
  render: () => (
    <CheckboxList aria-label="Lista con opción deshabilitada">
      <CheckboxLabel text="Opción uno" />
      <CheckboxLabel text="Opción deshabilitada" disabled />
      <CheckboxLabel text="Opción marcada y deshabilitada" checked disabled onChange={() => {}} />
    </CheckboxList>
  ),
}

export const AllVariants = {
  render: () => (
    <VariantGrid>
      <VariantSwatch label="Vertical=Yes">
        <DemoList vertical />
      </VariantSwatch>
      <VariantSwatch label="Vertical=No">
        <DemoList vertical={false} />
      </VariantSwatch>
    </VariantGrid>
  ),
}
