import React from 'react'
import styled from 'styled-components'
import SideBar from '../SideBar/SideBar'
import User from '../User/User'
import { useSession } from 'next-auth/client'
import { SessionProps } from '@/interfaces/Session'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.light};
  padding: 0.2rem;
`

const Left = styled.div`
  display: flex;
`
const Right = styled.div`
  display: flex;
  margin-left: auto;
`

export const Header: React.FC<SessionProps> = ({ session, loading }) => {

  return (
    <Wrapper>
      <Left>
        <SideBar />
      </Left>
      <Right>
        <User session={session} loading={loading} />
      </Right>
    </Wrapper>
  )
}

const Connect: React.FC = () => {
  const [session, loading] = useSession()
  return <Header session={session} loading={loading} />
}

export default Connect
