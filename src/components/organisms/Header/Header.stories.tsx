import React from 'react'
import { Header } from './Header'
import styled from 'styled-components'

const mockSession = {
  expires: '1',
  user: {
    email: 'a',
    name: 'sophia',
    image:
      'https://raw.githubusercontent.com/o-hayato/sophia-bot/master/image/P5S_icon_sophia.png',
  },
}

export default {
  title: 'Design System/organisms/Header',
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
}

export const showHeader = () => <Header session={mockSession} loading={false} />

export const showHeaderLoading = () => <Header session={mockSession} loading={true} />

export const showHeaderNoSession = () => <Header session={undefined} loading={true} />

const Background = styled.div`
  background-color: #9cc;
  width: 400px;
`

export const showHeaderOnSP = () => <Background><Header session={mockSession} loading={false} /></Background>

export const showHeaderLoadingOnSP = () => <Background><Header session={mockSession} loading={true} /></Background>

export const showHeaderNoSessionOnSP = () => <Background><Header session={undefined} loading={true} /></Background>

