import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    text: { control: 'text' },
    type: { control: 'select', options: ['primary', 'secondary', 'terciary'] },
    size: { control: 'select', options: ['l', 'm', 's', 'xs'] },
    showIconLeft: { control: 'boolean' },
    showIconRight: { control: 'boolean' },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    href: { control: 'text' },
  },
  args: {
    text: 'Button',
    type: 'primary',
    size: 'l',
    showIconLeft: false,
    showIconRight: false,
    selected: false,
    disabled: false,
  },
}

export const Default = {}

export const Secondary = {
  args: { type: 'secondary' },
}

export const Terciary = {
  args: { type: 'terciary' },
}

export const WithIcons = {
  args: { showIconLeft: true, showIconRight: true },
}

export const SizeM = {
  args: { size: 'm' },
}

export const SizeS = {
  args: { size: 's' },
}

export const SizeXS = {
  args: { size: 'xs' },
}

export const Selected = {
  args: { selected: true },
}

export const Disabled = {
  args: { disabled: true },
}

export const AsLink = {
  args: { href: '#' },
}
