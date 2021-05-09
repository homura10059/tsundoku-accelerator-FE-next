import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/functions/theme'
import TextButton from './TextButton'

export default {
  title: 'Design System/atoms/Button/TextButton',
}

export const textButton = () => <TextButton />

textButton.story = {
  decorators: [
    (storyFn) => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>,
  ],
}
