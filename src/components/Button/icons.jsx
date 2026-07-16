/**
 * Iconos de UI02-Button, recreados a mano como SVG con currentColor (los
 * assets rasterizados exportados por Figma son efímeros, expiran en 7 días).
 */

export function IconCalendarBlank({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="3.5" y="4.5" width="17" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <line x1="3.5" y1="9" x2="20.5" y2="9" stroke="currentColor" strokeWidth="1.5" />
      <line x1="8" y1="2.5" x2="8" y2="6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="2.5" x2="16" y2="6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function IconArrowRight({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <line x1="4" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
