import { useState } from 'react'
import { ListTimeline } from './ListTimeline'

export default {
  title: 'Modules/List Timeline',
}

export const Default = {
  render: () => <ListTimeline />,
}

export const Interactive = {
  render: function Render() {
    const [activeIndex, setActiveIndex] = useState(0)
    return <ListTimeline activeIndex={activeIndex} onYearSelect={setActiveIndex} />
  },
}
