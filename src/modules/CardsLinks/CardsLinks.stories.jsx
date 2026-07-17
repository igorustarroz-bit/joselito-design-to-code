import { CardsLinks } from './CardsLinks'

export default {
  title: 'Modules/Cards Links',
}

export const Default = {
  render: () => <CardsLinks />,
}

export const FourCards = {
  render: () => (
    <CardsLinks
      cards={[
        { title: 'Jamón Gran Reserva', price: 'Desde 380€' },
        { title: 'Jamón Ibérico Bellota', price: 'Desde 420€' },
        { title: 'Lomo Ibérico', price: 'Desde 90€' },
        { title: 'Chorizo Ibérico', price: 'Desde 45€' },
      ]}
    />
  ),
}
