import React from 'react'
import styled from 'styled-components'

import LinkItem from './LinkItem'

const Text = styled.p`
  /* color: white; */
`

export default {
  title: 'Design System/atoms/LinkItem',
  decorators: [
    Story => (
      <div className={'bg-green-300 w-full p-2'}>
        <Story />
      </div>
    )
  ]
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
