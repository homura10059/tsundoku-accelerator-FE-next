import React from 'react'
import { useSession } from 'next-auth/client'
import styled from 'styled-components'
import Tabs from '../../molecules/AppBar/Tabs'
import Navigation from '../../molecules/AppBar/Navigation'

const AppBar = styled.nav`
  display: flex;
  padding: 1.5rem;
  margin-bottom: 0.5rem;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.light};
`

const Header: React.FC = () => {
  const [session, loading] = useSession()
  return (
    <AppBar>
      <Tabs session={session} loading={loading} />
      <Navigation session={session} loading={loading} />
    </AppBar>
  )
}

export default Header
