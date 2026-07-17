import { ListCharacteristics } from './ListCharacteristics'

export default {
  title: 'Modules/List Characteristics',
}

export const Default = {
  render: () => <ListCharacteristics />,
}

export const TwoItems = {
  render: () => (
    <ListCharacteristics
      items={[
        { num: '01', title: 'Lorem ipsum dolor sit amet', text: 'Lorem ipsum dolor sit amet consectetur.' },
        { num: '02', title: 'Lorem ipsum dolor sit amet', text: 'Lorem ipsum dolor sit amet consectetur.' },
      ]}
    />
  ),
}
