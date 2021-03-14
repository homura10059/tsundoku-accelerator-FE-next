import React from 'react'
import { useSession } from 'next-auth/client'
import styled from 'styled-components'
import { IncomingWebhook } from '../../../lib/prisma'
import NodePage from '../../../components/templates/NodePage'
import LocalDate from '../../../components/atoms/Date/LocalDate'
import ItemTable from '../../../components/organisms/Item/ItemTable'
import Link from '../../atoms/Link/Link'
import { hex2rgba } from '../../../lib/theme'

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

const WishListDetail = styled.table`
  font-size: 1.2rem;
  border-collapse: collapse;
  background-color: ${({ theme }) => theme.colors.surface};

  th,
  td {
    padding: 5px;
    border-top: solid 1px ${({ theme }) => theme.colors.border};
    border-bottom: solid 1px ${({ theme }) => theme.colors.border};
  }
`

const ItemArea = styled.div`
  margin-top: 10px;
`

const Detail: React.FC<Props> = (props) => {
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
      <WishListDetail>
        <tr>
          <th>Id</th>
          <td>{props.id}</td>
        </tr>
        <tr>
          <th>url</th>
          <td>
            <Link href={props.url}>{props.url}</Link>
          </td>
        </tr>
        <tr>
          <th>更新日時</th>
          <td>
            <LocalDate unixTimeInSec={props.scrapedAt} />
          </td>
        </tr>
        {props.incomingWebhook && (
          <tr>
            <th>通知設定</th>
            <td>{props.incomingWebhook.service}</td>
          </tr>
        )}
        <tr>
          <th>値引率閾値</th>
          <td>{props.discountRateThreshold}</td>
        </tr>
        <tr>
          <th>還元率閾値</th>
          <td>{props.pointsRateThreshold}</td>
        </tr>
      </WishListDetail>
      <ItemArea>
        <ItemTable items={props.items} />
      </ItemArea>
    </NodePage>
  )
}

export default Detail
