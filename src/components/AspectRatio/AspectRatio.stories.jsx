import { AspectRatio } from './AspectRatio'
import { VariantGrid, VariantSwatch } from '../../stories/VariantSwatch'

export default {
  title: 'Components/Aspect Ratio',
}

const DEMO_IMAGE =
  'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&q=60'

export const Default = {
  render: () => (
    <div style={{ width: 240 }}>
      <AspectRatio ratio="1:1" image={DEMO_IMAGE} imageAlt="Ejemplo" />
    </div>
  ),
}

export const AllRatios = {
  render: () => (
    <VariantGrid>
      {['9:16', '2:3', '3:4', '1:1', '4:3', '3:2', '16:9'].map((ratio) => (
        <VariantSwatch label={ratio} key={ratio}>
          <div style={{ width: 160 }}>
            <AspectRatio ratio={ratio} image={DEMO_IMAGE} imageAlt="" />
          </div>
        </VariantSwatch>
      ))}
    </VariantGrid>
  ),
}

export const Placeholder = {
  render: () => (
    <div style={{ width: 240 }}>
      <AspectRatio ratio="4:3" />
    </div>
  ),
}
