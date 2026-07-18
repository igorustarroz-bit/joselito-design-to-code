import { CardsCategories } from './CardsCategories'

export default {
  title: 'Modules/Cards Categories',
}

export const Header = {
  render: () => <CardsCategories variant="header" />,
}

export const Footer = {
  render: () => (
    <CardsCategories
      variant="footer"
      items={[{ caption: '@neonflight' }, { caption: '@autecuisine' }, { caption: '@jamonjoselito' }, { caption: '@elbulli' }]}
    />
  ),
}
