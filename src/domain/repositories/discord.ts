import { IncomingWebhook, Item, WishList } from '@prisma/client'
import axios from 'axios'
import { WebhookClient } from 'discord.js'

type Field = {
  name: string
  value: string
  inline?: boolean
}

type Embed = {
  title: string
  description?: string
  url: string
  timestamp?: string
  color: number
  footer?: {
    text: string
    icon_url: string
  }
  image?: {
    url: string
  }
  thumbnail?: {
    url: string
  }
  author?: {
    name: string
    url: string
    icon_url: string
  }
  fields: Field[]
}

type Body = {
  username: string
  avatar_url: string
  content: string
  embeds: Embed[]
}

const color = {
  red: parseInt('ff0000', 16),
  yellow: parseInt('ffff00', 16),
  green: parseInt('008000', 16),
  gray: parseInt('808080', 16)
}

const convertColorFrom = (
  item: Item,
  discountRateThreshold: number,
  pointsRateThreshold: number
): number => {
  if (
    !(
      item.discountRate >= discountRateThreshold ||
      item.pointsRate >= pointsRateThreshold
    )
  ) {
    return color.gray
  }

  if (item.discountRate >= 35 || item.pointsRate >= 35) {
    return color.red
  }

  if (item.discountRate >= 30 || item.pointsRate >= 30) {
    return color.yellow
  }

  return color.green
}

const convertEmbedsFrom = (
  item: Item,
  discountRateThreshold: number,
  pointsRateThreshold: number
): Embed => ({
  title: `${item.title}`,
  url: `${item.url}`,
  color: convertColorFrom(item, discountRateThreshold, pointsRateThreshold),
  fields: [
    {
      name: '金額',
      value: `¥${item.price}`,
      inline: true
    },
    {
      name: '値引き率',
      value: `${item.discountRate}%`,
      inline: true
    },
    {
      name: 'ポイント還元率',
      value: `${item.pointsRate}%`,
      inline: true
    }
  ]
})

const convertBodyFrom = (
  wishList: WishList & {
    items: Item[]
  }
): Body => ({
  username: 'sophia',
  avatar_url:
    'https://raw.githubusercontent.com/o-hayato/sophia-bot/master/image/P5S_icon_sophia.png',
  content: `セール情報です！ from ${wishList.url}`,
  embeds: wishList.items.map(item =>
    convertEmbedsFrom(
      item,
      wishList.discountRateThreshold,
      wishList.pointsRateThreshold
    )
  )
})

export const notify = async (
  wishList: WishList & {
    items: Item[]
    incomingWebhook: IncomingWebhook
  }
) => {
  if (wishList.items.length === 0) {
    return
  }

  const body = convertBodyFrom(wishList)
  const [id, token] = getIdAndToken(wishList.incomingWebhook.incomingWebhookUrl)
  const hook = new WebhookClient(id, token)
  await hook.send(body)
}

export const getIdAndToken = (url: string): [id: string, token: string] => {
  const [id, token] = url.split('/').slice(-2)
  return [id, token]
}

export const notifyError = async (e: Error) => {
  const webHookUrl = process.env.ALERT_WEB_HOOK_URL ?? ''
  const [id, token] = getIdAndToken(webHookUrl)

  const hook = new WebhookClient(id, token)
  await hook.send(e.message)
}
