import React from 'react'
import styled from 'styled-components'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import { getWishLists } from '../../domain/service/wishList'
import ListPage from '../../components/templates/ListPage'
import { WishList as WishListProps } from '@prisma/client'
import WishList from '../../components/organisms/WishList/WishList'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })
  const wishLists = !session ? [] : await getWishLists(session.user.id)
  return { props: { wishLists } }
}

type Props = {
  wishLists: WishListProps[]
}

const List = styled.ul`
  * + * {
    margin-top: 0.1rem;
  }
`

const Wrapper = styled.li`
  background-color: ${({ theme }) => theme.colors.secondary.light};
  border-left: solid 10px ${({ theme }) => theme.colors.primary.dark};
  transition: box-shadow 0.1s ease-in;
  color: ${({ theme }) => theme.colors.on.primary};
  padding: 0.5rem;
  :hover {
    box-shadow: 1px 1px 3px #aaa;
  }
`

const WishLists: React.FC<Props> = ({ wishLists }) => {
  return (
    <ListPage title="WishLists" basePath="wishList">
      <List>
        {wishLists.map((wishList) => (
          <Wrapper key={wishList.id}>
            <WishList {...wishList} />
          </Wrapper>
        ))}
      </List>
    </ListPage>
  )
}

export default WishLists
