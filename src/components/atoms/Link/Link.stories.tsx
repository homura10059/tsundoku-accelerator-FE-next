import React from 'react'
import styled from 'styled-components'
import Link from './Link'

const Background = styled.div`
  background-color: #9cc;
  width: 400px;
  padding: 10px;
`

export default {
  title: 'Design System/atoms/Link',
  decorators: [
    (Story) => (
      <Background>
        <Story />
      </Background>
    ),
  ],
}

export const showLinkButtonWithHref = () => (
  <Link href="/">href</Link>
)

export const showLinkButtonWithOnClick = () => (
  <Link onClick={() => {}}>onClick</Link>
)

export const showLinkButtonWithHrefAndOnClick = () => (
  <Link  href="/" onClick={() => {}}>onClick & href</Link>
)