import { surfaceTokens, contentTokens, iconTokens } from '../../tokens/semantic'

function Swatch({ cssVar, label }) {
  return (
    <div className="flex flex-col items-center gap-1 w-20">
      <div
        className="w-14 h-14 rounded border border-icon-neutral-3"
        style={{ background: `var(${cssVar})` }}
      />
      <span className="text-[10px] text-content-neutral-2 font-mono text-center">{label}</span>
    </div>
  )
}

export function SurfaceSwatches() {
  return (
    <div className="flex flex-wrap gap-3 p-4 rounded bg-surface-base">
      {surfaceTokens.map((t) => (
        <Swatch key={t} cssVar={`--color-surface-${t}`} label={t} />
      ))}
    </div>
  )
}

export function ContentSamples() {
  return (
    <div className="flex flex-col gap-1 p-4 rounded bg-surface-base">
      {contentTokens.map((t) => (
        <p key={t} className="m-0 text-sm" style={{ color: `var(--color-content-${t})` }}>
          {t} — Texto de ejemplo Joselito
        </p>
      ))}
    </div>
  )
}

export function IconSwatches() {
  return (
    <div className="flex flex-wrap gap-3 p-4 rounded bg-surface-base">
      {iconTokens.map((t) => (
        <div key={t} className="flex flex-col items-center gap-1 w-16">
          <svg width="24" height="24" viewBox="0 0 24 24" style={{ color: `var(--color-icon-${t})` }}>
            <circle cx="12" cy="12" r="10" fill="currentColor" />
          </svg>
          <span className="text-[10px] text-content-neutral-2 font-mono text-center">{t}</span>
        </div>
      ))}
    </div>
  )
}
