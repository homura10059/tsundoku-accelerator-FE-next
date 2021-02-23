import React from 'react'
import styled from 'styled-components'
import LinkMenu from './LinkMenu'

const Background = styled.div`
  background-color: #9cc;
  padding: 10px;
`

export default {
  title: 'Design System/molecules/LinkMenu',
  decorators: [
    (Story) => (
      <Background>
        <Story />
      </Background>
    ),
  ],
}

export const showEmptyLinkMenu = () => <LinkMenu links={[]} />

export const showLinkMenu = () => (
  <LinkMenu
    links={[
      { href: '/1', text: 'Link1' },
      { href: '/2', text: 'Link2' },
      { href: '/3', text: 'Link3' },
      { href: '/4', text: 'Link4' },
    ]}
  />
)
