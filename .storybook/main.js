import tailwindcss from '@tailwindcss/vite'
import remarkGfm from 'remark-gfm'

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    // Sin remarkGfm, @mdx-js/mdx (MDX3) no reconoce la sintaxis de tabla de
    // GitHub Flavored Markdown (`| ... |` + `|---|---|`) — cada tabla de los
    // .mdx (Tokens, Propiedades) se compilaba como texto plano en vez de
    // como <table>, mostrando literalmente "Control | |---|---|---|---| |".
    // Verificado: el bug afectaba a TODAS las tablas de TODOS los .mdx del
    // proyecto (no solo "algunas partes"), confirmado buscando "|---|" como
    // string literal en el build estático de Storybook — aparecía en los 47
    // bundles de componentes/módulos, uno por cada archivo con una tabla.
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  "framework": "@storybook/react-vite",
  async viteFinal(viteConfig) {
    viteConfig.plugins = viteConfig.plugins || []
    viteConfig.plugins.push(tailwindcss())
    return viteConfig
  },
};
export default config;