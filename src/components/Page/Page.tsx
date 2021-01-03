import React from 'react'
import Metadata from '../organisms/Metadata/Metadata'

type Props = {
  title?: string
}

const Page: React.FC<Props> = ({ title, children }) => (
  <div>
    <Metadata title={title} />
    <body>{children}</body>
  </div>
)

export default Page
