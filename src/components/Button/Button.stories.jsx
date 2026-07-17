import { Button } from './Button'
import { VariantGrid, VariantSwatch } from '../../stories/VariantSwatch'

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

export const AllTypes = {
  render: () => (
    <VariantGrid>
      <VariantSwatch label="Primary">
        <Button type="primary" text="Button" />
      </VariantSwatch>
      <VariantSwatch label="Secondary">
        <Button type="secondary" text="Button" />
      </VariantSwatch>
      <VariantSwatch label="Terciary">
        <Button type="terciary" text="Button" />
      </VariantSwatch>
    </VariantGrid>
  ),
}

export const AllSizes = {
  render: () => (
    <VariantGrid>
      <VariantSwatch label="L">
        <Button size="l" text="Button" />
      </VariantSwatch>
      <VariantSwatch label="M">
        <Button size="m" text="Button" />
      </VariantSwatch>
      <VariantSwatch label="S">
        <Button size="s" text="Button" />
      </VariantSwatch>
      <VariantSwatch label="XS">
        <Button size="xs" text="Button" />
      </VariantSwatch>
    </VariantGrid>
  ),
}
