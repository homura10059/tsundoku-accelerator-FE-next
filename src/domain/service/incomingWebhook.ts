import prisma from '../../functions/prisma'

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
          email
        }
      }
    }
  })
}

export const getIncomingWebhooksByEmail = async (email: string) => {
  return await prisma.incomingWebhook.findMany({
    where: {
      user: {
        email
      }
    }
  })
}
