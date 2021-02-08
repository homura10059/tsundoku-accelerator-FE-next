import React from 'react'
import { GetServerSideProps } from 'next'
import { getWishLists } from '../domain/service/wishList'
import { getSession } from 'next-auth/client'
import WishList, {
  Props as WishListProps,
} from '../components/organisms/WishList/WishList'
import styled from 'styled-components'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })
  const wishLists = !session ? [] : await getWishLists(session.user.id)
  return { props: { wishLists } }
}

type Props = {
  wishLists: WishListProps[]
}

const Wrapper = styled.div`
  background: white;
  transition: box-shadow 0.1s ease-in;
  margin-top: 2rem;
  :hover {
    box-shadow: 1px 1px 3px #aaa;
  }
`

const Blog: React.FC<Props> = (props) => {
  return (
    <main>
      <h1>WishList</h1>
      {props.wishLists.map((wishList) => (
        <Wrapper key={wishList.id}>
          <WishList {...wishList} />
        </Wrapper>
      ))}
    </main>
  )
}

export default Blog
