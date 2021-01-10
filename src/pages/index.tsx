import React from 'react'
import { GetServerSideProps } from 'next'
import Layout from '../components/Page/Layout'
import Post, { PostProps } from '../components/Post'
import prisma from '../lib/prisma'
import { getWishLists } from '../domain/service/wishList'
import { getSession } from 'next-auth/client'
import WishList, {
  Props as WishListProps,
} from '../components/organisms/WishList/WishList'
import styled from 'styled-components'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })
  const wishLists = !session ? [] : await getWishLists(session.user.id)
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  })
  return { props: { feed, wishLists } }
}

type Props = {
  feed: PostProps[]
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
    <Layout>
      <main>
        <article>
          <h1>Public Feed</h1>
          {props.feed.map((post) => (
            <Wrapper key={post.id}>
              <Post post={post} />
            </Wrapper>
          ))}
        </article>
        <article>
          <h1>WishList</h1>
          {props.wishLists.map((wishList) => (
            <Wrapper key={wishList.id}>
              <WishList {...wishList} />
            </Wrapper>
          ))}
        </article>
      </main>
    </Layout>
  )
}

export default Blog
