import React from 'react'

import Link from './Link'

export default {
  title: 'Design System/atoms/Link',
  decorators: [
    Story => (
      <div className={'bg-green-300 w-full p-2'}>
        <Story />
      </div>
    )
  ]
}

export const showLinkWithHref = () => <Link href="/">href</Link>

export const showLinkWithOnClick = () => <Link onClick={() => {}}>onClick</Link>

export const showLinkWithHrefAndOnClick = () => (
  <Link href="/" onClick={() => {}}>
    onClick & href
  </Link>
)
