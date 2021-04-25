import React from 'react'
import { useSession } from 'next-auth/client'
import { IncomingWebhook } from '../../../functions/prisma'
import NodePage from '../../organisms/Flame/NodePage'
import LocalDate from '../../../components/atoms/Date/LocalDate'
import ItemTable from '../../../components/organisms/Item/ItemTable'
import Link from '../../atoms/Link/Link'
import classNames from 'classnames'

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

const DetailRow: React.VFC<{
  header: string
  text?: string | number
  url?: string
  date?: number
}> = ({ header, text, url, date }) => {
  return (
    <tr>
      <th
        className={classNames(
          'min-w-4',
          'p-2',
          'border-solid',
          'border-on-surface',
          'border-t',
          'border-b'
        )}
      >
        {header}
      </th>
      <td
        className={classNames(
          'min-w-4',
          'p-2',
          'border-solid',
          'border-on-surface',
          'border-t',
          'border-b'
        )}
      >
        {text ? (
          text
        ) : url ? (
          <Link href={url}>
            <span className={'break-all'}>{url}</span>
          </Link>
        ) : date ? (
          <LocalDate unixTimeInSec={date} />
        ) : null}
      </td>
    </tr>
  )
}

const DetailArea: React.VFC<Props> = (props) => {
  return (
    <div className={classNames('w-full', 'mt-4')}>
      詳細
      <table className={'bg-surface'}>
        <tbody>
          <DetailRow header={'Id'} text={props.id} />
          <DetailRow header={'url'} url={props.url} />
          <DetailRow header={'更新日時'} date={props.scrapedAt} />
          {props.incomingWebhook && (
            <DetailRow
              header={'通知設定'}
              text={props.incomingWebhook.service}
            />
          )}
          <DetailRow header={'値引率閾値'} text={props.discountRateThreshold} />
          <DetailRow header={'還元率閾値'} text={props.pointsRateThreshold} />
        </tbody>
      </table>
    </div>
  )
}

const Detail: React.VFC<Props> = (props) => {
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
      <DetailArea {...props} />
      <div className={classNames('w-full', 'mt-4')}>
        Items
        <ItemTable items={props.items} />
      </div>
    </NodePage>
  )
}

export default Detail
