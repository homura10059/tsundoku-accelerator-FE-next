import React from 'react'
import styled from 'styled-components'
import CommandButton from './CommandButton'

const Background = styled.div`
  background-color: #9cc;
  width: 400px;
  padding: 10px;
`

export default {
  title: 'Design System/molecules/CommandButton',
  decorators: [
    (Story) => (
      <Background>
        <Story />
      </Background>
    ),
  ],
}

export const showUpdateButton = () => (
  <CommandButton command={'Update'} basePath={'/'} />
)

export const showDeleteButton = () => (
  <CommandButton command={'Delete'} basePath={'/'} />
)