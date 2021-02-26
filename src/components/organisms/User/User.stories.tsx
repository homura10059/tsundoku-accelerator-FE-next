import React from 'react'
import { User } from './User'
import styled from 'styled-components'
import { Session } from 'next-auth/client'

const Background = styled.div`
  background-color: #9cc;
  width: 400px;
  padding: 10px;
`

export default {
  title: 'Design System/organisms/User',
  decorators: [
    (Story) => (
      <Background>
        <Story />
      </Background>
    ),
  ],
}

export const showUserInLoading = () => (
  <User session={undefined} loading={true} />
)

export const showUserNotLoggedIn = () => (
  <User session={undefined} loading={false} />
)

const mockSession: Session = {
  expires: '1',
  user: {
    email: 'a',
    name: 'sophia',
    image:
      'https://raw.githubusercontent.com/o-hayato/sophia-bot/master/image/P5S_icon_sophia.png',
  },
}
export const showUserLoggedIn = () => (
  <User session={mockSession} loading={false} />
)