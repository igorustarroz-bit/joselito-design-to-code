import { HeroHomepageHero } from './HeroHomepageHero'

export default {
  title: 'Modules/Hero Homepage hero',
}

export const Default = {
  render: () => <HeroHomepageHero buttonHref="#" />,
}

export const NoToast = {
  render: () => <HeroHomepageHero buttonHref="#" showToast={false} />,
}
