import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../lib/theme'
import LinkBox from './LinkBox'
import styled from 'styled-components'

export default {
  title: 'LinkBox',
}

const Background = styled.div`
  background-color: #9cc;
  width: 400px;
  padding: 10px;
`

export const showLinkBox = () => (
  <Background>
    <LinkBox>
      <div>来てくれるかな</div>
      <div>モルモット君？</div>
    </LinkBox>
  </Background>
)

showLinkBox.story = {
  decorators: [
    (storyFn) => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>,
  ],
}
