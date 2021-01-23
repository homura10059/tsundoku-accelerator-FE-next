import React from 'react'
import { useTable, Column } from 'react-table'
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

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

const ItemTable: React.FC<Props> = ({ items }) => {
  if (items.length === 0) {
    return null
  }

  const data = React.useMemo(() => items, [items])
  const columns: Column<ItemProps>[] = React.useMemo(
    () => [
      {
        Header: 'Url',
        accessor: 'url',
      },
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'ScrapedAt',
        accessor: 'scrapedAt',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Discount',
        accessor: 'discount',
      },
      {
        Header: 'DiscountRate',
        accessor: 'discountRate',
      },
      {
        Header: 'Points',
        accessor: 'points',
      },
      {
        Header: 'PointsRate',
        accessor: 'pointsRate',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<ItemProps>({ columns, data })

  return (
    <Styles>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </Styles>
  )
}

export default ItemTable
