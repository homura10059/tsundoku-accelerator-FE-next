import React from 'react'
import { GetServerSideProps } from 'next'
import Layout from '../../components/Page/Layout'
import { useSession } from 'next-auth/client'
import { getWishList } from '../../domain/service/wishList'
import styled from 'styled-components'
import { format } from 'date-fns'
import WishListDetail from '../../components/organisms/WishList/WishListDetail'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = typeof params?.id === 'string' ? params?.id : ''
  const wishList = await getWishList(id)
  return {
    props: wishList,
  }
}

const Wrapper = styled.article`
  padding: 0.5rem;
`

export type Props = {
  id: string
  url: string
  scrapedAt: number | null
  userId: number | null
  items: {
    url: string
    scrapedAt: number | null
    price: number | null
    discount: number | null
    discountRate: number | null
    points: number | null
    pointsRate: number | null
  }[]
}

const WishList: React.FC<Props> = (props) => {
  const [session, loading] = useSession()
  if (loading) {
    return <div>Authenticating ...</div>
  }
  const userHasValidSession = Boolean(session)

  const scrapedAt = props.scrapedAt
    ? format(new Date(props.scrapedAt * 1000), 'yyyy/MM/dd HH:mm:ss')
    : '-'
  return (
    <Layout>
      <Wrapper>
        <WishListDetail {...props} userHasValidSession={userHasValidSession}/>
      </Wrapper>
    </Layout>
  )
}

export default WishList
