import { CardProduct } from './CardProduct'

export default {
  title: 'Components/Card Product',
}

export const Default = {
  render: () => (
    <div style={{ maxWidth: 324 }}>
      <CardProduct
        tagText="Top ventas"
        title="Jamón Gran Reserva"
        price="Desde 380€"
        address="Calle Velázquez, 30"
        locationTags={['Barcelona', 'España']}
        rating={3}
        linkText="Descubrir"
        href="#"
      />
    </div>
  ),
}

export const NoTag = {
  render: () => (
    <div style={{ maxWidth: 324 }}>
      <CardProduct tag={false} title="Jamón Gran Reserva" price="Desde 380€" href="#" />
    </div>
  ),
}

export const NoTagsStars = {
  render: () => (
    <div style={{ maxWidth: 324 }}>
      <CardProduct
        title="Jamón Gran Reserva"
        price="Desde 380€"
        address="Calle Velázquez, 30"
        showTagsStars={false}
        href="#"
      />
    </div>
  ),
}

export const Minimal = {
  render: () => (
    <div style={{ maxWidth: 324 }}>
      <CardProduct tag={false} showTagsStars={false} title="Producto" price="Desde 0€" href="#" />
    </div>
  ),
}
