import { CardCarrusel } from './CardCarrusel'

export default {
  title: 'Components/Card Carrusel',
}

export const Vertical = {
  render: () => (
    <div style={{ maxWidth: 249 }}>
      <CardCarrusel title="Joselitos Velázquez" tags={['Madrid', 'Restaurante']} href="#" />
    </div>
  ),
}

export const Horizontal = {
  render: () => (
    <div style={{ maxWidth: 900 }}>
      <CardCarrusel layout="horizontal" title="Joselitos Velázquez" tags={['Madrid', 'Restaurante']} href="#" />
    </div>
  ),
}

export const NoTags = {
  render: () => (
    <div style={{ maxWidth: 249 }}>
      <CardCarrusel title="Joselitos Velázquez" href="#" />
    </div>
  ),
}
