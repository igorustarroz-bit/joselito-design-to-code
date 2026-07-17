import { ContentTextImage } from './ContentTextImage'

export default {
  title: 'Modules/Content Text + Image',
}

export const TextRight = {
  render: () => <ContentTextImage layout="text-right" />,
}

export const TextLeft = {
  render: () => <ContentTextImage layout="text-left" />,
}

export const WithButton = {
  render: () => <ContentTextImage showButton buttonText="Descubrir más" href="#" />,
}

export const NoLabel = {
  render: () => <ContentTextImage showLabel={false} />,
}
