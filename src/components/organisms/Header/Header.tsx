import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/client'
import styled from 'styled-components'
import Button from '../../atoms/Button/Button'

const AppBar = styled.nav`
  display: flex;
  padding: 1.5rem;
  margin-bottom: 0.5rem;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`

const Left = styled.div`
  display: flex;
`
const Right = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  &:first-child {
    margin-bottom: 20px;
  }
`

const RightWrapper = styled.div`
  &:not(:last-child) {
    margin-right: 0.2rem;
  }
`

const Header: React.FC = () => {
  const router = useRouter()
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname

  const [session, loading] = useSession()

  let left = (
    <div className="left">
      <Link href="/">
        <a className="bold" data-active={isActive('/')}>
          Feed
        </a>
      </Link>
      <style jsx>{`
        .bold {
          font-weight: bold;
        }

        a {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }

        .left a[data-active='true'] {
          color: gray;
        }

        a + a {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  )

  let right = null

  if (loading) {
    left = (
      <div className="left">
        <Link href="/">
          <a className="bold" data-active={isActive('/')}>
            Feed
          </a>
        </Link>
        <style jsx>{`
          .bold {
            font-weight: bold;
          }

          a {
            text-decoration: none;
            color: #000;
            display: inline-block;
          }

          .left a[data-active='true'] {
            color: gray;
          }

          a + a {
            margin-left: 1rem;
          }
        `}</style>
      </div>
    )
    right = (
      <div className="right">
        <p>Validating session ...</p>
        <style jsx>{`
          .right {
            margin-left: auto;
          }
        `}</style>
      </div>
    )
  }

  if (!session) {
    right = (
      <div className="right">
        <Link href="/api/auth/signin">
          <a data-active={isActive('/signup')}>Log in</a>
        </Link>
        <style jsx>{`
          a {
            text-decoration: none;
            color: #000;
            display: inline-block;
          }

          a + a {
            margin-left: 1rem;
          }

          .right {
            margin-left: auto;
          }

          .right a {
            border: 1px solid black;
            padding: 0.5rem 1rem;
            border-radius: 3px;
          }
        `}</style>
      </div>
    )
  }

  if (session) {
    left = (
      <div className="left">
        <Link href="/">
          <a className="bold" data-active={isActive('/')}>
            Feed
          </a>
        </Link>
        <Link href="/drafts">
          <a data-active={isActive('/drafts')}>My drafts</a>
        </Link>
        <style jsx>{`
          .bold {
            font-weight: bold;
          }

          a {
            text-decoration: none;
            color: #000;
            display: inline-block;
          }

          .left a[data-active='true'] {
            color: gray;
          }

          a + a {
            margin-left: 1rem;
          }
        `}</style>
      </div>
    )
    right = (
      <Right>
        <RightWrapper>
          <p>
            {session.user.name} ({session.user.email})
          </p>
        </RightWrapper>
        <RightWrapper>
          <Link href="/create">
            <Button label={'New post'} />
          </Link>
        </RightWrapper>
        <RightWrapper>
          <Link href="/wishList/add">
            <Button label={'Add WishList'} />
          </Link>
        </RightWrapper>
        <RightWrapper>
          <Button label={'Log out'} onClick={() => signOut()} />
        </RightWrapper>
      </Right>
    )
  }

  return (
    <AppBar>
      {left}
      {right}
    </AppBar>
  )
}

export default Header
