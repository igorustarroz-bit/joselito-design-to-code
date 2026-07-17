import { ListArchiveTable } from './ListArchiveTable'

export default {
  title: 'Modules/List Archive table',
}

export const Default = {
  render: () => <ListArchiveTable />,
}

export const TwoItems = {
  render: () => (
    <ListArchiveTable
      items={[
        { date: 'Diciembre 2025', text: 'Lorem ipsum dolor sit amet consectetur.' },
        { date: 'Noviembre 2025', text: 'Lorem ipsum dolor sit amet consectetur.' },
      ]}
    />
  ),
}
