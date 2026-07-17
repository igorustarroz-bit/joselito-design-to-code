import { BrandLogo } from './BrandLogo'
import { VariantGrid, VariantSwatch } from '../../stories/VariantSwatch'

export default {
  title: 'Components/Brand Logo',
}

export const Default = {
  render: () => <BrandLogo variant="horizontal" />,
}

export const AllVariants = {
  render: () => (
    <VariantGrid>
      <VariantSwatch label="horizontal (por defecto)">
        <BrandLogo variant="horizontal" />
      </VariantSwatch>
      <VariantSwatch label="square">
        <BrandLogo variant="square" />
      </VariantSwatch>
    </VariantGrid>
  ),
}

export const CustomSize = {
  render: () => <BrandLogo variant="horizontal" style={{ height: '4rem' }} />,
}
