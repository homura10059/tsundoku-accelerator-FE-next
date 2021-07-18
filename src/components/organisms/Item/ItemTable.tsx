import classNames from 'classnames'
import React from 'react'

import Link from '../../atoms/Link/Link'

export type ItemProps = {
  url: string
  title: string | null
  scrapedAt: number | null
  price: number | null
  discount: number | null
  discountRate: number | null
  points: number | null
  pointsRate: number | null
}

export type Props = { items: ItemProps[] }

const ItemTable: React.FC<Props> = ({ items }) => {
  if (items.length === 0) {
    return null
  }

  const sorted = items.sort((a, b) => {
    const aVal = Math.max(a.discountRate ?? 0, a.pointsRate ?? 0)
    const bVal = Math.max(b.discountRate ?? 0, b.pointsRate ?? 0)
    return bVal - aVal
  })

  return (
    <table className={classNames('text-on-surface', 'bg-surface')}>
      <thead className={'border-solid border-t border-b'}>
        <tr>
          <th className={'w-min p-1'}>item</th>
          <th className={'w-1/6 lg:w-auto p-1'}>値引率</th>
          <th className={'w-1/6 lg:w-auto p-1'}>還元率</th>
        </tr>
      </thead>
      <tbody>
        {sorted.map((item, index) => (
          <tr key={index}>
            <td>
              <Link href={item.url}> {item.title}</Link>
            </td>
            <td align="right">{item.discountRate}</td>
            <td align="right">{item.pointsRate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ItemTable
