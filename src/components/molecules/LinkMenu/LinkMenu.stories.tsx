import React from 'react'

import LinkMenu from './LinkMenu'

export default {
  title: 'Design System/molecules/LinkMenu',
  decorators: [
    Story => (
      <div className={'bg-green-300 w-full p-2'}>
        <Story />
      </div>
    )
  ]
}

export const showEmptyLinkMenu = () => <LinkMenu links={[]} />

export const showLinkMenu = () => (
  <LinkMenu
    links={[
      { href: '/1', text: 'Link1' },
      { href: '/2', text: 'Link2' },
      { href: '/3', text: 'Link3' },
      { text: 'Link4', onClick: () => {} }
    ]}
  />
)
