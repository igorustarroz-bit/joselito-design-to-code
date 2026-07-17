import { ContentImageOnly } from './ContentImageOnly'
import { VariantGrid, VariantSwatch } from '../../stories/VariantSwatch'

export default {
  title: 'Modules/Content Image only',
}

const IMG_A = 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=1600&q=60'
const IMG_B = 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=900&q=60'
const IMG_C = 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=60'

export const OneImage = {
  render: () => <ContentImageOnly images={[{ src: IMG_A, alt: '' }]} />,
}

export const TwoImages = {
  render: () => (
    <ContentImageOnly
      images={[
        { src: IMG_B, alt: '' },
        { src: IMG_C, alt: '' },
      ]}
    />
  ),
}

export const AllVariants = {
  render: () => (
    <VariantGrid>
      <VariantSwatch label="1 imagen (ratio 16:9)">
        <div style={{ width: 480 }}>
          <ContentImageOnly images={[{ src: IMG_A, alt: '' }]} />
        </div>
      </VariantSwatch>
      <VariantSwatch label="2 imágenes (ratio 3:4, anchos asimétricos)">
        <div style={{ width: 480 }}>
          <ContentImageOnly
            images={[
              { src: IMG_B, alt: '' },
              { src: IMG_C, alt: '' },
            ]}
          />
        </div>
      </VariantSwatch>
    </VariantGrid>
  ),
}
