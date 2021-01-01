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

export const searchUser = async (name?: string) => {
  return name
    ? prisma.user.findUnique({
        select: {
          name: true,
          id: true,
          wishLists: true,
        },
        where: { name },
      })
    : undefined
}
