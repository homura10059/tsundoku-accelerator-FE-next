import React from 'react'
import LinkItem from './LinkItem'
import styled from 'styled-components'

const Background = styled.div`
  background-color: black;
  width: 200px;
  padding: 10px;
`

const Text = styled.p`
  /* color: white; */
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
  <LinkItem href={'/1'}>
    <Text>Link1</Text>
  </LinkItem>
)
export const showLinkItemMultiLine = () => (
  <LinkItem href={'/1'}>
    <Text>Title</Text>
    <Text>sub title</Text>
  </LinkItem>
)
