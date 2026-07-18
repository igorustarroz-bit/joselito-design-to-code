import { Navigation } from './Navigation'

export default {
  title: 'Modules/Navigation',
}

export const Default = {
  render: () => <Navigation />,
}

export const Transparent = {
  render: () => (
    <div style={{ background: '#14161a', padding: '24px 0' }}>
      <Navigation variant="transparent" />
    </div>
  ),
}
