import { Tag } from './Tag'
import { VariantGrid, VariantSwatch } from '../../stories/VariantSwatch'

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

export const AllTypes = {
  render: () => (
    <VariantGrid>
      <VariantSwatch label="Transaction">
        <Tag type="transaction" />
      </VariantSwatch>
      <VariantSwatch label="New">
        <Tag type="new" />
      </VariantSwatch>
      <VariantSwatch label="Aseptic">
        <Tag type="aseptic" />
      </VariantSwatch>
    </VariantGrid>
  ),
}

export const AllSizes = {
  render: () => (
    <VariantGrid>
      <VariantSwatch label="L">
        <Tag type="transaction" size="l" />
      </VariantSwatch>
      <VariantSwatch label="XS">
        <Tag type="transaction" size="xs" />
      </VariantSwatch>
    </VariantGrid>
  ),
}
