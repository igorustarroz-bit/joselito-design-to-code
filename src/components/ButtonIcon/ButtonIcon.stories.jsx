import { ButtonIcon } from './ButtonIcon'

export default {
  title: 'Components/Button Icon',
  component: ButtonIcon,
  argTypes: {
    type: { control: 'select', options: ['primary', 'secondary', 'terciary'] },
    size: { control: 'select', options: ['xl', 'l', 'm', 's', 'xs'] },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    href: { control: 'text' },
    'aria-label': { control: 'text' },
  },
  args: {
    type: 'primary',
    size: 'l',
    selected: false,
    disabled: false,
    'aria-label': 'Siguiente',
  },
}

export const Default = {}

export const Secondary = {
  args: { type: 'secondary' },
}

export const Terciary = {
  args: { type: 'terciary' },
}

export const SizeXL = {
  args: { size: 'xl' },
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
