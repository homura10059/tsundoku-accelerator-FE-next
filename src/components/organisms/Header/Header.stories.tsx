import React from 'react'
import Header from './Header'
import { Provider, Session } from 'next-auth/client'
export default {
  title: 'Design System/organisms/Header',
}

const mockSession: Session = {
  expires: '1',
  user: { email: 'a', name: 'Delta', image: 'c' },
}

export const showHeader = () => <Header />

showHeader.decorators = [
  (Story) => (
    <Provider session={mockSession}>
      <Story />
    </Provider>
  ),
]
