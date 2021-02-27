import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import { getWishLists } from '../../domain/service/wishList'
import WishLists from '../../components/templates/wishList'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })
  const wishLists = !session ? [] : await getWishLists(session.user.id)
  return { props: { wishLists } }
}

export default WishLists
