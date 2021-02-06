import prisma from '../../lib/prisma'

export const addIncomingWebhook = async (
  email: string,
  url: string,
  channel: string,
  service: 'DISCORD'
) => {
  await prisma.incomingWebhook.create({
    data: {
      incomingWebhookUrl: url,
      channel,
      service,
      user: {
        connect: {
          email,
        },
      },
    },
  })
}

export const getIncomingWebhooksByUserId = async (userId: number) => {
  return await prisma.incomingWebhook.findMany({
    where: {
      userId,
    },
  })
}
