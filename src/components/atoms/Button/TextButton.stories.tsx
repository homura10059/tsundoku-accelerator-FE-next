import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../lib/theme'
import TextButton from './TextButton'

export default {
  title: 'TextButton',
}

export const textButton = () => <TextButton />

textButton.story = {
  decorators: [
    (storyFn) => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>,
  ],
}
