import React from 'react'
import styled from 'styled-components'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import { getWishLists } from '../../domain/service/wishList'
import ListPage from '../../components/Templates/ListPage'
import WishList, {
  Props as WishListProps,
} from '../../components/organisms/WishList/WishList'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })
  const wishLists = !session ? [] : await getWishLists(session.user.id)
  return { props: { wishLists } }
}

type Props = {
  wishLists: WishListProps[]
}

const List = styled.div`
  * + * {
    margin-left: 1rem;
  }
`

const Wrapper = styled.div`
  transition: box-shadow 0.1s ease-in;
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
