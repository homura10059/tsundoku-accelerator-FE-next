import { ItemHistory } from '../model/ItemHistory'

export type ItemHistoryRepository = {
  update: (itemHistories: ItemHistory[]) => Promise<void>
}
