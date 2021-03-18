import React from 'react'
import styled from 'styled-components'
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

const Table = styled.table`
  color: ${({ theme }) => theme.colors.on.surface};
  background-color: ${({ theme }) => theme.colors.surface};

  th {
    padding: 5px;
    border-top: solid 1px ${({ theme }) => theme.colors.border};
    border-bottom: solid 1px ${({ theme }) => theme.colors.border};
  }

  td {
    padding: 5px;
  }
`

const HeaderRow = styled.tr`
  th {
    min-width: 55px;
  }
`

const DataRow = styled.tr``

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
    <Table>
      <thead>
        <HeaderRow>
          <th>item</th>
          <th>値引率</th>
          <th>還元率</th>
        </HeaderRow>
      </thead>
      <tbody>
        {sorted.map((item) => (
          <DataRow>
            <td>
              <Link href={item.url}> {item.title}</Link>
            </td>
            <td align="right">{item.discountRate}</td>
            <td align="right">{item.pointsRate}</td>
          </DataRow>
        ))}
      </tbody>
    </Table>
  )
}

export default ItemTable
