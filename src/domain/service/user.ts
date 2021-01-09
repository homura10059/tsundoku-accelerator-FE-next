import prisma from '../../lib/prisma'

export const create = async (name: string) => {
  await prisma.user.create({
    data: {
      name,
    },
  })
}

export const getAll = async () => {
  return prisma.user.findMany({
    select: {
      name: true,
      id: true,
    },
  })
}