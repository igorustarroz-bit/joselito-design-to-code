import { ContentIntroText } from './ContentIntroText'
import { VariantGrid, VariantSwatch } from '../../stories/VariantSwatch'

export default {
  title: 'Modules/Content Intro text',
}

export const Default = {
  render: () => <ContentIntroText href="#" />,
}

export const NoButton = {
  render: () => <ContentIntroText showButton={false} />,
}

export const AllVariants = {
  render: () => (
    <VariantGrid>
      <VariantSwatch label="con botón (por defecto)">
        <div style={{ width: 480 }}>
          <ContentIntroText href="#" />
        </div>
      </VariantSwatch>
      <VariantSwatch label="sin botón">
        <div style={{ width: 480 }}>
          <ContentIntroText showButton={false} />
        </div>
      </VariantSwatch>
    </VariantGrid>
  ),
}
