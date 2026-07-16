import { useState } from 'react'
import { CheckboxLabel } from './CheckboxLabel'

export default {
  title: 'Components/Checkbox Label',
}

function Demo(props) {
  const [checked, setChecked] = useState(props.defaultChecked ?? false)
  return <CheckboxLabel {...props} checked={checked} onChange={(e) => setChecked(e.target.checked)} />
}

export const Default = {
  render: () => <Demo text="Label" />,
}

export const Selected = {
  render: () => <Demo text="Label" defaultChecked />,
}

export const Disabled = {
  render: () => <CheckboxLabel text="Label" disabled />,
}

export const DisabledSelected = {
  render: () => <CheckboxLabel text="Label" checked disabled onChange={() => {}} />,
}

export const Small = {
  render: () => <Demo size="small" text="Label" />,
}

export const SmallSelected = {
  render: () => <Demo size="small" text="Label" defaultChecked />,
}
