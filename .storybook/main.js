import tailwindcss from '@tailwindcss/vite'

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/react-vite",
  async viteFinal(viteConfig) {
    viteConfig.plugins = viteConfig.plugins || []
    viteConfig.plugins.push(tailwindcss())
    return viteConfig
  },
};
export default config;