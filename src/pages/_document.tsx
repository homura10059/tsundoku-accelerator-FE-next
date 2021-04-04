import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  public render() {
    return (
      <html lang="ja">
        <Head />
        <body>
          {/* https://zenn.dev/catnose99/articles/3c106c81cbfdec */}
          <script></script>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}