import { ContentTextImage } from './ContentTextImage'
import { VariantGrid, VariantSwatch } from '../../stories/VariantSwatch'

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

export const AllLayouts = {
  render: () => (
    <VariantGrid gap={16}>
      <VariantSwatch label="text-right (por defecto)">
        <div style={{ width: 560 }}>
          <ContentTextImage layout="text-right" />
        </div>
      </VariantSwatch>
      <VariantSwatch label="text-left">
        <div style={{ width: 560 }}>
          <ContentTextImage layout="text-left" />
        </div>
      </VariantSwatch>
    </VariantGrid>
  ),
}
