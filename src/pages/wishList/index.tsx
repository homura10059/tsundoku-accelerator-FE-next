import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'

import WishLists from '../../components/templates/wishList'
import { getWishLists } from '../../domain/service/wishList'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })
  const wishLists = !session ? [] : await getWishLists(session.user.email)
  return { props: { wishLists } }
}

export default WishLists
