import React from 'react'
import styled from 'styled-components'
import Title from './Title'

const Background = styled.div`
  background-color: #9cc;
  width: 400px;
  padding: 10px;
`

export default {
  title: 'Design System/atoms/Title',
  decorators: [
    (Story) => (
      <Background>
        <Story />
      </Background>
    ),
  ],
}

export const showTitle = () => (
  <Title>
    仮タイトル Persona 5
  </Title>
)