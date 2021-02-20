import React from 'react'
import styled from 'styled-components'
import LinkButton from './LinkButton'

const Background = styled.div`
  background-color: #9cc;
  width: 400px;
  padding: 10px;
`

export default {
  title: 'Design System/atoms/LinkButton',
  decorators: [
    (Story) => (
      <Background>
        <Story />
      </Background>
    ),
  ],
}

export const showLinkButtonWithHref = () => (
  <LinkButton href="/">href</LinkButton>
)
export const showLinkButtonWithOnClick = () => (
  <LinkButton onClick={() => {}}>onClick</LinkButton>
)
