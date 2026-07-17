import { ContentTitle } from './ContentTitle'
import { VariantGrid, VariantSwatch } from '../../stories/VariantSwatch'

export default {
  title: 'Modules/Content Title',
}

export const Default = {
  render: () => <ContentTitle />,
}

export const WithButton = {
  render: () => <ContentTitle showButton buttonHref="#" />,
}

export const NoDescription = {
  render: () => <ContentTitle showDescription={false} />,
}

export const NoLabel = {
  render: () => <ContentTitle showLabel={false} />,
}

export const AllVariants = {
  render: () => (
    <VariantGrid>
      <VariantSwatch label="por defecto (label + descripción + enlace)">
        <div style={{ width: 720 }}>
          <ContentTitle />
        </div>
      </VariantSwatch>
      <VariantSwatch label="con botón">
        <div style={{ width: 720 }}>
          <ContentTitle showButton />
        </div>
      </VariantSwatch>
      <VariantSwatch label="sin descripción">
        <div style={{ width: 720 }}>
          <ContentTitle showDescription={false} />
        </div>
      </VariantSwatch>
    </VariantGrid>
  ),
}
