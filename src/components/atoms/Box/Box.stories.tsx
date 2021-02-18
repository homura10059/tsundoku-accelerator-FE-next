import React from 'react'
import Box from './Box'
import styled from 'styled-components'

const Background = styled.div`
  background-color: #9cc;
  width: 400px;
  padding: 10px;
`

export default {
  title: 'Design System/atoms/Box',
  decorators: [
    (Story) => (
      <Background>
        <Story />
      </Background>
    ),
  ],
}

export const showBox = () => (
  <Box>
    <div>来てくれるかな</div>
    <div>モルモット君？</div>
  </Box>
)

export const showBoxCanHover = () => (
  <Box canHover={true}>
    <div>来てくれるかな</div>
    <div>モルモット君？</div>
  </Box>
)
