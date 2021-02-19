import React from 'react'
import MenuButton from './MenuButton'
import styled from 'styled-components'

const Background = styled.div`
  background-color: #9cc;
  width: 400px;
  padding: 10px;
`

export default {
  title: 'Design System/atoms/MenuButton',
  decorators: [
    (Story) => (
      <Background>
        <Story />
      </Background>
    ),
  ],
}

export const showMenuButton = () => <MenuButton onClick={() => {}} />
