/**
 * Iconos usados por UI01-Nav-Button. Trazo con `currentColor` para heredar el color
 * del token semántico aplicado (ver docs/assets-workflow.md).
 */

export function IconGlobe({ className }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="8" cy="8" rx="2.75" ry="6.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 8H14.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export function IconChevronDown({ className }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
