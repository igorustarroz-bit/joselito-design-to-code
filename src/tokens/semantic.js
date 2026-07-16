/**
 * Catálogo de tokens Semantic-Color — solo para documentación en Storybook.
 * El valor real vive en `src/styles/tokens/semantic.css` (fuente de verdad),
 * y cambia según el `data-theme` activo.
 */

export const themes = [
  { value: 'light-white', label: 'Light · White' },
  { value: 'light-grey', label: 'Light · Grey' },
  { value: 'dark-red-primary', label: 'Dark · Red Primary' },
  { value: 'dark-black-neutral', label: 'Dark · Black Neutral' },
  { value: 'light-yellow', label: 'Light · Yellow' },
]

export const surfaceTokens = [
  'base', 'neutral-1', 'neutral-2', 'neutral-3', 'white', 'inverse', 'overlay',
  'accent-base', 'accent-subbrand-sec', 'accent-1', 'accent-2', 'accent-3', 'accent-4',
  'success-1', 'success-2', 'success-3', 'error-1', 'error-2', 'error-3',
  'warning-1', 'warning-2', 'warning-3', 'always-white', 'always-black',
  'hover', 'disabled', 'selected',
]

export const contentTokens = [
  'base', 'neutral-1', 'neutral-2', 'neutral-3', 'inverted',
  'accent-base', 'accent-1', 'accent-2', 'secondary-base', 'secondary-1', 'secondary-2',
  'error', 'success', 'warning', 'link', 'always-black', 'always-white', 'hover', 'disabled',
]

export const iconTokens = [
  'base', 'neutral-1', 'neutral-2', 'neutral-3', 'neutral-4', 'inverse',
  'accent-base', 'accent-subbrand-sec', 'accent-1', 'accent-2', 'accent-3', 'accent-4',
  'secondary-base', 'secondary-1', 'secondary-2', 'secondary-3', 'secondary-4',
  'success-1', 'success-2', 'success-3', 'error-1', 'error-2', 'error-3',
  'warning-1', 'warning-2', 'warning-3',
]
