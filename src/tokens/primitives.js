/**
 * Catálogo de tokens Primitives — usado únicamente para renderizar la documentación
 * en Storybook (swatches, tablas). El valor real de cada token vive en
 * `src/styles/tokens/primitives.css` (fuente de verdad); aquí solo listamos los
 * nombres de variable para no duplicar valores.
 */

export const colorGroups = [
  {
    label: 'Neutral',
    tokens: [
      'neutral-white', 'neutral-98', 'neutral-96', 'neutral-94', 'neutral-90',
      'neutral-80', 'neutral-70', 'neutral-60', 'neutral-50', 'neutral-40',
      'neutral-30', 'neutral-20', 'neutral-10', 'neutral-black',
    ],
  },
  {
    label: 'Primary',
    tokens: [
      'primary-100', 'primary-98', 'primary-96', 'primary-94', 'primary-90',
      'primary-80', 'primary-70', 'primary-60', 'primary-50', 'primary-40',
      'primary-30', 'primary-20', 'primary-10', 'primary-0',
    ],
  },
  {
    label: 'Secondary-1',
    tokens: [
      'secondary-1-100', 'secondary-1-98', 'secondary-1-96', 'secondary-1-94', 'secondary-1-90',
      'secondary-1-80', 'secondary-1-70', 'secondary-1-60', 'secondary-1-50', 'secondary-1-40',
      'secondary-1-30', 'secondary-1-20', 'secondary-1-10', 'secondary-1-0',
    ],
  },
  {
    label: 'Secondary-2',
    tokens: [
      'secondary-2-100', 'secondary-2-98', 'secondary-2-96', 'secondary-2-94', 'secondary-2-90',
      'secondary-2-80', 'secondary-2-70', 'secondary-2-60', 'secondary-2-50', 'secondary-2-40',
      'secondary-2-30', 'secondary-2-20', 'secondary-2-10', 'secondary-2-0',
    ],
  },
  {
    label: 'Secondary-3',
    tokens: [
      'secondary-3-100', 'secondary-3-98', 'secondary-3-96', 'secondary-3-94', 'secondary-3-90',
      'secondary-3-80', 'secondary-3-70', 'secondary-3-60', 'secondary-3-50', 'secondary-3-40',
      'secondary-3-30', 'secondary-3-20', 'secondary-3-10', 'secondary-3-0',
    ],
  },
  {
    label: 'Opacity / Black',
    tokens: [
      'opacity-black-100', 'opacity-black-98', 'opacity-black-96', 'opacity-black-94', 'opacity-black-90',
      'opacity-black-80', 'opacity-black-70', 'opacity-black-60', 'opacity-black-50', 'opacity-black-40',
      'opacity-black-30', 'opacity-black-20', 'opacity-black-10', 'opacity-black-0',
    ],
  },
  {
    label: 'Opacity / White',
    tokens: [
      'opacity-white-100', 'opacity-white-98', 'opacity-white-96', 'opacity-white-94', 'opacity-white-90',
      'opacity-white-80', 'opacity-white-70', 'opacity-white-60', 'opacity-white-50', 'opacity-white-40',
      'opacity-white-30', 'opacity-white-20', 'opacity-white-10', 'opacity-white-0',
    ],
  },
  {
    label: 'System',
    tokens: [
      'system-error-01', 'system-error-02', 'system-error-03',
      'system-success-01', 'system-success-02', 'system-success-03',
      'system-warning-01', 'system-warning-02', 'system-warning-03',
    ],
  },
]

export const typographyTokens = [
  { name: 'title', family: '--font-title', tracking: '--tracking-title' },
  { name: 'body', family: '--font-body', tracking: '--tracking-body' },
  { name: 'label', family: '--font-label', tracking: '--tracking-label' },
  { name: 'cta', family: '--font-cta', tracking: '--tracking-cta' },
  { name: 'forms', family: '--font-forms', tracking: '--tracking-forms' },
]

export const spacingTokens = [
  'fx-0', 'fx-1', 'fx-2', 'fx-3', 'fx-4', 'fx-5', 'fx-6', 'fx-7', 'fx-8', 'fx-9',
]
