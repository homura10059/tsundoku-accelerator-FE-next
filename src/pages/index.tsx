import React from 'react'
import styled from 'styled-components'

type Props = {}

const Main: React.FC<Props> = () => {
  return (
    <div className={'bg-background p-1 h-screen'}>
      <main className={'text-on-background'}>
        セール情報を収集してくれるサイト
      </main>
    </div>
  )
}

export default Main
