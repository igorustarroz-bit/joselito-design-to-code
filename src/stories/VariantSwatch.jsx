/**
 * Helper interno de Storybook (no es un componente del design system).
 * Envuelve una variante con su título encima, para usar en las historias
 * "Variantes y tamaños": todas las variantes de un componente se muestran
 * juntas, en una sola caja de demo, en fila con flex-wrap.
 */
export function VariantSwatch({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
      <span style={{ fontSize: 12, color: 'var(--color-content-neutral-1, #666)', fontFamily: 'var(--font-body, sans-serif)' }}>
        {label}
      </span>
      {children}
    </div>
  )
}

/**
 * Contenedor en fila con flex-wrap para agrupar varios `VariantSwatch`.
 */
export function VariantGrid({ children, gap = 32 }) {
  return <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap }}>{children}</div>
}

export default VariantGrid
