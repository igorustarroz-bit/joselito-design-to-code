import { Icon } from './Icon'
import { ICON_NAMES } from './icon-names'
import { VariantGrid, VariantSwatch } from '../../stories/VariantSwatch'

export default {
  title: 'Components/Icon',
}

export const Default = {
  render: () => <Icon name="Star" />,
}

export const AllSizes = {
  render: () => (
    <VariantGrid>
      {['xxs', 'xs', 's', 'm', 'l'].map((size) => (
        <VariantSwatch label={size.toUpperCase()} key={size}>
          <Icon name="Star" size={size} />
        </VariantSwatch>
      ))}
    </VariantGrid>
  ),
}

// Galería completa de los 132 iconos: se usa una cuadrícula propia (no
// VariantSwatch/VariantGrid) para mantenerla densa y escaneable — con 132
// elementos, el título grande + gap amplio de VariantSwatch resultaría en
// una sección excesivamente larga sin aportar legibilidad extra frente a un
// grid compacto de cajas pequeñas con el nombre debajo.
export const AllIcons = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(96px, 1fr))',
        gap: 12,
      }}
    >
      {ICON_NAMES.map((name) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
            padding: 12,
            border: '1px solid var(--color-icon-neutral-3, #e0e0e0)',
            borderRadius: 4,
          }}
        >
          <Icon name={name} size="m" />
          <span
            style={{
              fontSize: 10,
              color: 'var(--color-content-neutral-1, #666)',
              fontFamily: 'var(--font-body, sans-serif)',
              textAlign: 'center',
              wordBreak: 'break-word',
              lineHeight: 1.2,
            }}
          >
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
}

export const WithTitle = {
  render: () => <Icon name="MagnifyingGlass" title="Buscar" />,
}

export const MissingIcon = {
  render: () => (
    <p style={{ fontFamily: 'var(--font-body, sans-serif)' }}>
      <Icon name="NoExiste" /> (no renderiza nada; ver consola en modo dev)
    </p>
  ),
}
