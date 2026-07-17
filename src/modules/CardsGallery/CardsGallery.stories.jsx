import { useState } from 'react'
import { CardsGallery } from './CardsGallery'

export default {
  title: 'Modules/Cards Gallery',
}

export const Default = {
  render: () => <CardsGallery />,
}

export const WithLightbox = {
  render: function Render() {
    const [index, setIndex] = useState(1)
    const total = 3
    return (
      <CardsGallery
        lightboxOpen
        lightboxIndex={index}
        lightboxTotal={total}
        onLightboxPrev={() => setIndex((i) => (i === 1 ? total : i - 1))}
        onLightboxNext={() => setIndex((i) => (i === total ? 1 : i + 1))}
        onLightboxClose={() => alert('Cerrar galería')}
      />
    )
  },
}
