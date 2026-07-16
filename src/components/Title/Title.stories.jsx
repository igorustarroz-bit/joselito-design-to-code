import { Title } from './Title'

export default {
  title: 'Components/Title',
}

export const Default = {
  render: () => <Title title="Nuestra colección" href="#" />,
}

export const NoLink = {
  render: () => <Title title="Nuestra colección" showLink={false} />,
}

export const CustomLinkText = {
  render: () => <Title title="Últimas noticias" linkText="Ver más" href="#" />,
}
