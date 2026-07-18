import { CardsShowcase } from './CardsShowcase'

export default {
  title: 'Modules/Cards Showcase',
}

export const Default = {
  render: () => <CardsShowcase />,
}

export const SingleCardNoBorder = {
  render: () => (
    <CardsShowcase
      showLink={false}
      bordered={false}
      cards={[{ title: 'Joselitos Velázquez', tags: ['MADRID', 'RESTAURANTE'] }]}
    />
  ),
}
