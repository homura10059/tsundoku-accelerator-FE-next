import { useDocumentTitle } from '@mantine/hooks'
import React from 'react'

type Props = {}

const Main: React.FC<Props> = () => {
  useDocumentTitle('積読アクセラレータ')
  return (
    <div className={'p-1'}>
      <main className={'text-on-background'}>
        セール情報を収集してくれるサイト
      </main>
    </div>
  )
}

export default Main
