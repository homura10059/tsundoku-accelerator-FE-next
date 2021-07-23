import { useDocumentTitle } from '@mantine/hooks'
import React from 'react'

import NodePage from '@/components/organisms/Flame/NodePage'
import ItemTable from '@/components/organisms/Item/ItemTable'

type Props = {
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
}

const Home: React.VFC<Props> = ({ items }) => {
  useDocumentTitle('積読アクセラレータ')
  return (
    <NodePage
      title={'セール情報一覧'}
      basePath={'/items/all'}
      command={{ canRefresh: true }}
    >
      <ItemTable items={items} />
    </NodePage>
  )
}

export default Home
