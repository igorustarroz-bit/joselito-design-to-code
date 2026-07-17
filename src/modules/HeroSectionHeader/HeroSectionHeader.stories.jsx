import { HeroSectionHeader } from './HeroSectionHeader'

export default {
  title: 'Modules/Hero Section header',
}

export const Default = {
  render: () => <HeroSectionHeader breadcrumbHref="#" />,
}

export const NoDescription = {
  render: () => <HeroSectionHeader breadcrumbHref="#" showDescription={false} />,
}
