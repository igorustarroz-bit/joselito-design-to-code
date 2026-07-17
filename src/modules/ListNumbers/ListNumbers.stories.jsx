import { ListNumbers } from './ListNumbers'

export default {
  title: 'Modules/List Numbers',
}

export const Default = {
  render: () => <ListNumbers />,
}

export const TwoItems = {
  render: () => (
    <ListNumbers
      items={[
        { title: '24% Vitamina B', text: 'de la cantidad diaria recomendada.' },
        { title: '12% Hierro', text: 'de la cantidad diaria recomendada.' },
      ]}
    />
  ),
}
