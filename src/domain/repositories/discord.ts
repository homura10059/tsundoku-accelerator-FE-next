import { IncomingWebhook, Item, WishList } from '@prisma/client'
import axios from 'axios'
import { format } from 'date-fns'

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
  gray: parseInt('808080', 16),
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

  if (
    item.discountRate >= 30 ||
    item.pointsRate >= 30
  ) {
    return color.yellow
  }

  if (
    item.discountRate >= 35 ||
    item.pointsRate >= 35
  ) {
    return color.red
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
      inline: true,
    },
    {
      name: '値引き率',
      value: `${item.discountRate}%`,
      inline: true,
    },
    {
      name: 'ポイント還元率',
      value: `${item.pointsRate}%`,
      inline: true,
    },
  ],
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
  embeds: wishList.items.map((item) =>
    convertEmbedsFrom(
      item,
      wishList.discountRateThreshold,
      wishList.pointsRateThreshold
    )
  ),
})

export const notify = (
  wishList: WishList & {
    items: Item[]
    incomingWebhook: IncomingWebhook
  }
) => {
  if (wishList.items.length === 0) {
    return
  }

  const body = convertBodyFrom(wishList)
  return axios
    .post(wishList.incomingWebhook.incomingWebhookUrl, body)
    .then((_response) => {
      // console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
}
