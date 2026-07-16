/**
 * Catálogo de tokens Responsive — solo para documentación en Storybook.
 * El valor real vive en `src/styles/tokens/responsive.css` (fuente de verdad).
 */

export const breakpoints = [
  { name: 'xs', width: 375 },
  { name: 'sm', width: 480 },
  { name: 'm', width: 768 },
  { name: 'lg', width: 1024 },
  { name: 'xl', width: 1440 },
  { name: 'xxl', width: 1620 },
  { name: 'xxxl', width: 1920 },
]

export const typographyScale = [
  { group: 'Title', tokens: ['title-7', 'title-6', 'title-5', 'title-4', 'title-3', 'title-2', 'title-1'] },
  { group: 'Body', tokens: ['body-6', 'body-5', 'body-4', 'body-3', 'body-2', 'body-1'] },
  { group: 'Label', tokens: ['label-2', 'label-1'] },
  { group: 'CTA', tokens: ['cta-xl', 'cta-l', 'cta-m', 'cta-s', 'cta-xs'] },
]

export const spacingTokens = Array.from({ length: 19 }, (_, i) => `r-${i}`)

export const radiusTokens = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'rounded', 'none']

export const gridTokens = ['margin-default', 'margin-header', 'margin-full', 'margin-modal', 'gutter']
