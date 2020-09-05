export type ItemsRepository = {
  getItems: () => Promise<string[]>
  update: (urls: string[]) => Promise<void>
}
