import { breakpoints, typographyScale, spacingTokens, radiusTokens, gridTokens } from '../../tokens/responsive'

export function BreakpointsTable() {
  return (
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="text-left border-b border-neutral-90">
          <th className="py-2 pr-4">Modo Figma</th>
          <th className="py-2">Ancho mínimo (min-width)</th>
        </tr>
      </thead>
      <tbody>
        {breakpoints.map((bp) => (
          <tr key={bp.name} className="border-b border-neutral-90">
            <td className="py-2 pr-4 font-mono">{bp.name}</td>
            <td className="py-2 font-mono">{bp.width}px</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export function TypographyResponsiveSample() {
  return (
    <div className="flex flex-col gap-5">
      {typographyScale.map((group) => (
        <div key={group.group}>
          <h4 className="text-sm font-semibold mb-2">{group.group}</h4>
          <div className="flex flex-col gap-2">
            {group.tokens.map((token) => (
              <div key={token} className="flex items-baseline gap-3 border-b border-neutral-90 pb-2">
                <span className="text-xs text-neutral-40 font-mono w-20 shrink-0">{token}</span>
                <p
                  style={{
                    fontSize: `var(--text-${token})`,
                    lineHeight: `var(--text-${token}--line-height)`,
                    margin: 0,
                  }}
                >
                  Joselito
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <p className="text-xs text-neutral-40">
        Redimensiona la ventana del navegador (o cambia el viewport de Storybook) para ver
        cómo cambia cada tamaño en los distintos breakpoints — son variables CSS reales, no una captura fija.
      </p>
    </div>
  )
}

export function SpacingResponsiveScale() {
  return (
    <div className="flex flex-col gap-2">
      {spacingTokens.map((token) => (
        <div key={token} className="flex items-center gap-3">
          <span className="text-xs text-neutral-40 font-mono w-16">{token}</span>
          <div
            className="h-3 bg-primary-50 rounded-sm transition-all"
            style={{ width: `var(--spacing-${token})` }}
          />
        </div>
      ))}
    </div>
  )
}

export function RadiusSamples() {
  return (
    <div className="flex flex-wrap gap-4">
      {radiusTokens.map((token) => (
        <div key={token} className="flex flex-col items-center gap-1">
          <div
            className="w-14 h-14 bg-primary-90 border border-primary-50"
            style={{ borderRadius: `var(--radius-${token})` }}
          />
          <span className="text-xs text-neutral-40 font-mono">{token}</span>
        </div>
      ))}
    </div>
  )
}

export function GridSamples() {
  return (
    <div className="flex flex-col gap-2">
      {gridTokens.map((token) => (
        <div key={token} className="flex items-center gap-3">
          <span className="text-xs text-neutral-40 font-mono w-32">{token}</span>
          <div className="flex-1 bg-neutral-94 rounded" style={{ padding: `0 var(--grid-${token})` }}>
            <div className="h-4 bg-primary-50/30 rounded-sm" />
          </div>
        </div>
      ))}
      <p className="text-xs text-neutral-40 mt-1">
        Los bloques muestran el margen lateral (<code>margin-*</code>) o el gutter aplicados al contenido de ejemplo.
      </p>
    </div>
  )
}
