const path = require("path");

module.exports = {
  stories: ['../src/components/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
        theme: {}
      },
    },
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src')
    return config
  },
}
