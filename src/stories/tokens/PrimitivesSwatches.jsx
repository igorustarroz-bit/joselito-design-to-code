import { colorGroups, typographyTokens, spacingTokens } from '../../tokens/primitives'

function Swatch({ token }) {
  return (
    <div className="flex flex-col items-center gap-1 w-20">
      <div
        className="w-16 h-16 rounded border border-neutral-90 bg-[repeating-conic-gradient(#e5e5e5_0_25%,#ffffff_0_50%)] bg-[length:8px_8px]"
      >
        <div
          className="w-full h-full rounded"
          style={{ background: `var(--color-${token})` }}
        />
      </div>
      <span className="text-xs text-neutral-40 font-mono">{token}</span>
    </div>
  )
}

export function ColorSwatches() {
  return (
    <div className="flex flex-col gap-6">
      {colorGroups.map((group) => (
        <div key={group.label}>
          <h4 className="text-sm font-semibold mb-2">{group.label}</h4>
          <div className="flex flex-wrap gap-3">
            {group.tokens.map((token) => (
              <Swatch key={token} token={token} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export function TypographySamples() {
  return (
    <div className="flex flex-col gap-4">
      {typographyTokens.map((t) => (
        <div key={t.name} className="border-b border-neutral-90 pb-3">
          <p
            className="text-2xl"
            style={{
              fontFamily: `var(${t.family})`,
              letterSpacing: `var(${t.tracking})`,
            }}
          >
            Joselito — {t.name}
          </p>
          <span className="text-xs text-neutral-40 font-mono">
            {t.family} · {t.tracking}
          </span>
        </div>
      ))}
    </div>
  )
}

export function SpacingScale() {
  return (
    <div className="flex flex-col gap-2">
      {spacingTokens.map((token) => (
        <div key={token} className="flex items-center gap-3">
          <span className="text-xs text-neutral-40 font-mono w-16">{token}</span>
          <div
            className="h-3 bg-primary-50 rounded-sm"
            style={{ width: `var(--spacing-${token})` }}
          />
        </div>
      ))}
    </div>
  )
}
