import React from 'react'
import LinkButton from './LinkButton'

export default {
  title: 'Design System/atoms/LinkButton',
  decorators: [
    (Story) => (
      <div className={'bg-green-300 w-full p-2'}>
        <Story />
      </div>
    ),
  ],
}

export const showLinkButtonWithHref = () => (
  <LinkButton href="/">href</LinkButton>
)
export const showLinkButtonWithOnClick = () => (
  <LinkButton onClick={() => {}}>onClick</LinkButton>
)

export const showLinkButtonIsLoading = () => (
  <LinkButton isLoading={true}>Loading</LinkButton>
)
