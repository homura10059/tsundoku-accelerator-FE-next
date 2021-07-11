import { useDocumentTitle } from '@mantine/hooks'
import React from 'react'

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
    <div className={'p-1'}>
      <main className={'text-on-background'}>
        セール情報一覧
        <ItemTable items={items} />
      </main>
    </div>
  )
}

export default Home
