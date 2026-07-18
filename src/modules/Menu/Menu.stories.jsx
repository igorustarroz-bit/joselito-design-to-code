import { Menu } from './Menu'

export default {
  title: 'Modules/Menu',
}

export const Categories = {
  render: () => <Menu variant="categories" />,
}

export const Gallery = {
  render: () => <Menu variant="gallery" />,
}
