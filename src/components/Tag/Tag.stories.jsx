import { Tag } from './Tag'

export default {
  title: 'Components/Tag',
}

export const Transaction = {
  render: () => <Tag type="transaction" />,
}

export const New = {
  render: () => <Tag type="new" />,
}

export const Aseptic = {
  render: () => <Tag type="aseptic" />,
}

export const Small = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Tag type="transaction" size="xs" />
      <Tag type="new" size="xs" />
      <Tag type="aseptic" size="xs" />
    </div>
  ),
}

export const CustomText = {
  render: () => <Tag type="aseptic" text="Sin gluten" />,
}
