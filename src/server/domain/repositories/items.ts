export type ItemsRepository = {
  update: (urls: string[]) => Promise<void>
}
