import { useState } from 'react'
import { NavigationSecondaryMenu } from './NavigationSecondaryMenu'

export default {
  title: 'Modules/Navigation Secondary Menu',
}

function Interactive() {
  const [activeIndex, setActiveIndex] = useState(2)
  return (
    <NavigationSecondaryMenu
      activeIndex={activeIndex}
      onSelect={(index, event) => {
        event.preventDefault()
        setActiveIndex(index)
      }}
    />
  )
}

export const Default = {
  render: () => <Interactive />,
}
