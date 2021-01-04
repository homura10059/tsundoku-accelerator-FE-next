const fetch = require('node-fetch')
// レスポンスは必要ないのであえてawaitしない
const port = ENV['PORT'] || '3000'
const apiPath = '/api/wishLists'
const url =
  port === '3000'
    ? `http://localhost:${port}${apiPath}`
    : `https://tsundoku-accelerator.herokuapp.com${apiPath}`
fetch(url, { method: 'POST' })
