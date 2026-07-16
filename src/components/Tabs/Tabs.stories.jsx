import { useState } from 'react'
import { Tabs } from './Tabs'
import { Tab } from './Tab'

export default {
  title: 'Components/Tabs',
  component: Tabs,
}

function DemoTabs({ variant = 'primary' }) {
  const [active, setActive] = useState(0)
  const items = ['item', 'item', 'item']
  return (
    <Tabs aria-label="Demo tabs">
      {items.map((label, i) => (
        <Tab
          key={i}
          variant={variant}
          text={label}
          selected={active === i}
          onClick={() => setActive(i)}
        />
      ))}
    </Tabs>
  )
}

export const Default = {
  render: () => <DemoTabs variant="primary" />,
}

export const Secondary = {
  render: () => <DemoTabs variant="secondary" />,
}

export const SingleTab = {
  render: () => (
    <Tab variant="primary" text="item" />
  ),
}

export const SingleTabSelected = {
  render: () => (
    <Tab variant="primary" text="item" selected />
  ),
}

export const SingleTabDisabled = {
  render: () => (
    <Tab variant="primary" text="item" disabled />
  ),
}

export const NoIcons = {
  render: () => (
    <Tab variant="primary" text="item" showIconLeft={false} showIconRight={false} />
  ),
}
