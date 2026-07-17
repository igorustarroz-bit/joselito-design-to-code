import { ActionLink } from './ActionLink'
import { VariantGrid, VariantSwatch } from '../../stories/VariantSwatch'

export default {
  title: 'Components/Action Link',
  component: ActionLink,
  argTypes: {
    text: { control: 'text' },
    size: { control: 'select', options: ['l', 'm', 's'] },
    showIconLeft: { control: 'boolean' },
    showIconRight: { control: 'boolean' },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    href: { control: 'text' },
  },
  args: {
    text: 'Button',
    size: 'l',
    showIconLeft: false,
    showIconRight: false,
    selected: false,
    disabled: false,
  },
}

export const Default = {}

export const WithIcons = {
  args: { showIconLeft: true, showIconRight: true },
}

export const SizeM = {
  args: { size: 'm' },
}

export const SizeS = {
  args: { size: 's' },
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

export const AllSizes = {
  render: () => (
    <VariantGrid>
      <VariantSwatch label="L">
        <ActionLink size="l" text="Button" />
      </VariantSwatch>
      <VariantSwatch label="M">
        <ActionLink size="m" text="Button" />
      </VariantSwatch>
      <VariantSwatch label="S">
        <ActionLink size="s" text="Button" />
      </VariantSwatch>
    </VariantGrid>
  ),
}
