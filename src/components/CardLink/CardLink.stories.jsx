import { CardLink } from './CardLink'

export default {
  title: 'Components/Card Link',
}

export const Default = {
  render: () => (
    <div style={{ maxWidth: 432 }}>
      <CardLink title="Jamón Gran Reserva" price="Desde 380€" href="#" />
    </div>
  ),
}

export const AsButton = {
  render: () => (
    <div style={{ maxWidth: 432 }}>
      <CardLink title="Jamón Gran Reserva" price="Desde 380€" onClick={() => {}} />
    </div>
  ),
}
