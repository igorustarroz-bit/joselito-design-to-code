import { useState } from 'react'
import { Checkbox } from './Checkbox'
import { Radio } from './Radio'

export default {
  title: 'Components/Checkbox & Radio',
}

function DemoCheckbox(props) {
  const [checked, setChecked] = useState(props.defaultChecked ?? false)
  return <Checkbox {...props} checked={checked} onChange={(e) => setChecked(e.target.checked)} />
}

export const CheckboxDefault = {
  render: () => <DemoCheckbox />,
}

export const CheckboxChecked = {
  render: () => <DemoCheckbox defaultChecked />,
}

export const CheckboxDisabled = {
  render: () => <Checkbox disabled />,
}

export const CheckboxCheckedDisabled = {
  render: () => <Checkbox checked disabled onChange={() => {}} />,
}

function DemoRadioGroup() {
  const [value, setValue] = useState('a')
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <Radio name="demo-radio" checked={value === 'a'} onChange={() => setValue('a')} />
      <Radio name="demo-radio" checked={value === 'b'} onChange={() => setValue('b')} />
      <Radio name="demo-radio" checked={value === 'c'} onChange={() => setValue('c')} />
    </div>
  )
}

export const RadioGroup = {
  render: () => <DemoRadioGroup />,
}

export const RadioDisabled = {
  render: () => <Radio disabled />,
}

export const RadioCheckedDisabled = {
  render: () => <Radio checked disabled onChange={() => {}} />,
}
