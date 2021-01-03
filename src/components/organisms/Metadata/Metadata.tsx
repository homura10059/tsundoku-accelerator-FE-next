import Head from 'next/head'
import React from 'react'

type Props = {
    title?: string
}

const Metadata: React.FC<Props> = ({ title = '積読アクセラレータ' }) => (
    <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
)

export default Metadata
