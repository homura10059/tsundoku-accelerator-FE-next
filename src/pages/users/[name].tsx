import type { GetServerSideProps } from 'next'
import React from 'react'
import { useRouter } from 'next/router'
import * as UserService from '../../domain/service/user'

type Props = {
  user?: {
    id: string
    name: string
    wishLists: {
      id: string
      url: string
      scrapedAt: number | null
    }[]
  }
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const name = ctx.params.name
  if (typeof name !== 'string') {
    return {
      props: {},
    }
  }
  const user = await UserService.searchUser(name)
  return {
    props: {
      user,
    },
  }
}

const User = (props: Props) => {
  if (!props.user) {
    return <p>no user</p>
  }
  const { id, name, wishLists } = props.user

  return (
    <>
      <p>Id: {id}</p>
      <p>name: {name}</p>
      <table>
        <tr>
          <th>id</th>
          <th>url</th>
          <th>scrapedAt</th>
        </tr>
        {wishLists.map((wishList) => (
          <>
            <tr>
              <td>{wishList.id}</td>
              <td>{wishList.url}</td>
              <td>{wishList.scrapedAt}</td>
            </tr>
          </>
        ))}
      </table>
    </>
  )
}

export default User
