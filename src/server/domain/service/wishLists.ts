import { getWishListsRepository } from '../../repositories/dynamo_db'

export const getWishLists = () => {
  const repos = getWishListsRepository()
  return repos.getWishLists()
}
