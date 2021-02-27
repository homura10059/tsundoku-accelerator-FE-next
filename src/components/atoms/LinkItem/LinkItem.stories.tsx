import React from 'react'
import LinkItem from './LinkItem'
import styled from 'styled-components'

const Background = styled.div`
  background-color: #9cc;
  width: 200px;
  padding: 10px;
`

export default {
  title: 'Design System/atoms/LinkItem',
  decorators: [
    (Story) => (
      <Background>
        <Story />
      </Background>
    ),
  ],
}

export const showLinkItemSingleLine = () => (
  <LinkItem href={'/1'}>Link1</LinkItem>
)
export const showLinkItemMultiLine = () => (
  <LinkItem href={'/1'}>
    <p>Title</p>
    <p>sub title</p>
  </LinkItem>
)
