import prisma from '../../lib/prisma'

export const getAll = async () => {
  return prisma.user.findMany({
    select: {
      name: true,
      id: true,
    },
  })
}