import React from 'react'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/client'
import { getWishList } from '../../domain/service/wishList'
import styled from 'styled-components'
import { IncomingWebhook } from '../../lib/prisma'
import NodePage from '../../components/templates/NodePage'
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

const List = styled.ul`
  font-size: 1.2rem;
  margin-left: 0.5rem;
  li + li {
    margin-top: 0.3rem;
  }
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
      <List>
        <li>Id: {props.id}</li>
        <li>
          title: <a href={props.url}>{props.title} </a>
        </li>
        <li>
          更新日時 : <LocalDate unixTimeInSec={props.scrapedAt} />
        </li>
        <li>
          更新日時 : <LocalDate unixTimeInSec={props.scrapedAt} />
        </li>
        {props.incomingWebhook && (
          <li>通知設定 : {props.incomingWebhook.service}</li>
        )}
        <li>
          閾値
          <List>
            <li>値引率: {props.discountRateThreshold}</li>
            <li>還元率: {props.pointsRateThreshold}</li>
          </List>
        </li>
      </List>
      <ItemTable items={props.items} />
    </NodePage>
  )
}

export default WishList
