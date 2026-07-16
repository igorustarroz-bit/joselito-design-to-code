import { useState } from 'react'
import { Input } from './Input'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    type: { control: 'select', options: ['default', 'dropdown'] },
    size: { control: 'select', options: ['big', 'small'] },
    validationState: { control: 'select', options: ['default', 'error', 'validated'] },
    message: { control: 'text' },
    showMessage: { control: 'boolean' },
    showIcon: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Label',
    type: 'default',
    size: 'big',
    validationState: 'default',
    message: 'Message',
    showMessage: true,
    showIcon: true,
    disabled: false,
  },
}

export const Default = {}

export const WithValue = {
  render: (args) => <Input {...args} defaultValue="Input text" />,
}

export const Focused = {
  render: (args) => <Input {...args} autoFocus />,
}

export const Small = {
  args: { size: 'small' },
}

export const Error = {
  args: { validationState: 'error', message: 'This field is required' },
  render: (args) => <Input {...args} defaultValue="Input text" />,
}

export const Validated = {
  args: { validationState: 'validated', message: 'Looks good' },
  render: (args) => <Input {...args} defaultValue="Input text" />,
}

export const Disabled = {
  args: { disabled: true },
}

export const NoIcon = {
  args: { showIcon: false },
}

function DemoDropdown(args) {
  const [value, setValue] = useState('')
  const options = ['Option A', 'Option B', 'Option C']
  const [open, setOpen] = useState(false)
  return (
    <div style={{ position: 'relative', width: 320 }}>
      <Input {...args} type="dropdown" value={value} onClick={() => setOpen((o) => !o)} />
      {open && (
        <ul style={{ listStyle: 'none', margin: 0, padding: 4, border: '1px solid #ccc', borderRadius: 6, position: 'absolute', top: '100%', left: 0, right: 0, background: 'white', zIndex: 1 }}>
          {options.map((opt) => (
            <li key={opt}>
              <button
                type="button"
                style={{ width: '100%', textAlign: 'left', padding: '8px', border: 'none', background: 'none', cursor: 'pointer' }}
                onClick={() => {
                  setValue(opt)
                  setOpen(false)
                }}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export const Dropdown = {
  render: (args) => <DemoDropdown {...args} />,
}
