import React, { useState } from 'react'
import styled from 'styled-components'
import SideBar from '../SideBar/SideBar'
import User from '../User/User'
import { useSession } from 'next-auth/client'
import { SessionProps } from '@/interfaces/Session'
import { MenuIcon } from '@heroicons/react/solid'

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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Wrapper>
      <Left>
        <MenuIcon
          className={'w-10 h-10 text-white cursor-pointer'}
          onClick={() => setIsOpen(!isOpen)}
        />
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
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
