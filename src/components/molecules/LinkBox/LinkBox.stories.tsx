import React from 'react'
import LinkBox from './LinkBox'
import styled from 'styled-components'

const Background = styled.div`
  background-color: #9cc;
  width: 400px;
  padding: 10px;
`

export default {
  title: 'Design System/molecules/LinkBox',
  decorators: [
    (Story) => (
      <Background>
        <Story />
      </Background>
    ),
  ],
}

export const showLinkBox = () => (
  <LinkBox href={'#'}>
    <div>来てくれるかな</div>
    <div>モルモット君？</div>
  </LinkBox>
)
