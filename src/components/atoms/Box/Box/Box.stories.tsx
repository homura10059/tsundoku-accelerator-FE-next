import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../lib/theme'
import Box from './Box'
import styled from 'styled-components'

export default {
  title: 'Box',
}

const Background = styled.div`
  background-color: #9cc;
  width: 400px;
  padding: 10px;
`

export const showBox = () => (
  <Background>
    <Box>
      <div>来てくれるかな</div>
      <div>モルモット君？</div>
    </Box>
  </Background>
)

showBox.story = {
  decorators: [
    (storyFn) => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>,
  ],
}

export const showBoxCanHover = () => (
  <Background>
    <Box canHover={true}>
      <div>来てくれるかな</div>
      <div>モルモット君？</div>
    </Box>
  </Background>
)

showBoxCanHover.story = {
  decorators: [
    (storyFn) => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>,
  ],
}
