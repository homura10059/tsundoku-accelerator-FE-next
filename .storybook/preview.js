import { theme } from '../src/lib/theme'
import { ThemeProvider } from 'styled-components'
import { withNextRouter } from 'storybook-addon-next-router'
import { addDecorator } from '@storybook/react'
import { configure } from '@storybook/react'
import './mockNextRouter'

addDecorator(
  withNextRouter({
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() {}, // defaults to using addon actions integration, can override any method in the router
  })
)

addDecorator((Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
))

const addParameters = require('@storybook/react').addParameters

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
})
