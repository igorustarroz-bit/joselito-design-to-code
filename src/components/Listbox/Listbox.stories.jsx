import { useState } from 'react'
import { Listbox } from './Listbox'
import { ListboxItem } from './ListboxItem'
import { VariantGrid, VariantSwatch } from '../../stories/VariantSwatch'

export default {
  title: 'Components/Listbox',
}

function DemoDesktop({ checkbox = false }) {
  const [selected, setSelected] = useState(0)
  const items = ['Label', 'Label', 'Label', 'Label']
  return (
    <Listbox variant="desktop">
      {items.map((label, i) => (
        <ListboxItem
          key={i}
          text={label}
          checkbox={checkbox}
          checked={checkbox && selected === i}
          selected={!checkbox && selected === i}
          onClick={() => setSelected(i)}
          onChange={() => setSelected(i)}
        />
      ))}
    </Listbox>
  )
}

export const Desktop = {
  render: () => <DemoDesktop />,
}

export const DesktopWithCheckboxes = {
  render: () => <DemoDesktop checkbox />,
}

function DemoMobile() {
  const [selected, setSelected] = useState(0)
  const items = ['Label', 'Label', 'Label', 'Label']
  return (
    <Listbox variant="mobile" title="Title">
      {items.map((label, i) => (
        <ListboxItem key={i} text={label} selected={selected === i} onClick={() => setSelected(i)} />
      ))}
    </Listbox>
  )
}

export const Mobile = {
  render: () => <DemoMobile />,
}

export const ItemLarge = {
  render: () => <ListboxItem size="large" text="Label" />,
}

export const ItemMedium = {
  render: () => <ListboxItem size="medium" text="Label" />,
}

export const ItemSelected = {
  render: () => <ListboxItem text="Label" selected />,
}

export const ItemWithCheckbox = {
  render: () => <ListboxItem text="Label" checkbox />,
}

export const AllItemSizes = {
  render: () => (
    <VariantGrid>
      <VariantSwatch label="Large">
        <div style={{ width: 220 }}>
          <ListboxItem size="large" text="Label" />
        </div>
      </VariantSwatch>
      <VariantSwatch label="Medium">
        <div style={{ width: 220 }}>
          <ListboxItem size="medium" text="Label" />
        </div>
      </VariantSwatch>
    </VariantGrid>
  ),
}
