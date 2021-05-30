import classNames from 'classnames'
import { useSession } from 'next-auth/client'
import React from 'react'

import { SessionProps } from '@/interfaces/Session'

import SideBar from '../SideBar/SideBar'
import User from '../User/User'

export const Header: React.FC<SessionProps> = ({ session, loading }) => {
  return (
    <div
      className={classNames(
        'flex',
        'justify-between',
        'content-center',
        'bg-primary-light',
        'p-1'
      )}
    >
      <div className={'flex'}>
        <SideBar />
      </div>
      <div className={'flex'}>
        <User session={session} loading={loading} />
      </div>
    </div>
  )
}

const Connect: React.FC = () => {
  const [session, loading] = useSession()
  return <Header session={session} loading={loading} />
}

export default Connect
