import { ButtonIcon } from './ButtonIcon'
import { VariantGrid, VariantSwatch } from '../../stories/VariantSwatch'

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

export const AllTypes = {
  render: () => (
    <VariantGrid>
      <VariantSwatch label="Primary">
        <ButtonIcon type="primary" aria-label="Siguiente" />
      </VariantSwatch>
      <VariantSwatch label="Secondary">
        <ButtonIcon type="secondary" aria-label="Siguiente" />
      </VariantSwatch>
      <VariantSwatch label="Terciary">
        <ButtonIcon type="terciary" aria-label="Siguiente" />
      </VariantSwatch>
    </VariantGrid>
  ),
}

export const AllSizes = {
  render: () => (
    <VariantGrid>
      <VariantSwatch label="XL (solo Primary)">
        <ButtonIcon size="xl" aria-label="Siguiente" />
      </VariantSwatch>
      <VariantSwatch label="L">
        <ButtonIcon size="l" aria-label="Siguiente" />
      </VariantSwatch>
      <VariantSwatch label="M">
        <ButtonIcon size="m" aria-label="Siguiente" />
      </VariantSwatch>
      <VariantSwatch label="S">
        <ButtonIcon size="s" aria-label="Siguiente" />
      </VariantSwatch>
      <VariantSwatch label="XS">
        <ButtonIcon size="xs" aria-label="Siguiente" />
      </VariantSwatch>
    </VariantGrid>
  ),
}
