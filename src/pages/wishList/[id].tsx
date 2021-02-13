import React from 'react'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/client'
import { getWishList } from '../../domain/service/wishList'
import styled from 'styled-components'
import { IncomingWebhook } from '../../lib/prisma'
import NodePage from '../../components/Templates/NodePage'
import LocalDate from '../../components/atoms/Date/LocalDate'
import ItemTable from '../../components/organisms/Item/ItemTable'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = typeof params?.id === 'string' ? params?.id : ''
  const wishList = await getWishList(id)
  return {
    props: wishList,
  }
}

export type Props = {
  id: string
  url: string
  title: string | null
  scrapedAt: number | null
  userId: number | null
  discountRateThreshold: number
  pointsRateThreshold: number
  items: {
    url: string
    title: string | null
    scrapedAt: number | null
    price: number | null
    discount: number | null
    discountRate: number | null
    points: number | null
    pointsRate: number | null
  }[]
  incomingWebhook: IncomingWebhook
}

const Text = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem;
`
const WishList: React.FC<Props> = (props) => {
  const [session, loading] = useSession()
  if (loading) {
    return <div>Authenticating ...</div>
  }
  const userHasValidSession = Boolean(session)

  if (!userHasValidSession) {
    return null
  }

  return (
    <NodePage
      title={`${props.title}`}
      basePath={`/wishList/${props.id}`}
      command={{ canUpdate: true, canEdit: true, canDelete: true }}
    >
      <Text>Id: {props.id}</Text>
      <Text>title: {props.title}</Text>
      <Text>
        url: <a href={props.url}>{props.url}</a>
      </Text>
      <Text>
        scrapedAt : <LocalDate unixTimeInSec={props.scrapedAt} />
      </Text>
      <Text>discountRateThreshold : {props.discountRateThreshold}</Text>
      <Text>pointsRateThreshold : {props.pointsRateThreshold}</Text>
      {props.incomingWebhook && (
        <Text>incomingWebhook : {props.incomingWebhook.service}</Text>
      )}
      <ItemTable items={props.items} />
    </NodePage>
  )
}

export default WishList
