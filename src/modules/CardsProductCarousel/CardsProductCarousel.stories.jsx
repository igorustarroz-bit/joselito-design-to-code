import { CardsProductCarousel } from './CardsProductCarousel'

export default {
  title: 'Modules/Cards Product carousel',
}

export const Default = {
  render: () => <CardsProductCarousel />,
}

export const MobileStack = {
  render: () => <CardsProductCarousel mobileLayout="stack" />,
}
