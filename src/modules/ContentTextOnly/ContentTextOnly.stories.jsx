import { ContentTextOnly } from './ContentTextOnly'
import { VariantGrid, VariantSwatch } from '../../stories/VariantSwatch'

export default {
  title: 'Modules/Content Text only',
}

const LONG_PARAGRAPH =
  'Lorem ipsum dolor sit amet consectetur. Leo proin nisi in neque hendrerit. Egestas nulla tortor pulvinar eget malesuada diam. Aenean auctor elementum gravida sit odio et eu. Sed sit diam nibh arcu facilisis nunc orci hac in. Dictum cras id erat sollicitudin pellentesque velit adipiscing diam. Purus tellus urna netus nulla duis.'

export const Split = {
  render: () => <ContentTextOnly variant="split" columns={[[LONG_PARAGRAPH]]} />,
}

export const SplitWithButton = {
  render: () => <ContentTextOnly variant="split" columns={[[LONG_PARAGRAPH]]} showButton buttonText="Descubrir" href="#" />,
}

export const TwoColumn = {
  render: () => (
    <ContentTextOnly
      variant="2-column"
      columns={[
        [LONG_PARAGRAPH, 'Morbi mauris at fermentum sapien massa orci. Tellus nulla sit senectus rhoncus facilisis convallis.'],
        [LONG_PARAGRAPH],
      ]}
    />
  ),
}

export const OneColumn = {
  render: () => <ContentTextOnly variant="1-column" title="Arte e instinto" columns={[[LONG_PARAGRAPH]]} />,
}

export const NoLabel = {
  render: () => <ContentTextOnly variant="1-column" showLabel={false} columns={[[LONG_PARAGRAPH]]} />,
}

export const AllVariants = {
  render: () => (
    <VariantGrid gap={16}>
      <VariantSwatch label="split (por defecto)">
        <div style={{ width: 480 }}>
          <ContentTextOnly variant="split" columns={[[LONG_PARAGRAPH]]} />
        </div>
      </VariantSwatch>
      <VariantSwatch label="2-column">
        <div style={{ width: 480 }}>
          <ContentTextOnly variant="2-column" columns={[[LONG_PARAGRAPH], [LONG_PARAGRAPH]]} />
        </div>
      </VariantSwatch>
      <VariantSwatch label="1-column">
        <div style={{ width: 480 }}>
          <ContentTextOnly variant="1-column" title="Arte e instinto" columns={[[LONG_PARAGRAPH]]} />
        </div>
      </VariantSwatch>
    </VariantGrid>
  ),
}
