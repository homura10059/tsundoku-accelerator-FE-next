import React from 'react'
import styled from 'styled-components'

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
  width: 100%;
  color: ${({ theme }) => theme.colors.on.secondary};
  background-color: ${({ theme }) => theme.colors.secondary.dark};
  border: solid 2px ${({ theme }) => theme.colors.on.secondary};

  th,
  td {
    padding: 0.5rem;
  }
`

const HeaderRow = styled.tr`
  padding: 1rem;
`

const DataRow = styled.tr`
  position: relative;
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary.dark};
    opacity: 1;
    transition: all 0.5s ease;
  }
  :hover:after {
    opacity: 1;
  }
`

const ItemTable: React.FC<Props> = ({ items }) => {
  if (items.length === 0) {
    return null
  }

  return (
    <Table>
      <HeaderRow>
        <th>item</th>
        <th>値引率</th>
        <th>還元率</th>
      </HeaderRow>
      {items.map((item) => (
        <DataRow>
          <td><a href={item.url}>{item.title}</a></td>
          <td align="right">{item.discountRate}</td>
          <td align="right">{item.pointsRate}</td>
        </DataRow>
      ))}
    </Table>
  )
}

export default ItemTable
