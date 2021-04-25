import React from 'react'
import styled from 'styled-components'
import LinkMenu from './LinkMenu'

const Background = styled.div`
  background-color: #9cc;
  width: 400px;
  padding: 10px;
`

export default {
  title: 'Design System/molecules/LinkMenu',
  decorators: [
    (Story) => (
      <div className={'bg-green-300 w-full p-2'}>
        <Story />
      </div>
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
      { text: 'Link4', onClick: () => {} },
    ]}
  />
)
