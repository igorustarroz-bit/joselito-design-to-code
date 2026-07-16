import { useEffect } from 'react'
import '../src/index.css'

const THEMES = {
  'light-white': 'Light · White',
  'light-grey': 'Light · Grey',
  'dark-red-primary': 'Dark · Red Primary',
  'dark-black-neutral': 'Dark · Black Neutral',
  'light-yellow': 'Light · Yellow',
}

const withTheme = (Story, context) => {
  const theme = context.globals.theme || 'light-white'
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
  return <Story />
}

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Tema',
      description: 'Tema semántico (Semantic-Color)',
      defaultValue: 'light-white',
      toolbar: {
        icon: 'paintbrush',
        items: Object.entries(THEMES).map(([value, title]) => ({ value, title })),
        showName: true,
      },
    },
  },
  decorators: [withTheme],
};

export default preview;
