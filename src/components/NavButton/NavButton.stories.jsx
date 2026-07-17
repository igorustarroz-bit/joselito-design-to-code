import { NavButton } from './NavButton'
import { VariantGrid, VariantSwatch } from '../../stories/VariantSwatch'

export default {
  title: 'Components/Nav Button',
  component: NavButton,
  argTypes: {
    text: { control: 'text' },
    showIconLeft: { control: 'boolean' },
    showIconRight: { control: 'boolean' },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    href: { control: 'text' },
  },
  args: {
    text: 'Nav',
    showIconLeft: false,
    showIconRight: true,
    selected: false,
    disabled: false,
  },
}

export const Default = {}

export const WithLeftIcon = {
  args: { showIconLeft: true, showIconRight: false, text: 'ES' },
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

export const AllVariants = {
  render: () => (
    <VariantGrid>
      <VariantSwatch label="Default">
        <NavButton text="Nav" showIconRight />
      </VariantSwatch>
      <VariantSwatch label="Selected">
        <NavButton text="Nav" showIconRight selected />
      </VariantSwatch>
      <VariantSwatch label="Disabled">
        <NavButton text="Nav" showIconRight disabled />
      </VariantSwatch>
    </VariantGrid>
  ),
}
