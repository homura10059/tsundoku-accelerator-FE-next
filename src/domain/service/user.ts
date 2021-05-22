import prisma from '../../functions/prisma'

export const getAll = async () => {
  return prisma.user.findMany()
}
